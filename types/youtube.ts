// =====================================================
// BLOODYLP HOMEPAGE
//
// YouTube Types
//
// Version: 2.0
//
// Bloody Design System
// =====================================================

export interface YoutubeData {

  id: string;

  title: string;

  series: string;

  episode: number;

  thumbnail: string;

  publishedAt: string;

  videoUrl: string;

  status: "live" | "upcoming" | "none";

  views: number;

  likes: number;

  comments: number;

}