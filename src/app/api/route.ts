import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  console.log(req.url);
  console.log(req.cookies);
  const res = NextResponse.json({ message: "Hello" });
  res.cookies.set({ name: "test", value: "Lol" });

  return res;
}
