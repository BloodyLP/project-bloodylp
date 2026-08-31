/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * Calder Cup
 *
 * Description:
 * Stammdaten der Calder-Cup-Auszeichnung.
 *
 * ============================================
 */

export const calderCup = {

    code: "BA-CC-001",

    category: "decoration",

    rarity: "founder",

    classification: "legendary",

    issued: "BloodyArmy",

    title: "CALDER-CUP",

    subtitle: "CALDER-CUP SIEGE",

    description:
        "Auszeichnung für den Gewinn des Calder Cups.",

    requirements: [

        "Mindestens einmal Calder-Cup-Sieger"

    ],

    image:
        "/images/caldercup/calder-cup.png",

} as const;