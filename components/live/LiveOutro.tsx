// =====================================================
// BDS COMPONENT
// LiveOutro
//
// Version: 1.0
//
// Abschluss der Landingpage
//
// Bloody Design System
// =====================================================

import Link from "next/link";

export default function LiveOutro() {
    return (
        <section
            className="
                relative
                overflow-hidden
                mt-32
                border-t
                border-white/5
            "
        >
            {/* Hintergrund */}
            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_top,rgba(163,230,53,0.08),transparent_65%)]
                "
            />

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-transparent
                    via-lime-500/[0.02]
                    to-transparent
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    max-w-5xl
                    px-8
                    py-24
                    text-center
                "
            >
                <span
                    className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.45em]
                        text-lime-400
                    "
                >
                    BLOODYLP
                </span>

                <h2
                    className="
                        mt-6
                        font-display
                        text-4xl
                        font-black
                        uppercase
                        tracking-[0.08em]
                        text-white
                        md:text-6xl
                    "
                >
                    Wir sehen uns{" "}
                    <span className="text-lime-400">
                        LIVE.
                    </span>
                </h2>

                <p
                    className="
                        mx-auto
                        mt-8
                        max-w-3xl
                        text-lg
                        leading-8
                        text-zinc-400
                    "
                >
                    Leidenschaft für Gaming.
                    Kompetenz im Kommentar.
                    Unterhaltung mit Persönlichkeit.
                </p>

                <div
                    className="
                        mt-14
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-5

                        sm:flex-row
                    "
                >
                    {/* Twitch */}

                    <Link
                        href="https://www.twitch.tv/BloodyLP"
                        target="_blank"
                        className="
                            group

                            inline-flex
                            items-center
                            justify-center
                            gap-3

                            rounded-full

                            border
                            border-lime-400/30

                            bg-lime-400/10

                            px-8
                            py-4

                            text-sm
                            font-bold
                            uppercase
                            tracking-[0.18em]

                            text-lime-400

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:border-lime-400
                            hover:bg-lime-400/15
                            hover:shadow-[0_0_35px_rgba(163,230,53,.22)]
                        "
                    >
                        <span
                            className="
                                h-2.5
                                w-2.5
                                rounded-full
                                bg-lime-400
                                shadow-[0_0_14px_rgba(163,230,53,.9)]
                            "
                        />

                        LIVE AUF TWITCH
                    </Link>

                    {/* YouTube */}

                    <Link
                        href="https://www.youtube.com/@BloodyLP"
                        target="_blank"
                        className="
                            group

                            inline-flex
                            items-center
                            justify-center
                            gap-3

                            rounded-full

                            border
                            border-white/10

                            bg-white/[0.03]

                            px-8
                            py-4

                            text-sm
                            font-bold
                            uppercase
                            tracking-[0.18em]

                            text-white

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:border-red-500/50
                            hover:bg-red-500/10
                            hover:shadow-[0_0_35px_rgba(239,68,68,.18)]
                        "
                    >
                        ▶

                        NEUESTES VIDEO
                    </Link>
                </div>
            </div>
        </section>
    );
}