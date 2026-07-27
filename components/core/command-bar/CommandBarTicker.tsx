// =====================================================
// BUS CORE COMPONENT
//
// Component: CommandBarTicker
//
// Bloody UI System (BUS)
// Version: 1.0.0
//
// Animated status ticker.
//
// =====================================================

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type CommandBarTickerProps = {
  messages: string[];
  interval?: number;
};

export default function CommandBarTicker({
  messages,
  interval = 2500,
}: CommandBarTickerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (messages.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) =>
        current < messages.length - 1 ? current + 1 : current
      );
    }, interval);

    return () => window.clearInterval(timer);
  }, [messages, interval]);

  return (
    <div className="relative h-5 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -10,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            absolute

            font-ui

            text-xs

            font-semibold

            uppercase

            tracking-[0.18em]

            text-zinc-300
          "
        >
          {messages[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}