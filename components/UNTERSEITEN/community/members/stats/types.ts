/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * File:
 * stats/types.ts
 *
 * Description:
 * Typdefinitionen für die
 * Karriere-Statistiken.
 *
 * ============================================
 */

import type {

    SkaterSeasonStats,

    GoalieSeasonStats,

} from "@/types/career-stats";

/*
================================================
INPUT
================================================
*/

export type CareerStatsInput<T> = {

    regularSeason:T[];

    playoffs:T[];

};

/*
================================================
OUTPUT
================================================
*/

export type CareerStatsData<T> = {

    seasons:T[];

    regularSeason:T[];

    playoffs:T[];

    total:T;

};

/*
================================================
ALIASES
================================================
*/

export type SkaterCareerStatsData =

    CareerStatsData<SkaterSeasonStats>;

export type GoalieCareerStatsData =

    CareerStatsData<GoalieSeasonStats>;