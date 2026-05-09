-- FundSteward: profiles, organizations, memberships, RLS, and signup trigger.
-- Apply with: supabase db push / migration run, or paste into Supabase SQL Editor.
--
-- If you already have tables named `profiles`, `organizations`, or `organization_members`,
-- resolve the conflict (rename, merge, or skip conflicting statements) before running.
--
-- Linking YOUR existing app tables: add a nullable or required
--   organization_id uuid REFERENCES public.organizations(id)
-- and policies that restrict rows to orgs the user belongs to (same pattern as below).

-- Role enum
DO $$ BEGIN
  CREATE TYPE public.org_role AS ENUM ('owner', 'admin', 'member');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- Core tables
CREATE TABLE IF NOT EXISTS public.organizations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
  display_name text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.organization_members (
  organization_id uuid NOT NULL REFERENCES public.organizations (id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users (id) ON DELETE CASCADE,
  role public.org_role NOT NULL DEFAULT 'member',
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (organization_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_organization_members_user_id
  ON public.organization_members (user_id);

CREATE INDEX IF NOT EXISTS idx_organization_members_org_id
  ON public.organization_members (organization_id);

-- New auth.users row → profile + first organization + owner membership (runs as definer; bypasses RLS)
CREATE OR REPLACE FUNCTION public.fundsteward_handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_org_id uuid;
  org_name text;
  disp_name text;
BEGIN
  org_name := NULLIF(TRIM(COALESCE(new.raw_user_meta_data->>'organization_name', '')), '');
  IF org_name IS NULL THEN
    org_name := COALESCE(SPLIT_PART(new.email, '@', 1), 'organization') || ' organization';
  END IF;

  disp_name := NULLIF(TRIM(COALESCE(new.raw_user_meta_data->>'full_name', '')), '');

  INSERT INTO public.profiles (id, display_name)
  VALUES (new.id, disp_name);

  INSERT INTO public.organizations (name, slug)
  VALUES (
    org_name,
    'org-' || REPLACE(gen_random_uuid()::text, '-', '')
  )
  RETURNING id INTO new_org_id;

  INSERT INTO public.organization_members (organization_id, user_id, role)
  VALUES (new_org_id, new.id, 'owner');

  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS fundsteward_on_auth_user_created ON auth.users;
CREATE TRIGGER fundsteward_on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE PROCEDURE public.fundsteward_handle_new_user();

-- RLS
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organization_members ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS orgs_select_member ON public.organizations;
CREATE POLICY orgs_select_member ON public.organizations
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.organization_members m
      WHERE m.organization_id = organizations.id
        AND m.user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS orgs_update_admin ON public.organizations;
CREATE POLICY orgs_update_admin ON public.organizations
  FOR UPDATE TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.organization_members m
      WHERE m.organization_id = organizations.id
        AND m.user_id = auth.uid()
        AND m.role IN ('owner', 'admin')
    )
  );

DROP POLICY IF EXISTS profiles_select_own ON public.profiles;
CREATE POLICY profiles_select_own ON public.profiles
  FOR SELECT TO authenticated
  USING (id = auth.uid());

DROP POLICY IF EXISTS profiles_update_own ON public.profiles;
CREATE POLICY profiles_update_own ON public.profiles
  FOR UPDATE TO authenticated
  USING (id = auth.uid());

DROP POLICY IF EXISTS org_members_select ON public.organization_members;
CREATE POLICY org_members_select ON public.organization_members
  FOR SELECT TO authenticated
  USING (
    user_id = auth.uid()
    OR organization_id IN (
      SELECT om.organization_id FROM public.organization_members om
      WHERE om.user_id = auth.uid()
    )
  );

-- Grants (minimal; trigger still writes via security definer)
GRANT SELECT, UPDATE ON public.organizations TO authenticated;
GRANT SELECT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT ON public.organization_members TO authenticated;
