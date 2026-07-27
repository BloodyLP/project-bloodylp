// =====================================================
// BDS EFFECT
// HeroNoise
//
// Version: 1.0
//
// Subtiles Film Grain
//
// Bloody Design System
// =====================================================

export default function HeroNoise() {
  return (
    <>
      {/* Film Grain */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[3]
          opacity-[0.025]
          mix-blend-soft-light
          bg-[url('/textures/noise.png')]
          bg-repeat
          bg-[length:180px_180px]
        "
      />

      {/* ganz leichter Verlauf */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-gradient-to-b
          from-white/[0.02]
          via-transparent
          to-black/10
        "
      />
    </>
  );
}