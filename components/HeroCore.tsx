// =====================================================
// BDS COMPONENT
// HeroCore
//
// Version: 3.0
//
// Responsive Pass
//
// Bloody Design System
// =====================================================

export default function HeroCore() {
  return (
    <div
      className="
        mt-10
        md:mt-14
        xl:mt-16
      "
    >
      {/* ================================= */}
      {/* Key Statements */}
      {/* ================================= */}

      <div className="space-y-5 md:space-y-6">

        <div className="flex items-center">

          <h2
            className="
              font-display

              text-[1.65rem]
              sm:text-[2rem]
              md:text-[2.3rem]
              xl:text-[2.7rem]

              leading-tight

              tracking-[-0.02em]
            "
          >
            <span className="uppercase text-lime-400">
              Leidenschaft
            </span>

            <span className="font-ui normal-case text-white">
              {" "}für Gaming.
            </span>

          </h2>

        </div>

        <div className="flex items-center">

          <h2
            className="
              font-display

              text-[1.65rem]
              sm:text-[2rem]
              md:text-[2.3rem]
              xl:text-[2.7rem]

              leading-tight

              tracking-[-0.02em]
            "
          >
            <span className="uppercase text-lime-400">
              Kompetenz
            </span>

            <span className="font-ui normal-case text-white">
              {" "}im Kommentieren.
            </span>

          </h2>

        </div>

        <div className="flex items-center">

          <h2
            className="
              font-display

              text-[1.65rem]
              sm:text-[2rem]
              md:text-[2.3rem]
              xl:text-[2.7rem]

              leading-tight

              tracking-[-0.02em]
            "
          >
            <span className="uppercase text-lime-400">
              Unterhaltung
            </span>

            <span className="font-ui normal-case text-white">
              {" "}mit Persönlichkeit.
            </span>

          </h2>

        </div>

      </div>

      {/* ================================= */}
      {/* Intro */}
      {/* ================================= */}

      <p
        className="
          mt-10
          md:mt-12
          xl:mt-14

          max-w-xl

          font-body

          text-[1rem]
          sm:text-[1.1rem]
          md:text-[1.25rem]
          xl:text-[1.45rem]

          leading-relaxed

          text-zinc-400
        "
      >
        Seit über einem Jahrzehnt verbinde ich Gaming,
        professionellen Eishockey-Kommentar und eine Community,
        die mehr ist als nur Zuschauer.
      </p>

      {/* ================================= */}
      {/* Welcome */}
      {/* ================================= */}

      <p
  className="
    hidden
    xl:block

    mt-8
    md:mt-9
    xl:mt-10

    font-ui

    text-[0.9rem]
    sm:text-[1rem]
    md:text-[1.15rem]
    xl:text-[1.4rem]

    font-semibold

    uppercase

    tracking-[0.18em]
    md:tracking-[0.28em]
    xl:tracking-[0.35em]
  "
>
  <span className="text-lime-400">
    Willkommen
  </span>{" "}

  <span className="text-white">
    bei BloodyLP.
  </span>
</p>

    </div>
  );
}