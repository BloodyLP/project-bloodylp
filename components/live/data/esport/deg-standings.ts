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
/* Aktueller Stand – 9 Mannschaften              */
/* Platz 1–8 Playoffs                            */
/* Platz 9 keine Playoffs                        */
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
    /* 01 – CONEXION                            */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */

    {
        position: 1,
        team: "Conexion",
        logo: "/images/esport/gcl13/conexion.png",
        players: 8,

        gamesPlayed: 8,
        wins: 6,
        overtimeWins: 0,
        overtimeLosses: 1,
        losses: 1,

        goalsFor: 27,
        goalsAgainst: 14,
        points: 19,

        powerplayPercentage: 20,
        penaltyKillPercentage: 81.82,
        pim: 22,
        shots: 173,
        faceoffPercentage: 49.73,
        hits: 113,
        last10: "6-1-1",

        playoffs: true,
    },


    /* ---------------------------------------- */
    /* 02 – THE LAST SHIFT                      */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */

    {
        position: 2,
        team: "The Last Shift",
        logo: "/images/esport/gcl13/the-last-shift.png",
        players: 5,

        gamesPlayed: 8,
        wins: 4,
        overtimeWins: 1,
        overtimeLosses: 0,
        losses: 3,

        goalsFor: 28,
        goalsAgainst: 21,
        points: 14,

        powerplayPercentage: 50,
        penaltyKillPercentage: 60,
        pim: 10,
        shots: 114,
        faceoffPercentage: 44.05,
        hits: 108,
        last10: "5-3-0",

        playoffs: true,
    },


    /* ---------------------------------------- */
    /* 03 – DEG ESPORTS                         */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */

    {
        position: 3,
        team: "DEG eSports",
        logo: "/images/esport/gcl13/deg-esports.png",
        players: 11,

        gamesPlayed: 6,
        wins: 3,
        overtimeWins: 0,
        overtimeLosses: 1,
        losses: 2,

        goalsFor: 17,
        goalsAgainst: 14,
        points: 10,

        powerplayPercentage: 60,
        penaltyKillPercentage: 80,
        pim: 10,
        shots: 78,
        faceoffPercentage: 53.51,
        hits: 30,
        last10: "3-2-1",

        playoffs: true,
        isDeg: true,
    },


    /* ---------------------------------------- */
    /* 04 – SCB ESPORTS                         */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */

    {
        position: 4,
        team: "SCB eSports",
        logo: "/images/esport/gcl13/scb-esports.png",
        players: 8,

        gamesPlayed: 6,
        wins: 2,
        overtimeWins: 1,
        overtimeLosses: 0,
        losses: 3,

        goalsFor: 15,
        goalsAgainst: 18,
        points: 8,

        powerplayPercentage: 33.33,
        penaltyKillPercentage: 75,
        pim: 32,
        shots: 76,
        faceoffPercentage: 55.3,
        hits: 59,
        last10: "3-3-0",

        playoffs: true,
    },


    /* ---------------------------------------- */
    /* 05 – HOCKEYHOLICS                       */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */

    {
        position: 5,
        team: "Hockeyholics",
        logo: "/images/esport/gcl13/hockeyholics.png",
        players: 7,

        gamesPlayed: 2,
        wins: 2,
        overtimeWins: 0,
        overtimeLosses: 0,
        losses: 0,

        goalsFor: 8,
        goalsAgainst: 4,
        points: 6,

        powerplayPercentage: null,
        penaltyKillPercentage: 100,
        pim: 4,
        shots: 42,
        faceoffPercentage: 54.05,
        hits: 12,
        last10: "2-0-0",

        playoffs: true,
    },


    /* ---------------------------------------- */
    /* 06 – GERMAN ELITE HOCKEY                 */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */

    {
        position: 6,
        team: "German Elite Hockey",
        logo: "/images/esport/gcl13/german-elite-hockey.png",
        players: 9,

        gamesPlayed: 6,
        wins: 1,
        overtimeWins: 1,
        overtimeLosses: 0,
        losses: 4,

        goalsFor: 12,
        goalsAgainst: 20,
        points: 5,

        powerplayPercentage: 7.14,
        penaltyKillPercentage: 57.14,
        pim: 14,
        shots: 94,
        faceoffPercentage: 47.3,
        hits: 90,
        last10: "2-4-0",

        playoffs: true,
    },


    /* ---------------------------------------- */
    /* 07 – REH GAMING                          */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */

    {
        position: 7,
        team: "REH Gaming",
        logo: "/images/esport/gcl13/reh-gaming.png",
        players: 6,

        gamesPlayed: 6,
        wins: 1,
        overtimeWins: 1,
        overtimeLosses: 0,
        losses: 4,

        goalsFor: 10,
        goalsAgainst: 18,
        points: 5,

        powerplayPercentage: null,
        penaltyKillPercentage: 100,
        pim: 16,
        shots: 55,
        faceoffPercentage: 46.61,
        hits: 39,
        last10: "2-4-0",

        playoffs: true,
    },


    /* ---------------------------------------- */
    /* 08 – ISERLOHN ROOSTERS ESPORTS           */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */

    {
        position: 8,
        team: "Iserlohn Roosters eSports",
        logo: "/images/esport/gcl13/iserlohn-roosters-esports.png",
        players: 5,

        gamesPlayed: 4,
        wins: 1,
        overtimeWins: 0,
        overtimeLosses: 1,
        losses: 2,

        goalsFor: 7,
        goalsAgainst: 13,
        points: 4,

        powerplayPercentage: 14.29,
        penaltyKillPercentage: 100,
        pim: 2,
        shots: 43,
        faceoffPercentage: 52.63,
        hits: 21,
        last10: "1-2-1",

        playoffs: true,
    },


    /* ---------------------------------------- */
    /* 09 – DEADLY PHANTOMS                     */
    /* PLAYOFFS: NEIN                           */
    /* ---------------------------------------- */

    {
        position: 9,
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

        playoffs: false,
    },
];