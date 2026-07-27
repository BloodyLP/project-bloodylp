import Image from "next/image";
import Link from "next/link";

const socials = [
    {
        href: "https://www.twitch.tv/bl00dylp",
        icon: "/social/twitch.svg",
        label: "Twitch",
        glow: "hover:border-[#9146FF]/40 hover:bg-[#9146FF]/10 hover:shadow-[0_0_28px_rgba(145,70,255,.28)]",
    },
    {
        href: "https://www.youtube.com/@BloodyLP",
        icon: "/social/youtube.svg",
        label: "YouTube",
        glow: "hover:border-[#FF0000]/40 hover:bg-[#FF0000]/10 hover:shadow-[0_0_28px_rgba(255,0,0,.22)]",
    },
    {
        href: "https://www.instagram.com/alexander.blattmann",
        icon: "/social/instagram.svg",
        label: "Instagram",
        glow: "hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10 hover:shadow-[0_0_28px_rgba(228,64,95,.25)]",
    },
    {
        href: "https://www.tiktok.com/@bloodylp1307",
        icon: "/social/tiktok.svg",
        label: "TikTok",
        glow: "hover:border-[#00F2EA]/40 hover:bg-[#00F2EA]/10 hover:shadow-[0_0_28px_rgba(0,242,234,.25)]",
    },
    {
        href: "https://discord.gg/fkxsWrmGcK",
        icon: "/social/discord.svg",
        label: "Discord",
        glow: "hover:border-[#5865F2]/40 hover:bg-[#5865F2]/10 hover:shadow-[0_0_28px_rgba(88,101,242,.25)]",
    },
];

export default function FooterSocials() {
    return (
        <div className="flex items-center gap-4">
    {socials.map((social) => (
        <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
            className={`
                group
                relative

                flex
                h-14
                w-14

                items-center
                justify-center

                rounded-full

                border
                border-white/10

                bg-white/[0.03]

                backdrop-blur-xl

                transition-all
                duration-300

                hover:-translate-y-1
                hover:scale-105

                ${social.glow}
            `}
        >
            {/* Tooltip */}

            <span
                className="
                    pointer-events-none

                    absolute
                    -top-11
                    left-1/2

                    -translate-x-1/2
                    translate-y-2

                    rounded-lg

                    border
                    border-white/10

                    bg-zinc-900/95

                    px-3
                    py-1.5

                    whitespace-nowrap

                    text-xs
                    font-semibold
                    tracking-wide

                    text-white

                    opacity-0

                    transition-all
                    duration-300

                    group-hover:translate-y-0
                    group-hover:opacity-100
                "
            >
                {social.label}
            </span>

            <Image
                src={social.icon}
                alt={social.label}
                width={28}
                height={28}
                className="
                    opacity-90

                    transition-all
                    duration-300

                    group-hover:scale-110
                    group-hover:-rotate-3
                    group-hover:opacity-100
                "
            />
        </Link>
    ))}
</div>
    );
}