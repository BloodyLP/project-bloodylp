/* ============================================ */
/*                                              */
/* BloodyLP                                     */
/*                                              */
/* ============================================ */
/*                                              */
/* Project:                                     */
/* BloodyLP Website                             */
/*                                              */
/* File:                                        */
/* components/live/data/esport/deg-standings.ts */
/*                                              */
/* Description:                                 */
/* GCL 13 – Division 1                          */
/* Finale 9 Mannschaften                         */
/* Platz 1–8 Playoffs                           */
/* Platz 9 keine Playoffs                       */
/*                                              */
/* ============================================ */


/* ============================================ */
/* LEAGUE                                       */
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

    gamesPlayed: number;

    wins: number;
    overtimeWins: number;
    overtimeLosses: number;
    losses: number;

    goalsFor: number;
    goalsAgainst: number;
    points: number;

    /*
     * Playoff-Status:
     * Platz 1–8 = true
     * Platz 9    = false
     */
    playoffs: boolean;

    /*
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

        gamesPlayed: 0,

        wins: 0,
        overtimeWins: 0,
        overtimeLosses: 0,
        losses: 0,

        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,

        playoffs: true,

        isDeg: true,
    },


    /* ---------------------------------------- */
    /* 02 – GERMAN ELITE HOCKEY                */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */

    {
        position: 2,

        team: "German Elite Hockey",
        logo: "/images/esport/gcl13/german-elite-hockey.png",
        players: 9,

        gamesPlayed: 0,

        wins: 0,
        overtimeWins: 0,
        overtimeLosses: 0,
        losses: 0,

        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,

        playoffs: true,
    },


    /* ---------------------------------------- */
    /* 03 – HOCKEYHOLICS                       */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */

    {
        position: 3,

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

        playoffs: true,
    },


    /* ---------------------------------------- */
    /* 04 – CONEXION                            */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */

    {
        position: 4,

        team: "Conexion",
        logo: "/images/esport/gcl13/conexion.png",
        players: 8,

        gamesPlayed: 0,

        wins: 0,
        overtimeWins: 0,
        overtimeLosses: 0,
        losses: 0,

        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,

        playoffs: true,
    },


    /* ---------------------------------------- */
    /* 05 – ISERLOHN ROOSTERS ESPORTS          */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */

    {
        position: 5,

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

        playoffs: true,
    },


    /* ---------------------------------------- */
    /* 06 – REH GAMING                         */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */

    {
        position: 6,

        team: "REH Gaming",
        logo: "/images/esport/gcl13/reh-gaming.png",
        players: 6,

        gamesPlayed: 0,

        wins: 0,
        overtimeWins: 0,
        overtimeLosses: 0,
        losses: 0,

        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,

        playoffs: true,
    },


    /* ---------------------------------------- */
    /* 07 – SCB ESPORTS                        */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */

    {
        position: 7,

        team: "SCB eSports",
        logo: "/images/esport/gcl13/scb-esports.png",
        players: 8,

        gamesPlayed: 0,

        wins: 0,
        overtimeWins: 0,
        overtimeLosses: 0,
        losses: 0,

        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,

        playoffs: true,
    },


    /* ---------------------------------------- */
    /* 08 – DEADLY PHANTOMS                    */
    /* PLAYOFFS: JA                             */
    /* ---------------------------------------- */

    {
        position: 8,

        team: "Deadly Phantoms",
        logo: "/images/esport/gcl13/deadly-phantoms.png",
        players: 7,

        gamesPlayed: 0,

        wins: 0,
        overtimeWins: 0,
        overtimeLosses: 0,
        losses: 0,

        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,

        playoffs: true,
    },


    /* ---------------------------------------- */
    /* 09 – THE LAST SHIFT                     */
    /* PLAYOFFS: NEIN                           */
    /* ---------------------------------------- */

    {
        position: 9,

        team: "The Last Shift",
        logo: "/images/esport/gcl13/the-last-shift.jpg",
        players: 5,

        gamesPlayed: 0,

        wins: 0,
        overtimeWins: 0,
        overtimeLosses: 0,
        losses: 0,

        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,

        playoffs: false,
    },
];