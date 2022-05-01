import { NextRequest, NextFetchEvent, NextResponse } from "next/server";
export async function middleware(req: NextRequest, evt: NextFetchEvent) {
  console.log("now passing api middleware....");

  // const response = NextResponse.redirect("http://localhost:3000");
  // response.cookie("token", "1234");
  // return response;
  // return new Response("Hello, world!");
}
