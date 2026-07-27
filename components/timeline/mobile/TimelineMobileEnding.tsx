// =====================================================
// BDS COMPONENT
// TimelineMobileEnding
//
// Version: 1.0
//
// Mobile Journey Finale
//
// Bloody Design System
// =====================================================

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TimelineMobileEnding() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="
        group

        relative

        overflow-hidden

        rounded-[32px]

        border
        border-lime-400/25

        bg-gradient-to-b
        from-zinc-900
        via-zinc-950
        to-black

        p-8

        shadow-[0_0_45px_rgba(184,255,44,0.08)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(184,255,44,.10),transparent_70%)]

          opacity-70
        "
      />

      <div className="relative z-10">

        <p
          className="
            text-center

            text-2xl

            tracking-[0.6em]

            text-lime-400
          "
        >
          ★★★
        </p>

        <h2
          className="
            mt-6

            font-display

            text-center

            text-4xl

            font-black

            uppercase

            leading-tight

            text-white
          "
        >
          Eine Leidenschaft.
          <br />
          Ein Weg.
        </h2>

        <div
          className="
            mx-auto

            my-8

            h-px
            w-20

            bg-lime-400/40
          "
        />

        <p
          className="
            text-center

            leading-8

            text-zinc-400
          "
        >
          Vom ersten YouTube-Video bis zum professionellen
          Kommentator – jeder Schritt war Teil einer Reise,
          die bis heute weitergeht.
        </p>

        <Link
          href="/ueber-mich"
          className="
            mt-10

            flex

            h-14

            items-center
            justify-center

            rounded-2xl

            border
            border-lime-400

            font-ui

            text-sm

            font-bold

            uppercase

            tracking-[0.24em]

            text-lime-400

            transition-all
            duration-300

            hover:bg-lime-400
            hover:text-black
          "
        >
          Mehr über Alexander
        </Link>

      </div>

    </motion.div>
  );
}