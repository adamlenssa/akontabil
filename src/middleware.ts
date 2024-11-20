import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/api")
    return console.log("hello from middleware");

  return NextResponse.next();
}
