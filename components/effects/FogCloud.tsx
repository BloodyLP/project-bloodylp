// =====================================================
// BDS EFFECT
// FogCloud
//
// Version: 2.0
//
// Bloody Design System
// =====================================================

type Props = {
  left: string;
  bottom: string;

  width: string;
  height: string;

  opacity: number;

  blur: number;

  duration: number;

  delay: number;

  color?: string;
};

export default function FogCloud({
  left,
  bottom,
  width,
  height,
  opacity,
  blur,
  duration,
  delay,
  color = "bg-white/10",
}: Props) {
  return (
    <div
      className={`
        absolute
        rounded-full
        pointer-events-none
        animate-fog-cloud
        ${color}
      `}
      style={{
        left,
        bottom,

        width,
        height,

        opacity,

        filter: `blur(${blur}px)`,

        animationDuration: `${duration}s`,

        animationDelay: `${delay}s`,
      }}
    />
  );
}