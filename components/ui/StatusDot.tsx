// =====================================================
// BDS COMPONENT
// StatusDot
//
// Version: 1.0
//
// Foundation Component
//
// Bloody Design System
// =====================================================

interface StatusDotProps {
  status?: "live" | "offline" | "recording";

  pulse?: boolean;

  className?: string;
}

export default function StatusDot({
  status = "live",

  pulse = true,

  className = "",
}: StatusDotProps) {

  const colors = {

    live: "bg-lime-400",

    offline: "bg-zinc-500",

    recording: "bg-red-500",
  };

  return (

    <span
      className={`
        inline-flex

        h-3
        w-3

        rounded-full

        ${colors[status]}

        ${
          pulse
            ? "animate-pulse"
            : ""
        }

        ${className}
      `}
    />

  );

}