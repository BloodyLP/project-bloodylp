// =====================================================
// BDS COMPONENT
// Button
//
// Version: 1.3
//
// Foundation Button
//
// Bloody Design System
// =====================================================

"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;

    href?: string;

    onClick?: () => void;

    icon?: ReactNode;

    leftIcon?: ReactNode;

    rightIcon?: ReactNode;

    variant?: "primary" | "secondary" | "ghost" | "premium";

    size?: "sm" | "md" | "lg";

    fullWidth?: boolean;

    className?: string;
}

export default function Button({
    children,

    href,

    onClick,

    icon,

    leftIcon,

    rightIcon,

    variant = "primary",

    size = "md",

    fullWidth = false,

    className = "",
}: ButtonProps) {

    const variants = {
        primary: `
            bg-lime-400
            text-black

            hover:bg-lime-300
            hover:shadow-[0_0_35px_rgba(163,230,53,.35)]
        `,

        secondary: `
            border
            border-lime-400

            text-lime-400

            hover:bg-lime-400
            hover:text-black
        `,

        ghost: `
            border
            border-zinc-700

            text-white

            hover:border-lime-400
            hover:text-lime-400
        `,

        premium: `
            border
            border-lime-400/40

            bg-gradient-to-r
            from-lime-400
            to-lime-300

            text-black

            hover:scale-[1.02]

            hover:shadow-[0_0_45px_rgba(163,230,53,.35)]
        `,
    };

    const sizes = {
        sm: `
            h-10
            px-5

            text-[11px]

            md:h-11
            md:px-6
            md:text-xs
        `,

        md: `
            h-12
            px-6

            text-[13px]

            md:h-13
            md:px-8
            md:text-sm
        `,

        lg: `
            h-14
            px-8

            text-[15px]

            md:h-15
            md:px-10
            md:text-base
        `,
    };

    const classes = `
        inline-flex

        items-center
        justify-center

        gap-3
        md:gap-4

        rounded-2xl

        font-ui

        font-bold

        uppercase

        tracking-[0.16em]
        md:tracking-[0.18em]

        whitespace-nowrap

        transition-all
        duration-300

        ${sizes[size]}

        ${variants[variant]}

        ${fullWidth ? "w-full" : ""}

        ${className}
    `;

    const hasSpecialIcons = leftIcon || rightIcon;

    const content = hasSpecialIcons ? (
        <div
            className="
                grid

                w-full

                grid-cols-[32px_1fr_32px]
                md:grid-cols-[40px_1fr_40px]

                items-center
            "
        >
            <div className="flex justify-start">
                {leftIcon}
            </div>

            <span
                className="
                    text-center

                    whitespace-nowrap
                "
            >
                {children}
            </span>

            <div className="flex justify-end">
                {rightIcon}
            </div>
        </div>
    ) : (
        <>
            {icon && (
                <span
                    className="
                        flex

                        shrink-0

                        items-center
                        justify-center
                    "
                >
                    {icon}
                </span>
            )}

            <span className="whitespace-nowrap">
                {children}
            </span>
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                className={classes}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            type="button"
            onClick={onClick}
            className={classes}
        >
            {content}
        </button>
    );
}