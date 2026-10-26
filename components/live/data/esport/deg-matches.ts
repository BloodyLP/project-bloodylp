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
    date: "26. Oktober 2026",

    league: "GCL 13 - PLAYOFF VF",

    // Erstes Spiel: GCL 13 – Spieltag 8
    opponent: "German Elite Hockey",
    opponentLogo: "/images/esport/gcl13/german-elite-hockey.png",
};


/* ============================================ */
/* SEASON STATS                                 */
/* ============================================ */

export const degSeasonStats = {
    games: 19,
    wins: 11,
    losses: 6,
    overtimeLosses: 2,
    goalsFor: 50,
    goalsAgainst: 41,
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
        date: "20. Oktober 2026",

        league: "GCL 13 - Pokal VF",

        opponent: "Hockeyholics",

        opponentLogo:
            "/images/esport/gcl13/hockeyholics.png",

        degScore: 2,

        opponentScore: 1,

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
        date: "20. Oktober 2026",

        league: "GCL 13",

        opponent: "Deadly Phantoms",

        opponentLogo:
            "/images/esport/gcl13/deadly-phantoms.png",

        degScore: 3,

        opponentScore: 4,

        overtime: true,

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
        date: "20. Oktober 2026",

        league: "GCL 13",

        opponent: "Deadly Phantoms",

        opponentLogo:
            "/images/esport/gcl13/deadly-phantoms.png",

        degScore: 1,

        opponentScore: 0,

        overtime: false,

        shootout: false,

        home: true,
    },
];