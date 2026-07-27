// =====================================================
// BDS EFFECT
// HeroBackground
//
// Version 5.0
//
// Foundation Layer
//
// Bloody Design System
// =====================================================

export default function HeroBackground() {
  return (
    <>
      {/* ================================= */}
      {/* Global Vignette */}
      {/* ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,.95)_100%)]

          z-0
        "
      />

      {/* ================================= */}
      {/* Dark Fog */}
      {/* ================================= */}

      <div
        className="
          pointer-events-none

          absolute

          bottom-[-280px]
          left-1/2

          h-[850px]
          w-[1700px]

          -translate-x-1/2

          rounded-full

          bg-black/70

          blur-[220px]

          z-0
        "
      />

      {/* ================================= */}
      {/* Bottom Fade */}
      {/* ================================= */}

      <div
        className="
          pointer-events-none

          absolute

          inset-x-0
          bottom-0

          h-[420px]

          bg-gradient-to-t

          from-black

          via-black/85

          to-transparent

          z-0
        "
      />
    </>
  );
}