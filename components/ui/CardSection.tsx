// =====================================================
// BDS COMPONENT
// CardSection
//
// Version: 1.0
//
// Foundation Component
//
// Used in:
// ✓ Twitch
// ✓ YouTube
// ✓ Streamplan
// ✓ Kommentator
// ✓ Partner
// ✓ Sedcards
//
// Bloody Design System
// =====================================================

import { ReactNode } from "react";

interface CardSectionProps {
  children: ReactNode;
}

export default function CardSection({
  children,
}: CardSectionProps) {
  return (
    <div className="py-5">

      <div
        className="
          h-px
          bg-zinc-800
        "
      />

      <div className="py-5">
        {children}
      </div>

    </div>
  );
}