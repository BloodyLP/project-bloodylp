/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * File:
 * stats/data.ts
 *
 * Description:
 * Statische Karriere-Statistikdaten.
 *
 * ============================================
 */

import type {
    SkaterCareerStatsData,
} from "./types";


/* ========================================= */
/* LEERE KARRIERE-STATISTIK */
/* ========================================= */

export const emptyCareerStats: SkaterCareerStatsData = {

    seasons: [],

    regularSeason: [],

    playoffs: [],

    total: {

        year: "GESAMT",

        team: "BloodyArmy",

        games: 0,

        goals: 0,

        assists: 0,

        points: 0,

        plusMinus: 0,

        penaltyMinutes: 0,


        playoffGames: 0,

        playoffGoals: 0,

        playoffAssists: 0,

        playoffPoints: 0,

        playoffPlusMinus: 0,

        playoffPenaltyMinutes: 0,


        titles: [],

    },

};


/* ========================================= */
/* FOUNDER STATISTIK */
/* ========================================= */

export const founderStats: SkaterCareerStatsData = {

    seasons: [

        {

            year: "2019/20",

            team: "BloodyArmy",

            games: 0,

            goals: 0,

            assists: 0,

            points: 0,

            plusMinus: 0,

            penaltyMinutes: 0,


            playoffGames: 0,

            playoffGoals: 0,

            playoffAssists: 0,

            playoffPoints: 0,

            playoffPlusMinus: 0,

            playoffPenaltyMinutes: 0,


            titles: [],

        },

    ],


    regularSeason: [

        {

            year: "2019/20",

            team: "BloodyArmy",

            games: 0,

            goals: 0,

            assists: 0,

            points: 0,

            plusMinus: 0,

            penaltyMinutes: 0,


            playoffGames: 0,

            playoffGoals: 0,

            playoffAssists: 0,

            playoffPoints: 0,

            playoffPlusMinus: 0,

            playoffPenaltyMinutes: 0,


            titles: [],

        },

    ],


    playoffs: [],


    total: {

        year: "GESAMT",

        team: "BloodyArmy",

        games: 0,

        goals: 0,

        assists: 0,

        points: 0,

        plusMinus: 0,

        penaltyMinutes: 0,


        playoffGames: 0,

        playoffGoals: 0,

        playoffAssists: 0,

        playoffPoints: 0,

        playoffPlusMinus: 0,

        playoffPenaltyMinutes: 0,


        titles: [],

    },

};