// =====================================================
// BDS COMPONENT
// ErrorCardHeader
//
// Version: 2.1
//
// Shared Error Card Header
//
// Bloody Design System
// =====================================================

"use client";

import { motion } from "framer-motion";

type StatusColor = "green" | "red" | "yellow";

type ErrorCardHeaderProps = {
  code: string;
  title: string;

  status: {
    label: string;
    color: StatusColor;
    description: string;
  };
};

export default function ErrorCardHeader({
  code,
  title,
  status,
}: ErrorCardHeaderProps) {
  const colors = {
    green: {
      dot: "bg-lime-400",
      text: "text-lime-400",
    },
    red: {
      dot: "bg-red-500",
      text: "text-red-500",
    },
    yellow: {
      dot: "bg-amber-400",
      text: "text-amber-400",
    },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        flex
        flex-col
        gap-6

        sm:flex-row
        sm:items-start
        sm:justify-between

        border-b
        border-white/10

        px-5
        py-5

        sm:px-6
        sm:py-6

        md:px-8
        md:py-6
      "
    >
      {/* ================================= */}
      {/* Left */}
      {/* ================================= */}

      <div className="min-w-0">
        <p
          className="
            font-ui

            text-[11px]
            sm:text-xs

            uppercase

            tracking-[0.25em]
            sm:tracking-[0.35em]

            text-zinc-500
          "
        >
          Bloody Command Center
        </p>

        <h3
          className="
            mt-2

            font-ui

            text-xl
            sm:text-2xl

            font-black

            uppercase

            tracking-[0.05em]
            sm:tracking-[0.08em]

            text-white

            break-words
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2

            font-mono

            text-xs
            sm:text-sm

            text-zinc-500
          "
        >
          ERROR CODE {code}
        </p>
      </div>

      {/* ================================= */}
      {/* Right */}
      {/* ================================= */}

      <div
        className="
          text-left

          sm:text-right

          shrink-0
        "
      >
        <div
          className="
            flex
            items-center

            justify-start
            sm:justify-end

            gap-2
          "
        >
          <span className="relative flex h-3 w-3">
            <span
              className={`
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                opacity-40
                ${colors[status.color].dot}
              `}
            />

            <span
              className={`
                relative
                inline-flex
                h-3
                w-3
                rounded-full
                ${colors[status.color].dot}
              `}
            />
          </span>

          <span
            className={`
              font-ui

              text-[11px]
              sm:text-xs

              font-bold

              uppercase

              tracking-[0.16em]
              sm:tracking-[0.2em]

              ${colors[status.color].text}
            `}
          >
            {status.label}
          </span>
        </div>

        <p
          className="
            mt-3

            font-mono

            text-[11px]
            sm:text-xs

            leading-relaxed

            text-zinc-500
          "
        >
          {status.description}
        </p>
      </div>
    </motion.div>
  );
}