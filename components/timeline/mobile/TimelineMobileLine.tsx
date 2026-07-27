// =====================================================
// BDS COMPONENT
// TimelineMobileLine
//
// Version: 1.0
//
// Responsive Experience
//
// Bloody Design System
// =====================================================

interface TimelineMobileLineProps {
  isLast?: boolean;
}

export default function TimelineMobileLine({
  isLast = false,
}: TimelineMobileLineProps) {
  if (isLast) return null;

  return (
    <div
      className="
        mt-2

        h-16
        w-px

        bg-gradient-to-b

        from-lime-400
        via-lime-400/35
        to-transparent
      "
    />
  );
}