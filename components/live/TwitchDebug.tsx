"use client";

import { useTwitch } from "@/hooks/useTwitch";

export default function TwitchDebug() {
  const { data, loading } = useTwitch();

  if (loading) {
    return <p>Lade Twitch...</p>;
  }

  return (
    <pre
      className="
        rounded-xl
        bg-black
        p-6
        text-lime-400
      "
    >
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}