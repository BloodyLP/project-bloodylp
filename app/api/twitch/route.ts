// =====================================================
// BLOODYLP HOMEPAGE
//
// Twitch API Route
//
// Version: 2.0
//
// Bloody Design System
// =====================================================

import { NextResponse } from "next/server";
import { getStreamData } from "@/lib/twitch";

export async function GET() {
  try {
    const stream = await getStreamData("bl00dylp");

    return NextResponse.json(stream);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Twitch API Error",
      },
      {
        status: 500,
      }
    );
  }
}