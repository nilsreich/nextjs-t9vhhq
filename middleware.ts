import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });
  await supabase.auth.getSession();
  if ((await supabase.auth.getSession()).data.session === null) {
    const url = req.nextUrl.clone();
    if (url.pathname === "/") {
      url.pathname = "/test";
      return NextResponse.redirect(url);
    }
  }

  return res;
}
