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
    date: "30. September 2026 ab 20.50 Uhr",

    league: "GCL SPIELTAG 4",

    opponent: "REH Gaming",

    opponentLogo:
        "/images/esport/gcl13/reh-gaming.png",
};


/* ============================================ */
/* SEASON STATS                                 */
/* ============================================ */

export const degSeasonStats = {
    games: 7,
    wins: 4,
    losses: 2,
    overtimeLosses: 1,
    goalsFor: 24,
    goalsAgainst: 14,
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
        date: "28. September 2026",

        league: "GCL 13",

        opponent: "Conexion",

        opponentLogo:
            "/images/esport/gcl13/conexion.png",

        degScore: 1,

        opponentScore: 3,

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
        date: "28. September 2026",

        league: "GCL 13",

        opponent: "German Elite Hockey",

        opponentLogo:
            "/images/esport/gcl13/conexion.png",

        degScore: 2,

        opponentScore: 3,

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
        date: "23. September 2026",

        league: "GCL 13",

        opponent: "German Elite Hockey",

        opponentLogo:
            "/images/esport/gcl13/german-elite-hockey.png",

        degScore: 5,

        opponentScore: 1,

        overtime: false,

        shootout: false,

        home: true,
    },
];