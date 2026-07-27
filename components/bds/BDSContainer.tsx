// =====================================================
// BDS COMPONENT
// BDSContainer
//
// Version: 2.0
//
// Responsibility:
//
// ✔ Layout
// ✔ Responsive Layout
// ✔ Flex Alignment
// ✔ Flex Justification
//
// ✖ Content
// ✖ Effects
//
// Bloody Design System
// =====================================================

import { ReactNode } from "react";
import clsx from "clsx";

interface BDSContainerProps {
  children: ReactNode;

  className?: string;

  /**
   * Layout Behaviour
   *
   * responsive = Mobile Column / Desktop Row
   * row        = Always Row
   * column     = Always Column
   */
  layout?: "responsive" | "row" | "column";

  /**
   * Horizontal Alignment
   */
  justify?: "start" | "center" | "between" | "end" | "around" | "evenly";

  /**
   * Vertical Alignment
   */
  align?: "start" | "center" | "end" | "stretch";
}

export default function BDSContainer({
  children,
  className,
  layout = "responsive",
  justify = "between",
  align = "center",
}: BDSContainerProps) {
  return (
    <div
      className={clsx(
        "relative flex w-full",

        // =========================
        // Layout
        // =========================
        layout === "responsive" && "flex-col xl:flex-row",
        layout === "row" && "flex-row",
        layout === "column" && "flex-col",

        // =========================
        // Justify
        // =========================
        justify === "start" && "justify-start",
        justify === "center" && "justify-center",
        justify === "between" && "justify-between",
        justify === "end" && "justify-end",
        justify === "around" && "justify-around",
        justify === "evenly" && "justify-evenly",

        // =========================
        // Align
        // =========================
        align === "start" && "items-start",
        align === "center" && "items-center",
        align === "end" && "items-end",
        align === "stretch" && "items-stretch",

        className
      )}
    >
      {children}
    </div>
  );
}