"use client";

import { motion } from "framer-motion";

import ArenaBackground from "./ArenaBackground";

import BroadcastCard from "@/components/broadcast/BroadcastCard";
import BroadcastDivider from "@/components/broadcast/BroadcastDivider";
import BroadcastFooter from "@/components/live/sporteurope/BroadcastFooter";
import MatchDayBar from "@/components/broadcast/MatchDayBar";
import TeamLogo from "@/components/broadcast/TeamLogo";

import { nextCommentary } from "@/components/live/data/commentary.data";

export default function MatchPanel() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="h-full"
        >
            <BroadcastCard
                className="
                    h-full

                    bg-[#090b10]
                    border-lime-400/10

                    px-4
                    py-4

                    sm:px-6

                    md:px-8
                "
            >
                <ArenaBackground />

                <div
                    className="
                        relative
                        z-10

                        flex
                        h-full
                        flex-col
                    "
                >
                    {/* =====================================================
                        HERO CONTENT
                    ===================================================== */}

                    <div
                        className="
                            flex
                            flex-col
                            items-center

                            w-full
                        "
                    >
                        {/* =====================================================
                            HOME TEAM
                        ===================================================== */}

                        <h2
                            className="
                                text-center

                                text-[28px]
                                sm:text-[32px]
                                md:text-[38px]

                                font-black

                                uppercase

                                tracking-tight

                                text-white
                            "
                        >
                            {nextCommentary.homeTeam}
                        </h2>

                        <div className="mt-3">
                            <TeamLogo
                                src={nextCommentary.homeLogo}
                                alt={nextCommentary.homeTeam}
                                size={150}
                            />
                        </div>

                        {/* =====================================================
                            VS
                        ===================================================== */}

                        <div
                            className="
                                my-7

                                flex
                                w-full
                                items-center
                                justify-center

                                gap-3

                                md:my-10
                                md:gap-4
                            "
                        >
                            {/* Left Divider */}

                            <div
                                className="
                                    h-[2px]

                                    flex-1

                                    bg-gradient-to-r

                                    from-transparent
                                    via-lime-400
                                    to-lime-400/15

                                    shadow-[0_0_12px_rgba(163,230,53,.45)]
                                "
                            />

                            {/* VS */}

                            <div
                                className="
                                    relative

                                    flex

                                    h-12
                                    w-12

                                    md:h-14
                                    md:w-14

                                    shrink-0

                                    items-center
                                    justify-center

                                    rounded-full

                                    border
                                    border-lime-400/35

                                    bg-zinc-950/80

                                    backdrop-blur-md

                                    shadow-[0_0_8px_rgba(163,230,53,.20)]
                                "
                            >
                                <span
                                    className="
                                        text-lg

                                        md:text-xl

                                        font-bold

                                        text-white/90
                                    "
                                >
                                    VS
                                </span>
                            </div>

                            {/* Right Divider */}

                            <div
                                className="
                                    h-[2px]

                                    flex-1

                                    bg-gradient-to-r

                                    from-transparent
                                    via-lime-400
                                    to-lime-400/15

                                    shadow-[0_0_12px_rgba(163,230,53,.45)]
                                "
                            />
                        </div>

                        {/* =====================================================
                            AWAY TEAM
                        ===================================================== */}

                        <div
                            className="
                                flex
                                flex-col
                                items-center
                            "
                        >
                            <TeamLogo
                                src={nextCommentary.awayLogo}
                                alt={nextCommentary.awayTeam}
                                size={150}
                            />

                            <h2
                                className="
                                    mt-2

                                    md:mt-3

                                    text-center

                                    text-[28px]
                                    sm:text-[32px]
                                    md:text-[38px]

                                    font-black

                                    uppercase

                                    tracking-tight

                                    text-white
                                "
                            >
                                {nextCommentary.awayTeam}
                            </h2>
                        </div>
                    </div>

                    {/* =====================================================
                        BOTTOM AREA
                    ===================================================== */}

                    <div
                        className="
                            mt-auto

                            pt-7

                            md:pt-10
                        "
                    >
                        <BroadcastDivider />

                        <div className="mt-5">
                            <MatchDayBar
                                text={`${nextCommentary.league} • ${nextCommentary.matchday}`}
                            />
                        </div>

                        <div className="mt-5">
                            <BroadcastFooter
                                text="SPORT EUROPE · LIVE"
                            />
                        </div>
                    </div>
                </div>
            </BroadcastCard>
        </motion.div>
    );
}