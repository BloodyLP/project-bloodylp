/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 *
 * BloodyArmy Website
 *
 * Component:
 *
 * NHL Topscorer
 *
 * Description:
 *
 * Stammdaten des NHL-Topscorer-Badges.
 *
 * ============================================
 */

export const nhlTopscorer = {

    category: "badge",

    rarity: "elite",

    classification: "elite",

    issued: "BloodyArmy",

    title: "TOPSCORER",

    subtitle: "AUSZEICHNUNG",

    description:
        "Auszeichnung für eine Saison als punktbester Spieler der NHL.",

    requirements: [

        "Mindestens einmal NHL-Topscorer"

    ],

    image:
        "/images/stats/nhl/nhl-topscorer.png",

} as const;