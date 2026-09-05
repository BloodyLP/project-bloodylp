/* ============================================ */
/* BloodyArmy                                    */
/* ============================================ */
/*                                               */
/* Project:                                      */
/* BloodyLP Website                              */
/*                                               */
/* File:                                         */
/* deg-matches.ts                                */
/*                                               */
/* Description:                                  */
/* Spiel- und Ergebnisdaten der                  */
/* DEG eSport Mannschaft.                        */
/*                                               */
/* ============================================ */


/* ============================================ */
/* TYPES                                         */
/* ============================================ */

export type DegMatch = {

    date:
        string;

    league:
        string;

    opponent:
        string;

    opponentLogo:
        string;

    degScore:
        number | null;

    opponentScore:
        number | null;

    overtime?:
        boolean;

    home:
        boolean;

};


/* ============================================ */
/* DEG TEAM                                      */
/* ============================================ */

export const degTeam = {

    name:
        "DEG eSport",

    logo:
        "/images/esport/deg-esports-logo.png",

};


/* ============================================ */
/* NEXT MATCH                                    */
/* ============================================ */

export const upcomingMatch = {

    date:
        "TBA",

    league:
        "ECL LITE",

    opponent:
        "Gegner folgt",

    opponentLogo:
        "",

};


/* ============================================ */
/* MATCH RESULTS                                 */
/* ============================================ */

export const degMatches: DegMatch[] = [

    /* ======================================== */
    /* MATCH 01                                 */
    /* ======================================== */

    {

        date:
            "19. April 2026",

        league:
            "ECL LITE",

        opponent:
            "HC Punishers",

        opponentLogo:
            "/images/esport/hc-punishers-logo.png",

        degScore:
            8,

        opponentScore:
            2,

        home:
            true,

    },


    /* ======================================== */
    /* MATCH 02                                 */
    /* ======================================== */

    {

        date:
            "17. April 2026",

        league:
            "ECL LITE",

        opponent:
            "Nordic Nosebleed",

        opponentLogo:
            "/images/esport/nordic-nosebleed-logo.png",

        degScore:
            4,

        opponentScore:
            1,

        home:
            false,

    },


    /* ======================================== */
    /* MATCH 03                                 */
    /* ======================================== */

    {

        date:
            "16. April 2026",

        league:
            "ECL LITE",

        opponent:
            "MIESKISSAT",

        opponentLogo:
            "/images/esport/mieskissat.png",

        degScore:
            1,

        opponentScore:
            3,

        home:
            true,

    },

];