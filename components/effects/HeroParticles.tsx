// =====================================================
// BDS EFFECT
// HeroParticles
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

const particles = [
  // links oben
  { left: "48%", top: "18%", size: 2, delay: "0s", duration: "18s" },
  { left: "52%", top: "32%", size: 3, delay: "-3s", duration: "20s" },
  { left: "46%", top: "48%", size: 2, delay: "-6s", duration: "22s" },
  { left: "50%", top: "66%", size: 3, delay: "-10s", duration: "24s" },

  // links unten
  { left: "54%", top: "82%", size: 4, delay: "-7s", duration: "23s" },

  // rechts außen
  { left: "90%", top: "20%", size: 3, delay: "-12s", duration: "26s" },
  { left: "92%", top: "36%", size: 2, delay: "-14s", duration: "24s" },
  { left: "89%", top: "56%", size: 4, delay: "-8s", duration: "27s" },
  { left: "91%", top: "76%", size: 3, delay: "-5s", duration: "25s" },

  // Highlight
  { left: "84%", top: "90%", size: 5, delay: "-16s", duration: "30s" },
];

export default function HeroParticles() {
  return (
    <>
      {particles.map((particle, index) => (
        <span
          key={index}
          className="hero-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </>
  );
}