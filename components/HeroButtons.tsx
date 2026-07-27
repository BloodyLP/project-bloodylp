// =====================================================
// BDS COMPONENT
// HeroButtons
//
// Version: 5.0
//
// Bloody Design System
// =====================================================

import Link from "next/link";

import Button from "./ui/Button";
import Icon from "./ui/Icon/Icon";

export default function HeroButtons() {
  return (
    <div
      className="
        mt-10
        md:mt-12

        flex

        flex-col
        sm:flex-row

        gap-4
        md:gap-6

        w-full

        sm:w-auto
      "
    >
      <Link
        href="https://twitch.tv/bl00dylp"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        <Button
          icon={
            <Icon
              name="twitch"
              size={20}
            />
          }
          className="w-full"
        >
          LIVE AUF TWITCH
        </Button>
      </Link>

      <Link
        href="https://www.youtube.com/@BloodyLP"
        className="w-full sm:w-auto"
      >
        <Button
          variant="secondary"
          icon={
            <Icon
              name="play"
              size={16}
            />
          }
          className="w-full"
        >
          VIDEOS ENTDECKEN
        </Button>
      </Link>
    </div>
  );
}