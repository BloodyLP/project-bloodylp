"use client";

import { LucideIcon } from "lucide-react";

interface BroadcastInfoRowProps {
    icon: LucideIcon;
    label: string;
    value: string;
}

export default function BroadcastInfoRow({
    icon: Icon,
    label,
    value,
}: BroadcastInfoRowProps) {
    return (
        <div
            className="
                group

                relative

                flex
                items-center

                gap-5

                border-b
                border-white/6

                py-6

                transition-all
                duration-300

                hover:border-lime-400/20
            "
        >
            {/* Hover Glow */}

            <div
                className="
                    pointer-events-none

                    absolute
                    inset-0

                    rounded-xl

                    opacity-0

                    transition-opacity
                    duration-300

                    group-hover:opacity-100

                    bg-gradient-to-r
                    from-lime-400/[0.04]
                    via-transparent
                    to-transparent
                "
            />

            {/* Icon */}

            <div
                className="
                    relative
                    z-10

                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-lime-400/12

                    bg-black/30
                "
            >
                <Icon
                    size={18}
                    className="text-lime-400"
                />
            </div>

            {/* Label */}

            <div
                className="
                    relative
                    z-10

                    min-w-[170px]

                    font-ui

                    text-[11px]

                    font-bold

                    uppercase

                    tracking-[0.45em]

                    text-zinc-500
                "
            >
                {label}
            </div>

            {/* Spacer */}

            <div className="flex-1" />

            {/* Value */}

            <div
                className="
                    relative
                    z-10

                    text-right

                    text-lg

                    font-semibold

                    text-white
                "
            >
                {value}
            </div>

        </div>
    );
}