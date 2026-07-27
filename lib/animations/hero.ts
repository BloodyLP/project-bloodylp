// =====================================================
// BDS MOTION
// Hero
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

import { Variants } from "framer-motion";

export const heroContainer: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

export const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const heroPortrait: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    x: 30,
    filter: "blur(12px)",
  },

  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.35,
    },
  },
};