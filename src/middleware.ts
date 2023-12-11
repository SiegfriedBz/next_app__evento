import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  console.log("request.url", request.url)
  return NextResponse.redirect(new URL("/events/all", request.url))
}

export const config = {
  matcher: ["/events"],
}
