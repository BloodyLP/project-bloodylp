/* ============================================ */
/*                                              */
/* BloodyLP                                     */
/*                                              */
/* ============================================ */
/*                                              */
/* Project:                                     */
/*                                              */
/* BloodyLP Website                             */
/*                                              */
/* File:                                        */
/*                                              */
/* components/live/data/esport/deg-standings.ts */
/*                                              */
/* Description:                                 */
/*                                              */
/* DEG eSports Tabellen-Daten.                  */
/*                                              */
/* ============================================ */

export type StandingTeam = {

    position:
        number;

    team:
        string;

    teamUrl?:
        string;

    logo:
        string;

    gamesPlayed:
        number;

    wins:
        number;

    overtimeWins:
        number;

    overtimeLosses:
        number;

    losses:
        number;

    goalsFor:
        number;

    goalsAgainst:
        number;

    points:
        number;

    isDeg?:
        boolean;

};



export const degStandingsLeague = {

    name:
        "ECL '26: SPRING - LITE",

    group:
        "GROUP 2",

    season:
        "2026",

    logo:
        "/images/esport/logos/ecl2.png",

};



export const degStandings: StandingTeam[] = [

    {
        position:
            1,

        team:
            "HC Punishers",

        teamUrl:
            "https://sportsgamer.gg/leagues/509/teams",

        logo:
            "/images/esport/hc-punishers-logo.png",

        gamesPlayed:
            28,

        wins:
            22,

        overtimeWins:
            2,

        overtimeLosses:
            1,

        losses:
            3,

        goalsFor:
            161,

        goalsAgainst:
            71,

        points:
            71,

    },



    {
        position:
            2,

        team:
            "MIESKISSAT",

        teamUrl:
            "https://sportsgamer.gg/leagues/509/teams",

        logo:
            "/images/esport/mieskissat.png",

        gamesPlayed:
            28,

        wins:
            16,

        overtimeWins:
            4,

        overtimeLosses:
            2,

        losses:
            6,

        goalsFor:
            117,

        goalsAgainst:
            83,

        points:
            58,

    },



    {
        position:
            3,

        team:
            "Silver Sword Griffins",

        teamUrl:
            "https://sportsgamer.gg/leagues/509/teams",

        logo:
            "/images/esport/silver-sword-griffins.png",

        gamesPlayed:
            28,

        wins:
            15,

        overtimeWins:
            4,

        overtimeLosses:
            5,

        losses:
            4,

        goalsFor:
            103,

        goalsAgainst:
            65,

        points:
            58,

    },



    {
        position:
            4,

        team:
            "Kokemus Puuttuu",

        teamUrl:
            "https://sportsgamer.gg/leagues/509/teams",

        logo:
            "/images/esport/kokemus-puuttuu.png",

        gamesPlayed:
            28,

        wins:
            13,

        overtimeWins:
            5,

        overtimeLosses:
            3,

        losses:
            7,

        goalsFor:
            74,

        goalsAgainst:
            56,

        points:
            52,

    },



    {
        position:
            5,

        team:
            "SSK Adepts",

        teamUrl:
            "https://sportsgamer.gg/leagues/509/teams",

        logo:
            "/images/esport/ssk-adepts.png",

        gamesPlayed:
            28,

        wins:
            13,

        overtimeWins:
            4,

        overtimeLosses:
            2,

        losses:
            9,

        goalsFor:
            86,

        goalsAgainst:
            76,

        points:
            49,

    },



    {
        position:
            6,

        team:
            "Rampa Bay",

        teamUrl:
            "https://sportsgamer.gg/leagues/509/teams",

        logo:
            "/images/esport/rampa-bay.png",

        gamesPlayed:
            28,

        wins:
            14,

        overtimeWins:
            2,

        overtimeLosses:
            3,

        losses:
            9,

        goalsFor:
            96,

        goalsAgainst:
            75,

        points:
            49,

    },



    {
        position:
            7,

        team:
            "Refuse Too Lose",

        teamUrl:
            "https://sportsgamer.gg/leagues/509/teams",

        logo:
            "/images/esport/refuse-too-lose.png",

        gamesPlayed:
            28,

        wins:
            15,

        overtimeWins:
            0,

        overtimeLosses:
            1,

        losses:
            12,

        goalsFor:
            100,

        goalsAgainst:
            92,

        points:
            46,

    },



    {
        position:
            8,

        team:
            "Resurrection",

        teamUrl:
            "https://sportsgamer.gg/leagues/509/teams",

        logo:
            "/images/esport/resurrection.png",

        gamesPlayed:
            28,

        wins:
            13,

        overtimeWins:
            2,

        overtimeLosses:
            1,

        losses:
            12,

        goalsFor:
            86,

        goalsAgainst:
            86,

        points:
            44,

    },



    {
        position:
            9,

        team:
            "DEG eSports",

        teamUrl:
            "https://sportsgamer.gg/leagues/509/teams/423",

        logo:
            "/images/esport/deg-esports-logo.png",

        gamesPlayed:
            28,

        wins:
            10,

        overtimeWins:
            5,

        overtimeLosses:
            3,

        losses:
            10,

        goalsFor:
            95,

        goalsAgainst:
            82,

        points:
            43,

        isDeg:
            true,

    },



    {
        position:
            10,

        team:
            "Kaupparit",

        teamUrl:
            "https://sportsgamer.gg/leagues/509/teams",

        logo:
            "/images/esport/kaupparit.png",

        gamesPlayed:
            28,

        wins:
            10,

        overtimeWins:
            4,

        overtimeLosses:
            5,

        losses:
            9,

        goalsFor:
            83,

        goalsAgainst:
            74,

        points:
            43,

    },



    {
        position:
            11,

        team:
            "ARMEIJAN KURI",

        teamUrl:
            "https://sportsgamer.gg/leagues/509/teams",

        logo:
            "/images/esport/armeijan-kuri.png",

        gamesPlayed:
            28,

        wins:
            8,

        overtimeWins:
            2,

        overtimeLosses:
            5,

        losses:
            13,

        goalsFor:
            92,

        goalsAgainst:
            103,

        points:
            33,

    },



    {
        position:
            12,

        team:
            "HC Nova Hut",

        teamUrl:
            "https://sportsgamer.gg/leagues/509/teams",

        logo:
            "/images/esport/hc-nova-hut.png",

        gamesPlayed:
            28,

        wins:
            10,

        overtimeWins:
            1,

        overtimeLosses:
            0,

        losses:
            17,

        goalsFor:
            82,

        goalsAgainst:
            125,

        points:
            32,

    },



    {
        position:
            13,

        team:
            "Sjukstugan",

        teamUrl:
            "https://sportsgamer.gg/leagues/509/teams",

        logo:
            "/images/esport/sjukstugan.png",

        gamesPlayed:
            28,

        wins:
            6,

        overtimeWins:
            0,

        overtimeLosses:
            1,

        losses:
            21,

        goalsFor:
            70,

        goalsAgainst:
            139,

        points:
            19,

    },



    {
        position:
            14,

        team:
            "Dynamo IHC",

        teamUrl:
            "https://sportsgamer.gg/leagues/509/teams",

        logo:
            "/images/esport/dynamo-ihc.png",

        gamesPlayed:
            28,

        wins:
            5,

        overtimeWins:
            0,

        overtimeLosses:
            2,

        losses:
            21,

        goalsFor:
            66,

        goalsAgainst:
            116,

        points:
            17,

    },



    {
        position:
            15,

        team:
            "Nordic Nosebleed",

        teamUrl:
            "https://sportsgamer.gg/leagues/509/teams",

        logo:
            "/images/esport/nordic-nosebleed-logo.png",

        gamesPlayed:
            28,

        wins:
            3,

        overtimeWins:
            2,

        overtimeLosses:
            3,

        losses:
            20,

        goalsFor:
            48,

        goalsAgainst:
            116,

        points:
            16,

    },

];