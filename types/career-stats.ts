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

    /*
    ============================================
    GRUNDINFORMATIONEN
    ============================================
    */

    year: string;

    team: string;


    /*
    ============================================
    REGULAR SEASON
    ============================================
    */

    games: number;

    goals: number;

    assists: number;

    points: number;

    plusMinus: number;

    penaltyMinutes: number;


    /*
    ============================================
    PLAYOFFS
    ============================================
    */

    playoffGames: number;

    playoffGoals: number;

    playoffAssists: number;

    playoffPoints: number;

    playoffPlusMinus: number;

    playoffPenaltyMinutes: number;


    /*
    ============================================
    TITEL
    ============================================
    */

    titles: string[];

}


/* ========================================= */
/* GOALIE */
/* ========================================= */

export interface CareerGoalieSeasonStats {

    /*
    ============================================
    GRUNDINFORMATIONEN
    ============================================
    */

    year: string;

    team: string;


    /*
    ============================================
    REGULAR SEASON
    ============================================
    */

    games: number;

    wins: number;

    losses: number;

    ties?: number;

    overtimeLosses?: number;

    shutouts: number;


    /*
    ============================================
    TORHÜTER-WERTE
    ============================================
    */

    /*
    Diese Werte sind optional, weil ältere
    Service-Record-Datensätze teilweise nur
    GAA und SV% enthalten.
    */

    goalsAgainst?: number;

    saves?: number;

    shotsAgainst?: number;

    savePercentage: number;

    goalsAgainstAverage: number;


    /*
    ============================================
    PLAYOFFS
    ============================================
    */

    playoffGames: number;

    playoffWins: number;

    playoffLosses: number;

    playoffOvertimeLosses?: number;

    playoffShutouts: number;


    /*
    Diese Werte sind ebenfalls optional,
    wenn sie im historischen Datensatz
    nicht vorhanden sind.
    */

    playoffGoalsAgainst?: number;

    playoffSaves?: number;

    playoffShotsAgainst?: number;

    playoffSavePercentage: number;

    playoffGoalsAgainstAverage: number;


    /*
    ============================================
    TITEL
    ============================================
    */

    titles: string[];

}


/* ========================================= */
/* ALIASES */
/* ========================================= */

/*
 * Die folgenden Aliase sorgen dafür,
 * dass bestehender Code weiterhin
 * verständlich und kompatibel bleibt.
 */

export type SkaterSeasonStats =
    CareerSeasonStats;

export type GoalieSeasonStats =
    CareerGoalieSeasonStats;