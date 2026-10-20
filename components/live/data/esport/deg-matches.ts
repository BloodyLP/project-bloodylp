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
    date: "20. Oktober 2026 ab 20.50 Uhr",

    league: "GCL SPIELTAG 8 + POKAL VF",

    // Erstes Spiel: GCL 13 – Spieltag 8
    opponent: "Deadly Phantoms",
    opponentLogo:
        "/images/esport/gcl13/deadly-phantoms.png",

    // Zweites Spiel: Pokal-Viertelfinale
    opponent2: "Hockeyholics",
        opponentLogo2:
        "/images/esport/gcl13/hockeyholics.png",
};


/* ============================================ */
/* SEASON STATS                                 */
/* ============================================ */

export const degSeasonStats = {
    games: 16,
    wins: 9,
    losses: 6,
    overtimeLosses: 1,
    goalsFor: 44,
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
        date: "19. Oktober 2026",

        league: "GCL 13",

        opponent: "SC Bern eSports",

        opponentLogo:
            "/images/esport/gcl13/scb-esports.png",

        degScore: 1,

        opponentScore: 0,

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
        date: "19. Oktober 2026",

        league: "GCL 13",

        opponent: "SC Bern eSports",

        opponentLogo:
            "/images/esport/gcl13/scb-esports.png",

        degScore: 1,

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
];