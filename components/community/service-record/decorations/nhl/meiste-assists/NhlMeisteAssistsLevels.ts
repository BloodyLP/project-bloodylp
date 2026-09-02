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
 * NHL Meiste Assists
 *
 * Description:
 *
 * Stammdaten für die Auszeichnung
 * "Meiste Assists in der NHL".
 *
 * ============================================
 */

export const nhlMeisteAssists = {

    code: "BA-NHL-AST-001",

    category: "achievement",

    rarity: "legendary",

    classification: "nhl",

    issued: "BloodyArmy",

    title: "MEISTE ASSISTS",

    subtitle: "NHL – MEISTE ASSISTS",

    description:
        "Auszeichnung für die meisten Assists in einer NHL-Saison.",

    requirements: [
        "Die meisten Assists einer NHL-Saison"
    ],

    image:
        "/images/stats/nhl/nhl-meiste-assists.png",

} as const;