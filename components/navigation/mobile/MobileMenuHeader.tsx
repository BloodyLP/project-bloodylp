// =====================================================
// BDS COMPONENT
// MobileMenuHeader
//
// Version: 1.0
//
// Responsive Pass
//
// Bloody Design System
// =====================================================

import Image from "next/image";

export default function MobileMenuHeader() {
  return (
    <div
      className="
        mb-16

        flex
        flex-col
        items-center
      "
    >
      <Image
        src="/logos/bloodylp-logo.png"
        alt="BloodyLP"

        width={110}
        height={110}

        priority

        className="
          mb-6

          drop-shadow-[0_0_35px_rgba(163,230,53,.18)]
        "
      />

      <h2
        className="
          font-display

          text-[2.25rem]

          font-black

          uppercase

          tracking-[0.18em]

          text-white
        "
      >
        BLOODYLP
      </h2>

      <p
        className="
          mt-2

          font-ui

          text-sm

          uppercase

          tracking-[0.35em]

          text-lime-400
        "
      >
        Alexander Blattmann
      </p>

      <div
        className="
          mt-8

          h-px

          w-24

          rounded-full

          bg-gradient-to-r

          from-transparent

          via-lime-400

          to-transparent
        "
      />
    </div>
  );
}