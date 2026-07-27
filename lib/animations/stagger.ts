// =====================================================
// BDS MOTION
// Stagger
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

import { Variants } from "framer-motion";

export const container: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const item: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
    },
  },
};