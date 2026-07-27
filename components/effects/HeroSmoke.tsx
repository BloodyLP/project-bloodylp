// =====================================================
// BDS EFFECT
// HeroSmoke
//
// Version: 2.0
//
// Bloody Design System
// =====================================================

export default function HeroSmoke() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 transition-transform duration-500 ease-out"
      style={{
        transform: `
          translate(
            calc(var(--mouse-x) * 18px),
            calc(var(--mouse-y) * 18px)
          )
        `,
      }}
    >
      {/* ================================= */}
      {/* Smoke Layer 1 */}
      {/* ================================= */}

      <div
        className="
          absolute

          right-[120px]
          top-[48%]

          h-[520px]
          w-[520px]

          rounded-full

          bg-lime-400/20

          blur-[120px]

          animate-smoke-one
        "
      />

      {/* ================================= */}
      {/* Smoke Layer 2 */}
      {/* ================================= */}

      <div
        className="
          absolute

          right-[220px]
          top-[56%]

          h-[420px]
          w-[420px]

          rounded-full

          bg-lime-400/15

          blur-[140px]

          animate-smoke-two
        "
      />

      {/* ================================= */}
      {/* Smoke Layer 3 */}
      {/* ================================= */}

      <div
        className="
          absolute

          right-[40px]
          top-[38%]

          h-[320px]
          w-[320px]

          rounded-full

          bg-lime-400/18

          blur-[100px]

          animate-smoke-three
        "
      />
    </div>
  );
}