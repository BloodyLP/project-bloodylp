/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * President's Trophy
 *
 * Description:
 * Stammdaten der President's-Trophy-Auszeichnung.
 *
 * ============================================
 */

export const presidentsTrophy = {

    code: "BA-PT-001",

    category: "decoration",

    rarity: "founder",

    classification: "legendary",

    issued: "BloodyArmy",

    title: "PRESIDENT'S TROPHY",

    subtitle: "PRESIDENT'S-TROPHY SIEGE",

    description:
        "Auszeichnung für den Gewinn der President's Trophy.",

    requirements: [
        "Mindestens einmal Gewinner der President's Trophy"
    ],

    image:
        "/images/stats/presidents-trophy.png",

} as const;