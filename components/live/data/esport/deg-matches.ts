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
    date: "Mittwoch, 23. September 2026, 21.50 Uhr",

    league: "GCL SPIELTAG 2",

    opponent: "German Elite Hockey",

    opponentLogo:
        "/images/esport/gcl13/german-elite-hockey.png",
};


/* ============================================ */
/* SEASON STATS                                 */
/* ============================================ */

export const degSeasonStats = {
    games: 3,
    wins: 2,
    losses: 0,
    overtimeLosses: 1,
    goalsFor: 12,
    goalsAgainst: 5,
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
        date: "21. September 2026",

        league: "GCL 13",

        opponent: "The Last Shift",

        opponentLogo:
            "/images/esport/gcl13/the-last-shift.png",

        degScore: 2,

        opponentScore: 3,

        overtime: true,

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
        date: "21. September 2026",

        league: "GCL 13",

        opponent: "The Last Shift",

        opponentLogo:
            "/images/esport/gcl13/the-last-shift.png",

        degScore: 3,

        opponentScore: 2,

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
        date: "21. September 2026",

        league: "GCL 13 - Pokal",

        opponent: "Outlaws Hockey",

        opponentLogo:
            "/images/esport/gcl13/outlaws-hockey.png",

        degScore: 7,

        opponentScore: 0,

        overtime: false,

        shootout: false,

        home: false,
    },
];