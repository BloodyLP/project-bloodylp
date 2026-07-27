// =====================================================
// BDS COMPONENT
// TimelineLine
//
// Version: 1.0
//
// Verbindet alle Timeline-Nodes
// =====================================================

interface TimelineLineProps {
  isLast?: boolean;
}

export default function TimelineLine({
  isLast = false,
}: TimelineLineProps) {
  if (isLast) return null;

  return (
    <div
      className="
        absolute
        left-1/2
        top-[108px]
        h-px
        w-full
        -translate-y-1/2

        bg-gradient-to-r
        from-zinc-700
        via-lime-400/40
        to-zinc-700

        transition-all
        duration-500

        group-hover:via-lime-400
      "
    />
  );
}