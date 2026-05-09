"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function signOut() {
    setLoading(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={() => void signOut()}
      disabled={loading}
      className="rounded-lg border-2 border-primary px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-white disabled:opacity-60"
    >
      {loading ? "…" : "Sign out"}
    </button>
  );
}
