"use client";

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setFormError(null);

    const supabase = createClient();
    const { error: signErr } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setSubmitting(false);

    if (signErr) {
      setFormError(signErr.message);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-6 py-16">
      <div className="mb-10 text-center">
        <h1 className="letter-spacing-tight text-3xl font-extrabold text-primary">
          Sign in
        </h1>
        <p className="mt-2 text-sm text-on-surface-variant">
          Access your organization dashboard.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="editorial-shadow space-y-6 rounded-2xl border border-outline bg-surface p-10"
      >
        {(error === "auth" || formError) && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {formError ??
              "Something went wrong during sign-in. Try again or use the link from your email."}
          </p>
        )}

        <div className="space-y-2">
          <label
            className="text-[10px] font-extrabold uppercase tracking-widest text-on-surface-variant"
            htmlFor="email"
          >
            Email
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
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-outline bg-background px-4 py-3 text-on-surface focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="gold-gradient w-full rounded-lg py-4 text-xs font-extrabold uppercase tracking-widest text-primary transition-all hover:scale-[1.01] disabled:opacity-60"
        >
          {submitting ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-on-surface-variant">
        No account?{" "}
        <Link
          className="font-semibold text-secondary hover:text-accent"
          href="/signup"
        >
          Create one
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

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-[80vh] items-center justify-center text-on-surface-variant">
        Loading…
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
