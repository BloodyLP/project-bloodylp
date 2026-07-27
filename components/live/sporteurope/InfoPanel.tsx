"use client";

import Button from "@/components/ui/Button";

import BroadcastCard from "@/components/broadcast/BroadcastCard";
import BroadcastHeader from "@/components/live/sporteurope/BroadcastHeader";
import BroadcastDivider from "@/components/broadcast/BroadcastDivider";
import BroadcastFooter from "@/components/live/sporteurope/BroadcastFooter";

import InformationList from "./InformationList";
import BroadcastInformation from "./BroadcastInformation";

import BroadcastIcon from "./icons/BroadcastIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";

import { nextCommentary } from "@/components/live/data/commentary.data";

export default function InfoPanel() {
    return (

        <BroadcastCard
            className="
                bg-[#090b10]
                border-lime-400/10

                px-4
                py-5

                sm:px-6
                sm:py-6

                md:px-8
                md:py-7
            "
        >

            {/* =====================================================
                Background
            ===================================================== */}

            <div
                className="
                    absolute

                    -right-20
                    -top-20

                    h-56
                    w-56

                    md:-right-24
                    md:-top-24

                    md:h-72
                    md:w-72

                    rounded-full

                    bg-lime-400/10

                    blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-[radial-gradient(circle_at_top,rgba(163,230,53,.06),transparent_65%)]
                "
            />

            <div
                className="
                    relative
                    z-10

                    flex
                    flex-col
                "
            >

                {/* =====================================================
                    Header
                ===================================================== */}

                <BroadcastHeader
                    eyebrow="NÄCHSTER EINSATZ"
                    title={
                        <>
                            Live auf
                            <br />
                            {nextCommentary.platform}
                        </>
                    }
                    description="Verfolge meinen nächsten Einsatz als Kommentator oder Moderator der DEL2."
                    logo="/logos/DEL2_Logo.svg"
                    logoAlt="DEL2 Logo"
                />

                <div
                    className="
                        my-5

                        md:my-6
                    "
                >

                    <BroadcastDivider />

                </div>

                {/* =====================================================
                    Informationen
                ===================================================== */}

                <InformationList />

                {/* =====================================================
                    CTA
                ===================================================== */}

                <div
                    className="
                        mt-4

                        md:mt-5
                    "
                >

                    <Button
                        href={nextCommentary.streamUrl || "#"}
                        fullWidth
                        leftIcon={<BroadcastIcon size={35} />}
                        rightIcon={<ArrowRightIcon size={22} />}
                    >
                        LIVESTREAM ÖFFNEN
                    </Button>

                </div>

                {/* =====================================================
                    Broadcast Information
                ===================================================== */}

                <div
                    className="
                        mt-6

                        md:mt-7
                    "
                >

                    <BroadcastInformation />

                </div>

                {/* =====================================================
                    Footer
                ===================================================== */}

                <div className="mt-0">

                    <BroadcastFooter
                        text="SPORT EUROPE · DEL2"
                    />

                </div>

            </div>

        </BroadcastCard>

    );
}