import HeroAtmosphere from "../effects/HeroAtmosphere";
import HeroShadowFalloff from "../effects/HeroShadowFalloff";
import HeroAurora from "../effects/HeroAurora";
import HeroGlow from "../effects/HeroGlow";
import HeroWatermark from "../effects/HeroWatermark";
import HeroHalo from "../effects/HeroHalo";
import HeroLightWrap from "../effects/HeroLightWrap";
import HeroDirectionalLight from "../effects/HeroDirectionalLight";
import HeroParticles from "../effects/HeroParticles";
import HeroFog from "../effects/HeroFog";
import HeroAmbientLight from "../effects/HeroAmbientLight";
import HeroGroundLight from "../effects/HeroGroundLight";
import HeroLightRays from "../effects/HeroLightRays";
import HeroEmbers from "../effects/HeroEmbers";
import HeroDust from "../effects/HeroDust";
import HeroNoise from "../effects/HeroNoise";

export default function HeroScene() {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden

        pointer-events-none

        z-0
      "
    >
      <HeroAtmosphere />

      <HeroShadowFalloff />

      <HeroAurora />

      <HeroGlow />

      <HeroWatermark />

      <HeroHalo />

      <HeroLightWrap />

      <HeroDirectionalLight />

      <HeroParticles />

      <HeroFog />

      <HeroAmbientLight />

      <HeroGroundLight />

      <HeroLightRays />

      <HeroEmbers />

      <HeroDust />

      <HeroNoise />
    </div>
  );
}