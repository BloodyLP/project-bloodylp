"use client";

import Image from "next/image";

export default function ArenaBackground() {
    return (
        <>
            {/* =====================================================
                Stadium Background
            ===================================================== */}

            <Image
                src="/images/Arena_Background.png"
                alt="Arena Background"
                fill
                priority
                className="
                    object-cover
                    object-[center_55%]

                    scale-[1.05]

                    opacity-48
                    md:opacity-42

                    brightness-[0.62]
                    md:brightness-[0.56]

                    contrast-[1.08]
                    saturate-[0.72]

                    select-none
                    pointer-events-none
                "
            />

            {/* =====================================================
                Main Dark Overlay
            ===================================================== */}

            <div
                className="
                    absolute
                    inset-0

                    bg-black/24
                    md:bg-black/30

                    pointer-events-none
                "
            />

            {/* =====================================================
                Top Gradient
            ===================================================== */}

            <div
                className="
                    absolute
                    inset-x-0
                    top-0

                    h-[260px]

                    bg-gradient-to-b

                    from-black/62
                    md:from-black/70

                    via-black/18
                    md:via-black/24

                    to-transparent

                    pointer-events-none
                "
            />

            {/* =====================================================
                Bottom Gradient
            ===================================================== */}

            <div
                className="
                    absolute
                    inset-x-0
                    bottom-0

                    h-[220px]

                    bg-gradient-to-t

                    from-black/72
                    md:from-black/78

                    via-black/18
                    md:via-black/24

                    to-transparent

                    pointer-events-none
                "
            />

            {/* =====================================================
                Stadium Light Glow
            ===================================================== */}

            <div
                className="
                    absolute

                    left-1/2
                    top-[58%]

                    h-[360px]
                    w-[360px]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-white/9

                    blur-[180px]

                    pointer-events-none
                "
            />

            {/* =====================================================
                Ambient Stadium Light
            ===================================================== */}

            <div
                className="
                    absolute

                    left-1/2
                    top-1/2

                    h-[560px]
                    w-[560px]

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full

                    bg-white/[0.03]

                    blur-[240px]

                    pointer-events-none
                "
            />

            {/* =====================================================
                Edge Vignette
            ===================================================== */}

            <div
                className="
                    absolute
                    inset-0

                    bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,.28)_100%)]

                    pointer-events-none
                "
            />

            {/* =====================================================
                Ice Reflection
            ===================================================== */}

            <div
                className="
                    absolute

                    inset-x-0
                    bottom-0

                    h-[180px]

                    bg-gradient-to-t

                    from-white/[0.045]
                    via-transparent
                    to-transparent

                    pointer-events-none
                "
            />

            {/* =====================================================
                Inner Border
            ===================================================== */}

            <div
                className="
                    absolute
                    inset-0

                    rounded-[30px]

                    ring-1
                    ring-inset

                    ring-white/5

                    pointer-events-none
                "
            />
        </>
    );
}