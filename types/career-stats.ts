/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * File:
 * career-stats.ts
 *
 * Description:
 * Typdefinitionen für alle Karriere-
 * Statistiken.
 *
 * ============================================
 */

import type {

    TeamType,

} from "./service-record";

/*
================================================
BASIS
================================================
*/

export interface CareerSeasonBase {

    /**
     * Anzeige Saison
     */
    season?:string;

    /**
     * Jahr
     */
    year:string;

    /**
     * Team
     */
    team:TeamType;

    /**
     * Spiele
     */
    games:number;

    /**
     * Gewonnene Titel
     */
    titles:string[];

}

/*
================================================
SKATER
================================================
*/

export interface SkaterSeasonStats
extends CareerSeasonBase{

    goals:number;

    assists:number;

    points:number;

    plusMinus:number;

    penaltyMinutes:number;

    playoffGames:number;

    playoffGoals:number;

    playoffAssists:number;

    playoffPoints:number;

    playoffPlusMinus:number;

    playoffPenaltyMinutes:number;

}

/*
================================================
GOALIE
================================================
*/

export interface GoalieSeasonStats
extends CareerSeasonBase{

    goalsAgainstAverage:number;

    savePercentage:number;

    shutouts:number;

    wins:number;

    losses:number;

    overtimeLosses:number;

    playoffGames:number;

    playoffGoalsAgainstAverage:number;

    playoffSavePercentage:number;

    playoffShutouts:number;

    playoffWins:number;

    playoffLosses:number;

    playoffOvertimeLosses:number;

}

/*
================================================
UNION
================================================
*/

export type CareerSeasonStats =

    | SkaterSeasonStats

    | GoalieSeasonStats;