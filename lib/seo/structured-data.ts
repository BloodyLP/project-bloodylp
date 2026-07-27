// =====================================================
// BLOODYLP HOMEPAGE
//
// JSON-LD
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

import { BRAND } from "@/lib/config/brand";

export const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: BRAND.owner,
    alternateName: BRAND.name,

    url: BRAND.url,

    image: `${BRAND.url}/images/social/profile.jpg`,

    description: BRAND.slogan,

    jobTitle: [
        "Content Creator",
        "Livestreamer",
        "YouTuber",
        "Eishockey-Kommentator",
    ],

    knowsAbout: [
        "Gaming",
        "Livestreaming",
        "YouTube",
        "Eishockey",
        "NHL",
        "Content Creation",
    ],

    sameAs: [
        BRAND.social.twitch,
        BRAND.social.youtube,
        BRAND.social.instagram,
        BRAND.social.discord,
        BRAND.social.tiktok,
        BRAND.social.x,
    ],
};

export const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: BRAND.name,

    alternateName: BRAND.owner,

    url: BRAND.url,

    description: BRAND.slogan,

    inLanguage: BRAND.language,

    publisher: {
        "@type": "Person",

        name: BRAND.owner,
    },
};