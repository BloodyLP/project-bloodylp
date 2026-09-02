/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * Prince of Wales Trophy
 *
 * Description:
 * Stammdaten der Prince-of-Wales-Trophy-Auszeichnung.
 *
 * ============================================
 */

export const princeOfWalesTrophy = {

    category: "decoration",

    rarity: "legendary",

    classification: "trophy",

    issued: "BloodyArmy",

    title: "PRINCE OF WALES TROPHY",

    subtitle: "EASTERN-CONFERENCE-CHAMPION",

    description:
        "Auszeichnung für den Gewinn der Prince of Wales Trophy.",

    requirements: [

        "Mindestens einmal Eastern-Conference-Champion"

    ],

    image:
            "/images/stats/prince-of-wales-trophy.png",

} as const;