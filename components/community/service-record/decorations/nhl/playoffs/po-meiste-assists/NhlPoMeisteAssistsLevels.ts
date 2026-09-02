/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * NHL Playoffs – Meiste Assists
 *
 * Description:
 * Stammdaten der Auszeichnung für die meisten
 * Assists in den NHL Playoffs.
 *
 * ============================================
 */

export const nhlPoMeisteAssists = {

    category: "decoration",

    rarity: "legendary",

    classification: "achievement",

    issued: "NHL",

    title: "MEISTE ASSISTS PLAYOFFS",

    subtitle: "NHL PLAYOFFS",

    description:
        "Auszeichnung für die meisten erzielten Assists in den NHL Playoffs.",

    requirements: [

        "Meiste Assists in den NHL Playoffs",

    ],

    image:
        "/images/stats/nhl/nhl-po-meiste-assists.png",

} as const;