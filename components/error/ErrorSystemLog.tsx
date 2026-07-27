// =====================================================
// BDS COMPONENT
// ErrorSystemLog
//
// Version: 2.1
//
// Shared Error System Log
//
// Bloody Design System
// =====================================================

"use client";

import { motion } from "framer-motion";

type ErrorSystemLogProps = {
  logs: string[];
  title?: string;
};

export default function ErrorSystemLog({
  logs,
  title = "Live System Log",
}: ErrorSystemLogProps) {
  return (
    <div
      className="
        border-t
        border-white/10

        px-5
        py-6

        sm:px-6
        md:px-8
      "
    >
      <p
        className="
          mb-5

          text-center

          font-ui

          text-[11px]
          sm:text-xs

          uppercase

          tracking-[0.25em]
          sm:tracking-[0.3em]

          text-zinc-500
        "
      >
        {title}
      </p>

      <div
        className="
          space-y-3
        "
      >
        {logs.map((log, index) => (
          <motion.p
            key={`${index}-${log}`}
            initial={{
              opacity: 0,
              x: -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1 + index * 0.35,
            }}
            className="
              break-words

              text-center
              sm:text-left

              font-mono

              text-sm

              leading-7

              text-zinc-400
            "
          >
            {log}
          </motion.p>
        ))}
      </div>
    </div>
  );
}