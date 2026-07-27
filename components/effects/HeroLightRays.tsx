// =====================================================
// BDS EFFECT
// HeroLightRays
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

export default function HeroLightRays() {
  return (
    <>
      {/* ================================= */}
      {/* Ray 1 */}
      {/* ================================= */}

      <div
        className="
          absolute

          right-[-320px]
          top-[-240px]

          h-[1400px]
          w-[260px]

          rotate-[24deg]

          bg-gradient-to-b
          from-lime-400/14
          via-lime-300/5
          to-transparent

          blur-[70px]

          animate-ray-one

          pointer-events-none

          z-[1]
        "
      />

      {/* ================================= */}
      {/* Ray 2 */}
      {/* ================================= */}

      <div
        className="
          absolute

          right-[-160px]
          top-[-120px]

          h-[1200px]
          w-[180px]

          rotate-[18deg]

          bg-gradient-to-b
          from-lime-300/10
          via-lime-300/4
          to-transparent

          blur-[60px]

          animate-ray-two

          pointer-events-none

          z-[1]
        "
      />
    </>
  );
}