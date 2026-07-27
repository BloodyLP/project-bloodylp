"use client";

import { motion } from "framer-motion";

import HeroTitle from "./hero/HeroTitle";
import HeroCore from "./HeroCore";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

import {
  heroContainer,
  heroItem,
} from "@/lib/animations";

export default function HeroLeft() {
  return (
    <motion.div
      variants={heroContainer}
      initial="hidden"
      animate="show"
      className="
  relative
  isolate

  xl:pt-12
"
    >
      {/* ================================= */}
      {/* TEXT VIGNETTE */}
      {/* ================================= */}

      <div
        aria-hidden
        className="
          absolute

          inset-x-[-28px]
          inset-y-[-24px]

          -z-10

          rounded-[56px]

          bg-gradient-to-b
          from-black/35
          via-black/50
          to-lime-950/10

          blur-[70px]

          pointer-events-none
        "
      />

      <motion.div variants={heroItem}>
        <HeroTitle />
      </motion.div>

      <motion.div variants={heroItem}>
        <HeroCore />
      </motion.div>

      <motion.div variants={heroItem}>
        <HeroButtons />
      </motion.div>

      <motion.div variants={heroItem}>
        <HeroSocials />
      </motion.div>
    </motion.div>
  );
}