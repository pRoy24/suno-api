import { NextResponse, NextRequest } from "next/server";
import { corsHeaders } from "@/lib/utils";

export const maxDuration = 60; // allow longer timeout for wait_audio == true
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  return new NextResponse('Not Implemented', {
    status: 501,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders
    }
  });
}

export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 200,
    headers: corsHeaders
  });
}
