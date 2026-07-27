// =====================================================
// BDS EFFECT
// HeroGroundLight
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

export default function HeroGroundLight() {
  return (
    <>
      {/* ================================= */}
      {/* Main Ground Glow */}
      {/* ================================= */}

      <div
        className="
          absolute

          bottom-[-260px]
          right-[180px]

          h-[620px]
          w-[900px]

          rounded-full

          bg-lime-400/8

          blur-[180px]

          animate-ground-light

          pointer-events-none

          z-[1]
        "
      />

      {/* ================================= */}
      {/* Secondary Fill */}
      {/* ================================= */}

      <div
        className="
          absolute

          bottom-[-220px]
          right-[80px]

          h-[420px]
          w-[620px]

          rounded-full

          bg-lime-300/6

          blur-[140px]

          animate-ground-light-two

          pointer-events-none

          z-[1]
        "
      />
    </>
  );
}