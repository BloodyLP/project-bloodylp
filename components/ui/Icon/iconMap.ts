// =====================================================
// BDS COMPONENT
// Icon Map
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

import {
  FaTwitch,
  FaYoutube,
  FaDiscord,
  FaPlay,
  FaGamepad,
  FaMicrophone,
} from "react-icons/fa6";

export const iconMap = {
  twitch: FaTwitch,
  youtube: FaYoutube,
  discord: FaDiscord,
  play: FaPlay,
  gaming: FaGamepad,
  commentary: FaMicrophone,
};

export type IconName = keyof typeof iconMap;