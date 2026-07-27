// =====================================================
// BDS MOTION
// Fade Left
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

import { Variants } from "framer-motion";

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};