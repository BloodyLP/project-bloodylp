// =====================================================
// BDS MOTION
// Journey Reveal
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

import { Variants } from "framer-motion";

export const journeyReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};