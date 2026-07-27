// =====================================================
// BDS COMPONENT
// SectionHeading
//
// Version: 3.0
//
// Responsive + Motion Foundation
//
// Used in:
// ✓ Timeline
// ✓ Story
// ✓ Gaming
// ✓ Kommentator
// ✓ BloodyArmy
// ✓ Partner
// ✓ Kontakt
//
// Bloody Design System
// =====================================================

"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

import { fadeUp } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;

  align?: "left" | "center";

  divider?: boolean;

  maxWidth?: "2xl" | "3xl" | "4xl";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,

  align = "center",

  divider = true,

  maxWidth = "3xl",
}: SectionHeadingProps) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  const width = {
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={`
        mx-auto
        flex
        flex-col

        ${alignment}
        ${width[maxWidth]}
      `}
    >
      {/* ================================= */}
      {/* Eyebrow */}
      {/* ================================= */}

      <span
        className="
          font-ui

          text-[0.70rem]
          md:text-sm

          font-bold

          uppercase

          tracking-[0.45em]

          text-lime-400
        "
      >
        {eyebrow}
      </span>

      {/* ================================= */}
      {/* Title */}
      {/* ================================= */}

      <h2
        className="
          mt-5
          md:mt-6

          font-display

          text-[2.35rem]
          sm:text-[2.9rem]
          md:text-5xl
          xl:text-6xl

          font-black

          uppercase

          leading-[1.02]

          tracking-[-0.02em]

          text-white
        "
      >
        {title}
      </h2>

      {/* ================================= */}
      {/* Divider */}
      {/* ================================= */}

      {divider && (
        <div
          className="
            mt-6
            md:mt-8

            h-px

            w-20
            md:w-28

            rounded-full

            bg-gradient-to-r

            from-transparent
            via-lime-400
            to-transparent
          "
        />
      )}

      {/* ================================= */}
      {/* Description */}
      {/* ================================= */}

      {description && (
        <p
          className="
            mt-6
            md:mt-8

            max-w-3xl

            font-body

            text-base
            md:text-lg
            xl:text-xl

            leading-8
            md:leading-9

            text-zinc-400
          "
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}