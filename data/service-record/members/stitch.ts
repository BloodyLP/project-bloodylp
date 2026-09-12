/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Data:
 * stitch
 *
 * Description:
 * Service Record Datensatz von stitch.
 *
 * ============================================
 */

import type { ServiceRecordMember } from "@/types/service-record";


export const stitch: ServiceRecordMember = {

    /**
     * Interne UUID
     */
    id:"BA-997",

    /**
     * URL
     */
    slug:"stitch",

    /**
     * Service Record Nummer
     */
    recordNumber:"BA-997",

    /**
     * Anzeigename
     */
    name:"Stitch",

    /**
     * Avatar
     */
    avatar:"/members/stitch/avatar2.png",

    /**
     * Dienstgrad
     */
    rank:"bundeswehr-obergefreiter",

    /**
     * Organisation
     */
    organization:"youngArmy",

    /**
     * Position
     */
    position:"leftDefense",

    /**
     * Spielertyp
     */
    playerType:"skater",

    /**
     * Trikotnummer
     */
    playerNumber:"44",

    /**
     * Reihe
     */
    line:0,

    /**
     * Eintrittsjahr
     */
    enlisted:"30. September 2018",

    /**
     * Prestige
     */
    prestige:0,

    /**
     * Patreon
     */
    patreon:0,

    /**
     * Aktiv
     */
    active:false,

    /**
     * Sichtbar
     */
    visible:true,

    /**
     * Verstorben
     */
    deceased:true,

        /**
     * Gedenktext
     */
    memorialText:
        "Sein Andenken bleibt für immer Teil der BloodyArmy.",

    /**
     * Decorations
     */
    decorations:[],

        /* ========================================= */
    /* AHL – MEISTE ASSISTS                       */
    /* ========================================= */

    ahlMeisteAssists: {

        years: [2025],

    },


    /* ========================================= */
    /* AHL – BESTE PLUS-MINUS                     */
    /* ========================================= */

    ahlBestePlusMinus: {

        years: [2022],

    },

        calderCup:{

        years:[

            2021,

            2025,

        ],

    },

                robertWClarkeTrophy: {

        years: [2020,2021,2025],

    },

    /**
     * Ribbon Rack
     */
    ribbons:[],

    /**
     * Medaillen
     */
    medals:[],

    /**
     * Abzeichen
     */
    badges:[],

    /**
     * Achievements
     */
    achievements:[],

    /**
     * Karriere Statistiken
     */
    stats:{

        seasons:[


            {

                year:"19/20",

                    team: "Young Army",

                games: 68,

                goals:14,

                assists:20,

                points:34,

                plusMinus:2,

                penaltyMinutes:20,

                playoffGames:24,

                playoffGoals:6,

                playoffAssists:5,

                playoffPoints:11,

                playoffPlusMinus:-7,

                playoffPenaltyMinutes:4,

                titles:[]

            },

            {

                year:"20/21",

                    team: "Young Army",

                games:68,

                goals:19,

                assists:40,

                points:59,

                plusMinus:18,

                penaltyMinutes:31,

                playoffGames:20,

                playoffGoals:6,

                playoffAssists:12,

                playoffPoints:18,

                playoffPlusMinus:4,

                playoffPenaltyMinutes:2,

                titles:[]

            },

            {

                year:"21/22",

                    team: "Young Army",

                games:82,

                goals:3,

                assists:24,

                points:27,

                plusMinus:19,

                penaltyMinutes:12,

                playoffGames:0,

                playoffGoals:0,

                playoffAssists:0,

                playoffPoints:0,

                playoffPlusMinus:0,

                playoffPenaltyMinutes:0,

                titles:[]

            },

            {

                year:"22/23",

                    team: "Young Army",

                games:82,

                goals:3,

                assists:23,

                points:26,

                plusMinus:8,

                penaltyMinutes:14,

                playoffGames:20,

                playoffGoals:0,

                playoffAssists:4,

                playoffPoints:4,

                playoffPlusMinus:4,

                playoffPenaltyMinutes:0,

                titles:[]

            },

            {

                year:"23/24",

                    team: "Young Army",

                games:72,

                goals:7,

                assists:35,

                points:42,

                plusMinus:2,

                penaltyMinutes:10,

                playoffGames:8,

                playoffGoals:0,

                playoffAssists:4,

                playoffPoints:4,

                playoffPlusMinus:2,

                playoffPenaltyMinutes:2,

                titles:[]

            },

            {

                year:"24/25",

                    team: "Young Army",

                games:82,

                goals:4,

                assists:42,

                points:46,

                plusMinus:10,

                penaltyMinutes:10,

                playoffGames:22,

                playoffGoals:5,

                playoffAssists:9,

                playoffPoints:14,

                playoffPlusMinus:4,

                playoffPenaltyMinutes:0,

                titles:[]

            },

        ]

    },

    /**
     * Bemerkung
     */
    remarks:"In Gedenken",

};