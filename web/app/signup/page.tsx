"use client";

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setFormError(null);
    setMessage(null);

    const supabase = createClient();
    const { error: signErr } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        data: {
          full_name: fullName.trim(),
          organization_name: organizationName.trim(),
        },
      },
    });

    setSubmitting(false);

    if (signErr) {
      setFormError(signErr.message);
      return;
    }

    setMessage(
      "Check your email to confirm your account, then sign in. If confirmation is disabled in your Supabase project, you can go to Sign in now.",
    );
    router.refresh();
  }

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-6 py-16">
      <div className="mb-10 text-center">
        <h1 className="letter-spacing-tight text-3xl font-extrabold text-primary">
          Create account
        </h1>
        <p className="mt-2 text-sm text-on-surface-variant">
          We&apos;ll create your profile and a first organization for you.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="editorial-shadow space-y-5 rounded-2xl border border-outline bg-surface p-10"
      >
        {formError && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {formError}
          </p>
        )}
        {message && (
          <p className="rounded-lg border border-secondary/30 bg-secondary/10 px-4 py-3 text-sm text-primary">
            {message}
          </p>
        )}

        <div className="space-y-2">
          <label
            className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant"
            htmlFor="fullName"
          >
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-lg border border-outline bg-background px-4 py-3 text-on-surface focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant"
            htmlFor="organizationName"
          >
            Organization name
          </label>
          <input
            id="organizationName"
            name="organizationName"
            type="text"
            autoComplete="organization"
            placeholder="Grace Community Church"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
            className="w-full rounded-lg border border-outline bg-background px-4 py-3 text-on-surface focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant"
            htmlFor="email"
          >
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-outline bg-background px-4 py-3 text-on-surface focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          />
        </div>

        <div className="space-y-2">
          <label
            className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-outline bg-background px-4 py-3 text-on-surface focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          />
          <p className="text-xs text-on-surface-variant">
            At least 8 characters.
          </p>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="gold-gradient mt-2 w-full rounded-lg py-4 text-xs font-extrabold uppercase tracking-widest text-primary transition-all hover:scale-[1.01] disabled:opacity-60"
        >
          {submitting ? "Creating account…" : "Create account"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-on-surface-variant">
        Already registered?{" "}
        <Link
          className="font-semibold text-secondary hover:text-accent"
          href="/login"
        >
          Sign in
        </Link>
      </p>
      <p className="mt-4 text-center">
        <Link
          className="text-xs font-semibold uppercase tracking-widest text-primary hover:text-secondary"
          href="/"
        >
          ← Back to site
        </Link>
      </p>
    </div>
  );
}
