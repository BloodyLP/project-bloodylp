import HeroLeft from "../HeroLeft";
import HeroRight from "../HeroRight";

export default function HeroContent() {
  return (
    <div
      className="
        relative
        z-20

        mx-auto

        flex
        flex-col

        xl:flex-row

        items-center

        xl:items-start

        justify-between

        max-w-[1700px]

        px-6
        md:px-10
        xl:px-24

        pt-28
        md:pt-28
        xl:pt-[128px]
      "
    >
      {/* ================================= */}
      {/* Left */}
      {/* ================================= */}

      <div
        className="
          relative

          z-40

          w-full

          xl:w-[47%]

          mt-12
          md:mt-8

          xl:-mt-[-50px]
        "
      >
        <HeroLeft />
      </div>

      {/* ================================= */}
      {/* Right */}
      {/* ================================= */}

      <div
        className="
          relative

          z-10

          flex

          w-full

          xl:w-[50%]

          justify-center

          xl:justify-end

          mt-10
          md:mt-6

          xl:mt-55

          min-h-[137px]

          xl:min-h-0
        "
      >
        <HeroRight />
      </div>
    </div>
  );
}