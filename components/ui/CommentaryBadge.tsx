// =====================================================
// BDS COMPONENT
// CommentaryBadge
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

interface CommentaryBadgeProps {
  label?: string;
}

export default function CommentaryBadge({
  label = "NÄCHSTER EINSATZ",
}: CommentaryBadgeProps) {
  return (
    <div
      className="
        inline-flex
        items-center
        rounded-xl
        border
        border-sky-400/30
        bg-gradient-to-b
        from-sky-400/10
        to-sky-400/5
        px-5
        py-2
        shadow-[0_0_20px_rgba(56,189,248,0.12)]
      "
    >
      <span
        className="
          font-ui
          text-[0.7rem]
          font-bold
          uppercase
          tracking-[0.35em]
          text-sky-300
        "
      >
        {label}
      </span>
    </div>
  );
}