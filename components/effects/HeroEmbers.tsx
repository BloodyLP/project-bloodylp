// =====================================================
// BDS EFFECT
// HeroEmbers
//
// Version: 2.1
//
// Bloody Design System
// =====================================================

"use client";

import { CSSProperties } from "react";

type EmberStyle = CSSProperties & {
    "--drift": string;
};

const embers = Array.from({ length: 50 }, (_, index) => ({
    id: index,

    // Embers entstehen hauptsächlich
    // im unteren rechten Bereich hinter Alexander

    left: 74 + Math.random() * 16,
    top: 68 + Math.random() * 22,

    size: 2 + Math.random() * 5,

    opacity: 0.2 + Math.random() * 0.8,

    duration: 12 + Math.random() * 12,

    delay: Math.random() * 8,

    drift: -25 + Math.random() * 50,
}));

export default function HeroEmbers() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-[0]">
            {embers.map((ember) => {
                const style: EmberStyle = {
                    left: `${ember.left}%`,
                    top: `${ember.top}%`,
                    width: `${ember.size}px`,
                    height: `${ember.size}px`,
                    opacity: ember.opacity,
                    animationDuration: `${ember.duration}s`,
                    animationDelay: `${ember.delay}s`,
                    "--drift": `${ember.drift}px`,
                };

                return (
                    <div
                        key={ember.id}
                        className="absolute animate-ember"
                        style={style}
                    >
                        <div
                            className="
                                h-full
                                w-full
                                rounded-full
                                bg-lime-300
                                shadow-[0_0_12px_rgba(163,230,53,0.95)]
                            "
                        />
                    </div>
                );
            })}
        </div>
    );
}