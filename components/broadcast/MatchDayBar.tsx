"use client";

import { motion } from "framer-motion";

interface MatchDayBarProps {
    text: string;
}

export default function MatchDayBar({
    text,
}: MatchDayBarProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="
                relative

                mt-7
                w-full

                md:mt-10
            "
        >
            {/* ======================================
                Glass Background
            ====================================== */}

            <div
                className="
                    absolute
                    inset-0

                    rounded-xl

                    border
                    border-white/10

                    bg-gradient-to-b

                    from-white/[0.10]
                    via-white/[0.05]
                    to-black/[0.18]

                    backdrop-blur-md
                "
            />

            {/* ======================================
                Top Highlight
            ====================================== */}

            <div
                className="
                    absolute
                    inset-x-4
                    top-0

                    h-px

                    bg-gradient-to-r

                    from-transparent
                    via-white/40
                    to-transparent
                "
            />

            {/* ======================================
                Soft Reflection
            ====================================== */}

            <div
                className="
                    absolute

                    inset-x-8
                    top-1/2

                    h-8

                    -translate-y-1/2

                    rounded-full

                    bg-white/[0.03]

                    blur-xl
                "
            />

            {/* ======================================
                Content
            ====================================== */}

            <div
                className="
                    relative

                    flex
                    items-center

                    gap-3

                    px-4
                    py-3

                    md:gap-5
                    md:px-7
                    md:py-4
                "
            >

                {/* Left Divider */}

                <div
                    className="
                        h-px

                        flex-1

                        bg-gradient-to-r

                        from-transparent
                        via-lime-400/45
                        to-white/20
                    "
                />

                {/* Text */}

                <span
                    className="
                        text-center

                        font-ui

                        text-[11px]
                        md:text-[14px]

                        font-black

                        uppercase

                        tracking-[0.20em]
                        md:tracking-[0.45em]

                        text-white

                        drop-shadow-[0_1px_4px_rgba(0,0,0,.35)]
                    "
                >
                    {text}
                </span>

                {/* Right Divider */}

                <div
                    className="
                        h-px

                        flex-1

                        bg-gradient-to-l

                        from-transparent
                        via-lime-400/45
                        to-white/20
                    "
                />

            </div>

        </motion.div>
    );
}