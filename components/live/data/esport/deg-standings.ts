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
/* GCL 13 – aktuelle Mannschaften               */
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

    isDeg?: boolean;

};


/* ============================================ */
/* GCL 13                                       */
/* ============================================ */

export const degStandings: DegStanding[] = [

    /* ---------------------------------------- */
    /* 01 – BLACK ICE RAVENS                    */
    /* ---------------------------------------- */

    {
        position: 1,

        team:
            "Black Ice Ravens",

        logo:
            "/images/esport/gcl13/black-ice-ravens.png",

        players:
            11,

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


    /* ---------------------------------------- */
    /* 02 – CATASTROPHIC TURNOVERS             */
    /* ---------------------------------------- */

    {
        position: 2,

        team:
            "Catastrophic Turnovers",

        logo:
            "/images/esport/gcl13/catastrophic-turnovers.jpg",

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


    /* ---------------------------------------- */
    /* 03 – CLOWNS ON ICE                      */
    /* ---------------------------------------- */

    {
        position: 3,

        team:
            "Clowns On Ice",

        logo:
            "/images/esport/gcl13/clowns-on-ice.png",

        players:
            10,

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


    /* ---------------------------------------- */
    /* 04 – CONEXION                            */
    /* ---------------------------------------- */

    {
        position: 4,

        team:
            "Conexion",

        logo:
            "/images/esport/gcl13/conexion.png",

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


    /* ---------------------------------------- */
    /* 05 – DEADLY PHANTOMS                    */
    /* ---------------------------------------- */

    {
        position: 5,

        team:
            "Deadly Phantoms",

        logo:
            "/images/esport/gcl13/deadly-phantoms.png",

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


    /* ---------------------------------------- */
    /* 06 – DEG ESPORTS                        */
    /* ---------------------------------------- */

    {
        position: 6,

        team:
            "DEG eSports",

        logo:
            "/images/esport/gcl13/deg-esports.png",

        players:
            11,

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


    /* ---------------------------------------- */
    /* 07 – EC KASSEL HUSKIES ESPORTS          */
    /* ---------------------------------------- */

    {
        position: 7,

        team:
            "EC Kassel Huskies eSports",

        logo:
            "/images/esport/gcl13/ec-kassel-huskies-esports.png",

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


    /* ---------------------------------------- */
    /* 08 – EHC OLTEN ESPORTS                  */
    /* ---------------------------------------- */

    {
        position: 8,

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


    /* ---------------------------------------- */
    /* 09 – GERMAN ELITE HOCKEY                */
    /* ---------------------------------------- */

    {
        position: 9,

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


    /* ---------------------------------------- */
    /* 10 – HAMMER EISBÄREN ESPORTS            */
    /* ---------------------------------------- */

    {
        position: 10,

        team:
            "Hammer Eisbären eSports",

        logo:
            "/images/esport/gcl13/hammer-eisbaeren-esports.png",

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


    /* ---------------------------------------- */
    /* 11 – EISHOCKEYNET YETIS                 */
    /* ---------------------------------------- */

    {
        position: 11,

        team:
            "Eishockeynet Yetis",

        logo:
            "/images/esport/gcl13/eishockeynet-yetis.png",

        players:
            3,

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


    /* ---------------------------------------- */
    /* 12 – HOCKEYHOLICS                       */
    /* ---------------------------------------- */

    {
        position: 12,

        team:
            "Hockeyholics",

        logo:
            "/images/esport/gcl13/hockeyholics.png",

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


    /* ---------------------------------------- */
    /* 13 – ISERLOHN ROOSTERS ESPORTS          */
    /* ---------------------------------------- */

    {
        position: 13,

        team:
            "Iserlohn Roosters eSports",

        logo:
            "/images/esport/gcl13/iserlohn-roosters-esports.png",

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


    /* ---------------------------------------- */
    /* 14 – OLD BUT GOLD                       */
    /* ---------------------------------------- */

    {
        position: 14,

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


    /* ---------------------------------------- */
    /* 15 – OUTLAWS HOCKEY                     */
    /* ---------------------------------------- */

    {
        position: 15,

        team:
            "Outlaws Hockey",

        logo:
            "/images/esport/gcl13/outlaws-hockey.png",

        players:
            12,

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


    /* ---------------------------------------- */
    /* 16 – REH GAMING                         */
    /* ---------------------------------------- */

    {
        position: 16,

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


    /* ---------------------------------------- */
    /* 17 – SC RACKELBAHN EV                   */
    /* ---------------------------------------- */

    {
        position: 17,

        team:
            "SC Rackelbahn eV",

        logo:
            "/images/esport/gcl13/sc-rackelhahn.png",

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


    /* ---------------------------------------- */
    /* 18 – SCB ESPORTS                        */
    /* ---------------------------------------- */

    {
        position: 18,

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


    /* ---------------------------------------- */
    /* 19 – THE LAST SHIFT                     */
    /* ---------------------------------------- */

    {
        position: 19,

        team:
            "The Last Shift",

        logo:
            "/images/esport/gcl13/the-last-shift.jpg",

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


    /* ---------------------------------------- */
    /* 20 – VALHALLA VIKINGS HC                */
    /* ---------------------------------------- */

    {
        position: 20,

        team:
            "Valhalla Vikings HC",

        logo:
            "/images/esport/gcl13/valhalla-vikings-hc.png",

        players:
            10,

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