// =====================================================
// BDS COMPONENT
// HeroScrollIndicator
//
// Version: 2.0
//
// Responsibility:
//
// ✔ Scroll CTA
// ✔ Hero UI
//
// ✖ Layout
//
// Bloody Design System
// =====================================================

"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroScrollIndicator() {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 2.4,
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        group

        flex
        flex-col

        items-center

        gap-2

        text-zinc-500

        transition-all
        duration-300

        hover:scale-105
        hover:text-lime-400
      "
    >
      {/* ========================= */}
      {/* Label */}
      {/* ========================= */}

      <span
        className="
          font-ui

          text-[11px]

          font-medium

          uppercase

          tracking-[0.45em]

          transition-colors
        "
      >
        SCROLL
      </span>

      {/* ========================= */}
      {/* Icon */}
      {/* ========================= */}

      <motion.div
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative

          flex

          h-10
          w-10

          items-center
          justify-center
        "
      >
        {/* Ring */}

        <div
          className="
            absolute

            inset-0

            rounded-full

            border

            border-white/10

            transition-all
            duration-300

            group-hover:border-lime-400/60

            group-hover:shadow-[0_0_18px_rgba(163,230,53,.25)]
          "
        />

        {/* Arrow */}

        <ChevronDown
          size={22}
          strokeWidth={1.8}
          className="
            relative
            z-10
          "
        />
      </motion.div>
    </motion.a>
  );
}