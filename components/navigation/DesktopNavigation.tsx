// =====================================================
// BDS COMPONENT
// DesktopNavigation
//
// Version: 2.0
//
// Responsive Pass
//
// Bloody Design System
// =====================================================

import Link from "next/link";

import { navItems } from "./navigation.data";

export default function DesktopNavigation() {
  return (
    <nav
      className="
        hidden
        lg:flex
        items-center
        gap-12
      "
    >
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="
            group
            relative

            font-ui

            text-[1.135rem]
            font-bold
            uppercase

            tracking-[0.05em]

            text-zinc-300

            transition-all
            duration-300

            hover:text-lime-400
          "
        >
          {item.label}

          <span
            className="
              absolute

              -bottom-3
              left-0

              h-[2px]
              w-0

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