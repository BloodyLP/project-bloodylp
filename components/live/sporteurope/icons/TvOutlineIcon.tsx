"use client";

interface TvOutlineIconProps {
    size?: number;
    className?: string;
}

export default function TvOutlineIcon({
    size = 64,
    className = "",
}: TvOutlineIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* TV */}

            <rect
                x="10"
                y="16"
                width="44"
                height="30"
                rx="5"
                stroke="currentColor"
                strokeWidth="2.4"
            />

            {/* Antennen */}

            <line
                x1="25"
                y1="10"
                x2="32"
                y2="16"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
            />

            <line
                x1="39"
                y1="10"
                x2="32"
                y2="16"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
            />

            {/* Play */}

            <polygon
                points="28,24 39,31 28,38"
                stroke="currentColor"
                strokeWidth="2.4"
                fill="none"
                strokeLinejoin="round"
            />

            {/* Fuß */}

            <line
                x1="32"
                y1="46"
                x2="32"
                y2="52"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
            />

            <line
                x1="22"
                y1="52"
                x2="42"
                y2="52"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
            />
        </svg>
    );
}