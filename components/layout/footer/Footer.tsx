import Image from "next/image";

import FooterBottom from "./FooterBottom";
import FooterColumn from "./FooterColumn";
import FooterHeading from "./FooterHeading";
import FooterLink from "./FooterLink";
import FooterSocials from "./FooterSocials";

export default function Footer() {
    return (
        <footer
            className="
                relative
                overflow-hidden

                border-t
                border-white/15

                bg-[#07090d]
            "
        >
            {/* ========================================================= */}
            {/* Hintergrund */}
            {/* ========================================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0

                    bg-[radial-gradient(circle_at_top,rgba(163,230,53,.06),transparent_60%)]
                "
            />

            <div
                className="
                    relative
                    z-10

                    mx-auto
                    max-w-6xl

                    px-6
                    py-14

                    md:px-8
                    md:py-20
                "
            >
                <div
                    className="
                        grid
                        gap-12

                        lg:grid-cols-[1.25fr_.9fr_.85fr]
                    "
                >
                    {/* ========================================================= */}
                    {/* Brand */}
                    {/* ========================================================= */}

                    <div>
                        <Image
                            src="/logos/bloodylp-logo.png"
                            alt="BloodyLP"
                            width={170}
                            height={57}
                            priority={false}
                        />

                        <p
                            className="
                                mt-7
                                max-w-sm

                                text-[15px]
                                leading-8

                                text-zinc-400
                            "
                        >
                            <span className="font-semibold text-lime-400">
                                Leidenschaft
                            </span>{" "}
                            für Gaming.
                            <br />

                            <span className="font-semibold text-lime-400">
                                Kompetenz
                            </span>{" "}
                            im Kommentar.
                            <br />

                            <span className="font-semibold text-lime-400">
                                Unterhaltung
                            </span>{" "}
                            mit Persönlichkeit.
                        </p>

                        <p
                            className="
                                mt-6

                                text-sm
                                leading-7

                                text-zinc-500
                            "
                        >
                            Seit <span className="text-white">2012</span> Content Creator.
                            <br />
                            Seit <span className="text-white">2018</span> Live-Kommentator.
                        </p>

                        <div className="mt-8">
                            <FooterSocials />
                        </div>
                    </div>

                    {/* ========================================================= */}
                    {/* Navigation */}
                    {/* ========================================================= */}

                    <FooterColumn>
                        <FooterHeading>
                            Explore
                        </FooterHeading>

                        <FooterLink href="/">
                            Home
                        </FooterLink>

                        <FooterLink href="/contentcreator">
                            Content Creator
                        </FooterLink>

                        <FooterLink href="/kommentator">
                            Kommentator
                        </FooterLink>

                        <FooterLink href="/community">
                            Community
                        </FooterLink>

                        <FooterLink href="/live">
                            Live
                        </FooterLink>

                        <FooterLink href="/kontakt">
                            Kontakt
                        </FooterLink>
                    </FooterColumn>

                    {/* ========================================================= */}
                    {/* Status */}
                    {/* ========================================================= */}

                    <FooterColumn>
                        <FooterHeading>
                            Status
                        </FooterHeading>

                        <FooterLink href="/impressum">
                            Impressum
                        </FooterLink>

                        <FooterLink href="/datenschutz">
                            Datenschutz
                        </FooterLink>

                        <div
                            className="
                                mt-8

                                rounded-2xl

                                border
                                border-lime-400/15

                                bg-lime-400/5

                                p-6

                                backdrop-blur-xl
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <span
                                    className="
                                        h-3
                                        w-3
                                        rounded-full

                                        bg-lime-400

                                        shadow-[0_0_14px_rgba(163,230,53,.9)]
                                    "
                                />

                                <p
                                    className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.25em]

                                        text-lime-400
                                    "
                                >
                                    Website Status
                                </p>
                            </div>

                            <h3
                                className="
                                    mt-5

                                    text-3xl
                                    font-black

                                    text-white
                                "
                            >
                                Version 1.0
                            </h3>

                            <div
                                className="
                                    mt-6

                                    space-y-3

                                    text-sm
                                    leading-7

                                    text-zinc-400
                                "
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-lime-400">
                                        ✓
                                    </span>

                                    <span>
                                        Website ist online.
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-lime-400">
                                        ✓
                                    </span>

                                    <span>
                                        Wird aktiv weiterentwickelt.
                                    </span>
                                </div>
                            </div>

                            <div
                                className="
                                    mt-8

                                    border-t
                                    border-white/10

                                    pt-5
                                "
                            >
                                <p
                                    className="
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.20em]

                                        text-zinc-500
                                    "
                                >
                                    Letztes Update
                                </p>

                                <p
                                    className="
                                        mt-2

                                        font-semibold

                                        text-white
                                    "
                                >
                                    August 2026
                                </p>
                            </div>
                        </div>
                    </FooterColumn>
                </div>

                <FooterBottom />
            </div>
        </footer>
    );
}