"use client";

// =====================================================
// BDS COMPONENT
// MobileMenuFooter
//
// Version: 1.3
//
// Bloody Design System
// =====================================================

import Image from "next/image";
import Link from "next/link";

import { socialItems } from "@/components/live/data/social.data";

export default function MobileMenuFooter() {
  return (
    <footer
      className="
        mt-14
        flex
        flex-col
        items-center
        gap-8
      "
    >
      <div
        className="
          h-px
          w-24
          rounded-full
          bg-gradient-to-r
          from-transparent
          via-lime-400
          to-transparent
        "
      />

      <p
        className="
          font-ui
          text-xs
          font-bold
          uppercase
          tracking-[0.42em]
          text-zinc-500
        "
      >
        Folge mir
      </p>

      <div
        className="
          flex
          items-center
          justify-center
          gap-5
        "
      >
        {socialItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={`
              group
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900/70
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-110
              ${item.glow}
            `}
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={24}
              height={24}
              className="
                transition-all
                duration-300
                group-hover:scale-110
              "
            />
          </Link>
        ))}
      </div>
    </footer>
  );
}