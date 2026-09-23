/* ============================================ */
/*                                              */
/* BloodyLP                                     */
/*                                              */
/* Project:                                     */
/* BloodyLP Website                             */
/*                                              */
/* File:                                        */
/* components/live/data/partners.ts             */
/*                                              */
/* Description:                                 */
/* BloodyLP Partner / Sponsoring Daten          */
/*                                              */
/* ============================================ */

export type PartnerTier =
    | "bronze"
    | "silver"
    | "gold"
    | "platinum";

export type PartnerCategoryType =
    | "tier"
    | "additional";

export type Partner = {
    name: string;
    logo: string;
    website?: string;
    tier?: PartnerTier;
    category: string;
    description: string;
    tags: string[];
    active?: boolean;
    discountCode?: string;
    featureTitle?: string;
    featureText?: string;
    categoryType?: PartnerCategoryType;
};

export type PartnerTierInfo = {
    id: PartnerTier;
    name: string;
    title: string;
    number: string;
    description: string;
};

/* ============================================ */
/* PARTNER-STUFEN                              */
/* ============================================ */

export const partnerTiers: PartnerTierInfo[] = [
    {
        id: "platinum",
        name: "PLATIN",
        title: "Exklusiv Partner",
        number: "01",
        description:
            "Die höchste Partnerschaftsstufe von BloodyLP für besonders umfangreiche und langfristige Kooperationen.",
    },
    {
        id: "gold",
        name: "GOLD",
        title: "Premium Partner",
        number: "02",
        description:
            "Prominente Partnerpräsenz über Content, Streams, Social Media und die BloodyLP Plattformen.",
    },
    {
        id: "silver",
        name: "SILBER",
        title: "Senior Partner",
        number: "03",
        description:
            "Fester Bestandteil der BloodyLP Community mit sichtbarer Einbindung in ausgewählten Bereichen.",
    },
    {
        id: "bronze",
        name: "BRONZE",
        title: "Junior Partner",
        number: "04",
        description:
            "Partner, die BloodyLP und die Community unterstützen und Teil unseres Projekts sind.",
    },
];

/* ============================================ */
/* PARTNER                                      */
/* ============================================ */

export const partners: Partner[] = [
    /* ======================================== */
    /* GOLD                                     */
    /* ======================================== */
    {
        name: "HOLY",
        logo: "/images/partner/holy.png",
        website:
            "https://de.holy.com/?ref=BloodyLP&utm_medium=creator&utm_source=creator",
        tier: "gold",
        category: "ENERGY · HYDRATION · ICED TEA · MILKSHAKE",
        description:
            "HOLY verbindet zuckerfreie Drinks mit verschiedenen Produktlinien rund um Energy, Iced Tea, Hydration und Milkshake und ist damit ein vielseitiger Bestandteil des BloodyLP Partneruniversums.",
        tags: [
            "STREAMING",
            "PRODUCT CONTENT",
            "COMMUNITY",
        ],
        discountCode: "BloodyLP10",
        active: true,
        categoryType: "tier",
    },
    {
        name: "EA SPORTS",
        logo: "/images/partner/ea-sports2.png",
        website: "https://www.ea.com/de/games/nhl/nhl-27",
        tier: "gold",
        category: "GAMING · NHL · EISHOCKEY",
        description:
            "EA SPORTS und die NHL-Reihe verbinden Gaming und Eishockey – zwei zentrale Content-Welten von BloodyLP.",
        tags: [
            "NHL",
            "GAMING",
            "EISHOCKEY",
        ],
        featureTitle: "NHL 27",
        featureText:
            "Mit 32 authentischen NHL-Arenen, einem neuen Übertragungserlebnis, Connected Franchise und teamspezifischen Playbooks steht die NHL-Reihe besonders nah an der Eishockey-Content-Welt von BloodyLP.",
        active: true,
        categoryType: "tier",
    },

    /* ======================================== */
    /* WEITERE PARTNER                          */
    /* ======================================== */
    {
        name: "KALYPSO MEDIA",
        logo: "/images/partner/kalypso.png",
        website: "https://www.kalypsomedia.com/de",
        category: "WEITERE PARTNER",
        description:
            "Teil des erweiterten BloodyLP Partnernetzwerks.",
        tags: ["PARTNER", "GAMING", "COMMUNITY"],
        active: true,
        categoryType: "additional",
    },
    {
        name: "MICROSOFT",
        logo: "/images/partner/microsoft.png",
        website: "https://www.microsoft.com/de-de/",
        category: "WEITERE PARTNER",
        description:
            "Teil des erweiterten BloodyLP Partnernetzwerks.",
        tags: ["PARTNER", "TECHNOLOGY", "GAMING"],
        active: true,
        categoryType: "additional",
    },
    {
        name: "PLAION",
        logo: "/images/partner/plaion.png",
        website: "https://plaion.com/",
        category: "WEITERE PARTNER",
        description:
            "Teil des erweiterten BloodyLP Partnernetzwerks.",
        tags: ["PARTNER", "GAMING", "ENTERTAINMENT"],
        active: true,
        categoryType: "additional",
    },
    {
        name: "SQUARE ENIX",
        logo: "/images/partner/square-enix.png",
        website: "https://www.square-enix-games.com/de_DE/home",
        category: "WEITERE PARTNER",
        description:
            "Teil des erweiterten BloodyLP Partnernetzwerks.",
        tags: ["PARTNER", "GAMING", "ENTERTAINMENT"],
        active: true,
        categoryType: "additional",
    },
    {
        name: "UBISOFT",
        logo: "/images/partner/ubisoft.png",
        website: "https://www.ubisoft.com/de-de/",
        category: "WEITERE PARTNER",
        description:
            "Teil des erweiterten BloodyLP Partnernetzwerks.",
        tags: ["PARTNER", "GAMING", "COMMUNITY"],
        active: true,
        categoryType: "additional",
    },
    {
        name: "WARGAMING",
        logo: "/images/partner/wargaming.png",
        website: "https://www.wargaming.net/",
        category: "WEITERE PARTNER",
        description:
            "Teil des erweiterten BloodyLP Partnernetzwerks.",
        tags: ["PARTNER", "GAMING", "COMMUNITY"],
        active: true,
        categoryType: "additional",
    },
];
