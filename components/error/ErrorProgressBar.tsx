// =====================================================
// BDS COMPONENT
// ErrorProgressBar
//
// Version: 2.0
//
// Bloody Design System
// =====================================================

"use client";

import { motion } from "framer-motion";

type Props = {
  progress: number;
  color?: "green" | "red" | "yellow";
};

export default function ErrorProgressBar({
  progress,
  color = "green",
}: Props) {
  const colors = {
    green: "from-lime-400 to-lime-300",
    red: "from-red-500 to-red-400",
    yellow: "from-yellow-400 to-yellow-300",
  };

  return (
    <div
      className="
        h-2

        w-full
        max-w-full

        sm:max-w-none
        sm:w-40

        lg:w-52

        overflow-hidden
        rounded-full

        bg-white/10
      "
    >
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: `${progress}%`,
        }}
        transition={{
          duration: 0.8,
        }}
        className={`
          h-full
          rounded-full

          bg-gradient-to-r

          ${colors[color]}
        `}
      />
    </div>
  );
}