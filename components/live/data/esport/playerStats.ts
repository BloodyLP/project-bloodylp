/**
 * ============================================
 *
 * BloodyLP
 *
 * ============================================
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
 *
 * ============================================
 */

/* =========================================
 * POSITIONEN
 * ========================================= */

export type PlayerPosition =
    | "goalie"
    | "defense"
    | "forward";

/* =========================================
 * FELDSPIELER-STATS
 *
 * Entsprechend der Statistik-Tabelle:
 *
 * GP   = Games Played
 * G    = Goals
 * A    = Assists
 * P    = Points
 * +/-  = Plus/Minus
 * PIM  = Penalty Minutes
 * PPG  = Powerplay Goals
 * SHG  = Shorthanded Goals
 * GWG  = Game Winning Goals
 * S    = Shots
 * S%   = Shooting Percentage
 * Hits = Hits
 * FOW% = Faceoff Win Percentage
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
 *
 * Entsprechend der Statistik-Tabelle:
 *
 * GP  = Games Played
 * W   = Wins
 * L   = Losses
 * OTL = Overtime Losses
 * Svs = Saves
 * GA  = Goals Against
 * SV% = Save Percentage
 * GAA = Goals Against Average
 * SO  = Shutouts
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
 *
 * Durch die getrennten Typen weiß TypeScript
 * automatisch, welche Stats vorhanden sind.
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
 *
 * Discriminated Union:
 * position bestimmt automatisch den
 * passenden Stats-Typ.
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

    {
        number: 67,
        gamerTag: "DBerni99999",
        name: "B. Angenendt",
        position: "goalie",
        image: "/images/esport/players/DBerni99999.png",
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
 * VERTEIDIGER
 * ========================================= */

export const defenseStats: SkaterPlayer[] = [
    {
        number: 9,
        gamerTag: "PantherOnSkates",
        name: "L. Fedra",
        position: "defense",
        image: "/images/esport/players/PantherOnSkates.png",
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
        number: 97,
        gamerTag: "Official_Fungus",
        name: "N. Kempe",
        position: "defense",
        image: "/images/esport/players/kempe.png",
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
        gamerTag: "TooEzXx",
        name: "L. Hansen",
        position: "defense",
        image: "/images/esport/players/TooEzXx.png",
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
        number: 14,
        gamerTag: "Alex96rizz",
        name: "A. Rindå",
        position: "defense",
        image: "/images/esport/players/FellyKnight.png",
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
 * STÜRMER
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
        number: 71,
        gamerTag: "Akin_Penta",
        name: "A. Isik",
        position: "forward",
        image: "/images/esport/players/akin_penta.png",
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
        number: 17,
        gamerTag: "Pasq86ualePS",
        name: "P. Schultz",
        position: "forward",
        image: "/images/esport/players/Pasq86ualePS.png",
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
    ...goalieStats,
    ...defenseStats,
    ...forwardStats,
];