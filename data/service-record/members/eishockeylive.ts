/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Data:
 * eishockeylive
 *
 * Description:
 * Service Record Datensatz von eishockeylive.
 *
 * ============================================
 */

import type { ServiceRecordMember } from "@/types/service-record";

export const eishockeylive: ServiceRecordMember = {
    /**
     * Interne UUID
     */
    id: "BA-037",

    /**
     * URL
     */
    slug: "eishockeylive",

    /**
     * Service Record Nummer
     */
    recordNumber: "BA-037",

    /**
     * Anzeigename
     */
    name: "EishockeyLive",

    /**
     * Avatar
     */
    avatar: "/members/eishockeylive/avatar.png",

    /**
     * Dienstgrad
     */
    rank: "bundeswehr-stabshauptmann",

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
     */
    playerType: "skater",

    /**
     * Trikotnummer
     */
    playerNumber: "32",

    /**
     * Reihe
     */
    line: 1,

    /**
     * Eintrittsjahr
     */
    enlisted: "10. September 2018",

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
    decorations: [
        "stanley-cup",
    ],

    /**
     * Stanley Cup
     */
    stanleyCup: {
        years: [
            2025,
        ],
    },

    /**
     * Presidents' Trophy
     */
    presidentsTrophy: {
        years: [
            2025,
        ],
    },

    /**
     * Clarence S. Campbell Trophy
     */
    clarenceSCampbellTrophy: {
        years: [
            2025,
        ],
    },

    /**
     * NHL Beste Plus/Minus
     */
    nhlBestePlusMinus: {
        years: [
            2020,
        ],
    },

        /* ========================================= */
    /* AHL – BESTE PLUS-MINUS                     */
    /* ========================================= */

    ahlBestePlusMinus: {

        years: [2023],

    },

        /* ========================================= */
    /* AHL PLAYOFFS – BESTE PLUS-MINUS            */
    /* ========================================= */

    ahlPoBestePlusMinus: {

        years: [2026],

    },

            /**
     * Calder Cup
     */
    calderCup:{

        years:[

            2021,
            2026,

        ],

    },

            robertWClarkeTrophy: {

        years: [2021,2026],

    },

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
     * Karriere Statistiken
     */
    stats: {
        seasons: [
           
            {
                year: "20/21",
                team:"Young Army",
                games: 68,
                goals: 5,
                assists: 8,
                points: 13,
                plusMinus: 9,
                penaltyMinutes: 4,

                playoffGames: 20,
                playoffGoals: 4,
                playoffAssists: 2,
                playoffPoints: 6,
                playoffPlusMinus: 10,
                playoffPenaltyMinutes: 4,

                titles: [],
            },

            {
                year: "21/22",
                team:"Young Army",
                games: 82,
                goals: 22,
                assists: 26,
                points: 48,
                plusMinus: 9,
                penaltyMinutes: 39,

                playoffGames: 0,
                playoffGoals: 0,
                playoffAssists: 0,
                playoffPoints: 0,
                playoffPlusMinus: 0,
                playoffPenaltyMinutes: 0,

                titles: [],
            },

            {
                year: "22/23",
                team:"Young Army",
                games: 82,
                goals: 23,
                assists: 28,
                points: 51,
                plusMinus: 33,
                penaltyMinutes: 20,

                playoffGames: 20,
                playoffGoals: 5,
                playoffAssists: 7,
                playoffPoints: 12,
                playoffPlusMinus: 2,
                playoffPenaltyMinutes: 0,

                titles: [],
            },

            {
                year: "23/24",
                team:"bloodyarmy",
                games: 82,
                goals: 8,
                assists: 4,
                points: 12,
                plusMinus: 10,
                penaltyMinutes: 2,

                playoffGames: 19,
                playoffGoals: 0,
                playoffAssists: 2,
                playoffPoints: 2,
                playoffPlusMinus: -1,
                playoffPenaltyMinutes: 4,

                titles: [],
            },

            {
                year: "24/25",
                team:"bloodyarmy",
                games: 82,
                goals: 2,
                assists: 6,
                points: 8,
                plusMinus: 10,
                penaltyMinutes: 4,

                playoffGames: 18,
                playoffGoals: 3,
                playoffAssists: 0,
                playoffPoints: 3,
                playoffPlusMinus: 3,
                playoffPenaltyMinutes: 5,

                titles: [],
            },

            {
                year: "25/26",
                team:"Young Army",
                games: 82,
                goals: 17,
                assists: 26,
                points: 43,
                plusMinus: 24,
                penaltyMinutes: 4,

                playoffGames: 19,
                playoffGoals: 5,
                playoffAssists: 7,
                playoffPoints: 12,
                playoffPlusMinus: 15,
                playoffPenaltyMinutes: 0,

                titles: [],
            },
        ],
    },

    /**
     * Bemerkung
     */
    remarks: "BloodyArmy mit der Nummer 32.",
};