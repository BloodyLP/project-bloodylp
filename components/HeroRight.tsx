"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroPortrait } from "@/lib/animations";

export default function HeroRight() {
  return (
    <>
      {/* ==================================================== */}
      {/* DESKTOP */}
      {/* ==================================================== */}

      <motion.div
        variants={heroPortrait}
        initial="hidden"
        animate="show"
        className="
          relative

          hidden
          xl:flex

          h-[760px]

          items-center
          justify-end
        "
      >
        {/* ================================= */}
        {/* BACKLIGHT */}
        {/* ================================= */}

        <Image
          src="/images/alexander-hero5.png"
          alt=""
          width={900}
          height={1200}
          aria-hidden
          draggable={false}
          className="
            absolute

            z-0

            mr-[-140px]
            mt-[-60px]

            w-[1000px]

            object-contain

            scale-[1.1]

            opacity-10

            blur-[42px]

            brightness-[2.2]

            saturate-[3]

            animate-backlight
          "
        />

        {/* ================================= */}
        {/* CHARACTER GLOW */}
        {/* ================================= */}

        <Image
          src="/images/alexander-hero5.png"
          alt=""
          width={900}
          height={1200}
          aria-hidden
          draggable={false}
          className="
            absolute

            z-[1]

            mr-[-150px]
            mt-[-0px]

            w-[1000px]

            object-contain

            opacity-35

            blur-[20px]

            brightness-[0.5]

            saturate-[2.0]

            hue-rotate-[10deg]

            animate-character-glow
          "
        />

        {/* ================================= */}
        {/* PORTRAIT */}
        {/* ================================= */}

        <Image
          src="/images/alexander-hero5.png"
          alt="Alexander Blattmann"
          width={900}
          height={1200}
          priority
          draggable={false}
          className="
            relative

            z-10

            mr-[-140px]
            mt-[60px]

            w-[1000px]

            object-contain

            drop-shadow-[0_40px_90px_rgba(0,0,0,.75)]

            transition-all
            duration-700

            hover:scale-[1.02]
          "
        />
      </motion.div>

      {/* ==================================================== */}
      {/* MOBILE */}
      {/* ==================================================== */}

      <motion.div
        variants={heroPortrait}
        initial="hidden"
        animate="show"
        className="
          absolute

          inset-x-0

          bottom-[-180px]

          xl:hidden

          pointer-events-none

          flex
          justify-center

          z-[5]
        "
      >
        {/* ================================= */}
        {/* BACKLIGHT */}
        {/* ================================= */}

        <Image
          src="/images/alexander-hero5.png"
          alt=""
          width={700}
          height={900}
          aria-hidden
          draggable={false}
          className="
            absolute

            z-0

            bottom-[-10px]

            w-[520px]

            object-contain

            opacity-12

            blur-[65px]

            brightness-[2.0]

            saturate-[3]

            scale-[1.08]

            animate-backlight
          "
        />

        {/* ================================= */}
        {/* CHARACTER LIGHT */}
        {/* ================================= */}

        <div
          className="
            absolute

            z-[1]

            bottom-[170px]

            right-[35px]

            h-[240px]
            w-[240px]

            rounded-full

            bg-lime-400/10

            blur-[130px]
          "
        />

        {/* ================================= */}
        {/* PORTRAIT */}
        {/* ================================= */}

        <Image
          src="/images/alexander-hero5.png"
          alt="Alexander Blattmann"
          width={700}
          height={900}
          priority
          draggable={false}
          className="
            relative

            z-20

            translate-x-[65px]

            w-[650px]

            max-w-none

            object-contain

            opacity-100

            brightness-[0.60]

contrast-[0.86]

saturate-[0.72]

            drop-shadow-[0_35px_90px_rgba(0,0,0,.95)]

            transition-all
            duration-700
          "
        />
      </motion.div>
    </>
  );
}