// =====================================================
// BDS COMPONENT
// TimelineJourneyMobile
//
// Version: 3.0
//
// Mobile Journey
//
// Bloody Design System
// =====================================================

import { timelineData } from "../data/timelineData";

import TimelineMobileItem from "./TimelineMobileItem";
import TimelineMobileEnding from "./TimelineMobileEnding";

export default function TimelineJourneyMobile() {
  return (
    <div
      className="
        mt-16

        space-y-12
      "
    >
      {/* ================================= */}
      {/* Timeline Journey */}
      {/* ================================= */}

      {timelineData.map((item, index) => (
        <TimelineMobileItem
          key={item.year}
          year={item.year}
          title={item.title}
          text={item.text}
          icon={item.icon}
          isLast={index === timelineData.length - 1}
        />
      ))}

      {/* ================================= */}
      {/* Journey Ending */}
      {/* ================================= */}

      <div className="pt-8">
        <TimelineMobileEnding />
      </div>
    </div>
  );
}