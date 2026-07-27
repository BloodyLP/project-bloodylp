// =====================================================
// BDS COMPONENT
// StoryHeader
//
// Version: 2.1
//
// Wrapper um SectionHeading
// =====================================================

import SectionHeading from "../ui/SectionHeading";

export default function StoryHeader() {
  return (
    <SectionHeading
      eyebrow="MEINE WELT"
      title={
        <>
          DREI WELTEN.
          <br />
          EINE LEIDENSCHAFT.
        </>
      }
      description="Seit über einem Jahrzehnt begleiten mich Gaming, professioneller Eishockey-Kommentar und eine Community, die jeden Schritt dieses Weges mitgegangen ist. Drei unterschiedliche Welten – verbunden durch dieselbe Leidenschaft."
      maxWidth="4xl"
    />
  );
}