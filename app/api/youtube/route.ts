// =====================================================
// BLOODYLP HOMEPAGE
//
// YouTube API Route
//
// Version: 2.0
//
// Bloody Design System
// =====================================================

import { NextResponse } from "next/server";
import { getLatestVideo } from "@/lib/youtube";

export async function GET() {
  try {
    const video = await getLatestVideo();

    return NextResponse.json({
      success: true,
      data: video,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}