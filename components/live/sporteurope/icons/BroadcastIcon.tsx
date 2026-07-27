"use client";

interface BroadcastIconProps {
    size?: number;
    className?: string;
}

export default function BroadcastIcon({
    size = 20,
    className = "",
}: BroadcastIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Mittelpunkt */}
            <circle
                cx="12"
                cy="12"
                r="1.5"
                fill="currentColor"
            />

            {/* Linke Wellen */}
            <path
                d="M9.8 10.2C9.2 10.8 8.9 11.4 8.9 12C8.9 12.6 9.2 13.2 9.8 13.8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />

            <path
                d="M7.2 7.8C5.9 9.1 5.2 10.5 5.2 12C5.2 13.5 5.9 14.9 7.2 16.2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />

            {/* Rechte Wellen */}
            <path
                d="M14.2 10.2C14.8 10.8 15.1 11.4 15.1 12C15.1 12.6 14.8 13.2 14.2 13.8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />

            <path
                d="M16.8 7.8C18.1 9.1 18.8 10.5 18.8 12C18.8 13.5 18.1 14.9 16.8 16.2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    );
}