/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * Stanley Cup
 *
 * Description:
 * Stammdaten der Stanley-Cup-Auszeichnung.
 *
 * ============================================
 */

export const stanleyCup = {

    code: "BA-SC-001",

    category: "decoration",

    rarity: "founder",

    classification: "legendary",

    issued: "BloodyArmy",

    title: "STANLEY-CUP",

    subtitle: "STANLEY-CUP SIEGE",

    description:
        "Auszeichnung für den Gewinn des Stanley Cups.",

    requirements: [

        "Mindestens einmal Stanley-Cup-Sieger"

    ],

    image:
        "/images/stanleycup/stanley-cup.gif",

} as const;