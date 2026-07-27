// =====================================================
// BDS COMPONENT
// TimelineCard
//
// Version: 3.0
// Bloody Design System
// =====================================================

import GlowCard from "@/components/ui/GlowCard";
import { CardTitle, CardText } from "@/components/ui/Typography";

interface TimelineCardProps {
  title: string;
  text: string;
}

export default function TimelineCard({
  title,
  text,
}: TimelineCardProps) {
  return (
    <GlowCard
  elevationLevel="base"
  className="w-[220px] rounded-[30px] px-7 py-7"
>

      <CardTitle>
        {title}
      </CardTitle>

      <div className="mt-4 mb-5 h-px w-12 bg-lime-400/40 transition-all duration-500 group-hover:w-20 group-hover:bg-lime-400" />

      <CardText>
        {text}
      </CardText>

    </GlowCard>
  );
}