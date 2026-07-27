// =====================================================
// BDS COMPONENT
// HeroTitle
//
// Version: 6.0
//
// Responsive Pass
//
// Bloody Design System
// =====================================================

export default function HeroTitle() {
  return (
    <div
      className="
        w-full

        max-w-[760px]

        select-none
      "
    >
      {/* ================================= */}
      {/* Top Divider */}
      {/* ================================= */}

      <div className="mb-4 md:mb-5 h-px w-full bg-zinc-700" />

      {/* ================================= */}
      {/* Wordmark */}
      {/* ================================= */}

      <h1
        className="
          w-full

          text-center

          font-display

          text-[4.2rem]
          sm:text-[5.4rem]
          md:text-[7rem]
          lg:text-[8.5rem]
          xl:text-[11.15rem]

          font-bold

          uppercase

          leading-[0.82]
          xl:leading-[0.78]

          tracking-[0.04em]
          xl:tracking-[0.08em]

          text-white
        "
      >
        BLOODY

        <span className="-ml-[0.03em] text-lime-400">
          LP
        </span>

      </h1>

      {/* ================================= */}
      {/* Name */}
      {/* ================================= */}

      <div
        className="
          mt-4
          md:mt-5

          flex

          items-center

          gap-3
          md:gap-8
        "
      >

        <div className="h-px flex-1 bg-zinc-700" />

        <p
          className="
            whitespace-nowrap

            font-ui

            text-[0.60rem]
            sm:text-[0.72rem]
            md:text-[0.90rem]
            xl:text-[1rem]

            font-semibold

            uppercase

            tracking-[0.22em]
            md:tracking-[0.45em]
            xl:tracking-[0.60em]

            text-zinc-300

            text-center
          "
        >
          Alexander Blattmann
        </p>

        <div className="h-px flex-1 bg-zinc-700" />

      </div>

      {/* ================================= */}
      {/* Accent Star */}
      {/* ================================= */}

      <div
        className="
          mt-3

          flex

          justify-center
        "
      >

        <span
          className="
            font-display

            text-[1rem]
            md:text-[1.2rem]
            xl:text-[1.5rem]

            leading-none

            text-lime-400

            drop-shadow-[0_0_12px_rgba(163,230,53,0.9)]
          "
        >
          ★
        </span>

      </div>

    </div>
  );
}