"use client";

import Image from "next/image";

interface BroadcastHeaderProps {
    eyebrow: string;
    title: React.ReactNode;
    description?: string;
    logo?: string;
    logoAlt?: string;
}

export default function BroadcastHeader({
    eyebrow,
    title,
    description,
    logo,
    logoAlt,
}: BroadcastHeaderProps) {
    return (
        <div
            className="
                flex
                items-start
                justify-between

                gap-5

                md:gap-8
            "
        >
            {/* ======================================
                Text
            ====================================== */}

            <div className="min-w-0 flex-1">

                <span
                    className="
                        block

                        font-ui

                        text-[11px]
                        sm:text-[12px]
                        md:text-[14px]

                        font-black

                        uppercase

                        tracking-[0.30em]
                        md:tracking-[0.55em]

                        text-lime-400
                    "
                >
                    {eyebrow}
                </span>

                <h2
                    className="
                        mt-3
                        md:mt-4

                        font-ui

                        text-[30px]
                        sm:text-[34px]
                        md:text-[40px]
                        xl:text-[42px]

                        font-black

                        leading-none

                        tracking-[-0.03em]

                        text-white
                    "
                >
                    {title}
                </h2>

                {description && (
                    <p
                        className="
                            mt-3
                            md:mt-4

                            max-w-full
                            md:max-w-[420px]

                            font-ui

                            text-[14px]
                            md:text-[16px]

                            leading-6
                            md:leading-7

                            text-zinc-400
                        "
                    >
                        {description}
                    </p>
                )}

            </div>

            {/* ======================================
                Logo
            ====================================== */}

            {logo && (
                <div
                    className="
                        shrink-0

                        w-16
                        sm:w-20
                        md:w-28
                        lg:w-[140px]
                    "
                >
                    <Image
                        src={logo}
                        alt={logoAlt ?? ""}
                        width={140}
                        height={110}
                        className="
                            h-auto
                            w-full

                            object-contain

                            select-none
                        "
                    />
                </div>
            )}

        </div>
    );
}