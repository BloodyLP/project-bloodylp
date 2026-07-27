// =====================================================
// BDS COMPONENT
// TwitchCard
//
// Version: 18.0
//
// Kapitel 3
// Wir sehen uns. LIVE.
//
// Bloody Design System
// =====================================================

"use client";

import {
  Gamepad2,
  Eye,
  Clock3,
} from "lucide-react";

import { useTwitch } from "@/hooks/useTwitch";
import { getLiveDuration } from "@/lib/time";

import StatusBadge from "../ui/StatusBadge";
import InfoRow from "../ui/InfoRow";
import LiveCard from "./LiveCard";
import { liveData } from "./data/liveData";

function getRelativeDate(date: string) {

  if (!date) return "-";

  const now = new Date();
  const then = new Date(date);

  const diff = Math.floor(

    (now.getTime() - then.getTime()) /

    (1000 * 60 * 60 * 24)

  );

  if (diff <= 0) return "Heute";

  if (diff === 1) return "Gestern";

  if (diff < 7) return `Vor ${diff} Tagen`;

  return then.toLocaleDateString("de-DE");

}

export default function TwitchCard() {

  const fallback =
    liveData.twitch;

  const { data } =
    useTwitch();

  const live =
    data?.live ?? false;

  // ==========================================
  // Titel
  // ==========================================

  const title =
    data?.title ||
    fallback.title;

  // ==========================================
  // Untertitel
  // ==========================================

  const subtitle =
    data?.streamNumber
      ? `Stream #${data.streamNumber}`
      : "";

  // ==========================================
  // Button
  // ==========================================

  const buttonText =
    live
      ? "LIVE ANSEHEN"
      : "LETZTEN STREAM ANSEHEN";

  // ==========================================
  // Status
  // ==========================================

  const statusText =
    live
      ? "LIVE"
      : "Offline";

  // ==========================================
  // Dauer
  // ==========================================

  const duration =
    live

      ? (
          data?.startedAt

            ? getLiveDuration(
                data.startedAt
              )

            : "-"

        )

      : (
          data?.duration ||
          "-"
        );

  // ==========================================
  // Gestreamt
  // ==========================================

  const streamed =
    getRelativeDate(
      data?.startedAt || ""
    );

  // ==========================================
  // Aufrufe
  // ==========================================

  const views =
    `${data?.viewers ?? 0}`;

  // ==========================================
  // Spiel
  // ==========================================

  const game =

    data?.game ||

    data?.gameTitle ||

    "-";

  return (

        <LiveCard
      image={fallback.image}
      imageOverride={data?.thumbnail || undefined}
      badge={
        <StatusBadge variant="live">
          {live ? "LIVE" : "OFFLINE"}
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
      button={buttonText}
      href={data?.url || fallback.href}
      meta={
        <div className="space-y-4">

          {/* Status */}

          <div className="flex items-center gap-3">

            <div
              className={`
                h-2.5
                w-2.5
                rounded-full
                ${
                  live
                    ? "animate-pulse bg-red-500"
                    : "bg-zinc-500"
                }
              `}
            />

            <span className="font-ui text-base font-semibold text-white">
              {statusText}
            </span>

          </div>

          {/* Informationen */}

          <div className="space-y-4">

            <InfoRow
              icon={Gamepad2}
              label="Spiel"
              value={game}
            />

            <InfoRow
              icon={Eye}
              label="Aufrufe"
              value={views}
            />

            <InfoRow
              icon={Clock3}
              label={
                live
                  ? "LIVE seit"
                  : "Dauer"
              }
              value={duration}
            />

            <InfoRow
              icon={Clock3}
              label="Gestreamt"
              value={streamed}
            />

          </div>

        </div>
      }
    />
  );

}