// =====================================================
// BLOODYLP HOMEPAGE
//
// Time Utilities
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

export function getLiveDuration(startedAt: string): string {
  if (!startedAt) return "--:--";

  const started = new Date(startedAt).getTime();
  const now = Date.now();

  const diff = Math.floor((now - started) / 1000);

  const hours = Math.floor(diff / 3600);
  const minutes = Math.floor((diff % 3600) / 60);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
}