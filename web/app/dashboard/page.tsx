import { createClient } from "@/lib/supabase/server";
import { SignOutButton } from "@/components/sign-out-button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: memberships, error } = await supabase
    .from("organization_members")
    .select(
      `
      role,
      organization_id,
      organizations (
        id,
        name,
        slug
      )
    `,
    )
    .eq("user_id", user.id);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-outline bg-surface px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant">
              FundSteward
            </p>
            <h1 className="text-lg font-bold text-primary">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant hover:text-primary"
            >
              Home
            </Link>
            <SignOutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <p className="mb-8 text-sm text-on-surface-variant">
          Signed in as{" "}
          <span className="font-semibold text-on-surface">{user.email}</span>
        </p>

        {error && (
          <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            Could not load organizations. Run the Supabase migration (see{" "}
            <code className="rounded bg-amber-100 px-1">supabase/migrations</code>
            ) and confirm RLS allows your user to read{" "}
            <code className="rounded bg-amber-100 px-1">organization_members</code>.
            <span className="mt-1 block text-xs opacity-90">{error.message}</span>
          </div>
        )}

        <section>
          <h2 className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-secondary">
            Your organizations
          </h2>
          {memberships && memberships.length > 0 ? (
            <ul className="space-y-3">
              {memberships.map((row) => {
                const org = row.organizations as {
                  id: string;
                  name: string;
                  slug: string | null;
                } | null;
                if (!org) return null;
                return (
                  <li
                    key={row.organization_id}
                    className="editorial-shadow flex items-center justify-between rounded-xl border border-outline bg-surface px-6 py-4"
                  >
                    <div>
                      <p className="font-bold text-primary">{org.name}</p>
                      <p className="text-xs text-on-surface-variant">
                        Role: {row.role}
                        {org.slug ? ` · ${org.slug}` : ""}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : !error ? (
            <p className="rounded-xl border border-outline bg-surface px-6 py-8 text-sm text-on-surface-variant">
              No organizations yet. If you just signed up, ensure the database
              trigger created your org (run migrations), or add an{" "}
              <code className="rounded bg-background px-1">organization_members</code>{" "}
              row in Supabase.
            </p>
          ) : null}
        </section>
      </main>
    </div>
  );
}
