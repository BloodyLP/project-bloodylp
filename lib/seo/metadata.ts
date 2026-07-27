// =====================================================
// BLOODYLP HOMEPAGE
//
// SEO Metadata
//
// Version: 2.1
//
// Bloody Design System
// =====================================================

import type { Metadata } from "next";
import { BRAND } from "@/lib/config/brand";

const title = `${BRAND.name} | Gaming • Eishockey-Kommentar • BloodyArmy`;

const description =
    "Offizielle Website von Alexander Blattmann (BloodyLP). Livestreams auf Twitch, Gaming-Videos auf YouTube, professioneller Eishockey-Kommentar und die Community der BloodyArmy.";

export const metadata: Metadata = {
    metadataBase: new URL(BRAND.url),

    manifest: "/manifest.webmanifest",

    title: {
        default: title,
        template: `%s | ${BRAND.name}`,
    },

    description,

    applicationName: BRAND.applicationName,

    authors: [
        {
            name: BRAND.owner,
            url: BRAND.url,
        },
    ],

    creator: BRAND.creator,

    publisher: BRAND.publisher,

    category: BRAND.category,

    keywords: [
        "BloodyLP",
        "Alexander Blattmann",
        "Gaming",
        "Livestream",
        "Twitch",
        "YouTube",
        "Eishockey",
        "Eishockey Kommentator",
        "DEL2",
        "NHL",
        "BloodyArmy",
        "Forza Horizon",
        "Assassin's Creed",
    ],

    alternates: {
        canonical: "/",
        languages: {
            "de-DE": "/",
        },
    },

    robots: {
        index: true,
        follow: true,

        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    openGraph: {
        type: "website",

        locale: BRAND.locale,

        url: BRAND.url,

        siteName: BRAND.name,

        title,

        description,

        images: [
            {
                url: "/images/social/opengraph.jpg",
                width: 1200,
                height: 630,
                alt: `${BRAND.name} Open Graph`,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title,

        description,

        creator: "@BloodyLP",

        images: ["/images/social/opengraph.jpg"],
    },

    icons: {
    icon: [
        {
            url: "/icons/favicon.ico",
        },
        {
            url: "/icons/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
        },
        {
            url: "/icons/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
        },
        {
            url: "/icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
        },
        {
            url: "/icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
        },
    ],

    apple: [
        {
            url: "/icons/apple-touch-icon.png",
        },
    ],

    shortcut: "/icons/favicon.ico",
},

    appleWebApp: {
        capable: true,
        title: BRAND.name,
        statusBarStyle: "black-translucent",
    },

    formatDetection: {
        telephone: false,
        address: false,
        email: false,
    },

    referrer: "origin-when-cross-origin",

    
};