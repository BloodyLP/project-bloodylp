/* ============================================ */
/* BloodyArmy                                   */
/* ============================================ */
/*                                              */
/* Project:                                     */
/* BloodyLP Website                             */
/*                                              */
/* File:                                        */
/* deg-matches.ts                               */
/*                                              */
/* Description:                                 */
/* Spiel- und Ergebnisdaten der                 */
/* DEG eSport Mannschaft.                       */
/*                                              */
/* ============================================ */


/* ============================================ */
/* TYPES                                        */
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
/* UPCOMING MATCH TYPE                          */
/* ============================================ */

export type UpcomingMatch = {
    date:
        string;

    league:
        string;

    opponent:
        string;

    opponentLogo:
        string;

    opponent2?:
        string;

    opponentLogo2?:
        string;
};


/* ============================================ */
/* DEG TEAM                                     */
/* ============================================ */

export const degTeam = {
    name:
        "DEG eSports",

    logo:
        "/images/esport/deg-esports-logo.png",
};


/* ============================================ */
/* NEXT MATCH                                   */
/* ============================================ */

export const upcomingMatch: UpcomingMatch = {
    date:
        "Montag, 21. September 2026 ab 20.20 Uhr",

    league:
        "GCL POKAL / SPIELTAG 1",

    opponent:
        "Outlaws Hockey",

    opponentLogo:
        "/images/esport/gcl13/outlaws-hockey.png",

    opponent2:
        "The Last Shift",

    opponentLogo2:
        "/images/esport/gcl13/the-last-shift.png",
};

/* ============================================ */
/* SEASON STATS                                 */
/* ============================================ */

export const degSeasonStats = {
    games: 0,
    wins: 0,
    losses: 0,
    overtimeLosses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
};


/* ============================================ */
/* MATCH RESULTS                                */
/* ============================================ */

export const degMatches: DegMatch[] = [

    /* ======================================== */
    /* MATCH 01                                 */
    /* ======================================== */

    {
        date:
            "21. September 2026",

        league:
            "GCL 13",

        opponent:
            "The Last Shift",

        opponentLogo:
            "/images/esport/gcl13/the-last-shift.png",

        degScore:
            2,

        opponentScore:
            3,

        home:
            true,
    },


    /* ======================================== */
    /* MATCH 02                                 */
    /* ======================================== */

    {
        date:
            "21. September 2026",

        league:
            "GCL 13",

        opponent:
            "The Last Shift",

        opponentLogo:
            "/images/esport/gcl13/the-last-shift.png",

        degScore:
            0,

        opponentScore:
            0,

        home:
            false,
    },


    /* ======================================== */
    /* MATCH 03                                 */
    /* ======================================== */

    {
        date:
            "21. September 2026",

        league:
            "GCL 13 - Pokal",

        opponent:
            "Outlaws Hockey",

        opponentLogo:
            "/images/esport/gcl13/outlaws-hockey.png",

        degScore:
            7,

        opponentScore:
            0,

        home:
            false,
    },
];