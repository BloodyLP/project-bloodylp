// =====================================================
// BLOODYLP HOMEPAGE
//
// YouTube Service
//
// Version: 3.0
//
// Bloody Design System
// =====================================================

import { YoutubeData } from "@/types/youtube";

export async function getYoutubeData(): Promise<YoutubeData | null> {

  const response =
    await fetch("/api/youtube");

  const result =
    await response.json();

  if (!result.success || !result.data) {

    return null;

  }

  const video =
    result.data;

  return {

    id: video.id,

    title: video.title,

    thumbnail: video.thumbnail,

    publishedAt: video.publishedAt,

    videoUrl: video.videoUrl,

    status: video.status,

    views: video.views,

    likes: video.likes,

    comments: video.comments,

    series: video.series,

    episode: video.episode,

  };

}