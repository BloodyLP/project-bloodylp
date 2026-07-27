// =====================================================
// BDS EFFECT
// HeroAmbientLight
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

export default function HeroAmbientLight() {
  return (
    <>
      {/* ================================= */}
      {/* Main Ambient Light */}
      {/* ================================= */}

      <div
        className="
          absolute
          right-[170px]
          top-[47%]

          h-[720px]
          w-[520px]

          -translate-y-1/2

          rounded-full

          bg-lime-400/12

          blur-[160px]

          animate-ambient

          pointer-events-none

          z-[1]
        "
      />

      {/* ================================= */}
      {/* Shoulder Light */}
      {/* ================================= */}

      <div
        className="
          absolute
          right-[250px]
          top-[58%]

          h-[260px]
          w-[220px]

          rounded-full

          bg-lime-300/18

          blur-[90px]

          animate-ambient-two

          pointer-events-none

          z-[1]
        "
      />

      {/* ================================= */}
      {/* Head Light */}
      {/* ================================= */}

      <div
        className="
          absolute
          right-[240px]
          top-[29%]

          h-[180px]
          w-[180px]

          rounded-full

          bg-lime-300/18

          blur-[80px]

          animate-ambient-three

          pointer-events-none

          z-[1]
        "
      />
    </>
  );
}