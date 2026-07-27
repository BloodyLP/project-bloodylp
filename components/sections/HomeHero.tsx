import HeroContent from "../hero/HeroContent";
import HeroScene from "../hero/HeroScene";
import HeroUI from "../hero/HeroUI";

export default function HomeHero() {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
      "
    >
      {/* ================================= */}
      {/* Hero Scene */}
      {/* ================================= */}

      <HeroScene />

      {/* ================================= */}
      {/* Hero Content */}
      {/* ================================= */}

      <HeroContent />

      {/* ================================= */}
      {/* Hero UI */}
      {/* ================================= */}

      <HeroUI />
    </section>
  );
}