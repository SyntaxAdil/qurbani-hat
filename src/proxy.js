import { NextResponse } from "next/server";
import { auth } from "./lib/auth/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const { pathname } = request.nextUrl;

  const isProtected =
    pathname.startsWith("/profile") ||
    (pathname.startsWith("/animal") && pathname.length > "/animal/".length);

  const isAuthenticate =
    pathname.startsWith("/login") || pathname.startsWith("/register");

  if (user && isAuthenticate) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!user && isProtected) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/animal/:path*", "/login", "/register"],
};
