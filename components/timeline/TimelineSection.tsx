// =====================================================
// BDS COMPONENT
// TimelineSection
//
// Version: 3.0
//
// Responsive Foundation
//
// Bloody Design System
// =====================================================

import TimelineHeader from "./TimelineHeader";

import TimelineJourneyDesktop from "./TimelineJourneyDesktop";
import TimelineJourneyMobile from "./mobile/TimelineJourneyMobile";

export default function TimelineSection() {
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
      <TimelineHeader />

      {/* ================================= */}
      {/* Desktop */}
      {/* ================================= */}

      <div className="hidden xl:block">
        <TimelineJourneyDesktop />
      </div>

      {/* ================================= */}
      {/* Tablet + Mobile */}
      {/* ================================= */}

      <div className="block xl:hidden">
        <TimelineJourneyMobile />
      </div>
    </section>
  );
}