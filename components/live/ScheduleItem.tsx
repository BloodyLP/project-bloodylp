// =====================================================
// BDS COMPONENT
// ScheduleItem
//
// Version: 1.0
//
// Foundation Component
//
// Used in:
// ✓ Streamplan
// ✓ Turniere
// ✓ Events
//
// Bloody Design System
// =====================================================

interface ScheduleItemProps {
  day: string;
  date: string;
  time: string;
  title: string;
}

export default function ScheduleItem({
  day,
  date,
  time,
  title,
}: ScheduleItemProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/40
        p-5
        transition-all
        duration-300
        hover:border-lime-400/40
        hover:bg-zinc-900/80
      "
    >
      {/* Tag */}

      <p
        className="
          text-xs
          font-black
          uppercase
          tracking-[0.3em]
          text-lime-400
        "
      >
        {day}
      </p>

      {/* Datum */}

      <h4
        className="
          mt-2
          text-3xl
          font-black
          text-white
        "
      >
        {date}
      </h4>

      {/* Uhrzeit */}

      <p
        className="
          mt-4
          text-sm
          uppercase
          tracking-[0.18em]
          text-zinc-400
        "
      >
        {time}
      </p>

      <div className="my-5 h-px bg-zinc-800" />

      {/* Titel */}

      <p
        className="
          text-base
          font-semibold
          leading-7
          text-zinc-200
        "
      >
        {title}
      </p>
    </div>
  );
}