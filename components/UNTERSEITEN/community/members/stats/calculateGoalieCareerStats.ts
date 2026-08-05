/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * File:
 * calculateGoalieCareerStats.ts
 *
 * Description:
 * Berechnet die Karriere-Statistik
 * eines Torhüters.
 *
 * ============================================
 */

import type {

    GoalieSeasonStats,

} from "@/types/career-stats";

import type {

    GoalieCareerStatsData,

} from "./types";

function calculateTotal(

    seasons:GoalieSeasonStats[]

):GoalieSeasonStats{

    const games = seasons.reduce(

        (sum,row)=>sum+row.games,

        0

    );

    const wins = seasons.reduce(

        (sum,row)=>sum+row.wins,

        0

    );

    const losses = seasons.reduce(

        (sum,row)=>sum+row.losses,

        0

    );

    const overtimeLosses = seasons.reduce(

        (sum,row)=>sum+row.overtimeLosses,

        0

    );

    const shutouts = seasons.reduce(

        (sum,row)=>sum+row.shutouts,

        0

    );

    const goalsAgainstAverage =

        seasons.length > 0

            ? seasons.reduce(

                (sum,row)=>sum+row.goalsAgainstAverage,

                0

            ) / seasons.length

            : 0;

    const savePercentage =

        seasons.length > 0

            ? seasons.reduce(

                (sum,row)=>sum+row.savePercentage,

                0

            ) / seasons.length

            : 0;

    return{

        season:"GESAMT",

        year:"GESAMT",

        team:"BloodyArmy",

        games,

        goalsAgainstAverage,

        savePercentage,

        shutouts,

        wins,

        losses,

        overtimeLosses,

        playoffGames:seasons.reduce(

            (sum,row)=>sum+row.playoffGames,

            0

        ),

        playoffGoalsAgainstAverage:0,

        playoffSavePercentage:0,

        playoffShutouts:seasons.reduce(

            (sum,row)=>sum+row.playoffShutouts,

            0

        ),

        playoffWins:seasons.reduce(

            (sum,row)=>sum+row.playoffWins,

            0

        ),

        playoffLosses:seasons.reduce(

            (sum,row)=>sum+row.playoffLosses,

            0

        ),

        playoffOvertimeLosses:seasons.reduce(

            (sum,row)=>sum+row.playoffOvertimeLosses,

            0

        ),

        titles:[],

    };

}

export function buildGoalieCareerStats(

    seasons:GoalieSeasonStats[]

):GoalieCareerStatsData{

    return{

        seasons,

        regularSeason:seasons,

        playoffs:[],

        total:calculateTotal(seasons),

    };

}