// =====================================================
// BDS COMPONENT
// TimelineIcon
//
// Version: 1.0
//
// Responsive Foundation
//
// Bloody Design System
// =====================================================

import {
  Play,
  Gamepad2,
  Mic2,
  Trophy,
  Shield,
} from "lucide-react";

import { TimelineIcon as TimelineIconType } from "../types/timeline";

interface TimelineIconProps {
  icon: TimelineIconType;
}

export default function TimelineIcon({
  icon,
}: TimelineIconProps) {
  switch (icon) {
    case "youtube":
      return (
        <Play
          size={30}
          strokeWidth={2.1}
          className="text-lime-400"
        />
      );

    case "twitch":
      return (
        <Gamepad2
          size={30}
          strokeWidth={2.1}
          className="text-lime-400"
        />
      );

    case "commentary":
      return (
        <Mic2
          size={30}
          strokeWidth={2.1}
          className="text-lime-400"
        />
      );

    case "esports":
      return (
        <Trophy
          size={30}
          strokeWidth={2.1}
          className="text-lime-400"
        />
      );

    case "bloodylp":
      return (
        <Shield
          size={30}
          strokeWidth={2.1}
          className="text-lime-400"
        />
      );

    default:
      return (
        <Shield
          size={30}
          strokeWidth={2.1}
          className="text-lime-400"
        />
      );
  }
}