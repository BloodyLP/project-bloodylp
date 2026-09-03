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

    number:

        number;


    gamerTag:

        string;


    name:

        string;


    nationality:

        string;


    flag:

        string;


    image?:

        string;


    position:

        "goalie" |

        "defense" |

        "forward";


    sportsgamerUrl:

        string;

};


/* ============================================ */
/* GOALIES                                      */
/* ============================================ */

export const degGoalies: DegPlayer[] = [

    {

        number:

            39,


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

        number:

            67,


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

        number:

            9,


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

        number:

            19,


        gamerTag:

            "TIM x ESW",


        name:

            "T. Lohan",


        nationality:

            "/images/esport/flags/de.png",


        flag:

            "/images/esport/flags/de.png",


        image:

            "/images/esport/players/TimxESW.png",


        position:

            "defense",


        sportsgamerUrl:

            "https://sportsgamer.gg/players/15216",

    },


    {

        number:

            68,


        gamerTag:

            "Germinator4922",


        name:

            "J. Endruweit",


        nationality:

            "/images/esport/flags/de.png",


        flag:

            "/images/esport/flags/de.png",

                    image:

            "/images/esport/players/endruweit.png",


        position:

            "defense",


        sportsgamerUrl:

            "https://sportsgamer.gg/players/17351",

    },


    {

        number:

            97,


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

];


/* ============================================ */
/* FORWARDS                                     */
/* ============================================ */

export const degForwards: DegPlayer[] = [

    {

        number:

            6,


        gamerTag:

            "Krinke-_-",


        name:

            "S. Krinke",


nationality:

    "/images/esport/flags/de.png",


        flag:

            "/images/esport/flags/de.png",


        image:

            "/images/esport/players/Krinke-_-.png",


        position:

            "forward",


        sportsgamerUrl:

            "https://sportsgamer.gg/players/246",

    },


    {

        number:

            69,


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

        number:

            71,


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

        number:

            91,


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

];