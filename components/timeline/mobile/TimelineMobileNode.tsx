// =====================================================
// BDS COMPONENT
// TimelineMobileNode
//
// Version: 2.0
//
// Responsive Foundation
//
// Bloody Design System
// =====================================================

import TimelineIcon from "../components/TimelineIcon";
import { TimelineIcon as TimelineIconType } from "../types/timeline";

interface TimelineMobileNodeProps {
  icon: TimelineIconType;
}

export default function TimelineMobileNode({
  icon,
}: TimelineMobileNodeProps) {
  return (
    <div
      className="
        relative

        flex

        h-16
        w-16

        items-center
        justify-center

        rounded-full

        border
        border-lime-400/30

        bg-zinc-950

        shadow-[0_0_25px_rgba(184,255,44,0.12)]
      "
    >
      <TimelineIcon icon={icon} />
    </div>
  );
}