# FundSteward web

Next.js (App Router) frontend for [FundSteward](https://github.com/CoderAtFundSteward/fundsteward_v6). Designed to deploy on **Vercel** with **Supabase** for auth and data.

## Local development

```bash
cd web
cp .env.example .env.local
# Fill NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY from Supabase → Settings → API
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase

1. In the **same** Supabase project where your app data lives, run the SQL in  
   `../supabase/migrations/20260208120000_fundsteward_orgs_and_auth.sql`  
   (Supabase SQL Editor, or `supabase db push` if you use the CLI).

2. **Authentication → URL configuration**

   - **Site URL:** `http://localhost:3000` (and your production URL when live).
   - **Redirect URLs:** include  
     `http://localhost:3000/auth/callback`  
     and your production callback URL, e.g.  
     `https://<your-domain>/auth/callback`.

3. New sign-ups get a **profile**, a default **organization**, and an **owner** membership via the `fundsteward_on_auth_user_created` trigger.

To attach your existing tables to tenants, add `organization_id uuid REFERENCES public.organizations(id)` (and RLS policies) in a follow-up migration.

## Deploy on Vercel

1. Import the GitHub repo; set **Root Directory** to **`web`**.
2. Add the same `NEXT_PUBLIC_*` variables as in `.env.example`.
3. Add production (and preview, if needed) **redirect URLs** in Supabase for those Vercel URLs.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Marketing landing |
| `/login`, `/signup` | Email / password auth |
| `/auth/callback` | Supabase Auth OAuth / email confirmation |
| `/dashboard` | Signed-in home (lists organizations) |
