// =====================================================
// BDS COMPONENT
// InfoRow
//
// Version: 5.1
// Responsive Edition
// =====================================================

import { LucideIcon } from "lucide-react";

interface InfoRowProps {
    icon?: LucideIcon;
    label: string;
    value: string;
    variant?: "default" | "compact";
}

export default function InfoRow({
    icon: Icon,
    label,
    value,
    variant = "default",
}: InfoRowProps) {
    const spacing =
        variant === "compact"
            ? {
                  gap: "gap-2 md:gap-3",
                  divider: "mt-3",
              }
            : {
                  gap: "gap-3 md:gap-4",
                  divider: "mt-3 md:mt-4",
              };

    return (
        <div
            className="
                group

                transition-all
                duration-300
            "
        >
            {/* ================================= */}
            {/* Row */}
            {/* ================================= */}

            <div
                className="
                    flex

                    items-center

                    justify-between

                    gap-4
                "
            >
                {/* ================================= */}
                {/* Left */}
                {/* ================================= */}

                <div
                    className={`
                        flex

                        min-w-0

                        items-center

                        shrink

                        ${spacing.gap}
                    `}
                >
                    {Icon && (
                        <Icon
                            size={16}
                            className="
                                shrink-0

                                text-zinc-500

                                transition-colors
                                duration-300

                                group-hover:text-lime-400
                            "
                        />
                    )}

                    <span
                        className="
                            font-ui

                            text-[11px]
                            md:text-xs

                            font-semibold

                            uppercase

                            tracking-[0.18em]
                            md:tracking-[0.22em]

                            text-zinc-500

                            transition-colors
                            duration-300

                            group-hover:text-zinc-300
                        "
                    >
                        {label}
                    </span>
                </div>

                {/* ================================= */}
                {/* Right */}
                {/* ================================= */}

                <span
                    className="
                        shrink-0

                        pl-4

                        text-right

                        font-ui

                        text-[13px]
                        md:text-sm

                        font-semibold

                        leading-5

                        text-white

                        transition-colors
                        duration-300

                        group-hover:text-zinc-100
                    "
                >
                    {value}
                </span>
            </div>

            {/* ================================= */}
            {/* Divider */}
            {/* ================================= */}

            <div className={`h-px w-full bg-zinc-800 ${spacing.divider}`} />
        </div>
    );
}