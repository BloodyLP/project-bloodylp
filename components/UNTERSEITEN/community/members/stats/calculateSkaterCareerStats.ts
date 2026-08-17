/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * File:
 * calculateSkaterCareerStats.ts
 *
 * Description:
 * Berechnet die Karriere-Statistiken
 * eines Skaters.
 *
 * ============================================
 */

import type {
    CareerSeasonStats,
} from "@/types/career-stats";

import type {
    SkaterCareerStatsData,
} from "./types";


/* ========================================= */
/* TOTAL BERECHNEN */
/* ========================================= */

function calculateTotal(

    seasons: CareerSeasonStats[]

): CareerSeasonStats {


    /*
    ============================================
    LEERE KARRIERE
    ============================================
    */

    if(seasons.length === 0){

        return {

            year:"TOTAL",

            team:"BloodyArmy",

            games:0,

            goals:0,

            assists:0,

            points:0,

            plusMinus:0,

            penaltyMinutes:0,


            /*
            ====================================
            PLAYOFFS
            ====================================
            */

            playoffGames:0,

            playoffGoals:0,

            playoffAssists:0,

            playoffPoints:0,

            playoffPlusMinus:0,

            playoffPenaltyMinutes:0,


            titles:[],

        };

    }


    /*
    ============================================
    REGULAR SEASON
    ============================================
    */

    const games = seasons.reduce(

        (sum,row) =>

            sum + row.games,

        0

    );


    const goals = seasons.reduce(

        (sum,row) =>

            sum + row.goals,

        0

    );


    const assists = seasons.reduce(

        (sum,row) =>

            sum + row.assists,

        0

    );


    const points = seasons.reduce(

        (sum,row) =>

            sum + row.points,

        0

    );


    const plusMinus = seasons.reduce(

        (sum,row) =>

            sum + row.plusMinus,

        0

    );


    const penaltyMinutes = seasons.reduce(

        (sum,row) =>

            sum + row.penaltyMinutes,

        0

    );


    /*
    ============================================
    PLAYOFFS
    ============================================
    */

    const playoffGames = seasons.reduce(

        (sum,row) =>

            sum + row.playoffGames,

        0

    );


    const playoffGoals = seasons.reduce(

        (sum,row) =>

            sum + row.playoffGoals,

        0

    );


    const playoffAssists = seasons.reduce(

        (sum,row) =>

            sum + row.playoffAssists,

        0

    );


    const playoffPoints = seasons.reduce(

        (sum,row) =>

            sum + row.playoffPoints,

        0

    );


    const playoffPlusMinus = seasons.reduce(

        (sum,row) =>

            sum + row.playoffPlusMinus,

        0

    );


    const playoffPenaltyMinutes = seasons.reduce(

        (sum,row) =>

            sum + row.playoffPenaltyMinutes,

        0

    );


    /*
    ============================================
    TITEL
    ============================================
    */

    const titles = [

        ...new Set(

            seasons.flatMap(

                row => row.titles

            )

        ),

    ];


    /*
    ============================================
    TOTAL
    ============================================
    */

    return {

        year:"TOTAL",

        team:"BloodyArmy",

        games,

        goals,

        assists,

        points,

        plusMinus,

        penaltyMinutes,


        playoffGames,

        playoffGoals,

        playoffAssists,

        playoffPoints,

        playoffPlusMinus,

        playoffPenaltyMinutes,


        titles,

    };

}


/* ========================================= */
/* BUILDER */
/* ========================================= */

export function buildSkaterCareerStats(

    seasons: CareerSeasonStats[]

): SkaterCareerStatsData {


    /*
    ============================================
    REGULAR SEASON
    ============================================
    */

    const regularSeason = seasons;


    /*
    ============================================
    PLAYOFFS
    ============================================
    */

    const playoffs = seasons;


    /*
    ============================================
    TOTAL
    ============================================
    */

    const total = calculateTotal(

        seasons

    );


    /*
    ============================================
    ERGEBNIS
    ============================================
    */

    return {

        seasons,

        regularSeason,

        playoffs,

        total,

    };

}