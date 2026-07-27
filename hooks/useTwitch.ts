// =====================================================
// BLOODYLP HOMEPAGE
//
// useTwitch Hook
//
// Version: 2.0
//
// Bloody Design System
// =====================================================

"use client";

import { useCallback, useEffect, useState } from "react";

import {
  getTwitchData,
  type TwitchData,
} from "@/services/twitch.service";

export function useTwitch() {
  const [data, setData] = useState<TwitchData | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const twitch = await getTwitchData();

      setData(twitch);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchInitialData = async () => {
      await load();
    };

    void fetchInitialData();

    const interval = setInterval(() => {
      void load();
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  }, [load]);

  return {
    data,
    loading,
  };
}