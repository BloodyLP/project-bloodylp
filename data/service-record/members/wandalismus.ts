/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Data:
 * WandaLismus
 *
 * Description:
 * Service Record Datensatz von WandaLismus
 *
 * ============================================
 */

import type { ServiceRecordMember } from "@/types/service-record";

export const wandalismus: ServiceRecordMember = {

    /**
     * Interne UUID
     */
    id:"BA-054",

    /**
     * URL
     */
    slug:"wandalismus",

    /**
     * Service Record Nummer
     */
    recordNumber:"BA-054",

    /**
     * Anzeigename
     */
    name:"WandaLismus",

    /**
     * Avatar
     */
    avatar:"/members/wandalismus/avatar.png",

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
    position:"leftWing",

    /**
     * Spielertyp
     */
    playerType:"skater",

    /**
     * Trikotnummer
     */
    playerNumber:"55",

    /**
     * Reihe
     */
    line:4,

    /**
     * Eintrittsjahr
     */
    enlisted:"25. Juli 2025",

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
        2026,
    ],
},

/* ROBERT W. CLARKE TROPHY */

robertWClarkeTrophy: {
    years: [
        2026,
    ],
},

    /**
     * Karriere Statistiken
     */
    stats:{

        seasons:[

            {

                year:"25/26",

                team:"Young Army",

                games:57,

                goals:3,

                assists:3,

                points:6,

                plusMinus:6,

                penaltyMinutes:2,

                playoffGames:9,

                playoffGoals:3,

                playoffAssists:2,

                playoffPoints:5,

                playoffPlusMinus:2,

                playoffPenaltyMinutes:0,

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