// =====================================================
// BDS COMPONENT
// GlowButton
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function GlowButton({
  children,
  href,
  onClick,
}: GlowButtonProps) {

  const classes =
    "inline-flex items-center justify-center rounded-xl border border-lime-400 px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-lime-400 transition-all duration-300 hover:-translate-y-1 hover:bg-lime-400 hover:text-black hover:shadow-[0_0_30px_rgba(184,255,44,0.35)]";

  if (href) {
    return (
      <a
        href={href}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}