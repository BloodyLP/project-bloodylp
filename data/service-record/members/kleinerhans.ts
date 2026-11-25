/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Data:
 * KleinerHans
 *
 * Description:
 * Service Record Datensatz von KleinerHans.
 *
 * ============================================
 */

import type {
    ServiceRecordMember,
} from "@/types/service-record";


export const kleinerhans: ServiceRecordMember = {

    /**
     * Interne UUID
     */
    id:"BA-053",


    /**
     * URL
     */
    slug:"kleinerhans",


    /**
     * Service Record Nummer
     */
    recordNumber:"BA-053",


    /**
     * Anzeigename
     */
    name:"Kleiner Hans",


    /**
     * Avatar
     */
    avatar:"/members/kleinerhans/avatar.png",


    /**
     * Dienstgrad
     */
    rank:"bundeswehr-soldat",


    /**
     * Organisation
     */
    organization:"youngArmy",


    /**
     * Position
     */
    position:"goalie",


    /**
     * Spielertyp
     */
    playerType:"goalie",


    /**
     * Trikotnummer
     */
    playerNumber:"5",


    /**
     * Reihe
     */
    line:1,


    /**
     * Eintrittsjahr
     */
    enlisted:"17. April 2023",


    /**
     * Prestige
     */
    prestige:0,


   /**
 * Patreon
 */
patreon: 0,


    /**
     * Aktiv
     */
    active:true,


    /**
     * Sichtbar
     */
    visible:true,


    /**
     * Decorations
     */
    decorations:[

    ],


    /**
     * Stanley Cup
     */


        /**
     * President's Trophy
     */


     /**
     * Clarence S. Campbell Trophy
     */

          /* CALDER CUP */

calderCup: {
    years: [
        2025, 2026,
    ],
},

/* ROBERT W. CLARKE TROPHY */

robertWClarkeTrophy: {
    years: [
        2025, 2026,
    ],
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
     * ========================================
     * KARRIERE STATISTIKEN
     * ========================================
     *
     * Kleiner Hans ist ausschließlich Torhüter.
     *
     * Deshalb liegen die Daten unter:
     *
     * stats.goalie.seasons
     *
     * ========================================
     */

    stats:{

        goalie:{

            seasons:[

                /* ================================= */
                /* 23/24 */
                /* ================================= */

                {

                    year:"23/24",

                    team:"Young Army",

                    games:52,

                    goalsAgainstAverage:3.08,

                    savePercentage:85.8,

                    shutouts:2,

                    wins:29,

                    losses:18,

                    overtimeLosses:2,

                    playoffGames:4,

                    playoffGoalsAgainstAverage:2.98,

                    playoffSavePercentage:85.9,

                    playoffShutouts:0,

                    playoffWins:1,

                    playoffLosses:2,

                    playoffOvertimeLosses:1,

                    titles:[],

                },


                /* ================================= */
                /* 24/25 */
                /* ================================= */

                {

                    year:"24/25",

                    team:"Young Army",

                    games:43,

                    goalsAgainstAverage:2.12,

                    savePercentage:87.9,

                    shutouts:1,

                    wins:26,

                    losses:14,

                    overtimeLosses:2,

                    playoffGames:11,

                    playoffGoalsAgainstAverage:2.05,

                    playoffSavePercentage:86.2,

                    playoffShutouts:1,

                    playoffWins:9,

                    playoffLosses:2,

                    playoffOvertimeLosses:0,

                    titles:[],

                },


                /* ================================= */
                /* 25/26 */
                /* ================================= */

                {

                    year:"25/26",

                    team:"Young Army",

                    games:42,

                    goalsAgainstAverage:1.69,

                    savePercentage:89.2,

                    shutouts:7,

                    wins:27,

                    losses:11,

                    overtimeLosses:4,

                    playoffGames:9,

                    playoffGoalsAgainstAverage: 2.16,

                    playoffSavePercentage:86.3,

                    playoffShutouts:0,

                    playoffWins:7,

                    playoffLosses:2,

                    playoffOvertimeLosses:0,

                    titles:[],

                },

            ],

        },

    },


    /**
     * Bemerkung
     */
    remarks:"Torhüter der BloodyArmy mit der Nummer 27.",

};