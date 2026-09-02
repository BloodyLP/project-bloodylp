/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * NHL Playoffs Topscorer
 *
 * Description:
 * Stammdaten der NHL-Playoffs-Topscorer-Auszeichnung.
 *
 * ============================================
 */

export const nhlPoTopscorer = {

    category: "decoration",

    rarity: "legendary",

    classification: "achievement",

    issued: "NHL",

    title: "TOPSCORER",

    subtitle: "NHL PLAYOFFS",

    description:
        "Auszeichnung für den Topscorer der NHL Playoffs.",

    requirements: [
        "Meiste Punkte in den NHL Playoffs",
    ],

    image:
        "/images/stats/nhl/nhl-po-topscorer.png",

} as const;