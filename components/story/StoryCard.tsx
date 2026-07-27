// =====================================================
// BDS COMPONENT
// StoryCard
//
// Version: 5.0
//
// Motion Library Integration
//
// Kapitel 2
// Drei Welten. Eine Leidenschaft.
//
// Bloody Design System
// =====================================================

"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import GlowCard from "@/components/ui/GlowCard";

import {
  fadeUp,
  cardHover,
} from "@/lib/animations";

interface StoryCardProps {
  image: string;
  category: string;
  headline: string;
  text: string;
  href: string;
}

export default function StoryCard({
  image,
  category,
  headline,
  text,
  href,
}: StoryCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}

      {...cardHover}
    >
      <Link
        href={href}
        className="block h-full"
      >
        <GlowCard
          elevationLevel="base"
          className="
            group

            h-full

            cursor-pointer

            overflow-hidden

            p-0
          "
        >
          {/* ================================= */}
          {/* Hero Image */}
          {/* ================================= */}

          <div
            className="
              relative

              h-[280px]
              md:h-[340px]
              xl:h-[420px]

              overflow-hidden
            "
          >
            <Image
              src={image}
              alt={headline}
              fill
              sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
              className="
                object-cover

                transition-transform
                duration-700
                ease-out

                group-hover:scale-[1.08]
              "
            />

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t

                from-zinc-950/70

                via-transparent

                to-transparent
              "
            />
          </div>

          {/* ================================= */}
          {/* Content */}
          {/* ================================= */}

          <div
            className="
              flex

              min-h-[320px]
              xl:min-h-[420px]

              flex-col

              px-6
              md:px-8
              xl:px-10

              py-6
              md:py-8
              xl:py-10
            "
          >
            {/* Headline */}

            <h3
              className="
                font-display

                text-[1.7rem]
                md:text-[1.9rem]
                xl:text-[2rem]

                font-bold

                leading-[1.05]

                tracking-[-0.02em]

                text-white

                transition-colors
                duration-500

                group-hover:text-lime-400
              "
            >
              {headline}
            </h3>

            {/* Category */}

            <p
              className="
                mt-5

                font-ui

                text-xs
                md:text-sm

                font-bold

                uppercase

                tracking-[0.35em]

                text-lime-400
              "
            >
              {category}
            </p>

            {/* Divider */}

            <div
              className="
                mt-6

                h-px
                w-16

                bg-lime-400/40

                transition-all
                duration-500

                group-hover:w-28
                group-hover:bg-lime-400
              "
            />

            {/* Story */}

            <p
              className="
                mt-6

                flex-1

                font-ui

                text-base
                xl:text-[17px]

                leading-8
                xl:leading-9

                text-zinc-300

                transition-colors
                duration-500

                group-hover:text-white
              "
            >
              {text}
            </p>
          </div>
        </GlowCard>
      </Link>
    </motion.div>
  );
}