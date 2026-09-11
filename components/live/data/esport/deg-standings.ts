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
/* deg-standings.ts                             */
/*                                              */
/* Description:                                 */
/* GCL 13 – aktuelle Mannschaften                */
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

    name:
        "GCL 13",

    logo:
        "/images/esport/logos/gcl.png",

    group:
        "DIVISION I",

    season:
        "",

};


/* ============================================ */
/* TEAM                                          */
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

    isDeg?: boolean;

};


/* ============================================ */
/* GCL 13                                         */
/* ============================================ */

export const degStandings: DegStanding[] = [

    {
        position: 1,

        team:
            "Black Ice Ravens",

        logo:
            "/images/esport/gcl13/black-ice-ravens.png",

        players:
            8,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

    },


    {
        position: 2,

        team:
            "Catastrophic Turnovers",

        logo:
            "/images/esport/gcl13/catastrophic-turnovers.jpg",

        players:
            5,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

    },


    {
        position: 3,

        team:
            "Clowns On Ice",

        logo:
            "/images/esport/gcl13/clowns-on-ice.png",

        players:
            4,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

    },


    {
        position: 4,

        team:
            "Conexion",

        logo:
            "/images/esport/gcl13/conexion.png",

        players:
            6,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

    },


    {
        position: 5,

        team:
            "DEG eSports",

        logo:
            "/images/esport/gcl13/deg-esports.png",

        players:
            8,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

        isDeg:
            true,

    },


    {
        position: 6,

        team:
            "EC Kassel Huskies eSports",

        logo:
            "/images/esport/gcl13/ec-kassel-huskies-esports.png",

        players:
            6,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

    },


    {
        position: 7,

        team:
            "EHC Olten eSports",

        logo:
            "/images/esport/gcl13/ehc-olten-esports.png",

        players:
            6,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

    },


    {
        position: 8,

        team:
            "German Elite Hockey",

        logo:
            "/images/esport/gcl13/german-elite-hockey.png",

        players:
            9,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

    },


    {
        position: 9,

        team:
            "Hammer Eisbären eSports",

        logo:
            "/images/esport/gcl13/hammer-eisbaeren-esports.png",

        players:
            7,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

    },


    {
        position: 10,

        team:
            "Hockeyholics",

        logo:
            "/images/esport/gcl13/hockeyholics.png",

        players:
            6,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

    },


    {
        position: 11,

        team:
            "Iserlohn Roosters eSports",

        logo:
            "/images/esport/gcl13/iserlohn-roosters-esports.png",

        players:
            1,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

    },


    {
        position: 12,

        team:
            "Old but Gold",

        logo:
            "/images/esport/gcl13/old-but-gold.png",

        players:
            9,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

    },


    {
        position: 13,

        team:
            "Outlaws Hockey",

        logo:
            "/images/esport/gcl13/outlaws-hockey.png",

        players:
            8,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

    },


    {
        position: 14,

        team:
            "REH Gaming",

        logo:
            "/images/esport/gcl13/reh-gaming.png",

        players:
            6,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

    },


    {
        position: 15,

        team:
            "SCB eSports",

        logo:
            "/images/esport/gcl13/scb-esports.png",

        players:
            8,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

    },


    {
        position: 16,

        team:
            "Valhalla Vikings HC",

        logo:
            "/images/esport/gcl13/valhalla-vikings-hc.png",

        players:
            8,

        gamesPlayed:
            0,

        wins:
            0,

        overtimeWins:
            0,

        overtimeLosses:
            0,

        losses:
            0,

        goalsFor:
            0,

        goalsAgainst:
            0,

        points:
            0,

    },

];