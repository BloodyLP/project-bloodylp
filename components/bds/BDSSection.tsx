// =====================================================
// BDS COMPONENT
// BDSSection
//
// Version: 2.0
//
// Responsibility:
//
// ✔ Section Wrapper
// ✔ Width Variants
// ✔ Responsive Padding
// ✔ Common Section Behaviour
//
// ✖ Content
// ✖ Effects
//
// Bloody Design System
// =====================================================

import { ReactNode } from "react";
import clsx from "clsx";

interface BDSSectionProps {
  children: ReactNode;

  id?: string;

  className?: string;

  width?: "default" | "wide" | "full";
}

export default function BDSSection({
  children,
  id,
  className,
  width = "default",
}: BDSSectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative w-full mx-auto",

        width === "default" && "max-w-screen-2xl",

        width === "wide" && "max-w-[1700px]",

        width === "full" && "max-w-none",

        "px-6 md:px-10 xl:px-24",

        className
      )}
    >
      {children}
    </section>
  );
}