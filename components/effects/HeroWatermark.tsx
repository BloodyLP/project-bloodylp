// =====================================================
// BDS EFFECT
// HeroWatermark
//
// Version: 2.0
//
// Bloody Design System
// =====================================================

import Image from "next/image";

export default function HeroWatermark() {
  return (
    <div
      className="
absolute
opacity-10
brightness-75
contrast-125
saturate-0
blur-[1px]
right-[+100px]
top-[15%]
"

      style={{
  WebkitMaskImage:
    "linear-gradient(to right, black 45%, transparent 100%), radial-gradient(circle at center, black 35%, transparent 90%)",
  WebkitMaskComposite: "source-in",

  maskImage:
    "linear-gradient(to right, black 45%, transparent 100%), radial-gradient(circle at center, black 35%, transparent 90%)",
}}
    >
      <Image
        src="/logos/bloodylp-logo.png"
        alt=""
        width={800}
        height={800}
        draggable={false}
        priority={false}
      />
    </div>
  );
}