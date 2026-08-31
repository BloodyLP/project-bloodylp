/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Data:
 * Sackzefix
 *
 * Description:
 * Service Record Datensatz von Sackzefix
 *
 * ============================================
 */

import type { ServiceRecordMember } from "@/types/service-record";

export const sackzefix: ServiceRecordMember = {

    /**
     * Interne UUID
     */
    id:"BA-012",

    /**
     * URL
     */
    slug:"sackzefix",

    /**
     * Service Record Nummer
     */
    recordNumber:"BA-012",

    /**
     * Anzeigename
     */
    name:"Sackzefix",

    /**
     * Avatar
     */
    avatar:"/members/sackzefix/avatar.png",

    /**
     * Dienstgrad
     */
    rank:"bundeswehr-stabskorporal",

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
    playerNumber:"15",

    /**
     * Reihe
     */
    line:1,

    /**
     * Eintrittsjahr
     */
    enlisted:"24. November 2024",

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

        /**
     * Calder Cup
     */
    calderCup:{

        years:[

            2025,

            2026,

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

                games:78,

                goals:3,

                assists:10,

                points:13,

                plusMinus:14,

                penaltyMinutes:0,

                playoffGames:20,

                playoffGoals:1,

                playoffAssists:2,

                playoffPoints:3,

                playoffPlusMinus:9,

                playoffPenaltyMinutes:2,

                titles:[]

            },

            {

                year:"25/26",

                team:"Young Army",

                games:82,

                goals:5,

                assists:28,

                points:33,

                plusMinus:32,

                penaltyMinutes:6,

                playoffGames:19,

                playoffGoals:1,

                playoffAssists:11,

                playoffPoints:12,

                playoffPlusMinus:13,

                playoffPenaltyMinutes:2,

                titles:[]

            },

        ]

    },

    /**
     * Bemerkung
     */
    remarks:"",

};