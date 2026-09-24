/* ============================================ */
/*                                              */
/* BloodyLP                                     */
/*                                              */
/* Project:                                     */
/* BloodyLP Website                             */
/*                                              */
/* File:                                        */
/* components/live/data/esport/deg-standings.ts */
/*                                              */
/* Description:                                 */
/* GCL 13 – Division 1                           */
/* Aktueller Stand – 9 Mannschaften             */
/* Platz 1–8 Playoffs                            */
/* Platz 9 keine Playoffs                       */
/*                                              */
/* ============================================ */

export type DegStandingsLeague = {
    name: string;
    logo: string;
    group: string;
    season: string;
};

/* ============================================ */
/* LEAGUE DATA                                  */
/* ============================================ */

export const degStandingsLeague: DegStandingsLeague = {
    name: "GCL 13",
    logo: "/images/esport/logos/gcl.png",
    group: "DIVISION I",
    season: "",
};

/* ============================================ */
/* TEAM                                         */
/* ============================================ */

export type DegStanding = {
    position: number;
    team: string;
    logo: string;
    players: number;

    /* ---------------------------------------- */
    /* GAME RECORD                              */
    /* ---------------------------------------- */

    gamesPlayed: number;
    wins: number;
    overtimeWins: number;
    overtimeLosses: number;
    losses: number;

    /* ---------------------------------------- */
    /* GOALS / POINTS                           */
    /* ---------------------------------------- */

    goalsFor: number;
    goalsAgainst: number;
    points: number;

    /* ---------------------------------------- */
    /* ADDITIONAL STATISTICS                    */
    /* ---------------------------------------- */

    powerplayPercentage?: number | null;
    penaltyKillPercentage?: number | null;
    pim: number;
    shots: number;
    faceoffPercentage?: number | null;
    hits: number;
    last10: string;

    /* ---------------------------------------- */
    /* PLAYOFF STATUS                           */
    /* ---------------------------------------- */

    /**
     * Platz 1–8 = Playoffs
     * Platz 9 = keine Playoffs
     */
    playoffs: boolean;

    /**
     * Kennzeichnung für DEG eSports
     */
    isDeg?: boolean;
};

/* ============================================ */
/* GCL 13 – DIVISION 1                          */
/*                                              */
/* 9 TEAMS                                      */
/* 8 PLAYOFF-PLÄTZE                             */
/* 1 TEAM OHNE PLAYOFFS                         */
/* ============================================ */

export const degStandings: DegStanding[] = [
    /* ---------------------------------------- */
    /* 01 – DEG ESPORTS                         */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */
    {
        position: 1,
        team: "DEG eSports",
        logo: "/images/esport/gcl13/deg-esports.png",
        players: 11,

        gamesPlayed: 4,
        wins: 3,
        overtimeWins: 0,
        overtimeLosses: 1,
        losses: 0,

        goalsFor: 14,
        goalsAgainst: 8,
        points: 10,

        powerplayPercentage: 66.67,
        penaltyKillPercentage: 75,
        pim: 8,
        shots: 57,
        faceoffPercentage: 53.85,
        hits: 15,
        last10: "3-0-1",

        playoffs: true,
        isDeg: true,
    },

    /* ---------------------------------------- */
    /* 02 – CONEXION                            */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */
    {
        position: 2,
        team: "Conexion",
        logo: "/images/esport/gcl13/conexion.png",
        players: 8,

        gamesPlayed: 2,
        wins: 2,
        overtimeWins: 0,
        overtimeLosses: 0,
        losses: 0,

        goalsFor: 8,
        goalsAgainst: 2,
        points: 6,

        powerplayPercentage: null,
        penaltyKillPercentage: 100,
        pim: 2,
        shots: 37,
        faceoffPercentage: 46.67,
        hits: 25,
        last10: "2-0-0",

        playoffs: true,
    },

    /* ---------------------------------------- */
    /* 03 – THE LAST SHIFT                      */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */
    {
        position: 3,
        team: "The Last Shift",
        logo: "/images/esport/gcl13/the-last-shift.png",
        players: 5,

        gamesPlayed: 4,
        wins: 1,
        overtimeWins: 1,
        overtimeLosses: 0,
        losses: 2,

        goalsFor: 14,
        goalsAgainst: 11,
        points: 5,

        powerplayPercentage: 60,
        penaltyKillPercentage: 50,
        pim: 8,
        shots: 56,
        faceoffPercentage: 43.68,
        hits: 50,
        last10: "2-2-0",

        playoffs: true,
    },

    /* ---------------------------------------- */
    /* 04 – REH GAMING                          */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */
    {
        position: 4,
        team: "REH Gaming",
        logo: "/images/esport/gcl13/reh-gaming.png",
        players: 6,

        gamesPlayed: 4,
        wins: 1,
        overtimeWins: 1,
        overtimeLosses: 0,
        losses: 2,

        goalsFor: 6,
        goalsAgainst: 10,
        points: 5,

        powerplayPercentage: null,
        penaltyKillPercentage: 100,
        pim: 10,
        shots: 33,
        faceoffPercentage: 46.91,
        hits: 32,
        last10: "2-2-0",

        playoffs: true,
    },

    /* ---------------------------------------- */
    /* 05 – SCB ESPORTS                         */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */
    {
        position: 5,
        team: "SCB eSports",
        logo: "/images/esport/gcl13/scb-esports.png",
        players: 8,

        gamesPlayed: 2,
        wins: 1,
        overtimeWins: 0,
        overtimeLosses: 0,
        losses: 1,

        goalsFor: 6,
        goalsAgainst: 9,
        points: 3,

        powerplayPercentage: 33.33,
        penaltyKillPercentage: 33.33,
        pim: 6,
        shots: 27,
        faceoffPercentage: 57.14,
        hits: 22,
        last10: "1-1-0",

        playoffs: true,
    },

    /* ---------------------------------------- */
    /* 06 – DEADLY PHANTOMS                     */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */
    {
        position: 6,
        team: "Deadly Phantoms",
        logo: "/images/esport/gcl13/deadly-phantoms.png",
        players: 7,

        gamesPlayed: 2,
        wins: 0,
        overtimeWins: 0,
        overtimeLosses: 1,
        losses: 1,

        goalsFor: 2,
        goalsAgainst: 4,
        points: 1,

        powerplayPercentage: null,
        penaltyKillPercentage: 100,
        pim: 8,
        shots: 30,
        faceoffPercentage: 61.11,
        hits: 10,
        last10: "0-1-1",

        playoffs: true,
    },

    /* ---------------------------------------- */
    /* 07 – HOCKEYHOLICS                        */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */
    {
        position: 7,
        team: "Hockeyholics",
        logo: "/images/esport/gcl13/hockeyholics.png",
        players: 7,

        gamesPlayed: 0,
        wins: 0,
        overtimeWins: 0,
        overtimeLosses: 0,
        losses: 0,

        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,

        powerplayPercentage: null,
        penaltyKillPercentage: null,
        pim: 0,
        shots: 0,
        faceoffPercentage: null,
        hits: 0,
        last10: "0-0-0",

        playoffs: true,
    },

    /* ---------------------------------------- */
    /* 08 – ISERLOHN ROOSTERS ESPORTS            */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */
    {
        position: 8,
        team: "Iserlohn Roosters eSports",
        logo: "/images/esport/gcl13/iserlohn-roosters-esports.png",
        players: 5,

        gamesPlayed: 0,
        wins: 0,
        overtimeWins: 0,
        overtimeLosses: 0,
        losses: 0,

        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,

        powerplayPercentage: null,
        penaltyKillPercentage: null,
        pim: 0,
        shots: 0,
        faceoffPercentage: null,
        hits: 0,
        last10: "0-0-0",

        playoffs: true,
    },

    /* ---------------------------------------- */
    /* 09 – GERMAN ELITE HOCKEY                 */
    /* PLAYOFFS: NEIN                           */
    /* ---------------------------------------- */
    {
        position: 9,
        team: "German Elite Hockey",
        logo: "/images/esport/gcl13/german-elite-hockey.png",
        players: 9,

        gamesPlayed: 2,
        wins: 0,
        overtimeWins: 0,
        overtimeLosses: 0,
        losses: 2,

        goalsFor: 3,
        goalsAgainst: 9,
        points: 0,

        powerplayPercentage: null,
        penaltyKillPercentage: 50,
        pim: 4,
        shots: 30,
        faceoffPercentage: 47.5,
        hits: 29,
        last10: "0-2-0",

        playoffs: false,
    },
];
