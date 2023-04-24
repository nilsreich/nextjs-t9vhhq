import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import { Login } from "./Login";

// do not cache this page
export const revalidate = 0;

export default async function Page() {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });
  const { data } = await supabase.from("posts").select("*");

  return (
    <div>
      <Login />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
