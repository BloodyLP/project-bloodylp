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
    date: "03. November 2026 ab 20.50 Uhr",

    league: "GCL 13 - PLAYOFF HF",

    // Erstes Spiel: GCL 13 – Spieltag 8
    opponent: "Hockeyholics",
    opponentLogo: "/images/esport/gcl13/hockeyholics.png",
};


/* ============================================ */
/* SEASON STATS                                 */
/* ============================================ */

export const degSeasonStats = {
    games: 28,
    wins: 17,
    losses: 9,
    overtimeLosses: 2,
    goalsFor: 74,
    goalsAgainst: 64,
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
        date: "02. November 2026",

        league: "GCL 13 - Playoff Halbfinale",

        opponent: "Hockeyholics",

        opponentLogo:
            "/images/esport/gcl13/hockeyholics.png",

        degScore: 5,

        opponentScore: 3,

        overtime: false,

        shootout: false,

        home: true,
    },


    /* ======================================== */
    /* MATCH 02                                  */
    /* ======================================== */
    /* DEG gewinnt regulär                       */
    /* Ergebnis: 3:2                            */
    /* ======================================== */

    {
        date: "02. November 2026",

        league: "GCL 13 - Playoff Halbfinale",

        opponent: "Hockeyholics",

        opponentLogo:
            "/images/esport/gcl13/hockeyholics.png",

        degScore: 0,

        opponentScore: 4,

        overtime: false,

        shootout: false,

        home: false,
    },


    /* ======================================== */
    /* MATCH 03                                  */
    /* ======================================== */
    /* DEG gewinnt regulär                       */
    /* Ergebnis: 7:0                            */
    /* ======================================== */

   {
        date: "29. Oktober 2026",

        league: "GCL 13 - Playoff Viertelfinale",

        opponent: "German Elite Hockey",

        opponentLogo:
            "/images/esport/gcl13/german-elite-hockey.png",

        degScore: 3,

        opponentScore: 2,

        overtime: false,

        shootout: false,

        home: false,
    },
];