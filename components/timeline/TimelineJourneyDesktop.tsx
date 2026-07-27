// =====================================================
// BDS COMPONENT
// TimelineJourney
//
// Version: 4.0
//
// Bloody Design System
// =====================================================

import { timelineData } from "./data/timelineData";
import TimelineHighlight from "./components/TimelineHighlight";
import TimelineNode from "./components/TimelineNode";

export default function TimelineJourney() {
  return (
    <div className="mt-20">

      <div className="flex items-start justify-center gap-16">

        {/* Timeline */}
        <div className="flex items-start gap-14">

          {timelineData.map((item, index) => (
            <TimelineNode
              key={item.year}
              year={item.year}
              title={item.title}
              text={item.text}
              icon={item.icon}
              isLast={index === timelineData.length - 1}
            />
          ))}

        </div>

        {/* Highlight */}
        <div className="pt-[0px]">

          <TimelineHighlight />

        </div>

      </div>

    </div>
  );
}