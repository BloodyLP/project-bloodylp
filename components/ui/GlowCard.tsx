// =====================================================
// BDS COMPONENT
// GlowCard
//
// Version: 3.0
//
// Foundation Card
//
// Bloody Design System
// =====================================================

"use client";

import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;

  className?: string;

  elevationLevel?: "base" | "high";

  variant?: "default" | "glass" | "premium";

  padding?: "none" | "sm" | "md" | "lg";

  interactive?: boolean;
}

export default function GlowCard({
  children,

  className = "",

  elevationLevel = "base",

  variant = "default",

  padding = "md",

  interactive = true,
}: GlowCardProps) {

  const shadow =
    elevationLevel === "high"
      ? "hover:shadow-[0_30px_90px_rgba(163,230,53,0.18)]"
      : "hover:shadow-[0_20px_60px_rgba(163,230,53,0.12)]";

  const background = {
    default: "bg-zinc-950/80",

    glass: "bg-zinc-900/60 backdrop-blur-xl",

    premium:
      "bg-gradient-to-b from-zinc-900 via-zinc-950 to-black",
  };

  const paddingClass = {
    none: "",

    sm: "p-5",

    md: "p-8",

    lg: "p-10",
  };

  return (
    <div
      className={`
        group

        relative

        h-full

        overflow-hidden

        rounded-[32px]

        border
        border-zinc-800

        ${background[variant]}

        ${paddingClass[padding]}

        transition-all
        duration-500
        ease-out

        ${
          interactive
            ? `
              hover:-translate-y-2
              hover:border-lime-400/60
              ${shadow}
            `
            : ""
        }

        ${className}
      `}
    >
      {/* ================================= */}
      {/* Ambient Glow */}
      {/* ================================= */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute

            left-1/2
            top-0

            h-72
            w-72

            -translate-x-1/2

            rounded-full

            bg-lime-400/10

            blur-[110px]
          "
        />
      </div>

      {/* ================================= */}
      {/* Top Highlight */}
      {/* ================================= */}

      <div
        className="
          absolute

          left-0
          top-0

          h-px
          w-full

          bg-gradient-to-r

          from-transparent

          via-lime-400/25

          to-transparent
        "
      />

      {/* ================================= */}
      {/* Content */}
      {/* ================================= */}

      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}