/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * File:
 * calculateSkaterCareerStats.ts
 *
 * Description:
 * Berechnet die Karriere-Statistik
 * eines Feldspielers.
 *
 * ============================================
 */

import type {

    SkaterSeasonStats,

} from "@/types/career-stats";

import type {

    SkaterCareerStatsData,

} from "./types";

function calculateTotal(

    seasons:SkaterSeasonStats[]

):SkaterSeasonStats{

    return{

        season:"GESAMT",

        year:"GESAMT",

        team:"BloodyArmy",

        games:seasons.reduce(

            (sum,row)=>sum+row.games,

            0

        ),

        goals:seasons.reduce(

            (sum,row)=>sum+row.goals,

            0

        ),

        assists:seasons.reduce(

            (sum,row)=>sum+row.assists,

            0

        ),

        points:seasons.reduce(

            (sum,row)=>sum+row.points,

            0

        ),

        plusMinus:seasons.reduce(

            (sum,row)=>sum+row.plusMinus,

            0

        ),

        penaltyMinutes:seasons.reduce(

            (sum,row)=>sum+row.penaltyMinutes,

            0

        ),

        playoffGames:seasons.reduce(

            (sum,row)=>sum+row.playoffGames,

            0

        ),

        playoffGoals:seasons.reduce(

            (sum,row)=>sum+row.playoffGoals,

            0

        ),

        playoffAssists:seasons.reduce(

            (sum,row)=>sum+row.playoffAssists,

            0

        ),

        playoffPoints:seasons.reduce(

            (sum,row)=>sum+row.playoffPoints,

            0

        ),

        playoffPlusMinus:seasons.reduce(

            (sum,row)=>sum+row.playoffPlusMinus,

            0

        ),

        playoffPenaltyMinutes:seasons.reduce(

            (sum,row)=>sum+row.playoffPenaltyMinutes,

            0

        ),

        titles:[],

    };

}

export function buildSkaterCareerStats(

    seasons:SkaterSeasonStats[]

):SkaterCareerStatsData{

    return{

        seasons,

        regularSeason:seasons,

        playoffs:[],

        total:calculateTotal(seasons),

    };

}