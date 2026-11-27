/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Data:
 * Phrasenschwein
 *
 * Description:
 * Service Record Datensatz von Phrasenschwein
 *
 * ============================================
 */

import type { ServiceRecordMember } from "@/types/service-record";

export const phrasenschwein: ServiceRecordMember = {

    /**
     * Interne UUID
     */
    id:"BA-059",

    /**
     * URL
     */
    slug:"phrasenschwein",

    /**
     * Service Record Nummer
     */
    recordNumber:"BA-059",

    /**
     * Anzeigename
     */
    name:"Phrasenschwein",
    /**
     * 
    /**
     * Avatar
     */
    avatar:"/members/phrasenschwein/avatar.png",

    /**
     * Dienstgrad
     */
    rank:"bundeswehr-stabsgefreiter",

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
    playerNumber:"52",

    /**
     * Reihe
     */
    line:1,

    /**
     * Eintrittsjahr
     */
    enlisted:"21. Mai 2021",

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
    active:true,

    /**
     * Sichtbar
     */
    visible:true,

    /**
     * Decorations
     */
    decorations:[],

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

/* ========================================= */
/* AHL – REGULAR SEASON                      */
/* ========================================= */

/* AHL – MEISTE ASSISTS */

ahlMeisteAssists: {
    years: [
        2026,
    ],
},


/* AHL – MEISTE STRAFMINUTEN */

ahlMeisteStrafminuten: {
    years: [
        2025, 2026
    ],
},



/* ========================================= */
/* AHL – PLAYOFFS                            */
/* ========================================= */


/* AHL PLAYOFFS – TOPSCORER */


ahlPoMeisteAssists: {
    years: [
        2025,
    ],
},

    /**
     * Karriere Statistiken
     */
    stats:{

        seasons:[

            {

                year:"24/25",

                team:"Young Army",

                games:82,

                goals:15,

                assists:24,

                points:39,

                plusMinus:9,

                penaltyMinutes:15,

                playoffGames:22,

                playoffGoals:1,

                playoffAssists:10,

                playoffPoints:11,

                playoffPlusMinus:6,

                playoffPenaltyMinutes:2,

                titles:[]

            },


            {

                year:"25/26",

                team:"Young Army",

                games:82,

                goals:9,

                assists:34,

                points:43,

                plusMinus:23,

                penaltyMinutes:6,

                playoffGames:19,

                playoffGoals:2,

                playoffAssists:9,

                playoffPoints:11,

                playoffPlusMinus:15,

                playoffPenaltyMinutes:2,

                titles:[]

            },

                        {

                year:"26/27",

                team:"Young Army",

                games:0,

                goals:0,

                assists:0,

                points:0,

                plusMinus:0,

                penaltyMinutes:0,

                playoffGames:0,

                playoffGoals:0,

                playoffAssists:0,

                playoffPoints:0,

                playoffPlusMinus:0,

                playoffPenaltyMinutes:0,

                titles:[]

            },

        ]

    },

    /**
     * Bemerkung
     */
    remarks:"",

};