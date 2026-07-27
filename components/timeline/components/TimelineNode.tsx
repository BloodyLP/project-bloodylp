// =====================================================
// BDS COMPONENT
// TimelineNode
//
// Version: 5.0
//
// Responsive Foundation
//
// Bloody Design System
// =====================================================

import TimelineCard from "./TimelineCard";
import TimelineIcon from "./TimelineIcon";
import TimelineLine from "./TimelineLine";

import { TimelineIcon as TimelineIconType } from "../types/timeline";

interface TimelineNodeProps {
  year: string;
  title: string;
  text: string;
  icon: TimelineIconType;
  isLast?: boolean;
}

export default function TimelineNode({
  year,
  title,
  text,
  icon,
  isLast = false,
}: TimelineNodeProps) {
  return (
    <div
      className="
        group
        relative

        flex
        w-[220px]
        flex-col
        items-center
      "
    >
      {/* ================================= */}
      {/* Year */}
      {/* ================================= */}

      <p
        className="
          mb-8

          text-[1.6rem]

          font-black

          uppercase

          tracking-[0.42em]

          text-lime-400

          transition-all
          duration-500

          group-hover:tracking-[0.48em]
        "
      >
        {year}
      </p>

      {/* ================================= */}
      {/* Horizontal Line */}
      {/* ================================= */}

      <TimelineLine isLast={isLast} />

      {/* ================================= */}
      {/* Icon */}
      {/* ================================= */}

      <div
        className="
          relative
          z-10

          flex

          h-[72px]
          w-[72px]

          items-center
          justify-center

          rounded-full

          border
          border-lime-400/30

          bg-zinc-950

          transition-all
          duration-500

          group-hover:-translate-y-1
          group-hover:scale-105

          group-hover:border-lime-400

          group-hover:shadow-[0_0_35px_rgba(184,255,44,0.25)]
        "
      >
        <TimelineIcon icon={icon} />
      </div>

      {/* ================================= */}
      {/* Vertical Line */}
      {/* ================================= */}

      <div
        className="
          relative

          h-16
          w-px

          overflow-hidden

          rounded-full

          bg-zinc-800
        "
      >
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b

            from-zinc-700
            via-lime-400/40
            to-zinc-700

            transition-all
            duration-500

            group-hover:via-lime-400
          "
        />
      </div>

      {/* ================================= */}
      {/* Card */}
      {/* ================================= */}

      <TimelineCard
        title={title}
        text={text}
      />
    </div>
  );
}