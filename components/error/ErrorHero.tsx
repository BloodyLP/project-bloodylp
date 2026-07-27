// =====================================================
// BDS COMPONENT
// ErrorHero
//
// Version: 2.4
//
// Shared Error Hero
//
// Bloody Design System
// =====================================================

"use client";

import { motion } from "framer-motion";

import ErrorCard, { ErrorStatusItem } from "./ErrorCard";
import ErrorActions from "./ErrorActions";

type ErrorHeroProps = {
  code: string;
  title: string;
  description: React.ReactNode;
  accent?: "lime" | "red" | "amber";

  status?: {
    label: string;
    color: "green" | "red" | "yellow";
    description: string;
  };

  rows?: ErrorStatusItem[];

  logs?: string[];

  actions?: React.ReactNode;
};

export default function ErrorHero({
  code,
  title,
  description,
  accent = "lime",

  status = {
    label: "ONLINE",
    color: "green",
    description: "Secure Connection",
  },

  rows = [
    {
      label: "Einsatzziel",
      value: "Nicht gefunden",
      progress: 30,
      color: "red",
      delay: 0.2,
    },
    {
      label: "Navigation",
      value: "Einsatzbereit",
      progress: 100,
      color: "green",
      delay: 0.35,
    },
    {
      label: "Verbindung",
      value: "Stabil",
      progress: 100,
      color: "green",
      delay: 0.5,
    },
    {
      label: "Server",
      value: "Online",
      progress: 100,
      color: "green",
      delay: 0.65,
    },
  ],

  logs = [
    "✓ Verbindung hergestellt",
    "✓ Standort analysiert",
    "✕ Ziel nicht gefunden",
    "→ Rückkehr zur Einsatzzentrale empfohlen",
  ],

  actions = <ErrorActions />,
}: ErrorHeroProps) {
  const accentClasses = {
    lime: "text-lime-400 drop-shadow-[0_0_40px_rgba(163,230,53,.25)]",
    red: "text-red-500 drop-shadow-[0_0_40px_rgba(239,68,68,.25)]",
    amber:
      "text-amber-400 drop-shadow-[0_0_40px_rgba(251,191,36,.25)]",
  };

  return (
    <section
      className="
  relative
  z-10

  flex
  min-h-screen

  items-center
  justify-center

  px-5

  sm:px-6
  lg:px-8
"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-4xl
          flex-col
          items-center
          text-center
        "
      >
        {/* ================================= */}
        {/* Error Code */}
        {/* ================================= */}

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className={`
            font-ui

            text-[84px]
            sm:text-[110px]
            md:text-[180px]

            font-black

            leading-none

            tracking-[0.08em]

            ${accentClasses[accent]}
          `}
        >
          {code}
        </motion.h1>

        {/* ================================= */}
        {/* Headline */}
        {/* ================================= */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.7,
          }}
          className="
            mt-6
            sm:mt-8

            font-ui

            text-2xl
            sm:text-3xl
            md:text-5xl

            font-black

            uppercase

            tracking-[0.18em]
            sm:tracking-[0.24em]
            md:tracking-[0.32em]

            text-white
          "
        >
          {title}
        </motion.h2>

        {/* ================================= */}
        {/* Description */}
        {/* ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.7,
          }}
          className="
            mt-6
            sm:mt-8

            max-w-2xl

            px-2

            text-base
            sm:text-lg
            md:text-xl

            leading-7
            md:leading-8

            text-zinc-400
          "
        >
          {description}
        </motion.div>

        {/* ================================= */}
        {/* Status Card */}
        {/* ================================= */}

        <div
          className="
            mt-10

            w-full
            max-w-2xl
          "
        >
          <ErrorCard
            code={code}
            title={title}
            status={status}
            rows={rows}
            logs={logs}
          />
        </div>

        {/* ================================= */}
        {/* Actions */}
        {/* ================================= */}

        <div
          className="
            mt-8

            w-full
            max-w-2xl
          "
        >
          {actions}
        </div>
      </div>
    </section>
  );
}