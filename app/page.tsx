import Navbar from "@/components/layout/Navbar";

import HomeHero from "@/components/sections/HomeHero";

import StatsSection from "@/components/StatsSection";

import TimelineSection from "@/components/timeline/TimelineSection";

import StorySection from "@/components/story/StorySection";

import LiveSection from "@/components/live/LiveSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <HomeHero />

      <StatsSection />

      <TimelineSection />

      <StorySection />

      <LiveSection />

    </>
  );
}