"use client";

import Image from "next/image";

interface TeamLogoProps {
    src: string;
    alt: string;
    size?: number;
}

export default function TeamLogo({
    src,
    alt,
    size = 170,
}: TeamLogoProps) {

    const platformSize = size + 25;
    const ringSize = platformSize - 23;
    const glowSize = platformSize;
    const highlightWidth = platformSize * 0.58;
    const highlightHeight = platformSize * 0.24;
    const bottomLightWidth = platformSize * 0.5;

    return (

        <div
            className="
                relative

                flex
                items-center
                justify-center

                scale-[0.78]
                sm:scale-[0.86]
                md:scale-100

                transition-transform
                duration-300
            "
            style={{
                width: platformSize,
                height: platformSize,
            }}
        >

            {/* ======================================
                Outer Glow
            ====================================== */}

            <div
                className="
                    absolute

                    rounded-full

                    bg-lime-400/10

                    blur-3xl
                "
                style={{
                    width: glowSize,
                    height: glowSize,
                }}
            />

            {/* ======================================
                Platform
            ====================================== */}

            <div
                className="
                    absolute

                    rounded-full

                    border
                    border-white/10

                    bg-zinc-900/15

                    backdrop-blur-md

                    shadow-[0_20px_40px_rgba(0,0,0,.35)]
                "
                style={{
                    width: platformSize,
                    height: platformSize,
                }}
            />

            {/* ======================================
                Inner Ring
            ====================================== */}

            <div
                className="
                    absolute

                    rounded-full

                    border

                    border-white/15

                    bg-white/[0.055]

                    backdrop-blur-sm
                "
                style={{
                    width: ringSize,
                    height: ringSize,
                }}
            />

            {/* ======================================
                Top Highlight
            ====================================== */}

            <div
                className="
                    absolute

                    rounded-full

                    bg-white/5

                    blur-xl
                "
                style={{
                    top: platformSize * 0.12,
                    width: highlightWidth,
                    height: highlightHeight,
                }}
            />

            {/* ======================================
                Logo
            ====================================== */}

            <div
                className="
                    relative
                    z-10

                    flex
                    items-center
                    justify-center
                "
            >

                <Image
                    src={src}
                    alt={alt}
                    width={size}
                    height={size}
                    className="
                        object-contain

                        drop-shadow-[0_8px_12px_rgba(0,0,0,.45)]
                    "
                />

            </div>

            {/* ======================================
                Bottom Light
            ====================================== */}

            <div
                className="
                    absolute

                    bg-gradient-to-r
                    from-transparent
                    via-lime-400/60
                    to-transparent
                "
                style={{
                    bottom: platformSize * 0.06,
                    width: bottomLightWidth,
                    height: 2,
                }}
            />

        </div>

    );
}