// =====================================================
// BLOODYLP HOMEPAGE
//
// YouTube API
//
// Version: 7.0
//
// Playlist Edition
//
// Bloody Design System
// =====================================================

const API_KEY =
  process.env.YOUTUBE_API_KEY!;

const PLAYLIST_ID =
  process.env.YOUTUBE_PLAYLIST_ID!;

const PLAYLIST_NAME =
  process.env.YOUTUBE_PLAYLIST_NAME!;

// -----------------------------------------------------
// Latest Playlist Video
// -----------------------------------------------------

export async function getLatestVideo() {

  // ==========================================
  // Playlist laden
  // ==========================================

  const playlistResponse =
    await fetch(

      `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=${PLAYLIST_ID}&maxResults=1&key=${API_KEY}`,

      {
        cache: "no-store",
      }

    );

  const playlistData =
    await playlistResponse.json();

  // ==========================================
  // Anzahl Videos
  // ==========================================

  const episode =

    playlistData.pageInfo?.totalResults ?? 0;

  // ==========================================
  // Neuestes Video
  // ==========================================

  const videoId =

    playlistData.items?.[0]?.contentDetails?.videoId;

  if (!videoId) {

    return null;

  }

  // ==========================================
  // Videodetails laden
  // ==========================================

  const videoResponse =
    await fetch(

      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`,

      {
        cache: "no-store",
      }

    );

  const videoData =
    await videoResponse.json();

  const video =
    videoData.items?.[0];

  if (!video) {

    return null;

  }

  // ==========================================
  // Rückgabe
  // ==========================================

  return {

        id: video.id,

    series: PLAYLIST_NAME,

    episode,

    snippet: video.snippet,

    statistics: video.statistics,

    thumbnail:

      video.snippet.thumbnails?.high?.url ??

      video.snippet.thumbnails?.medium?.url ??

      video.snippet.thumbnails?.default?.url ??

      "",

    publishedAt:

      video.snippet.publishedAt,

    title:

      video.snippet.title,

    videoUrl:

      `https://www.youtube.com/watch?v=${video.id}`,

    status:

      video.snippet.liveBroadcastContent,

    views:

      Number(
        video.statistics?.viewCount ?? 0
      ),

    likes:

      Number(
        video.statistics?.likeCount ?? 0
      ),

    comments:

      Number(
        video.statistics?.commentCount ?? 0
      ),

  };

}