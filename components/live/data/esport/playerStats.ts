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
 *
 * SORTIERT NACH AKTUELLER LEISTUNG
 * ========================================= */

export const goalieStats: GoaliePlayer[] = [

    /* -----------------------------------------
     * 1. DBerni99999
     *
     * GP  2
     * W   1
     * L   0
     * OTL 1
     * SVS 21
     * GA  5
     * SV% 80.77%
     * GAA 2.5
     * SO  0
     * ----------------------------------------- */

    {
        number: 67,
        gamerTag: "DBerni99999",
        name: "B. Angenendt",
        position: "goalie",
        image: "/images/esport/players/DBerni99999.png",

        stats: {
            games: 2,
            wins: 1,
            losses: 0,
            overtimeLosses: 1,
            saves: 21,
            goalsAgainst: 5,
            savePercentage: 80.77,
            goalsAgainstAverage: 2.5,
            shutouts: 0,
        },
    },


    /* -----------------------------------------
     * 2. Houddel_26
     *
     * Noch kein Einsatz
     * ----------------------------------------- */

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


    /* -----------------------------------------
     * 3. MEAZZA1704
     *
     * Noch kein Einsatz
     * ----------------------------------------- */

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
 *
 * TOPSCORER – ABSTEIGEND NACH PUNKTEN
 * ========================================= */

export const defenseStats: SkaterPlayer[] = [

    /* -----------------------------------------
     * 1. TooEzXx
     *
     * GP  2
     * G   2
     * A   1
     * P   3
     * +/- 0
     * PIM 0
     * PPG 1
     * SHG 0
     * GWG 0
     * S   10
     * S% 20%
     * Hits 1
     * FOW% -
     * ----------------------------------------- */

    {
        number: 91,
        gamerTag: "TooEzXx",
        name: "L. Hansen",
        position: "defense",
        image: "/images/esport/players/TooEzXx.png",

        stats: {
            games: 2,
            goals: 2,
            assists: 1,
            points: 3,
            plusMinus: 0,
            pim: 0,
            powerplayGoals: 1,
            shorthandedGoals: 0,
            gameWinningGoals: 0,
            shots: 10,
            shootingPercentage: 20,
            hits: 1,
            faceoffWinPercentage: 0,
        },
    },


    /* -----------------------------------------
     * 2. PantherOnSkates
     *
     * GP  2
     * G   1
     * A   2
     * P   3
     * +/- 0
     * PIM 0
     * PPG 0
     * SHG 0
     * GWG 0
     * S   6
     * S% 16.7%
     * Hits 3
     * FOW% -
     * ----------------------------------------- */

    {
        number: 9,
        gamerTag: "PantherOnSkates",
        name: "L. Fedra",
        position: "defense",
        image: "/images/esport/players/PantherOnSkates.png",

        stats: {
            games: 2,
            goals: 1,
            assists: 2,
            points: 3,
            plusMinus: 0,
            pim: 0,
            powerplayGoals: 0,
            shorthandedGoals: 0,
            gameWinningGoals: 0,
            shots: 6,
            shootingPercentage: 16.7,
            hits: 3,
            faceoffWinPercentage: 0,
        },
    },


    /* -----------------------------------------
     * 3. Akin_Penta
     *
     * GP  2
     * G   2
     * A   1
     * P   3
     * +/- 0
     * PIM 0
     * PPG 0
     * SHG 0
     * GWG 0
     * S   8
     * S% 25%
     * Hits 0
     * FOW% 55.3%
     * ----------------------------------------- */

    {
        number: 71,
        gamerTag: "Akin_Penta",
        name: "A. Isik",
        position: "forward",
        image: "/images/esport/players/akin_penta.png",

        stats: {
            games: 2,
            goals: 2,
            assists: 1,
            points: 3,
            plusMinus: 0,
            pim: 0,
            powerplayGoals: 0,
            shorthandedGoals: 0,
            gameWinningGoals: 0,
            shots: 8,
            shootingPercentage: 25,
            hits: 0,
            faceoffWinPercentage: 55.3,
        },
    },


    /* -----------------------------------------
     * 4. Alex96rizz
     *
     * GP  2
     * G   0
     * A   1
     * P   1
     * +/- 0
     * PIM 2
     * PPG 0
     * SHG 0
     * GWG 0
     * S   2
     * S% 0%
     * Hits 4
     * FOW% -
     * ----------------------------------------- */

    {
        number: 14,
        gamerTag: "Alex96rizz",
        name: "A. Rindå",
        position: "defense",
        image: "/images/esport/players/FellyKnight.png",

        stats: {
            games: 2,
            goals: 0,
            assists: 1,
            points: 1,
            plusMinus: 0,
            pim: 2,
            powerplayGoals: 0,
            shorthandedGoals: 0,
            gameWinningGoals: 0,
            shots: 2,
            shootingPercentage: 0,
            hits: 4,
            faceoffWinPercentage: 0,
        },
    },


    /* -----------------------------------------
     * 5. Pasq86ualePS
     *
     * GP  2
     * G   0
     * A   1
     * P   1
     * +/- 0
     * PIM 2
     * PPG 0
     * SHG 0
     * GWG 0
     * S   1
     * S% 0%
     * Hits 1
     * FOW% -
     * ----------------------------------------- */

    {
        number: 17,
        gamerTag: "Pasq86ualePS",
        name: "P. Schultz",
        position: "forward",
        image: "/images/esport/players/Pasq86ualePS.png",

        stats: {
            games: 2,
            goals: 0,
            assists: 1,
            points: 1,
            plusMinus: 0,
            pim: 2,
            powerplayGoals: 0,
            shorthandedGoals: 0,
            gameWinningGoals: 0,
            shots: 1,
            shootingPercentage: 0,
            hits: 1,
            faceoffWinPercentage: 0,
        },
    },
];


/* =========================================
 * SPIELER OHNE PUNKTE
 * ========================================= */

export const forwardStats: SkaterPlayer[] = [

    /* -----------------------------------------
     * goalie_breaker
     * ----------------------------------------- */

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


    /* -----------------------------------------
     * xxICEFORCERxx
     * ----------------------------------------- */

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


    /* -----------------------------------------
     * stefanoojj
     * ----------------------------------------- */

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
 *
 * Die Arrays sind bereits nach
 * Topscorer-Reihenfolge aufgebaut.
 * ========================================= */

export const playerStats: PlayerStat[] = [
    ...defenseStats,
    ...forwardStats,
    ...goalieStats,
];