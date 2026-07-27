// =====================================================
// BDS COMPONENT
// ErrorBackground
//
// Version: 1.0
//
// Shared Error Background
//
// Bloody Design System
// =====================================================

"use client";

import HeroDust from "@/components/effects/HeroDust";

export default function ErrorBackground() {
  return (
    <>
      {/* ================================= */}
      {/* Background */}
      {/* ================================= */}

      <div className="absolute inset-0 overflow-hidden">
        {/* Base Gradient */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b

            from-black
            via-zinc-950
            to-black
          "
        />

        {/* Top Glow */}

        <div
          className="
            absolute

            left-1/2
            top-[-220px]

            h-[620px]
            w-[620px]

            -translate-x-1/2

            rounded-full

            bg-lime-400/[0.06]

            blur-[170px]
          "
        />

        {/* Left Ambient */}

        <div
          className="
            absolute

            left-[-180px]
            top-[30%]

            h-[420px]
            w-[420px]

            rounded-full

            bg-lime-400/[0.03]

            blur-[150px]
          "
        />

        {/* Right Ambient */}

        <div
          className="
            absolute

            right-[-180px]
            bottom-[15%]

            h-[420px]
            w-[420px]

            rounded-full

            bg-lime-400/[0.025]

            blur-[150px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.045]

            [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]

            [background-size:72px_72px]
          "
        />

        {/* Noise */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.03]

            mix-blend-soft-light

            bg-[url('/textures/noise.png')]
          "
        />

        {/* Dust */}

        <HeroDust />
      </div>
    </>
  );
}