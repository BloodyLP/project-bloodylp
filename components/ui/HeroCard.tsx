// =====================================================
// BDS COMPONENT
// HeroCard
//
// Version: 2.0
//
// Foundation Component
//
// Used in:
// ✓ Twitch
// ✓ YouTube
// ✓ Featured Projects
// ✓ Turniere
//
// Bloody Design System
// =====================================================

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import GlowCard from "./GlowCard";

interface HeroCardProps {
  image: string;
  badge: ReactNode;
  title: string;
  subtitle?: string;
  meta?: ReactNode;
  button: string;
  href: string;
}

export default function HeroCard({
  image,
  badge,
  title,
  subtitle,
  meta,
  button,
  href,
}: HeroCardProps) {
  return (
    <GlowCard
      elevationLevel="high"
      className="
        group
        overflow-hidden
        p-0
      "
    >
      <div className="relative">

        {/* Hero Image */}

        <div
  className="
    relative
    h-[500px]
    overflow-hidden
  "
>

          <Image
            src={image}
            alt={title}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.05]
            "
          />

          {/* Cinematic Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/35
              to-transparent
            "
          />

          {/* Atmosphere */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-56
              bg-gradient-to-t
              from-lime-400/10
              via-lime-400/5
              to-transparent
              blur-3xl
            "
          />

          {/* Content */}

          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              justify-end
              p-14
            "
          >

            <div className="mb-8">
              {badge}
            </div>

            <h3
              className="
                max-w-xl
                text-4xl
                xl:text-[3.4rem]
                font-black
                tracking-[-0.03em]
                leading-[1.05]
                text-white
              "
            >
              {title}
            </h3>

            {subtitle && (
              <p
                className="
                  mt-5
                  text-xl
                  text-zinc-300
                "
              >
                {subtitle}
              </p>
            )}

            {meta && (
              <div className="mt-8">
                {meta}
              </div>
            )}

          </div>

        </div>

        {/* CTA */}

        <Link
          href={href}
          className="
            flex
            items-center
            justify-between
            border-t
            border-zinc-800
            bg-zinc-950/80
            px-10
            py-7
            transition-all
            duration-300
            hover:bg-zinc-900
          "
        >

          <span
            className="
              text-sm
              font-black
              uppercase
              tracking-[0.25em]
              text-lime-400
            "
          >
            {button}
          </span>

          <span
            className="
              text-2xl
              text-lime-400
              transition-transform
              duration-300
              group-hover:translate-x-2
            "
          >
            →
          </span>

        </Link>

      </div>
    </GlowCard>
  );
}