// =====================================================
// BDS COMPONENT
// ErrorStatusRow
//
// Version: 3.0
//
// Responsive Desktop / Mobile
//
// Bloody Design System
// =====================================================

"use client";

import { motion } from "framer-motion";
import ErrorProgressBar from "./ErrorProgressBar";

type Props = {
  label: string;
  value: string;
  progress: number;
  color?: "green" | "red" | "yellow";
  delay?: number;
};

export default function ErrorStatusRow({
  label,
  value,
  progress,
  color = "green",
  delay = 0,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -15,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay,
      }}
    >
      {/* ================================= */}
      {/* Mobile / Tablet */}
      {/* ================================= */}

      <div
        className="
          space-y-3

          lg:hidden
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
          "
        >
          <span
            className="
              text-sm
              text-zinc-400
            "
          >
            {label}
          </span>

          <span
            className="
              text-right

              text-sm

              font-semibold

              text-white
            "
          >
            {value}
          </span>
        </div>

        <ErrorProgressBar
          progress={progress}
          color={color}
        />
      </div>

      {/* ================================= */}
      {/* Desktop */}
      {/* ================================= */}

      <div
        className="
          hidden

          lg:flex
          lg:items-center
          lg:justify-between
        "
      >
        <span
          className="
            w-44

            text-zinc-400
          "
        >
          {label}
        </span>

        <ErrorProgressBar
          progress={progress}
          color={color}
        />

        <span
          className="
            w-44

            text-right

            font-semibold

            text-white
          "
        >
          {value}
        </span>
      </div>
    </motion.div>
  );
}