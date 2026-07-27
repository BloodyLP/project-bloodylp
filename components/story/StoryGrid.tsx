// =====================================================
// BDS COMPONENT
// StoryGrid
//
// Version: 4.0
//
// Responsive + Motion Foundation
//
// Kapitel 2
// Drei Welten. Eine Leidenschaft.
//
// Bloody Design System
// =====================================================

"use client";

import { motion } from "framer-motion";

import StoryCard from "./StoryCard";
import { storyData } from "./data/storyData";

import { container } from "@/lib/animations";

export default function StoryGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="
        mt-14
        md:mt-20
        xl:mt-24

        grid

        grid-cols-1

        gap-8

        md:grid-cols-2

        xl:grid-cols-3

        xl:gap-10
      "
    >
      {storyData.map((story) => (
        <StoryCard
          key={story.category}
          image={story.image}
          category={story.category}
          headline={story.headline}
          text={story.text}
          href={story.href}
        />
      ))}
    </motion.div>
  );
}