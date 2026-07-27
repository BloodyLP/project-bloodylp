"use client";

import { motion } from "framer-motion";

import TeamLogo from "@/components/broadcast/TeamLogo";
import BroadcastDivider from "@/components/broadcast/BroadcastDivider";
import MatchDayBar from "@/components/broadcast/MatchDayBar";

interface SportEuropeMatchCardProps {
  league: string;

  matchday: string;

  homeTeam: string;
  awayTeam: string;

  homeLogo: string;
  awayLogo: string;
}

export default function SportEuropeMatchCard({
  league,
  matchday,
  homeTeam,
  awayTeam,
  homeLogo,
  awayLogo,
}: SportEuropeMatchCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -4,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.55,
        ease: "easeOut",
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[34px]
        border
        border-white/10
        bg-gradient-to-b
        from-zinc-900
        via-[#171717]
        to-black
        shadow-[0_20px_70px_rgba(0,0,0,.45)]
      "
    >
      {/* ======================================
          Stadium Atmosphere
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-[340px]
          bg-[radial-gradient(circle_at_top,rgba(163,230,53,.12),transparent_68%)]
        "
      />

      <div
        className="
          absolute
          left-[-180px]
          top-[260px]
          h-[340px]
          w-[340px]
          rounded-full
          bg-white/[0.045]
          blur-[130px]
        "
      />

      <div
        className="
          absolute
          right-[-180px]
          top-[260px]
          h-[340px]
          w-[340px]
          rounded-full
          bg-white/[0.045]
          blur-[130px]
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[340px]
          bg-gradient-to-t
          from-black
          via-zinc-950
          to-transparent
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[240px]
          opacity-60
          bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,.05),transparent_72%)]
        "
      />

      {/* ======================================
          Content
      ====================================== */}

      <div
        className="
          relative
          flex
          flex-1
          flex-col
          px-10
          py-8
        "
      >
        <div className="flex flex-col items-center">
          <span
            className="
              font-ui
              text-[14px]
              font-black
              uppercase
              tracking-[0.85em]
              text-lime-400
            "
          >
            NÄCHSTER EINSATZ
          </span>

          <div
            className="
              mt-6
              flex
              w-full
              items-center
              justify-center
              gap-4
            "
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-lime-400/30" />

            <div className="h-px w-24 bg-lime-400/40" />

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-lime-400/30" />
          </div>
        </div>

        <div className="h-10" />

        <div className="flex flex-col items-center">
          <h2
            className="
              font-ui
              text-[28px]
              md:text-[32px]
              font-black
              uppercase
              tracking-[0.08em]
              text-center
              text-white
            "
          >
            {homeTeam}
          </h2>

          <div className="mt-3 h-px w-44 bg-gradient-to-r from-transparent via-lime-400/25 to-transparent" />

          <div className="mt-6 mb-6">
            <TeamLogo
              src={homeLogo}
              alt={homeTeam}
              size={150}
            />
          </div>
        </div>

        <div className="my-5">
          <BroadcastDivider />
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-6">
            <TeamLogo
              src={awayLogo}
              alt={awayTeam}
              size={150}
            />
          </div>

          <div className="mb-3 h-px w-44 bg-gradient-to-r from-transparent via-lime-400/25 to-transparent" />

          <h2
            className="
              font-ui
              text-[28px]
              md:text-[32px]
              font-black
              uppercase
              tracking-[0.08em]
              text-center
              text-white
            "
          >
            {awayTeam}
          </h2>
        </div>

        <div className="mt-auto pt-10">
          <MatchDayBar text={matchday} />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[34px] ring-1 ring-inset ring-white/5" />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[34px]
          opacity-0
          transition-all
          duration-300
          group-hover:opacity-100
          ring-1
          ring-inset
          ring-lime-400/20
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -top-44
          left-1/2
          h-[460px]
          w-[460px]
          -translate-x-1/2
          rounded-full
          bg-lime-400/[0.035]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-60
          w-[520px]
          -translate-x-1/2
          translate-y-1/2
          rounded-full
          bg-lime-400/[0.025]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-lime-400/35
          to-transparent
        "
      />
    </motion.div>
  );
}