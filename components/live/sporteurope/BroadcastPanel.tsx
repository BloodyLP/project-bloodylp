"use client";

import MatchPanel from "./MatchPanel";
import InfoPanel from "./InfoPanel";

export default function BroadcastPanel() {
    return (
        <section
            className="
                relative
                overflow-hidden

                rounded-[24px]
                md:rounded-[36px]

                border
                border-lime-400/15

                bg-[#111111]

                px-3
                py-3

                sm:px-5
                sm:py-5

                md:px-12
                md:py-8

                shadow-[0_25px_80px_rgba(0,0,0,.45)]
            "
        >

            {/* =====================================================
                Background
            ===================================================== */}

            <div
                className="
                    absolute
                    inset-0

                    bg-[radial-gradient(circle_at_top,rgba(163,230,53,.07),transparent_65%)]
                "
            />

            {/* =====================================================
                Content
            ===================================================== */}

            <div
                className="
                    relative

                    grid

                    items-stretch

                    gap-4

                    sm:gap-6

                    md:gap-10

                    lg:grid-cols-2
                "
            >

                {/* =====================================================
                    Match Panel
                ===================================================== */}

                <MatchPanel />

                {/* =====================================================
                    Info Panel
                ===================================================== */}

                <InfoPanel />

            </div>

        </section>
    );
}