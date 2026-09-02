/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * Clarence S. Campbell Trophy
 *
 * Description:
 * Stammdaten der Clarence-S.-Campbell-Trophy-Auszeichnung.
 *
 * ============================================
 */

export const clarenceSCampbellTrophy = {
    category: "decoration",

    rarity: "legendary",

    classification: "trophy",

    issued: "BloodyArmy",

    title: "CLARENCE S.C. TROPHY",

    subtitle: "WESTERN-CONFERENCE-CHAMPION",

    description:
        "Auszeichnung für den Gewinn der Clarence S. Campbell Trophy.",

    requirements: [
        "Mindestens einmal Western-Conference-Champion"
    ],

    image:
         "/images/stats/clarence-s-campbell-trophy.png",

} as const;