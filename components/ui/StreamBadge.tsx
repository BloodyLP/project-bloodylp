// =====================================================
// BDS COMPONENT
// StreamBadge
//
// Version: 2.0
//
// Bloody Design System
// =====================================================

interface StreamBadgeProps {
  streamNumber: string;
}

export default function StreamBadge({
  streamNumber,
}: StreamBadgeProps) {
  return (
    <div
      className="
        inline-flex
        flex-col
        rounded-xl
        border
        border-lime-400/30
        bg-gradient-to-b
        from-lime-400/10
        to-lime-400/5
        overflow-hidden
        shadow-[0_0_20px_rgba(163,230,53,0.12)]
      "
    >
      {/* Kopf */}

      <div
        className="
          border-b
          border-lime-400/20
          px-5
          py-1.5
          text-center
        "
      >
        <span
          className="
            font-ui
            text-[0.62rem]
            font-bold
            uppercase
            tracking-[0.45em]
            text-lime-400
          "
        >
          STREAM
        </span>
      </div>

      {/* Nummer */}

      <div
        className="
          flex
          items-center
          justify-center
          gap-2
          px-5
          py-3
        "
      >
        <span className="text-lg">
          📅
        </span>

        <span
          className="
            font-display
            text-3xl
            leading-none
            tracking-wide
            text-white
          "
        >
          #{streamNumber}
        </span>
      </div>
    </div>
  );
}