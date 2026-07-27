// =====================================================
// BDS COMPONENT
// ErrorActions
//
// Version: 2.0
//
// Shared Error Actions
// =====================================================

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const actions = [
  {
    href: "/",
    label: "Zur Einsatzzentrale",
    icon: "🏠",
    primary: true,
  },
  {
    href: "https://twitch.tv/bl00dylp",
    label: "Twitch",
    icon: "🔴",
    primary: false,
  },
  {
    href: "https://youtube.com/@BloodyLP",
    label: "YouTube",
    icon: "▶",
    primary: false,
  },
];

export default function ErrorActions() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.1,
        duration: 0.6,
      }}
      className="
  mt-10
  mb-10

  flex
  flex-col

  gap-3

  sm:mt-12
  sm:mb-0

  sm:flex-row
  sm:justify-center
  sm:gap-4
"
    >
      {actions.map((action) => (
        <Link
          key={action.label}
          href={action.href}
          target={
            action.href.startsWith("http")
              ? "_blank"
              : undefined
          }
          rel={
            action.href.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
          className={`
            inline-flex

            w-full
            items-center
            justify-center

            rounded-2xl

            px-6
            py-4

            text-sm
            sm:w-auto
            sm:text-base

            font-ui
            font-bold

            uppercase

            tracking-[0.12em]

            transition-all
            duration-300

            ${
              action.primary
                ? "bg-lime-400 text-black hover:scale-105 hover:bg-lime-300"
                : "border border-white/10 bg-zinc-900/70 text-white hover:border-lime-400 hover:text-lime-400 hover:scale-105"
            }
          `}
        >
          <span className="mr-2">
            {action.icon}
          </span>

          {action.label}
        </Link>
      ))}
    </motion.div>
  );
}