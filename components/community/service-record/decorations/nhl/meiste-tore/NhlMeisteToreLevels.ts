/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * NHL Meiste Tore
 *
 * Description:
 * Stammdaten der Auszeichnung.
 *
 * ============================================
 */

export const nhlMeisteTore = {

    category:
        "decoration",

    rarity:
        "legendary",

    classification:
        "award",

    issued:
        "BloodyArmy",

    title:
        "MEISTE TORE",

    subtitle:
        "NHL",

    description:
        "Auszeichnung für die meisten Tore in einer NHL-Saison.",

    requirements: [

        "Meiste Tore einer NHL-Saison"

    ],

    image:
        "/images/stats/nhl/nhl-meiste-tore.png",

} as const;