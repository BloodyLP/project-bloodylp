// =====================================================
// BDS COMPONENT
// LiveHeader
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

import SectionHeading from "../ui/SectionHeading";

export default function LiveHeader() {
  return (
    <SectionHeading
      eyebrow="IMMER AKTUELL"
      title={
        <>
          WIR SEHEN UNS.
          <br />
          LIVE.
        </>
      }
      description="Ob auf Twitch, YouTube, beim nächsten Stream oder LIVE am Mikro im Stadion – hier findest du immer die aktuellsten Inhalte und verpasst keinen Moment."
      maxWidth="4xl"
    />
  );
}