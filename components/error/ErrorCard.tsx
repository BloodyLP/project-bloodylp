// =====================================================
// BDS COMPONENT
// ErrorCard
//
// Version: 3.1
//
// Shared Error Card
//
// Bloody Design System
// =====================================================

"use client";

import ErrorCardHeader from "./ErrorCardHeader";
import ErrorStatusRow from "./ErrorStatusRow";
import ErrorSystemLog from "./ErrorSystemLog";

export type ErrorStatusColor = "green" | "red" | "yellow";

export type ErrorStatusItem = {
  label: string;
  value: string;
  progress: number;
  color?: ErrorStatusColor;
  delay?: number;
};

type ErrorCardProps = {
  code: string;
  title: string;

  status?: {
    label: string;
    color: ErrorStatusColor;
    description: string;
  };

  rows: ErrorStatusItem[];

  logs: string[];
};

export default function ErrorCard({
  code,
  title,
  status = {
    label: "ONLINE",
    color: "green",
    description: "Secure Connection",
  },
  rows,
  logs,
}: ErrorCardProps) {
  return (
    <section
      className="
        mt-12
        md:mt-14

        w-full
        max-w-2xl

        overflow-hidden

        rounded-2xl
        md:rounded-3xl

        border
        border-white/10

        bg-zinc-900/70

        backdrop-blur-xl

        shadow-[0_20px_60px_rgba(0,0,0,.45)]
      "
    >
      <ErrorCardHeader
        code={code}
        title={title}
        status={status}
      />

      <div
        className="
          space-y-5
          px-5
          py-6

          sm:px-6
          sm:py-7

          md:space-y-6
          md:px-8
          md:py-8
        "
      >
        {rows.map((row) => (
          <ErrorStatusRow
            key={row.label}
            label={row.label}
            value={row.value}
            progress={row.progress}
            color={row.color}
            delay={row.delay}
          />
        ))}
      </div>

      <ErrorSystemLog logs={logs} />
    </section>
  );
}