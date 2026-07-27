// =====================================================
// BDS COMPONENT
// YouTubeCard
//
// Version: 9.0
//
// Kapitel 3
// Wir sehen uns. LIVE.
//
// Bloody Design System
// =====================================================

"use client";

import {
  Eye,
  ThumbsUp,
  MessageCircle,
  CalendarDays,
} from "lucide-react";

import { useYoutube } from "@/hooks/useYoutube";

import StatusBadge from "../ui/StatusBadge";
import InfoRow from "../ui/InfoRow";
import LiveCard from "./LiveCard";
import { liveData } from "./data/liveData";

export default function YoutubeCard() {

  const fallback =
    liveData.youtube;

  const { data } =
    useYoutube();

  const video =
    data ?? null;

  // ==========================================
  // Titel
  // ==========================================

  const title =
    video?.title ??
    fallback.title;

  // ==========================================
  // Untertitel
  // ==========================================

  const subtitle =
    video

      ? `${video.series} • Folge ${video.episode}`

      : fallback.subtitle;

  // ==========================================
  // Badge
  // ==========================================

  const badgeText =

    video

      ? video.status === "live"

        ? "LIVE"

        : video.status === "upcoming"

          ? "PREMIERE"

          : "YOUTUBE"

      : fallback.badge;

  // ==========================================
  // Veröffentlichungsdatum
  // ==========================================

  const published =

    video

      ? new Date(

          video.publishedAt

        ).toLocaleDateString("de-DE")

      : fallback.published;

  // ==========================================
  // Zahlen formatieren
  // ==========================================

  const views =

    video

      ? video.views.toLocaleString("de-DE")

      : fallback.views;

  const likes =

    video

      ? video.likes.toLocaleString("de-DE")

      : fallback.likes;

  const comments =

    video

      ? video.comments.toLocaleString("de-DE")

      : fallback.comments;

  return (

        <LiveCard
      image={fallback.image}
      imageOverride={video?.thumbnail}
      badge={
        <StatusBadge variant="youtube">
          {badgeText}
        </StatusBadge>
      }
      title={title}
      subtitle={subtitle}
      titleClassName="
        font-display
        text-[2rem]
        font-bold
        leading-[1.05]
        tracking-[-0.02em]
        text-white
      "
      button={fallback.button}
      href={video?.videoUrl ?? fallback.href}
      meta={
        <div className="space-y-4">

          <InfoRow
            icon={Eye}
            label="Aufrufe"
            value={views}
          />

          <InfoRow
            icon={ThumbsUp}
            label="Likes"
            value={likes}
          />

          <InfoRow
            icon={MessageCircle}
            label="Kommentare"
            value={comments}
          />

          <InfoRow
            icon={CalendarDays}
            label="Veröffentlicht"
            value={published}
          />

        </div>
      }
    />
  );

}