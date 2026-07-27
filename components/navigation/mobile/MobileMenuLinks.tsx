// =====================================================
// BDS COMPONENT
// MobileMenuLinks
//
// Version: 1.0
//
// Responsive Pass
//
// Bloody Design System
// =====================================================

"use client";

import Link from "next/link";

import { navItems } from "../navigation.data";

interface MobileMenuLinksProps {
  onNavigate: () => void;
}

export default function MobileMenuLinks({
  onNavigate,
}: MobileMenuLinksProps) {
  return (
    <nav
      className="
        flex
        flex-1
        flex-col
        items-center
        justify-center

        gap-7
      "
    >
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={onNavigate}
          className="
            group

            relative

            px-8
            py-3

            font-display

            text-[1.65rem]

            font-bold

            uppercase

            tracking-[0.16em]

            text-zinc-300

            transition-all
            duration-300

            hover:scale-105

            hover:text-lime-400
          "
        >
          {item.label}

          <span
            className="
              absolute

              bottom-0
              left-1/2

              h-[2px]
              w-0

              -translate-x-1/2

              bg-lime-400

              transition-all
              duration-300

              group-hover:w-full
            "
          />
        </Link>
      ))}
    </nav>
  );
}