// =====================================================
// BDS COMPONENT
// SportEuropeCard
//
// Version: 3.1
//
// DEL2 Broadcast Showcase
//
// Bloody Design System
// =====================================================

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
    CalendarDays,
    Clock3,
    Trophy,
    Mic2,
    Tv2,
} from "lucide-react";

import Button from "@/components/ui/Button";
import CommentaryBadge from "@/components/ui/CommentaryBadge";
import InfoRow from "@/components/ui/InfoRow";

import SportEuropeMatchCard from "./SportEuropeMatchCard";

import { nextCommentary } from "@/components/live/data/commentary.data";

export default function SportEuropeCard() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="
                relative
                overflow-hidden
                rounded-[34px]
                border border-white/10
                bg-gradient-to-b
                from-[#171717]
                via-[#111111]
                to-black
                p-8
                shadow-[0_25px_90px_rgba(0,0,0,.60)]
                backdrop-blur-xl
                xl:p-10
            "
        >
            {/* =====================================================
                Broadcast Background
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_top_right,rgba(163,230,53,.10),transparent_65%)]
                "
            />

            <div
                className="
                    absolute
                    -top-44
                    right-[-180px]
                    h-[480px]
                    w-[480px]
                    rounded-full
                    bg-lime-400/[0.08]
                    blur-[170px]
                "
            />

            <div
                className="
                    absolute
                    bottom-[-220px]
                    left-[-200px]
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-white/[0.03]
                    blur-[170px]
                "
            />

            <div
                className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-72
                    bg-gradient-to-t
                    from-black
                    via-black/60
                    to-transparent
                "
            />

            <div className="relative z-10">

                {/* =====================================================
                    Header
                ===================================================== */}

                <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-10
                    "
                >
                    <div>

                        <CommentaryBadge />

                        <span
                            className="
                                mt-8
                                block
                                font-ui
                                text-[11px]
                                font-black
                                uppercase
                                tracking-[0.70em]
                                text-lime-400
                            "
                        >
                            LIVE AUF
                        </span>

                        <Image
                            src="/logos/sporteurope.tv-logo.png"
                            alt="SportEurope.TV"
                            width={270}
                            height={65}
                            priority
                            className="mt-5"
                        />

                        <p
                            className="
                                mt-6
                                max-w-lg
                                leading-relaxed
                                text-zinc-400
                            "
                        >
                            Live-Kommentator der DEL2.
                            Hier findest du alle kommenden
                            Übertragungen inklusive Datum,
                            Uhrzeit und Plattform.
                        </p>

                    </div>

                    <Image
                        src="/logos/del2-logo.png"
                        alt="DEL2"
                        width={105}
                        height={105}
                        className="opacity-90"
                    />

                </div>

                                {/* =====================================================
                    Broadcast Divider
                ===================================================== */}

                <div
                    className="
                        my-12
                        flex
                        items-center
                        gap-6
                    "
                >
                    <div
                        className="
                            h-px
                            flex-1
                            bg-gradient-to-r
                            from-transparent
                            via-lime-400/30
                            to-white/10
                        "
                    />

                    <span
                        className="
                            font-ui
                            text-[11px]
                            font-black
                            uppercase
                            tracking-[0.55em]
                            text-zinc-500
                        "
                    >
                        NEXT BROADCAST
                    </span>

                    <div
                        className="
                            h-px
                            flex-1
                            bg-gradient-to-l
                            from-transparent
                            via-lime-400/30
                            to-white/10
                        "
                    />
                </div>

                {/* =====================================================
                    Main Layout
                ===================================================== */}

                <div
                    className="
                        grid
                        items-stretch
                        gap-10
                        lg:grid-cols-[1.35fr_.85fr]
                    "
                >
                    {/* =====================================================
                        Left Column
                    ===================================================== */}

                    <div className="flex h-full">

                        <SportEuropeMatchCard
                            league={nextCommentary.league}
                            matchday={nextCommentary.matchday}
                            homeTeam={nextCommentary.homeTeam}
                            awayTeam={nextCommentary.awayTeam}
                            homeLogo={nextCommentary.homeLogo}
                            awayLogo={nextCommentary.awayLogo}
                        />

                    </div>

                    {/* =====================================================
                        Right Column
                    ===================================================== */}

                    <motion.aside
                        initial={{
                            opacity: 0,
                            x: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.45,
                            delay: 0.15,
                        }}
                        className="
                            relative
                            flex
                            h-full
                            flex-col
                            overflow-hidden
                            rounded-[30px]
                            border
                            border-white/10
                            bg-gradient-to-b
                            from-white/[0.03]
                            via-white/[0.015]
                            to-transparent
                            p-8
                            backdrop-blur-xl
                        "
                    >
                        {/* =====================================================
                            Background Accent
                        ===================================================== */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                -top-28
                                right-[-80px]
                                h-56
                                w-56
                                rounded-full
                                bg-lime-400/10
                                blur-[120px]
                            "
                        />

                        <div className="relative z-10 flex h-full flex-col">

                            {/* =====================================================
                                Header
                            ===================================================== */}

                            <div
                                className="
                                    flex
                                    items-start
                                    justify-between
                                "
                            >
                                <div>

                                    <span
                                        className="
                                            font-ui
                                            text-[10px]
                                            font-black
                                            uppercase
                                            tracking-[0.60em]
                                            text-lime-400
                                        "
                                    >
                                        BROADCAST
                                    </span>

                                    <h3
                                        className="
                                            mt-3
                                            text-3xl
                                            font-black
                                            tracking-tight
                                            text-white
                                        "
                                    >
                                        Einsatzinfos
                                    </h3>

                                </div>

                                <Image
                                    src="/logos/del2-logo.png"
                                    alt="DEL2"
                                    width={72}
                                    height={72}
                                    className="opacity-90"
                                />

                            </div>

                            <div
                                className="
                                    mt-8
                                    h-px
                                    w-full
                                    bg-gradient-to-r
                                    from-transparent
                                    via-white/10
                                    to-transparent
                                "
                            />

                                                        {/* =====================================================
                                Match Information
                            ===================================================== */}

                            <div
                                className="
                                    mt-8
                                    space-y-5
                                "
                            >
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
                                    label="Wettbewerb"
                                    value={`${nextCommentary.league} • ${nextCommentary.matchday}`}
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

                            {/* =====================================================
                                Broadcast Information
                            ===================================================== */}

                            <div
                                className="
                                    mt-8
                                    rounded-2xl
                                    border
                                    border-lime-400/15
                                    bg-gradient-to-br
                                    from-lime-400/8
                                    via-white/[0.02]
                                    to-transparent
                                    p-6
                                "
                            >
                                <span
                                    className="
                                        block
                                        font-ui
                                        text-[10px]
                                        font-black
                                        uppercase
                                        tracking-[0.55em]
                                        text-lime-400
                                    "
                                >
                                    LIVE BROADCAST
                                </span>

                                <p
                                    className="
                                        mt-4
                                        text-sm
                                        leading-7
                                        text-zinc-300
                                    "
                                >
                                    Alle Termine werden regelmäßig
                                    aktualisiert. Kurzfristige Änderungen
                                    können sich durch den offiziellen
                                    DEL2-Spielplan ergeben.
                                </p>

                            </div>

                            <div className="mt-auto" />

                            {/* =====================================================
                                CTA
                            ===================================================== */}

                            <div className="pt-8">

                                <Button
                                    href={nextCommentary.streamUrl || "#"}
                                    fullWidth
                                >
                                    {nextCommentary.streamUrl
                                        ? "LIVESTREAM ÖFFNEN"
                                        : "TERMIN FOLGT"}
                                </Button>

                            </div>

                            <div
                                className="
                                    mt-8
                                    flex
                                    items-center
                                    gap-4
                                "
                            >
                                <div
                                    className="
                                        h-px
                                        flex-1
                                        bg-gradient-to-r
                                        from-transparent
                                        via-lime-400/20
                                        to-white/5
                                    "
                                />

                                <span
                                    className="
                                        font-ui
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.45em]
                                        text-zinc-500
                                    "
                                >
                                    DEL2
                                </span>

                                <div
                                    className="
                                        h-px
                                        flex-1
                                        bg-gradient-to-l
                                        from-transparent
                                        via-lime-400/20
                                        to-white/5
                                    "
                                />

                            </div>

                        </div>

                    </motion.aside>

                </div>

                                {/* =====================================================
                    Bottom Broadcast Divider
                ===================================================== */}

                <div
                    className="
                        mt-16
                        flex
                        items-center
                        gap-6
                    "
                >
                    <div
                        className="
                            h-px
                            flex-1
                            bg-gradient-to-r
                            from-transparent
                            via-white/10
                            to-white/5
                        "
                    />

                    <span
                        className="
                            font-ui
                            text-[10px]
                            font-black
                            uppercase
                            tracking-[0.55em]
                            text-zinc-500
                        "
                    >
                        DEL2 • SPORTEUROPE.TV
                    </span>

                    <div
                        className="
                            h-px
                            flex-1
                            bg-gradient-to-l
                            from-transparent
                            via-white/10
                            to-white/5
                        "
                    />

                </div>

            </div>

            {/* =====================================================
                Ambient Lights
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-36
                    left-1/2
                    h-[420px]
                    w-[420px]
                    -translate-x-1/2
                    rounded-full
                    bg-lime-400/[0.08]
                    blur-[180px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    top-0
                    right-0
                    h-60
                    w-60
                    rounded-full
                    bg-lime-400/[0.05]
                    blur-[140px]
                "
            />

            {/* =====================================================
                Glass Ring Overlay
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[34px]
                    ring-1
                    ring-inset
                    ring-white/5
                "
            />

        </motion.section>
    );
}