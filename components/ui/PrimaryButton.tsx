// =====================================================
// BDS COMPONENT
// PrimaryButton
//
// Version: 2.0
//
// Foundation Component
//
// Used in:
// ✓ Hero
// ✓ Timeline
// ✓ Twitch
// ✓ YouTube
// ✓ Streamplan
// ✓ Kommentator
// ✓ Kontakt
// ✓ Community
//
// Bloody Design System
// =====================================================

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function PrimaryButton({
  href,
  children,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className="
        group
        flex
        items-center
        justify-between

        rounded-2xl
        border
        border-lime-400/30

        bg-lime-400/[0.03]

        px-6
        py-4

        transition-all
        duration-300

        hover:border-lime-400/70
        hover:bg-lime-400/10
      "
    >
      <span
        className="
          text-[13px]
          font-black
          uppercase
          tracking-[0.22em]
          text-lime-400
        "
      >
        {children}
      </span>

      <ArrowRight
        size={18}
        strokeWidth={2.5}
        className="
          text-lime-400
          transition-all
          duration-300
          group-hover:translate-x-1
        "
      />
    </Link>
  );
}