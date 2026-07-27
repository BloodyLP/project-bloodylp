// =====================================================
// BLOODYLP HOMEPAGE
//
// useYoutube Hook
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

"use client";

import { useEffect, useState } from "react";

import { YoutubeData } from "@/types/youtube";
import { getYoutubeData } from "@/services/youtube.service";

export function useYoutube() {
  const [data, setData] = useState<YoutubeData | null>(null);

  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      const video = await getYoutubeData();

      setData(video);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();

    const interval = setInterval(load, 60000);

    return () => clearInterval(interval);
  }, []);

  return {
    data,
    loading,
  };
}