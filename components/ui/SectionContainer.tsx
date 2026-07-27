// =====================================================
// BDS COMPONENT
// SectionContainer
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <section
      className={`mx-auto mt-40 max-w-7xl px-8 ${className}`}
    >
      {children}
    </section>
  );
}