"use client";

/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyLP Website
 *
 * File:
 * DEGSocials.tsx
 *
 * Description:
 * Social-Media-Kanäle der DEG eSports
 *
 * ============================================
 */

import styles from "./DEGSocials.module.css";

type SocialChannel = {
    name: string;
    handle: string;
    url: string;
    icon: "facebook" | "twitch" | "tiktok" | "instagram";
};

const socialChannels: SocialChannel[] = [
    {
        name: "Facebook",
        handle: "DEG eSports",
        url: "https://www.facebook.com/profile.php?id=61554904711698",
        icon: "facebook",
    },
    {
        name: "Twitch",
        handle: "DEG eSports",
        url: "https://www.twitch.tv/degesports",
        icon: "twitch",
    },
    {
        name: "TikTok",
        handle: "@degesports_official",
        url: "https://www.tiktok.com/@degesports_official",
        icon: "tiktok",
    },
    {
        name: "Instagram",
        handle: "@degesports_official",
        url: "https://www.instagram.com/degesports_official/",
        icon: "instagram",
    },
];

function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M14.5 8H17V4h-2.5C11.46 4 10 5.65 10 8.5V11H7v4h3v7h4v-7h3.2l.8-4H14v-2.3c0-.47.15-.7.5-.7Z"
                fill="currentColor"
            />
        </svg>
    );
}

function TwitchIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M4 2h18v13l-5 5h-4l-3 3v-3H4V2Zm2 2v14h5v2.17L13.17 18H17l3-3V4H6Zm3 3h2v6H9V7Zm5 0h2v6h-2V7Z"
                fill="currentColor"
            />
        </svg>
    );
}

function TikTokIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M15.4 3c.28 2.15 1.48 3.75 3.6 4.65v3.2c-1.48-.1-2.82-.58-4-1.4v6.1c0 3.6-2.25 5.45-5.35 5.45-2.9 0-5.15-1.9-5.15-4.8 0-3.2 2.55-5.2 6-4.9v3.15c-1.8-.27-2.8.52-2.8 1.7 0 1.02.8 1.82 1.95 1.82 1.32 0 2.1-.82 2.1-2.45V3h3.65Z"
                fill="currentColor"
            />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            />

            <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            />

            <circle
                cx="17.4"
                cy="6.6"
                r="1.2"
                fill="currentColor"
            />
        </svg>
    );
}

function SocialIcon({
    type,
}: {
    type: SocialChannel["icon"];
}) {
    switch (type) {
        case "facebook":
            return <FacebookIcon />;

        case "twitch":
            return <TwitchIcon />;

        case "tiktok":
            return <TikTokIcon />;

        case "instagram":
            return <InstagramIcon />;

        default:
            return null;
    }
}

export default function DEGSocials() {
    return (
        <section className={styles.socialSection}>
            {/* ========================================
                HEADER
               ======================================== */}

            <div className={styles.sectionHeader}>
                <span className={styles.degLabel}>
                    DEG ESPORTS
                </span>

                <h2 className={styles.title}>
                    <span className={styles.titleWhite}>
                        SOCIAL
                    </span>

                    <span className={styles.titleRed}>
                        {" "}MEDIA
                    </span>
                </h2>

                <div className={styles.subtitleRow}>
                    <span className={styles.yellowLine} />

                    <span className={styles.subtitle}>
                        FOLGE UNS AUF ALLEN KANÄLEN
                    </span>

                    <span className={styles.yellowLine} />
                </div>
            </div>


            {/* ========================================
                SOCIAL CARDS
               ======================================== */}

            <div className={styles.socialGrid}>
                {socialChannels.map((channel) => (
                    <a
                        key={channel.name}
                        href={channel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialCard} ${styles[channel.icon]}`}
                        aria-label={`${channel.name} – ${channel.handle}`}
                    >
                        <div className={styles.cardGlow} />

                        <div className={styles.logoBox}>
                            <SocialIcon type={channel.icon} />
                        </div>

                        <div className={styles.cardDivider} />

                        <div className={styles.cardContent}>
                            <span className={styles.platform}>
                                {channel.name}
                            </span>

                            <span className={styles.handle}>
                                {channel.handle}
                            </span>
                        </div>

                        <div className={styles.cardArrow}>
                            ↗
                        </div>
                    </a>
                ))}
            </div>


            {/* ========================================
                FOOTER TAGLINE
               ======================================== */}

            <div className={styles.tagline}>
                <span className={styles.taglineLine}>
                    <span />
                </span>

                <span className={styles.taglineText}>
                    GAMING AUS LEIDENSCHAFT
                </span>

                <span className={styles.taglineLine}>
                    <span />
                </span>
            </div>
        </section>
    );
}