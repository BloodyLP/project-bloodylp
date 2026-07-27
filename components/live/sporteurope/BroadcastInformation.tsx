"use client";

import TvOutlineIcon from "./icons/TvOutlineIcon";

export default function BroadcastInformation() {
    return (
        <div
            className="
                flex
                items-center
                justify-between

                gap-5
                md:gap-8

                rounded-[20px]
                md:rounded-[24px]

                border
                border-lime-400/10

                bg-gradient-to-br
                from-white/[0.03]
                to-black/20

                px-5
                py-5

                sm:px-6
                sm:py-6

                md:px-7
                md:py-6
            "
        >
            {/* ================================= */}
            {/* Text */}
            {/* ================================= */}

            <div className="min-w-0 flex-1">

                <span
                    className="
                        block

                        font-ui

                        text-[12px]
                        sm:text-[13px]
                        md:text-[15px]

                        font-black

                        uppercase

                        tracking-[0.28em]
                        md:tracking-[0.45em]

                        text-lime-400
                    "
                >
                    BROADCAST
                </span>

                <p
                    className="
                        mt-3

                        max-w-full
                        md:max-w-[420px]

                        text-[13px]
                        md:text-[14px]

                        leading-6

                        text-zinc-300
                    "
                >
                    Die Terminübersicht wird regelmäßig aktualisiert.
                    Kurzfristige Änderungen durch Spielverlegungen oder
                    TV-Ansetzungen sind jederzeit möglich.
                </p>

            </div>

            {/* ================================= */}
            {/* Icon */}
            {/* ================================= */}

            <div
                className="
                    relative

                    flex

                    h-16
                    w-16

                    sm:h-20
                    sm:w-20

                    md:h-24
                    md:w-24

                    shrink-0

                    items-center
                    justify-center
                "
            >

                <div
                    className="
                        absolute

                        h-12
                        w-12

                        sm:h-16
                        sm:w-16

                        md:h-20
                        md:w-20

                        rounded-full

                        bg-lime-400/10

                        blur-2xl
                        md:blur-3xl
                    "
                />

                <TvOutlineIcon
                    size={80}
                    className="
                        relative

                        h-12
                        w-12

                        sm:h-16
                        sm:w-16

                        md:h-20
                        md:w-20

                        text-lime-400
                    "
                />

            </div>
        </div>
    );
}