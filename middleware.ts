import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib/auth";
import { redirect } from "next/navigation";

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};

export async function middleware(req: NextRequest) {
  const session = await updateSession(req);
  if(!session) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}
