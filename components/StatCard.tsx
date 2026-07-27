// =====================================================
// BDS COMPONENT
// StatCard
//
// Version: 3.0
//
// Motion Library Integration
//
// Bloody Design System
// =====================================================

"use client";

import { motion } from "framer-motion";

import { fadeUp, cardHover } from "@/lib/animations";

type StatCardProps = {
  number: string;
  title: string;
  delay?: number;
};

export default function StatCard({
  number,
  title,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}

      transition={{
        delay,
      }}

      {...cardHover}

      className="
        group

        relative

        overflow-hidden

        rounded-3xl

        border
        border-zinc-800

        bg-gradient-to-b
        from-zinc-900
        to-zinc-950

        p-6
        md:p-8

        transition-all
        duration-500

        hover:border-lime-400

        hover:shadow-[0_0_35px_rgba(184,255,44,0.15)]
      "
    >
      {/* ================================= */}
      {/* Glow */}
      {/* ================================= */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-0

          bg-[radial-gradient(circle_at_top,rgba(184,255,44,0.08),transparent_70%)]

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />

      {/* ================================= */}
      {/* Content */}
      {/* ================================= */}

      <div className="relative z-10">

        <h3
          className="
            font-display

            text-5xl
            md:text-6xl

            font-black

            leading-none

            text-lime-400
          "
        >
          {number}
        </h3>

        <div
          className="
            mt-5

            h-px
            w-12

            bg-lime-400/40

            transition-all
            duration-500

            group-hover:w-20
            group-hover:bg-lime-400
          "
        />

        <p
          className="
            mt-5

            font-ui

            text-sm
            md:text-base
            xl:text-lg

            font-semibold

            uppercase

            tracking-[0.28em]
            md:tracking-[0.35em]

            text-zinc-400
          "
        >
          {title}
        </p>

      </div>

    </motion.div>
  );
}