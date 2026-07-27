// =====================================================
// BDS COMPONENT
// HeroSocials
//
// Version: 3.2
//
// Premium Hero Socials
//
// Bloody Design System
// =====================================================

"use client";

import Image from "next/image";
import Link from "next/link";

import { socialItems } from "@/components/live/data/social.data";

export default function HeroSocials() {
    return (
        <div
            className="
                relative
                z-50

                hidden
                xl:flex

                mt-4
                md:mt-8

                flex-wrap
                items-center
                justify-start

                gap-4
            "
        >
            {socialItems.map((item, index) => (
                <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={`
                        group
                        relative

                        flex
                        h-14
                        w-14

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-white/15

                        bg-white/[0.05]

                        backdrop-blur-xl

                        transition-[transform,background-color,border-color,box-shadow]
                        duration-500
                        ease-out

                        hover:-translate-y-1
                        hover:scale-105

                        ${item.glow}
                    `}
                    style={{
                        animationDelay: `${index * 75}ms`,
                    }}
                >
                    <Image
                        src={item.icon}
                        alt={item.label}
                        width={28}
                        height={28}
                        className="
                            opacity-100

                            brightness-[2.2]

                            transition-all
                            duration-500
                            ease-out

                            group-hover:scale-110
                            group-hover:-rotate-3
                        "
                    />
                </Link>
            ))}
        </div>
    );
}