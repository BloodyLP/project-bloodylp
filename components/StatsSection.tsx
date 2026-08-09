// =====================================================
// BDS COMPONENT
// StatsSection
//
// Version: 2.1
//
// Responsive Pass
//
// Bloody Design System
// =====================================================

import StatCard from "./StatCard";

export default function StatsSection() {
  return (
    <section
      className="
        mx-auto

        mt-24
        md:mt-32
        xl:mt-40

        max-w-7xl

        px-6
        md:px-8
      "
    >
      <div
        className="
          grid

          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4

          gap-6
          xl:gap-8
        "
      >
        <StatCard
          number="14+"
          title="Jahre Content"
          delay={0}
        />

        <StatCard
          number="9+"
          title="Jahre Streaming"
          delay={0.15}
        />

        <StatCard
          number="8+"
          title="Jahre Kommentator"
          delay={0.30}
        />

        <StatCard
          number="1500+"
          title="Streams & Events"
          delay={0.45}
        />
      </div>
    </section>
  );
}