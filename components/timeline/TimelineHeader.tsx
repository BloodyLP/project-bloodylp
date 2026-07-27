// =====================================================
// BDS COMPONENT
// TimelineHeader
//
// Version: 2.1
//
// Wrapper um SectionHeading
// =====================================================

import SectionHeading from "../ui/SectionHeading";

export default function TimelineHeader() {
  return (
    <SectionHeading
      eyebrow="MEIN WEG"
      title={
        <>
          EIN WEG.
          <br />
          EINE LEIDENSCHAFT.
        </>
      }
      description="Jeder Schritt meiner Reise hat mich geprägt – vom ersten YouTube-Video bis zu Livestreams, professionellen Kommentaren und einer großartigen Community. Was als Hobby begann, ist heute meine Leidenschaft."
      maxWidth="4xl"
    />
  );
}