/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * File:
 * career-stats.ts
 *
 * Description:
 * Typdefinitionen für Karriere-Statistiken.
 *
 * ============================================
 */


/* ========================================= */
/* SKATER */
/* ========================================= */

export interface CareerSeasonStats {

    year: string;

    team: string;

    games: number;

    goals: number;

    assists: number;

    points: number;

    plusMinus: number;

    penaltyMinutes: number;


    /* ========================================= */
    /* PLAYOFFS */
    /* ========================================= */

    playoffGames: number;

    playoffGoals: number;

    playoffAssists: number;

    playoffPoints: number;

    playoffPlusMinus: number;

    playoffPenaltyMinutes: number;


    /* ========================================= */
    /* TITEL */
    /* ========================================= */

    titles: string[];

}


/* ========================================= */
/* GOALIE */
/* ========================================= */

export interface CareerGoalieSeasonStats {

    year: string;

    team: string;

    games: number;

    wins: number;

    losses: number;

    /*
     * Overtime-Niederlagen
     */
    overtimeLosses?: number;

    /*
     * Optional für ältere Datensätze,
     * die stattdessen Unentschieden
     * verwenden.
     */
    ties?: number;

    shutouts: number;

    goalsAgainst: number;

    saves: number;

    shotsAgainst: number;

    savePercentage: number;

    goalsAgainstAverage: number;


    /* ========================================= */
    /* PLAYOFFS */
    /* ========================================= */

    playoffGames: number;

    playoffWins: number;

    playoffLosses: number;

    playoffOvertimeLosses?: number;

    playoffShutouts: number;

    playoffGoalsAgainst: number;

    playoffSaves: number;

    playoffShotsAgainst: number;

    playoffSavePercentage: number;

    playoffGoalsAgainstAverage: number;


    /* ========================================= */
    /* TITEL */
    /* ========================================= */

    titles: string[];

}