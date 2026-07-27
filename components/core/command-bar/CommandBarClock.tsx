// =====================================================
// BUS CORE COMPONENT
//
// Component: CommandBarClock
//
// =====================================================

"use client";

import { useEffect, useState } from "react";

export default function CommandBarClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("de-DE", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="
        font-mono

        text-xs

        tracking-[0.18em]

        text-zinc-400
      "
    >
      {time}
    </span>
  );
}