/* ============================================ */
/* BloodyArmy                                   */
/* ============================================ */
/*                                             */
/* Project:                                     */
/* BloodyLP Website                             */
/*                                             */
/* File:                                        */
/* deg-roster.ts                                */
/*                                             */
/* Description:                                 */
/* Spielerdaten des aktuellen                   */
/* DEG eSport Kaders.                           */
/*                                             */
/* ============================================ */


/* ============================================ */
/* TYPES                                        */
/* ============================================ */

export type DegPlayer = {
    number: number;

    gamerTag: string;

    name: string;

    nationality: string;

    flag: string;

    image?: string;

    position:
        | "goalie"
        | "defense"
        | "forward";

    sportsgamerUrl: string;
};


/* ============================================ */
/* GOALIES                                      */
/* ============================================ */

export const degGoalies: DegPlayer[] = [

    {
        number: 26,

        gamerTag:
            "Houddel_26",

        name:
            "M. Houdelet",

        nationality:
            "/images/esport/flags/de.png",

        flag:
            "/images/esport/flags/de.png",

        image:
            "/images/esport/players/houddel_26.png",

        position:
            "goalie",

        sportsgamerUrl:
            "",
    },

    {
        number: 39,

        gamerTag:
            "MEAZZA1704",

        name:
            "D. Otten",

        nationality:
            "/images/esport/flags/de.png",

        flag:
            "/images/esport/flags/de.png",

        image:
            "/images/esport/players/meazza1704.png",

        position:
            "goalie",

        sportsgamerUrl:
            "https://sportsgamer.gg/players/5944",
    },

    {
        number: 67,

        gamerTag:
            "DBerni99999",

        name:
            "B. Angenendt",

        nationality:
            "/images/esport/flags/de.png",

        flag:
            "/images/esport/flags/de.png",

        image:
            "/images/esport/players/DBerni99999.png",

        position:
            "goalie",

        sportsgamerUrl:
            "https://sportsgamer.gg/players/5946",
    },

];


/* ============================================ */
/* DEFENSEMEN                                   */
/* ============================================ */

export const degDefensemen: DegPlayer[] = [

    {
        number: 9,

        gamerTag:
            "PantherOnSkates",

        name:
            "L. Fedra",

        nationality:
            "/images/esport/flags/de.png",

        flag:
            "/images/esport/flags/de.png",

        image:
            "/images/esport/players/PantherOnSkates.png",

        position:
            "defense",

        sportsgamerUrl:
            "https://sportsgamer.gg/players/5995",
    },

    {
        number: 97,

        gamerTag:
            "Official_Fungus",

        name:
            "N. Kempe",

        nationality:
            "/images/esport/flags/de.png",

        flag:
            "/images/esport/flags/de.png",

        image:
            "/images/esport/players/kempe.png",

        position:
            "defense",

        sportsgamerUrl:
            "https://sportsgamer.gg/players/8930",
    },

    {
        number: 91,

        gamerTag:
            "TooEzXx",

        name:
            "L. Hansen",

        nationality:
            "/images/esport/flags/de.png",

        flag:
            "/images/esport/flags/de.png",

        image:
            "/images/esport/players/TooEzXx.png",

        position:
            "defense",

        sportsgamerUrl:
            "https://sportsgamer.gg/players/10333",
    },

    {
        number: 14,

        gamerTag:
            "FellyKnight",

        name:
            "A. Rindå",

        nationality:
            "/images/esport/flags/swe.png",

        flag:
            "/images/esport/flags/swe.png",

        image:
            "/images/esport/players/FellyKnight.png",

        position:
            "defense",

        sportsgamerUrl:
            "https://sportsgamer.gg/players/4835",
    },

];


/* ============================================ */
/* FORWARDS                                     */
/* ============================================ */

export const degForwards: DegPlayer[] = [

    {
        number: 69,

        gamerTag:
            "goalie_breaker",

        name:
            "N. Hoffmann",

        nationality:
            "/images/esport/flags/de.png",

        flag:
            "/images/esport/flags/de.png",

        image:
            "/images/esport/players/goalie_breaker.png",

        position:
            "forward",

        sportsgamerUrl:
            "https://sportsgamer.gg/players/2695",
    },

    {
        number: 71,

        gamerTag:
            "Akin_Penta",

        name:
            "A. Isik",

        nationality:
            "/images/esport/flags/de.png",

        flag:
            "/images/esport/flags/de.png",

        image:
            "/images/esport/players/akin_penta.png",

        position:
            "forward",

        sportsgamerUrl:
            "https://sportsgamer.gg/players/607",
    },

    {
        number: 91,

        gamerTag:
            "xxICEFORCERxx",

        name:
            "M. Bareither",

        nationality:
            "/images/esport/flags/de.png",

        flag:
            "/images/esport/flags/de.png",

        image:
            "/images/esport/players/xxIceforcerxx.png",

        position:
            "forward",

        sportsgamerUrl:
            "https://sportsgamer.gg/players/3235",
    },

        {
        number: 17,

        gamerTag:
            "Pasq86ualePS",

        name:
            "P. Schultz",

        nationality:
            "/images/esport/flags/de.png",

        flag:
            "/images/esport/flags/de.png",

        image:
            "/images/esport/players/Pasq86ualePS.png",

        position:
            "forward",

        sportsgamerUrl:
            "https://sportsgamer.gg/players/15266",
    },

];