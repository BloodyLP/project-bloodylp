// =====================================================
// BDS TYPES
// Timeline
//
// Version: 5.0
//
// Responsive Foundation
//
// Bloody Design System
// =====================================================

export type TimelineIcon =
  | "youtube"
  | "twitch"
  | "commentary"
  | "esports"
  | "bloodylp";

export interface TimelineItem {
  year: string;
  icon: TimelineIcon;
  title: string;
  text: string;
}