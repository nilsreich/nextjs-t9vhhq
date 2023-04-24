import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { headers, cookies } from 'next/headers';
import { RequestCookies } from 'next/dist/server/web/spec-extension/cookies';
import { Login } from './Login';

// do not cache this page
export const revalidate = 0;

export default async function Page() {
  const supabase = await createServerComponentSupabaseClient({
    headers,
    cookies: () => new RequestCookies(new Headers()),
  });
  const { data } = await supabase.from('posts').select('*');

  return (
    <div>
      <Login />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
