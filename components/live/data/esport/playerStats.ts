/* =========================================
 * BloodyLP
 *
 * Project:
 * BloodyLP Website
 *
 * File:
 * components/live/data/esport/playerStats.ts
 *
 * Description:
 * Individuelle Saisonstatistiken der aktuellen
 * DEG eSports Spieler.
 * ========================================= */

export type PlayerPosition =
    | "goalie"
    | "defense"
    | "forward";

/* =========================================
 * FELDSPIELER-STATS
 * ========================================= */

export type SkaterStats = {
    games: number;
    goals: number;
    assists: number;
    points: number;
    plusMinus: number;
    pim: number;
    powerplayGoals: number;
    shorthandedGoals: number;
    gameWinningGoals: number;
    shots: number;
    shootingPercentage: number;
    hits: number;
    faceoffWinPercentage: number;
};

/* =========================================
 * GOALIE-STATS
 * ========================================= */

export type GoalieStats = {
    games: number;
    wins: number;
    losses: number;
    overtimeLosses: number;
    saves: number;
    goalsAgainst: number;
    savePercentage: number;
    goalsAgainstAverage: number;
    shutouts: number;
};

/* =========================================
 * BASIS-SPIELER
 * ========================================= */

type BasePlayer = {
    number: number;
    gamerTag: string;
    name: string;
    image: string;
};

/* =========================================
 * FELDSPIELER
 * ========================================= */

export type SkaterPlayer = BasePlayer & {
    position: "defense" | "forward";
    stats: SkaterStats;
};

/* =========================================
 * GOALIE
 * ========================================= */

export type GoaliePlayer = BasePlayer & {
    position: "goalie";
    stats: GoalieStats;
};

/* =========================================
 * PLAYER
 * ========================================= */

export type PlayerStat =
    | SkaterPlayer
    | GoaliePlayer;

/* =========================================
 * GOALIES
 * ========================================= */

export const goalieStats: GoaliePlayer[] = [
    {
        number: 26,
        gamerTag: "Houddel_26",
        name: "M. Houdelet",
        position: "goalie",
        image: "/images/esport/players/houddel_26.png",
        stats: {
            games: 8,
            wins: 4,
            losses: 4,
            overtimeLosses: 0,
            saves: 107,
            goalsAgainst: 19,
            savePercentage: 84.92,
            goalsAgainstAverage: 2.38,
            shutouts: 1,
        },
    },
    {
        number: 67,
        gamerTag: "DBerni99999",
        name: "B. Angenendt",
        position: "goalie",
        image: "/images/esport/players/DBerni99999.png",
        stats: {
            games: 4,
            wins: 1,
            losses: 2,
            overtimeLosses: 1,
            saves: 38,
            goalsAgainst: 13,
            savePercentage: 74.51,
            goalsAgainstAverage: 3.25,
            shutouts: 0,
        },
    },
    {
        number: 39,
        gamerTag: "MEAZZA1704",
        name: "D. Otten",
        position: "goalie",
        image: "/images/esport/players/meazza17042.png",
        stats: {
            games: 0,
            wins: 0,
            losses: 0,
            overtimeLosses: 0,
            saves: 0,
            goalsAgainst: 0,
            savePercentage: 0,
            goalsAgainstAverage: 0,
            shutouts: 0,
        },
    },
];

/* =========================================
 * FELDSPIELER
 * TOPSCORER
 * ========================================= */

export const defenseStats: SkaterPlayer[] = [
    {
        number: 91,
        gamerTag: "TooEzXx",
        name: "L. Hansen",
        position: "defense",
        image: "/images/esport/players/TooEzXx.png",
        stats: {
            games: 12,
            goals: 13,
            assists: 8,
            points: 21,
            plusMinus: -5,
            pim: 2,
            powerplayGoals: 1,
            shorthandedGoals: 0,
            gameWinningGoals: 0,
            shots: 60,
            shootingPercentage: 21.7,
            hits: 7,
            faceoffWinPercentage: 0,
        },
    },
    {
        number: 71,
        gamerTag: "Akin_Penta",
        name: "A. Isik",
        position: "forward",
        image: "/images/esport/players/akin_penta.png",
        stats: {
            games: 12,
            goals: 9,
            assists: 11,
            points: 20,
            plusMinus: -5,
            pim: 6,
            powerplayGoals: 0,
            shorthandedGoals: 0,
            gameWinningGoals: 4,
            shots: 44,
            shootingPercentage: 20.5,
            hits: 3,
            faceoffWinPercentage: 51.1,
        },
    },
    {
        number: 9,
        gamerTag: "PantherOnSkates",
        name: "L. Fedra",
        position: "defense",
        image: "/images/esport/players/PantherOnSkates.png",
        stats: {
            games: 12,
            goals: 7,
            assists: 10,
            points: 17,
            plusMinus: -5,
            pim: 4,
            powerplayGoals: 2,
            shorthandedGoals: 0,
            gameWinningGoals: 0,
            shots: 26,
            shootingPercentage: 26.9,
            hits: 25,
            faceoffWinPercentage: 50,
        },
    },
    {
        number: 14,
        gamerTag: "Alex96rizz",
        name: "A. Rindå",
        position: "defense",
        image: "/images/esport/players/FellyKnight.png",
        stats: {
            games: 12,
            goals: 0,
            assists: 11,
            points: 11,
            plusMinus: -5,
            pim: 4,
            powerplayGoals: 0,
            shorthandedGoals: 0,
            gameWinningGoals: 0,
            shots: 9,
            shootingPercentage: 0,
            hits: 21,
            faceoffWinPercentage: 0,
        },
    },
    {
        number: 17,
        gamerTag: "Pasq86ualePS",
        name: "P. Schultz",
        position: "forward",
        image: "/images/esport/players/Pasq86ualePS.png",
        stats: {
            games: 12,
            goals: 1,
            assists: 9,
            points: 10,
            plusMinus: -5,
            pim: 8,
            powerplayGoals: 1,
            shorthandedGoals: 0,
            gameWinningGoals: 0,
            shots: 17,
            shootingPercentage: 5.9,
            hits: 22,
            faceoffWinPercentage: 0,
        },
    },
];

/* =========================================
 * SPIELER OHNE PUNKTE
 * ========================================= */

export const forwardStats: SkaterPlayer[] = [
    {
        number: 69,
        gamerTag: "goalie_breaker",
        name: "N. Hoffmann",
        position: "forward",
        image: "/images/esport/players/goalie_breaker.png",
        stats: {
            games: 0,
            goals: 0,
            assists: 0,
            points: 0,
            plusMinus: 0,
            pim: 0,
            powerplayGoals: 0,
            shorthandedGoals: 0,
            gameWinningGoals: 0,
            shots: 0,
            shootingPercentage: 0,
            hits: 0,
            faceoffWinPercentage: 0,
        },
    },
    {
        number: 91,
        gamerTag: "xxICEFORCERxx",
        name: "M. Bareither",
        position: "forward",
        image: "/images/esport/players/xxIceforcerxx.png",
        stats: {
            games: 0,
            goals: 0,
            assists: 0,
            points: 0,
            plusMinus: 0,
            pim: 0,
            powerplayGoals: 0,
            shorthandedGoals: 0,
            gameWinningGoals: 0,
            shots: 0,
            shootingPercentage: 0,
            hits: 0,
            faceoffWinPercentage: 0,
        },
    },
    {
        number: 79,
        gamerTag: "stefanoojj",
        name: "stefanoojj",
        position: "forward",
        image: "/images/esport/players/stefanoojj.png",
        stats: {
            games: 0,
            goals: 0,
            assists: 0,
            points: 0,
            plusMinus: 0,
            pim: 0,
            powerplayGoals: 0,
            shorthandedGoals: 0,
            gameWinningGoals: 0,
            shots: 0,
            shootingPercentage: 0,
            hits: 0,
            faceoffWinPercentage: 0,
        },
    },
];

/* =========================================
 * ALLE SPIELER
 * ========================================= */

export const playerStats: PlayerStat[] = [
    ...defenseStats,
    ...forwardStats,
    ...goalieStats,
];