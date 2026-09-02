/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * NHL Playoffs – Meiste Tore
 *
 * Description:
 * Stammdaten der Auszeichnung für die meisten
 * Tore in den NHL Playoffs.
 *
 * ============================================
 */

export const nhlPoMeisteTore = {

    category: "decoration",

    rarity: "legendary",

    classification: "achievement",

    issued: "NHL",

    title: "MEISTE TORE PLAYOFFS",

    subtitle: "NHL PLAYOFFS",

    description:
        "Auszeichnung für die meisten erzielten Tore in den NHL Playoffs.",

    requirements: [

        "Meiste Tore in den NHL Playoffs",

    ],

    image:
        "/images/stats/nhl/nhl-po-meiste-tore.png",

} as const;