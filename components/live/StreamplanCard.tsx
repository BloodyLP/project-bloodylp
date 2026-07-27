// =====================================================
// BDS COMPONENT
// StreamplanCard
//
// Version: 9.0
//
// Kapitel 3
// Wir sehen uns. LIVE.
//
// Bloody Design System
// =====================================================

import StatusBadge from "../ui/StatusBadge";
import LiveCard from "./LiveCard";
import { liveData } from "./data/liveData";

export default function StreamplanCard() {
  const streamplan = liveData.streamplan;

  return (
    <LiveCard
      image={streamplan.image}
      badge={
        <StatusBadge variant="schedule">
          {streamplan.badge}
        </StatusBadge>
      }
      title="Nächste Streams"
      subtitle="LIVE bei Twitch"
      hideDivider
    >
      <div className="relative pt-6">

        {/* Timeline */}

        <div
          className="
            absolute
            left-[4px]
            top-2
            bottom-2
            w-px
            bg-zinc-800
          "
        />

        <div className="space-y-5">

          {streamplan.events.map((event) => (

            <div
              key={`${event.day}-${event.date}`}
              className="relative pl-8"
            >

              {/* Timeline Point */}

              <div
                className="
                  absolute
                  left-0
                  top-1.5
                  h-[9px]
                  w-[9px]
                  rounded-full
                  bg-lime-400
                  ring-4
                  ring-zinc-950
                "
              />

              {/* Header */}

              <div className="flex items-center justify-between">

                <span
                  className="
                    text-[11px]
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-lime-400
                  "
                >
                  {event.day}
                </span>

                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.12em]
                    text-zinc-500
                  "
                >
                  {event.date}
                </span>

              </div>

              {/* Time */}

              <p
                className="
                  mt-2
                  text-lg
                  font-bold
                  text-white
                "
              >
                {event.time}
              </p>

              {/* Title */}

              <p
                className="
                  mt-1
                  text-sm
                  leading-6
                  text-zinc-400
                "
              >
                {event.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </LiveCard>
  );
}