/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * File:
 * calculateGoalieCareerStats.ts
 *
 * Description:
 * Berechnet die Karriere-Statistiken
 * eines Torhüters.
 *
 * ============================================
 */

import type {
    CareerGoalieSeasonStats,
} from "@/types/career-stats";

import type {
    GoalieCareerStatsData,
} from "./types";


/* ========================================= */
/* TOTAL BERECHNEN */
/* ========================================= */

function calculateTotal(

    seasons: CareerGoalieSeasonStats[]

): CareerGoalieSeasonStats {


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

            wins:0,

            losses:0,

            overtimeLosses:0,

            ties:0,

            shutouts:0,

            goalsAgainst:0,

            saves:0,

            shotsAgainst:0,

            savePercentage:0,

            goalsAgainstAverage:0,


            /*
            ====================================
            PLAYOFFS
            ====================================
            */

            playoffGames:0,

            playoffWins:0,

            playoffLosses:0,

            playoffOvertimeLosses:0,

            playoffShutouts:0,

            playoffGoalsAgainst:0,

            playoffSaves:0,

            playoffShotsAgainst:0,

            playoffSavePercentage:0,

            playoffGoalsAgainstAverage:0,


            titles:[],

        };

    }


    /*
    ============================================
    GRUNDWERTE
    ============================================
    */

    const games = seasons.reduce(

        (sum,row) =>

            sum + row.games,

        0

    );


    const wins = seasons.reduce(

        (sum,row) =>

            sum + row.wins,

        0

    );


    const losses = seasons.reduce(

        (sum,row) =>

            sum + row.losses,

        0

    );


    const overtimeLosses = seasons.reduce(

        (sum,row) =>

            sum +

            (row.overtimeLosses ?? 0),

        0

    );


    const ties = seasons.reduce(

        (sum,row) =>

            sum +

            (row.ties ?? 0),

        0

    );


    const shutouts = seasons.reduce(

        (sum,row) =>

            sum + row.shutouts,

        0

    );


    /*
    ============================================
    TOR-GEGEN
    ============================================
    */

    const goalsAgainst = seasons.reduce(

        (sum,row) =>

            sum +

            (row.goalsAgainst ?? 0),

        0

    );


    /*
    ============================================
    SAVES
    ============================================
    */

    const saves = seasons.reduce(

        (sum,row) =>

            sum +

            (row.saves ?? 0),

        0

    );


    /*
    ============================================
    SCHÜSSE GEGEN
    ============================================
    */

    const shotsAgainst = seasons.reduce(

        (sum,row) =>

            sum +

            (row.shotsAgainst ?? 0),

        0

    );


    /*
    ============================================
    SAVE PERCENTAGE
    ============================================
    */

    const savePercentage =

        shotsAgainst > 0

            ?

            (

                saves /

                shotsAgainst

            ) * 100

            :

            0;


    /*
    ============================================
    GOALS AGAINST AVERAGE
    ============================================
    */

    const goalsAgainstAverage =

        games > 0

            ?

            goalsAgainst /

            games

            :

            0;


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


    const playoffWins = seasons.reduce(

        (sum,row) =>

            sum + row.playoffWins,

        0

    );


    const playoffLosses = seasons.reduce(

        (sum,row) =>

            sum + row.playoffLosses,

        0

    );


    const playoffOvertimeLosses = seasons.reduce(

        (sum,row) =>

            sum +

            (row.playoffOvertimeLosses ?? 0),

        0

    );


    const playoffShutouts = seasons.reduce(

        (sum,row) =>

            sum + row.playoffShutouts,

        0

    );


    /*
    ============================================
    PLAYOFF TOR-GEGEN
    ============================================
    */

    const playoffGoalsAgainst = seasons.reduce(

        (sum,row) =>

            sum +

            (row.playoffGoalsAgainst ?? 0),

        0

    );


    /*
    ============================================
    PLAYOFF SAVES
    ============================================
    */

    const playoffSaves = seasons.reduce(

        (sum,row) =>

            sum +

            (row.playoffSaves ?? 0),

        0

    );


    /*
    ============================================
    PLAYOFF SCHÜSSE GEGEN
    ============================================
    */

    const playoffShotsAgainst = seasons.reduce(

        (sum,row) =>

            sum +

            (row.playoffShotsAgainst ?? 0),

        0

    );


    /*
    ============================================
    PLAYOFF SAVE PERCENTAGE
    ============================================
    */

    const playoffSavePercentage =

        playoffShotsAgainst > 0

            ?

            (

                playoffSaves /

                playoffShotsAgainst

            ) * 100

            :

            0;


    /*
    ============================================
    PLAYOFF GAA
    ============================================
    */

    const playoffGoalsAgainstAverage =

        playoffGames > 0

            ?

            playoffGoalsAgainst /

            playoffGames

            :

            0;


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

        wins,

        losses,

        overtimeLosses,

        ties,

        shutouts,

        goalsAgainst,

        saves,

        shotsAgainst,

        savePercentage,

        goalsAgainstAverage,


        playoffGames,

        playoffWins,

        playoffLosses,

        playoffOvertimeLosses,

        playoffShutouts,

        playoffGoalsAgainst,

        playoffSaves,

        playoffShotsAgainst,

        playoffSavePercentage,

        playoffGoalsAgainstAverage,


        titles,

    };

}


/* ========================================= */
/* BUILDER */
/* ========================================= */

export function buildGoalieCareerStats(

    seasons: CareerGoalieSeasonStats[]

): GoalieCareerStatsData {


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