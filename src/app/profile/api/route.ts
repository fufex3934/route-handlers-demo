import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));
  return new Response("Profile Api data");
}
