// =====================================================
// BDS COMPONENT
// ErrorRetryActions
//
// Version: 1.0
//
// Error Retry Actions
//
// Bloody Design System
// =====================================================

"use client";

import { motion } from "framer-motion";

type ErrorRetryActionsProps = {
  onRetry: () => void;
};

export default function ErrorRetryActions({
  onRetry,
}: ErrorRetryActionsProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.1,
        duration: 0.6,
      }}
      className="
        mt-12

        flex
        flex-col
        gap-4

        sm:flex-row
        sm:justify-center
      "
    >
      {/* ================================= */}
      {/* Home */}
      {/* ================================= */}

      <a
        href="/"
        className="
          inline-flex
          items-center
          justify-center

          rounded-2xl

          bg-lime-400

          px-6
          py-4

          font-ui
          font-bold

          uppercase

          tracking-[0.12em]

          text-black

          transition-all
          duration-300

          hover:scale-105
          hover:bg-lime-300
        "
      >
        <span className="mr-2">🏠</span>

        Zur Einsatzzentrale
      </a>

      {/* ================================= */}
      {/* Retry */}
      {/* ================================= */}

      <button
        onClick={onRetry}
        className="
          inline-flex
          items-center
          justify-center

          rounded-2xl

          border
          border-white/10

          bg-zinc-900/70

          px-6
          py-4

          font-ui
          font-bold

          uppercase

          tracking-[0.12em]

          text-white

          transition-all
          duration-300

          hover:scale-105
          hover:border-red-500
          hover:text-red-400
        "
      >
        <span className="mr-2">🔄</span>

        Erneut versuchen
      </button>
    </motion.div>
  );
}