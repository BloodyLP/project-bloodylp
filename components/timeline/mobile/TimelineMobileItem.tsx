// =====================================================
// BDS COMPONENT
// TimelineMobileItem
//
// Version: 2.0
//
// Responsive Foundation
//
// Bloody Design System
// =====================================================

"use client";

import { motion } from "framer-motion";

import TimelineMobileNode from "./TimelineMobileNode";
import TimelineMobileLine from "./TimelineMobileLine";

import { TimelineIcon as TimelineIconType } from "../types/timeline";

interface TimelineMobileItemProps {
  year: string;
  title: string;
  text: string;
  icon: TimelineIconType;
  isLast?: boolean;
}

export default function TimelineMobileItem({
  year,
  title,
  text,
  icon,
  isLast = false,
}: TimelineMobileItemProps) {
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
        duration: 0.65,
        ease: "easeOut",
      }}
      className="
        flex

        gap-6
      "
    >
      {/* ================================= */}
      {/* Timeline */}
      {/* ================================= */}

      <div
        className="
          flex
          flex-col
          items-center
        "
      >
        <TimelineMobileNode icon={icon} />

        <TimelineMobileLine isLast={isLast} />
      </div>

      {/* ================================= */}
      {/* Card */}
      {/* ================================= */}

      <div
        className="
          group

          relative

          flex-1

          overflow-hidden

          rounded-3xl

          border
          border-zinc-800

          bg-gradient-to-b
          from-zinc-900
          to-zinc-950

          p-6

          transition-all
          duration-500

          hover:border-lime-400
          hover:shadow-[0_0_30px_rgba(184,255,44,0.15)]
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-0

            opacity-0

            transition-opacity
            duration-500

            group-hover:opacity-100

            bg-[radial-gradient(circle_at_top,rgba(184,255,44,0.08),transparent_70%)]
          "
        />

        {/* Content */}

        <div className="relative z-10">

          <p
            className="
              text-sm

              font-black

              uppercase

              tracking-[0.35em]

              text-lime-400
            "
          >
            {year}
          </p>

          <h3
            className="
              mt-3

              font-display

              text-3xl

              uppercase

              text-white
            "
          >
            {title}
          </h3>

          <div
            className="
              mt-4

              h-px
              w-14

              bg-lime-400/40

              transition-all
              duration-500

              group-hover:w-24
              group-hover:bg-lime-400
            "
          />

          <p
            className="
              mt-5

              font-body

              leading-7

              text-zinc-400
            "
          >
            {text}
          </p>

        </div>

      </div>
    </motion.div>
  );
}