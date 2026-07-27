// =====================================================
// BDS COMPONENT
// StatusBadge
//
// Version: 1.0
//
// Foundation Component
//
// Used in:
// ✓ Twitch
// ✓ YouTube
// ✓ Streamplan
// ✓ Kommentator
// ✓ Partner
// ✓ Turniere
//
// Bloody Design System
// =====================================================

interface StatusBadgeProps {
  variant: "live" | "youtube" | "schedule" | "commentary";
  children: React.ReactNode;
}

export default function StatusBadge({
  variant,
  children,
}: StatusBadgeProps) {
  const styles = {
    live: {
      border: "border-red-500/40",
      bg: "bg-red-500/10",
      text: "text-red-400",
      dot: "bg-red-500",
    },

    youtube: {
      border: "border-red-500/40",
      bg: "bg-red-500/10",
      text: "text-red-400",
      dot: "bg-red-500",
    },

    schedule: {
      border: "border-lime-400/40",
      bg: "bg-lime-400/10",
      text: "text-lime-400",
      dot: "bg-lime-400",
    },

    commentary: {
      border: "border-sky-400/40",
      bg: "bg-sky-400/10",
      text: "text-sky-400",
      dot: "bg-sky-400",
    },
  };

  const current = styles[variant];

  return (
    <div
      className={`
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        px-4
        py-2

        ${current.border}
        ${current.bg}
      `}
    >

      <div
        className={`
          h-2.5
          w-2.5
          rounded-full

          ${current.dot}
        `}
      />

      <span
        className={`
          text-xs
          font-black
          uppercase
          tracking-[0.25em]

          ${current.text}
        `}
      >
        {children}
      </span>

    </div>
  );
}