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
/* NEXT MATCH                                  */
/* ============================================ */

export const upcomingMatch: UpcomingMatch = {
    date: "TBD",

    league: "GCL 13 - PLAYOFF FINALE",

    // Erstes Spiel: GCL 13 – Spieltag 8
    opponent: "Hockeyholics",
    opponentLogo: "",
};


/* ============================================ */
/* SEASON STATS                                 */
/* ============================================ */

export const degSeasonStats = {
    games: 33,
    wins: 20,
    losses: 11,
    overtimeLosses: 2,
    goalsFor: 84,
    goalsAgainst: 75,
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
        date: "03. November 2026",

        league: "GCL 13 - Playoff Halbfinale",

        opponent: "Hockeyholics",

        opponentLogo:
            "/images/esport/gcl13/hockeyholics.png",

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
        date: "03. November 2026",

        league: "GCL 13 - Playoff Halbfinale",

        opponent: "Hockeyholics",

        opponentLogo:
            "/images/esport/gcl13/hockeyholics.png",

        degScore: 3,

        opponentScore: 1,

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
        date: "03. November 2026",

        league: "GCL 13 - Playoff Viertelfinale",

        opponent: "Hockeyholics",

        opponentLogo:
            "/images/esport/gcl13/hockeyholics.png",

        degScore: 4,

        opponentScore: 3,

        overtime: false,

        shootout: false,

        home: false,
    },
];