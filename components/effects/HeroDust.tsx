// =====================================================
// BDS EFFECT
// HeroDust
//
// Version: 2.1
//
// Atmospheric floating dust
//
// Bloody Design System
// =====================================================

"use client";

import { useState } from "react";

type DustParticle = {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
};

function createParticles(): DustParticle[] {
  return Array.from({ length: 18 }, () => ({
    left: Math.random() * 100,
    top: 62 + Math.random() * 30,
    size: 1 + Math.random() * 3,
    duration: 10 + Math.random() * 8,
    delay: Math.random() * 8,
  }));
}

export default function HeroDust() {
  const [particles] = useState<DustParticle[]>(() => createParticles());

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-[8]
        overflow-hidden
      "
      aria-hidden="true"
    >
      {particles.map((particle, index) => (
        <span
          key={index}
          className="hero-dust animate-dust"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}