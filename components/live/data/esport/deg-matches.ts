/* ============================================ */
/*                                              */
/* BloodyArmy                                   */
/*                                              */
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
    date: string;

    league: string;

    opponent: string;

    opponentLogo: string;

    degScore: number | null;

    opponentScore: number | null;

    /**
     * true = Spiel wurde nach Verlängerung entschieden
     * Anzeige: n.V.
     */
    overtime?: boolean;

    /**
     * true = Spiel wurde nach Penaltyschießen entschieden
     * Anzeige: n.P.
     */
    shootout?: boolean;

    home: boolean;
};


/* ============================================ */
/* UPCOMING MATCH TYPE                          */
/* ============================================ */

export type UpcomingMatch = {
    date: string;

    league: string;

    opponent: string;

    opponentLogo: string;

    opponent2?: string;

    opponentLogo2?: string;
};


/* ============================================ */
/* DEG TEAM                                     */
/* ============================================ */

export const degTeam = {
    name: "DEG eSports",

    logo: "/images/esport/deg-esports-logo.png",
};


/* ============================================ */
/* NEXT MATCH                                   */
/* ============================================ */

export const upcomingMatch: UpcomingMatch = {
    date: "TBD",

    league: "GCL SPIELTAG 7",

    opponent: "TBD",

    opponentLogo:
        "",
};


/* ============================================ */
/* SEASON STATS                                 */
/* ============================================ */

export const degSeasonStats = {
    games: 14,
    wins: 7,
    losses: 6,
    overtimeLosses: 1,
    goalsFor: 42,
    goalsAgainst: 36,
};


/* ============================================ */
/* MATCH RESULTS                                */
/* ============================================ */

export const degMatches: DegMatch[] = [

    /* ======================================== */
    /* MATCH 01                                  */
    /* ======================================== */
    /* DEG verliert nach Verlängerung            */
    /* Ergebnis: 2:3 n.V.                       */
    /* ======================================== */

    {
        date: "12. Oktober 2026",

        league: "GCL 13",

        opponent: "Iserlohn Roosters eSports",

        opponentLogo:
            "/images/esport/gcl13/iserlohn-roosters-esports.png",

        degScore: 3,

        opponentScore: 1,

        overtime: false,

        shootout: false,

        home: false,
    },


    /* ======================================== */
    /* MATCH 02                                  */
    /* ======================================== */
    /* DEG gewinnt regulär                       */
    /* Ergebnis: 3:2                            */
    /* ======================================== */

    {
        date: "12. Oktober 2026",

        league: "GCL 13",

        opponent: "Iserlohn Roosters eSports",

        opponentLogo:
            "/images/esport/gcl13/iserlohn-roosters-esports.png",

        degScore: 4,

        opponentScore: 0,

        overtime: false,

        shootout: false,

        home: true,
    },


    /* ======================================== */
    /* MATCH 03                                  */
    /* ======================================== */
    /* DEG gewinnt regulär                       */
    /* Ergebnis: 7:0                            */
    /* ======================================== */

     {
        date: "07. Oktober 2026",

        league: "GCL 13",

        opponent: "HockeyHolics",

        opponentLogo:
            "/images/esport/gcl13/hockeyholics.png",

        degScore: 3,

        opponentScore: 5,

        overtime: false,

        shootout: false,

        home: false,
    },
];