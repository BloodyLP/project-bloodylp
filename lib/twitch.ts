// =====================================================
// BLOODYLP HOMEPAGE
//
// Twitch API
//
// Version: 4.0
//
// Bloody Design System
// =====================================================

const CLIENT_ID = process.env.TWITCH_CLIENT_ID!;
const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET!;

let accessToken = "";
let expiresAt = 0;

// -----------------------------------------------------
// Get Access Token
// -----------------------------------------------------

async function getAccessToken() {

  if (accessToken && Date.now() < expiresAt) {
    return accessToken;
  }

  const response = await fetch(

    `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,

    {
      method: "POST",
    }

  );

  const data = await response.json();

  accessToken = data.access_token;

  expiresAt =
    Date.now() +
    data.expires_in * 1000;

  return accessToken;

}

// -----------------------------------------------------
// Twitch Fetch
// -----------------------------------------------------

async function twitchFetch(url: string) {

  const token =
    await getAccessToken();

  const response = await fetch(

    url,

    {

      headers: {

        Authorization: `Bearer ${token}`,

        "Client-Id": CLIENT_ID,

      },

      cache: "no-store",

    }

  );

  return response.json();

}

// -----------------------------------------------------
// Parse Stream Title
// -----------------------------------------------------

function parseTitle(title: string) {

  const cleaned =
    title
      .split("|")[0]
      .trim();

  // ----------------------------------
  // Streamnummer
  // ----------------------------------

  const streamMatch =
    cleaned.match(/\[📅(\d+)\]/);

  const streamNumber =
    streamMatch
      ? streamMatch[1]
      : "";

  // ----------------------------------
  // Streamtitel
  // ----------------------------------

  const streamTitle =
  cleaned
    .replace(/\[📅\d+\]\s*/, "")
    .trim();

  return {

    originalTitle: title,

    streamNumber,

    streamTitle,

  };

}

// -----------------------------------------------------
// Get Stream Data
// -----------------------------------------------------
export async function getStreamData(login: string) {

  const userResponse = await twitchFetch(

    `https://api.twitch.tv/helix/users?login=${login}`

  );

  const user =
    userResponse.data?.[0];

  if (!user) {

    return null;

  }

  // --------------------------------------------------
  // LIVE
  // --------------------------------------------------

  const streamResponse = await twitchFetch(

    `https://api.twitch.tv/helix/streams?user_login=${login}`

  );

  const stream =
    streamResponse.data?.[0];

  if (stream) {

    const parsed =
      parseTitle(stream.title);

    return {

      live: true,

      title: parsed.streamTitle,

      streamNumber: parsed.streamNumber,

      game: stream.game_name,

      gameTitle: stream.game_name,

      viewers: stream.viewer_count,

      startedAt: stream.started_at,

      thumbnail: stream.thumbnail_url
        .replace("{width}", "640")
        .replace("{height}", "360"),

      duration: "",

      url: `https://www.twitch.tv/${login}`,

    };

  }

  // --------------------------------------------------
  // OFFLINE
  // --------------------------------------------------

  const videosResponse = await twitchFetch(

    `https://api.twitch.tv/helix/videos?user_id=${user.id}&type=archive&first=1`

  );

  const vod =
    videosResponse.data?.[0];

  if (!vod) {

    return {

      live: false,

      title: "",

      streamNumber: "",

      game: "",

      gameTitle: "",

      viewers: 0,

      startedAt: "",

      thumbnail: "",

      duration: "",

      url: `https://www.twitch.tv/${login}`,

    };

  }

  const parsed =
    parseTitle(vod.title);

  return {

    live: false,

    title: parsed.streamTitle,

    streamNumber: parsed.streamNumber,

    game:
  vod.game_name ||
  vod.title
    .split("|")[1]
    ?.replace(/#.*$/, "")
    .trim() ||
  "",

    gameTitle: vod.game_name,

    viewers: vod.view_count,

    startedAt: vod.created_at,

    thumbnail: vod.thumbnail_url
      .replace("%{width}", "640")
      .replace("%{height}", "360"),

    duration: vod.duration,

    url: vod.url,

  };

}