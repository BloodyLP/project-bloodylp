// =====================================================
// BDS COMPONENT
// LiveGrid
//
// Version: 4.1
//
// Live Layout
//
// Bloody Design System
// =====================================================

"use client";

import { motion } from "framer-motion";

import { container } from "@/lib/animations";

import TwitchCard from "./TwitchCard";
import StreamplanCard from "./StreamplanCard";
import YoutubeCard from "./YoutubeCard";
import SportEuropeSection from "./sporteurope/SportEuropeSection";

export default function LiveGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="mt-16 space-y-10"
    >
      {/* ===========================
          Reihe 1
      ============================ */}

      <div
        className="
          grid
          gap-8
          grid-cols-1
          xl:grid-cols-3
        "
      >
        <TwitchCard />

        <StreamplanCard />

        <YoutubeCard />
      </div>

      {/* ===========================
          Reihe 2
      ============================ */}

      <div className="w-full">
        <SportEuropeSection />
      </div>
    </motion.div>
  );
}