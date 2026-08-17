/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * File:
 * stats/types.ts
 *
 * ============================================
 */

import type {

    CareerSeasonStats,

    CareerGoalieSeasonStats,

} from "@/types/career-stats";


/*
================================================
INPUT
================================================
*/

export type CareerStatsInput<T> = {

    regularSeason: T[];

    playoffs: T[];

};


/*
================================================
OUTPUT
================================================
*/

export type CareerStatsData<T> = {

    seasons: T[];

    regularSeason: T[];

    playoffs: T[];

    total: T;

};


/*
================================================
SKATER
================================================
*/

export type SkaterCareerStatsData =

    CareerStatsData<CareerSeasonStats>;


/*
================================================
GOALIE
================================================
*/

export type GoalieCareerStatsData =

    CareerStatsData<CareerGoalieSeasonStats>;


/*
================================================
DUAL ROLE
================================================
*/

export type DualCareerStatsData = {

    skater?: SkaterCareerStatsData;

    goalie?: GoalieCareerStatsData;

};