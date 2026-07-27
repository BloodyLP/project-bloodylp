// =====================================================
// BDS COMPONENT
// MobileMenuButton
//
// Version: 1.0
//
// Responsive Pass
//
// Bloody Design System
// =====================================================

"use client";

import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({
  open,
  onClick,
}: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        open
          ? "Menü schließen"
          : "Menü öffnen"
      }
      className="
        flex

        h-14
        w-14

        items-center
        justify-center

        rounded-2xl

        border
        border-zinc-800

        bg-zinc-950/70

        text-white

        backdrop-blur-xl

        transition-all
        duration-300

        hover:scale-105

        hover:border-lime-400/60

        hover:text-lime-400

        hover:shadow-[0_0_30px_rgba(163,230,53,.22)]

        active:scale-95

        lg:hidden
      "
    >
      {open ? (

        <X
          size={26}
          strokeWidth={2.25}
        />

      ) : (

        <Menu
          size={26}
          strokeWidth={2.25}
        />

      )}
    </button>
  );
}