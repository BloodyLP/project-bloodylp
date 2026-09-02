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
 * NHL Beste Plus/Minus Bilanz
 *
 * Description:
 *
 * Stammdaten für die Auszeichnung
 * "Beste +/- Bilanz in der NHL".
 *
 * ============================================
 */

export const nhlBestePlusMinus = {

    code: "BA-NHL-PM-001",

    category: "achievement",

    rarity: "legendary",

    classification: "nhl",

    issued: "BloodyArmy",

    title: "BESTE +/- BILANZ",

    subtitle: "NHL – BESTE +/- BILANZ",

    description:
        "Auszeichnung für die beste Plus/Minus-Bilanz in einer NHL-Saison.",

    requirements: [
        "Beste Plus/Minus-Bilanz einer NHL-Saison"
    ],

    image:
        "/images/stats/nhl/nhl-beste-plus-minus.png",

} as const;