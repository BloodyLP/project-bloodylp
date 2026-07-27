// =====================================================
// BDS COMPONENT
// LiveBadge
//
// Version: 1.0
//
// Foundation Component
//
// Used in:
// ✓ Twitch
// ✓ Livestreams
// ✓ Events
//
// Bloody Design System
// =====================================================

interface LiveBadgeProps {
  live?: boolean;
}

export default function LiveBadge({
  live = true,
}: LiveBadgeProps) {
  return (
    <div
      className={`
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        px-5
        py-2
        backdrop-blur-xl
        transition-all
        duration-300

        ${
          live
            ? "border-red-500/40 bg-red-500/10"
            : "border-zinc-700 bg-zinc-900/70"
        }
      `}
    >
      <div
        className={`
          h-3
          w-3
          rounded-full

          ${
            live
              ? "bg-red-500 animate-pulse"
              : "bg-zinc-500"
          }
        `}
      />

      <span
        className={`
          text-sm
          font-black
          uppercase
          tracking-[0.25em]

          ${
            live
              ? "text-white"
              : "text-zinc-300"
          }
        `}
      >
        {live ? "LIVE" : "OFFLINE"}
      </span>
    </div>
  );
}