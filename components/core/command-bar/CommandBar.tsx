// =====================================================
// BUS CORE COMPONENT
//
// Component: CommandBar
//
// Bloody UI System (BUS)
//
// =====================================================

"use client";

import CommandBarDivider from "./CommandBarDivider";

type CommandBarProps = {
  left: React.ReactNode;
  center: React.ReactNode;
  right?: React.ReactNode;
};

export default function CommandBar({
  left,
  center,
  right,
}: CommandBarProps) {
  return (
    <footer
      className="
        fixed
        bottom-0
        left-0
        right-0

        z-[999]

        border-t
        border-lime-400/10

        bg-black/70

        backdrop-blur-xl

        supports-[backdrop-filter]:bg-black/45
      "
    >
      <div
        className="
          mx-auto

          flex

          h-12

          max-w-7xl

          items-center

          px-5
        "
      >
        {left}

        <CommandBarDivider />

        <div className="flex-1 px-4">
          {center}
        </div>

        {right && (
          <>
            <CommandBarDivider />

            <div className="pl-4">
              {right}
            </div>
          </>
        )}
      </div>
    </footer>
  );
}