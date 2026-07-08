// One home for the Supabase connection. Everything that talks to the
// database imports `supabase` from here.
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // A friendly, loud error beats a confusing blank screen later.
  throw new Error(
    "Missing Supabase keys. Add NEXT_PUBLIC_SUPABASE_URL and " +
      "NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local, then restart the dev server.",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
