// =====================================================
// BDS COMPONENT
// Icon
//
// Version: 1.0
//
// Foundation Icon
//
// Bloody Design System
// =====================================================

"use client";

import { iconMap, IconName } from "./iconMap";

interface IconProps {
  name: IconName;

  size?: number;

  className?: string;
}

export default function Icon({
  name,

  size = 20,

  className = "",
}: IconProps) {

  const SelectedIcon = iconMap[name];

  return (

    <SelectedIcon
      size={size}
      className={className}
    />

  );

}