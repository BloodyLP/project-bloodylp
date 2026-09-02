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
 * NHL Meiste Strafminuten
 *
 * Description:
 *
 * Stammdaten für die Auszeichnung
 * "Meiste Strafminuten in der NHL".
 *
 * ============================================
 */

export const nhlMeisteStrafminuten = {

    code: "BA-NHL-PIM-001",

    category: "achievement",

    rarity: "legendary",

    classification: "nhl",

    issued: "BloodyArmy",

    title: "MEISTE STRAFMINUTEN",

    subtitle: "NHL – MEISTE STRAFMINUTEN",

    description:
        "Auszeichnung für die meisten Strafminuten in einer NHL-Saison.",

    requirements: [
        "Die meisten Strafminuten einer NHL-Saison"
    ],

    image:
        "/images/stats/nhl/nhl-meiste-strafminuten.png",

} as const;