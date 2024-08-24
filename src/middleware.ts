import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login-sign-up" || path === "/";
  const token = request.cookies.get("token")?.value;
  // console.log("from line 7", isPublicPath);
  // console.log("from line 8", token);
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/Dashboard/profile", request.url));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login-sign-up", request.url));
  }
}

export const config = {
  matcher: ["/", "/login-sign-up", "/Dashboard/:path*"],
};
