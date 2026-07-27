"use client";

import {
    CalendarDays,
    Clock3,
    Trophy,
    Mic2,
    Tv2,
} from "lucide-react";

import InfoRow from "@/components/ui/InfoRow";

import { nextCommentary } from "@/components/live/data/commentary.data";

export default function InformationList() {
    return (
        <div className="space-y-4">

            <InfoRow
                icon={CalendarDays}
                label="Datum"
                value={nextCommentary.date}
            />

            <InfoRow
                icon={Clock3}
                label="Beginn"
                value={nextCommentary.time}
            />

            <InfoRow
                icon={Trophy}
                label={nextCommentary.league}
                value={nextCommentary.matchday}
            />

            <InfoRow
                icon={Mic2}
                label="Funktion"
                value={nextCommentary.role}
            />

            <InfoRow
                icon={Tv2}
                label="Plattform"
                value={nextCommentary.platform}
            />

        </div>
    );
}