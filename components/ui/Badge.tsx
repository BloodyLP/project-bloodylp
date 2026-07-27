// =====================================================
// BDS COMPONENT
// Badge
//
// Version: 1.0
//
// Foundation Component
//
// Bloody Design System
// =====================================================

"use client";

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;

  color?: "lime" | "red" | "blue" | "zinc";

  variant?: "solid" | "outline";

  className?: string;
}

export default function Badge({
  children,

  color = "lime",

  variant = "solid",

  className = "",
}: BadgeProps) {

  const solid = {

    lime: `
      bg-lime-400
      text-black
    `,

    red: `
      bg-red-500
      text-white
    `,

    blue: `
      bg-sky-500
      text-white
    `,

    zinc: `
      bg-zinc-800
      text-white
    `,
  };

  const outline = {

    lime: `
      border
      border-lime-400

      text-lime-400
    `,

    red: `
      border
      border-red-500

      text-red-400
    `,

    blue: `
      border
      border-sky-500

      text-sky-400
    `,

    zinc: `
      border
      border-zinc-700

      text-zinc-300
    `,
  };

  return (

    <span
      className={`
        inline-flex

        items-center
        justify-center

        rounded-full

        px-4
        py-2

        font-ui

        text-[11px]

        font-bold

        uppercase

        tracking-[0.25em]

        transition-all
        duration-300

        ${
          variant === "solid"
            ? solid[color]
            : outline[color]
        }

        ${className}
      `}
    >

      {children}

    </span>

  );

}