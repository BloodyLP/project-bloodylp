/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Data:
 * tonska
 *
 * Description:
 * Service Record Datensatz von tonska.
 *
 * ============================================
 */

import type {
    ServiceRecordMember,
} from "@/types/service-record";


export const tonska: ServiceRecordMember = {

    /**
     * Interne UUID
     */
    id: "BA-019",


    /**
     * URL
     */
    slug: "maeusefinger",


    /**
     * Service Record Nummer
     */
    recordNumber: "BA-019",


    /**
     * Anzeigename
     */
    name: "tonska",


    /**
     * Avatar
     */
    avatar: "/members/tonska/avatar.png",


    /**
     * Dienstgrad
     */
    rank: "bundeswehr-obergefreiter",


    /**
     * Organisation
     */
    organization: "youngArmy",


    /**
     * Position
     */
    position: "leftWing",


    /**
     * Spielertyp
     *
     * Die MemberCard bleibt ein SKATER.
     */
    playerType: "skater",


    /**
     * Dual Role
     *
     * tonska war sowohl Skater
     * als auch Goalie.
     */
    dualRole: true,


    /**
     * Trikotnummer
     */
    playerNumber: "2",


    /**
     * Reihe
     */
    line: 3,


    /**
     * Eintrittsjahr
     */
    enlisted: "08. Juli 2018",


    /**
     * Prestige
     */
    prestige: 0,


    /**
     * Patreon
     */
    patreon: 0,


    /**
     * Aktiv
     */
    active: true,


    /**
     * Sichtbar
     */
    visible: true,


    /**
     * Decorations
     */
    decorations: [],


    /**
     * Ribbon Rack
     */
    ribbons: [],


    /**
     * Medaillen
     */
    medals: [],


    /**
     * Abzeichen
     */
    badges: [],


    /**
     * Achievements
     */
    achievements: [],

        /**
     * Calder Cup
     */
    calderCup:{

        years:[

            2019,

            2021,

            2025,

            2026,

        ],

    },


    /**
     * Karriere Statistiken
     */
    stats: {

        /*
        ========================================
        SKATER
        ========================================
        */

        skater: {

            seasons: [

                /*
                --------------------------------
                18/19
                --------------------------------
                */

                {

                    year: "18/19",

                    team: "Young Army",

                    games: 76,

                    goals: 24,

                    assists: 33,

                    points: 57,

                    plusMinus: -15,

                    penaltyMinutes: 20,


                    playoffGames: 23,

                    playoffGoals: 7,

                    playoffAssists: 9,

                    playoffPoints: 16,

                    playoffPlusMinus: 15,

                    playoffPenaltyMinutes: 6,


                    titles: [],

                },


                /*
                --------------------------------
                23/24
                --------------------------------
                */

                {

                    year: "23/24",

                    team: "Young Army",

                    games: 72,

                    goals: 30,

                    assists: 35,

                    points: 65,

                    plusMinus: 1,

                    penaltyMinutes: 32,


                    playoffGames: 8,

                    playoffGoals: 4,

                    playoffAssists: 4,

                    playoffPoints: 8,

                    playoffPlusMinus: 8,

                    playoffPenaltyMinutes: 2,


                    titles: [],

                },


                /*
                --------------------------------
                24/25
                --------------------------------
                */

                {

                    year: "24/25",

                    team: "Young Army",

                    games: 82,

                    goals: 17,

                    assists: 10,

                    points: 27,

                    plusMinus: 3,

                    penaltyMinutes: 8,


                    playoffGames: 22,

                    playoffGoals: 5,

                    playoffAssists: 5,

                    playoffPoints: 10,

                    playoffPlusMinus: 6,

                    playoffPenaltyMinutes: 2,


                    titles: [],

                },


                /*
                --------------------------------
                25/26
                --------------------------------
                */

                {

                    year: "25/26",

                    team: "Young Army",

                    games: 82,

                    goals: 9,

                    assists: 5,

                    points: 14,

                    plusMinus: -1,

                    penaltyMinutes: 4,


                    playoffGames: 19,

                    playoffGoals: 1,

                    playoffAssists: 8,

                    playoffPoints: 9,

                    playoffPlusMinus: 3,

                    playoffPenaltyMinutes: 0,


                    titles: [],

                },

            ],

        },


        /*
        ========================================
        GOALIE
        ========================================
        */

        goalie: {

            seasons: [

                /*
                --------------------------------
                19/20
                --------------------------------
                */

                {

                    year: "19/20",

                    team: "Young Army",

                    games: 40,

                    goalsAgainstAverage: 2.71,

                    savePercentage: 83.9,

                    shutouts: 2,

                    wins: 24,

                    losses: 14,

                    overtimeLosses: 2,


                    playoffGames: 23,

                    playoffGoalsAgainstAverage: 2.33,

                    playoffSavePercentage: 87.2,

                    playoffShutouts: 2,

                    playoffWins: 13,

                    playoffLosses: 9,

                    playoffOvertimeLosses: 1,


                    titles: [],

                },


                /*
                --------------------------------
                20/21
                --------------------------------
                */

                {

                    year: "20/21",

                    team: "Young Army",

                    games: 43,

                    goalsAgainstAverage: 3.07,

                    savePercentage: 85.7,

                    shutouts: 2,

                    wins: 28,

                    losses: 14,

                    overtimeLosses: 1,


                    playoffGames: 19,

                    playoffGoalsAgainstAverage: 2.08,

                    playoffSavePercentage: 90.0,

                    playoffShutouts: 3,

                    playoffWins: 14,

                    playoffLosses: 4,

                    playoffOvertimeLosses: 1,


                    titles: [],

                },


                /*
                --------------------------------
                21/22
                --------------------------------
                */

                {

                    year: "21/22",

                    team: "Young Army",

                    games: 57,

                    goalsAgainstAverage: 3.79,

                    savePercentage: 79.9,

                    shutouts: 1,

                    wins: 26,

                    losses: 25,

                    overtimeLosses: 6,


                    playoffGames: 0,

                    playoffGoalsAgainstAverage: 0,

                    playoffSavePercentage: 0,

                    playoffShutouts: 0,

                    playoffWins: 0,

                    playoffLosses: 0,

                    playoffOvertimeLosses: 0,


                    titles: [],

                },


                /*
                --------------------------------
                22/23
                --------------------------------
                */

                {

                    year: "22/23",

                    team: "Young Army",

                    games: 66,

                    goalsAgainstAverage: 2.87,

                    savePercentage: 80.4,

                    shutouts: 5,

                    wins: 33,

                    losses: 24,

                    overtimeLosses: 8,


                    playoffGames: 16,

                    playoffGoalsAgainstAverage: 2.87,

                    playoffSavePercentage: 89.9,

                    playoffShutouts: 1,

                    playoffWins: 11,

                    playoffLosses: 3,

                    playoffOvertimeLosses: 2,


                    titles: [],

                },

            ],

        },

    },


    /**
     * Bemerkung
     */
    remarks:
        "Spielte sowohl als Feldspieler als auch als Torhüter für die Young Army.",

};