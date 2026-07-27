// =====================================================
// BDS EFFECT
// HeroFog
//
// Version: 13.0
//
// Desktop + Mobile
//
// Bloody Design System
// =====================================================

import Image from "next/image";

type Props = {
  opacity?: number;
  blur?: number;
};

export default function HeroFog({

  opacity = 0.50,

  blur = 2,

}: Props) {

  return (
    <>

      {/* ================================= */}
      {/* DESKTOP */}
      {/* ================================= */}

      <div
        className="
          absolute
          inset-0

          hidden
          xl:block

          overflow-hidden

          pointer-events-none

          z-[21]
        "
      >

        <Image
          src="/effects/fog-bank.png"
          alt=""
          width={4096}
          height={1024}
          draggable={false}
          className="
            absolute

            left-0

            bottom-[-950px]

            w-[160%]

            animate-fog-left

            select-none
          "
          style={{
            opacity,
            filter: `blur(${blur}px)`,
          }}
        />

      </div>

      {/* ================================= */}
      {/* MOBILE */}
      {/* ================================= */}

      <div
    className="
        hidden

        md:block

        xl:hidden

        absolute

        inset-0
    "
>

        <Image
          src="/effects/fog-bank.png"
          alt=""
          width={4096}
          height={1024}
          draggable={false}
          className="
            absolute

            left-0

            bottom-[0px]

             w-[140%]

            animate-fog-left-mobile

            select-none
          "
          style={{
            opacity,
            filter: `blur(${blur}px)`,
          }}
        />

      </div>

    </>
  );

}