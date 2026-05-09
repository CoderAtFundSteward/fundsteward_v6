import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export async function MarketingAuthLink() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const className =
    "hidden text-[10px] font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white sm:inline";

  if (user) {
    return (
      <Link href="/dashboard" className={className}>
        Dashboard
      </Link>
    );
  }

  return (
    <Link href="/login" className={className}>
      Sign in
    </Link>
  );
}
