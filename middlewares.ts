import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middlewares(req: NextRequest){
  console.log("Middle ware is triggering .....")
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({
    req, res
  })

  await supabase.auth.getSession();

  return res;
}