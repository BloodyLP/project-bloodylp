// =====================================================
// BDS COMPONENT
// LiveCard
//
// Version: 8.6
//
// BDS Refactoring
//
// Used in:
// ✓ Twitch
// ✓ YouTube
// ✓ Streamplan
// ✓ Kommentator
//
// Bloody Design System
// =====================================================

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import GlowCard from "@/components/ui/GlowCard";

import { fadeUp, cardHover } from "@/lib/animations";

interface LiveCardProps {
  image: string;
  imageOverride?: string;

  badge: React.ReactNode;

  eyebrow?: string;
  eyebrowClassName?: string;

  title: string;
  titleClassName?: string;

  subtitle?: string;

  meta?: React.ReactNode;

  children?: React.ReactNode;

  button?: string;

  href?: string;

  hideDivider?: boolean;
}

export default function LiveCard({
  image,
  imageOverride,
  badge,
  eyebrow,
  eyebrowClassName,
  title,
  titleClassName,
  subtitle,
  meta,
  children,
  button,
  href,
  hideDivider = false,
}: LiveCardProps) {
  const heroImage = imageOverride || image;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      {...cardHover}
    >
      <GlowCard
        elevationLevel="high"
        className="
          h-full
          overflow-hidden
          p-0
        "
      >
        {/* ================================= */}
        {/* Hero */}
        {/* ================================= */}

        <div className="relative h-[205px] overflow-hidden">
          <Image
            src={heroImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/40
              to-transparent
            "
          />
        </div>

        {/* ================================= */}
        {/* Content */}
        {/* ================================= */}

        <div className="flex flex-1 flex-col p-6">

          <div className="mb-4">
            {badge}
          </div>

          {eyebrow && (
            <p
              className={
                eyebrowClassName ??
                `
                mb-2
                font-ui
                text-sm
                font-bold
                uppercase
                tracking-[0.30em]
                text-lime-400
                `
              }
            >
              {eyebrow}
            </p>
          )}

          <h3
            className={
              titleClassName ??
              `
              font-display
              text-[2rem]
              font-bold
              leading-[1.05]
              tracking-[-0.02em]
              text-white
              `
            }
          >
            {title}
          </h3>

          {subtitle && (
            <p
              className="
                mt-2
                font-ui
                text-base
                tracking-[0.03em]
                text-zinc-400
              "
            >
              {subtitle}
            </p>
          )}

          {!hideDivider && (
            <Divider
              variant="solid"
              className="my-5 w-full bg-zinc-800"
            />
          )}

          {meta}

          {children && (
            <>
              {!hideDivider && (
                <Divider
                  variant="solid"
                  className="my-5 w-full bg-zinc-800"
                />
              )}

              <div className="flex-1">
                {children}
              </div>
            </>
          )}

          {button && href && (
            <div className="mt-6">
              <Button
                href={href}
                fullWidth
              >
                {button}
              </Button>
            </div>
          )}

        </div>

      </GlowCard>
    </motion.div>
  );
}