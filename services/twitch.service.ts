// =====================================================
// BLOODYLP HOMEPAGE
//
// Twitch Service
//
// Version: 3.0
//
// Bloody Design System
// =====================================================

export interface TwitchData {
  live: boolean;

  title: string;

  game: string;

  gameTitle: string;

  streamNumber: string;

  emoji: string;

  episode: string;

  viewers: number;

  startedAt: string;

  thumbnail: string;

  url: string;

  duration: string;
}

export async function getTwitchData(): Promise<TwitchData> {
  const response = await fetch("/api/twitch");

  const stream = await response.json();

  return {
    live: stream?.live ?? false,

    title: stream?.title ?? "",

    game: stream?.game ?? "",

    gameTitle: stream?.gameTitle ?? "",

    streamNumber: stream?.streamNumber ?? "",

    emoji: stream?.emoji ?? "",

    episode: stream?.episode ?? "",

    viewers: stream?.viewers ?? 0,

    startedAt: stream?.startedAt ?? "",

    thumbnail: stream?.thumbnail ?? "",

    url: stream?.url ?? "",

    duration: stream?.duration ?? "",
  };
}