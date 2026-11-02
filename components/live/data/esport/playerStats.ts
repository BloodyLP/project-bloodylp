


export type PlayerPosition = "goalie" | "defense" | "forward";






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






type BasePlayer = {

    number: number;

    gamerTag: string;

    name: string;

    image: string;

};



export type SkaterPlayer = BasePlayer & {

    position: "defense" | "forward";

    stats: SkaterStats;

};



export type GoaliePlayer = BasePlayer & {

    position: "goalie";

    stats: GoalieStats;

};



export type PlayerStat = SkaterPlayer | GoaliePlayer;






export const goalieStats: GoaliePlayer[] = [

    {

        number: 26,

        gamerTag: "Houddel_26",

        name: "M. Houdelet",

        position: "goalie",

        image: "/images/esport/players/houddel_26.png",

        stats: {

            games: 12,

            wins: 7,

            losses: 4,

            overtimeLosses: 1,

            saves: 151,

            goalsAgainst: 23,

            savePercentage: 86.78,

            goalsAgainstAverage: 1.92,

            shutouts: 4,

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

];






export const defenseStats: SkaterPlayer[] = [

    {

        number: 71,

        gamerTag: "Akin_Penta",

        name: "A. Isik",

        position: "forward",

        image: "/images/esport/players/akin_penta.png",

        stats: {

            games: 16,

            goals: 10,

            assists: 15,

            points: 25,

            plusMinus: -3,

            pim: 8,

            powerplayGoals: 0,

            shorthandedGoals: 0,

            gameWinningGoals: 4,

            shots: 56,

            shootingPercentage: 17.9,

            hits: 4,

            faceoffWinPercentage: 50.2,

        },

    },

    {

        number: 91,

        gamerTag: "TooEzXx",

        name: "L. Hansen",

        position: "defense",

        image: "/images/esport/players/TooEzXx.png",

        stats: {

            games: 16,

            goals: 16,

            assists: 8,

            points: 24,

            plusMinus: -3,

            pim: 2,

            powerplayGoals: 1,

            shorthandedGoals: 0,

            gameWinningGoals: 3,

            shots: 73,

            shootingPercentage: 21.9,

            hits: 7,

            faceoffWinPercentage: 0,

        },

    },

    {

        number: 9,

        gamerTag: "PantherOnSkates",

        name: "L. Fedra",

        position: "defense",

        image: "/images/esport/players/PantherOnSkates.png",

        stats: {

            games: 16,

            goals: 9,

            assists: 14,

            points: 23,

            plusMinus: -3,

            pim: 6,

            powerplayGoals: 2,

            shorthandedGoals: 0,

            gameWinningGoals: 0,

            shots: 42,

            shootingPercentage: 21.4,

            hits: 27,

            faceoffWinPercentage: 50,

        },

    },

    {

        number: 17,

        gamerTag: "Pasq86uale",

        name: "P. Schultz",

        position: "forward",

        image: "/images/esport/players/Pasq86ualePS.png",

        stats: {

            games: 16,

            goals: 1,

            assists: 12,

            points: 13,

            plusMinus: -3,

            pim: 8,

            powerplayGoals: 1,

            shorthandedGoals: 0,

            gameWinningGoals: 0,

            shots: 18,

            shootingPercentage: 5.6,

            hits: 28,

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

            games: 16,

            goals: 0,

            assists: 12,

            points: 12,

            plusMinus: -3,

            pim: 4,

            powerplayGoals: 0,

            shorthandedGoals: 0,

            gameWinningGoals: 0,

            shots: 11,

            shootingPercentage: 0,

            hits: 22,

            faceoffWinPercentage: 0,

        },

    },

];






export const forwardStats: SkaterPlayer[] = [

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

        name: "J. Stenberg",

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






export const playerStats: PlayerStat[] = [

    ...defenseStats,

    ...forwardStats,

    ...goalieStats,

];






export const playoffGoalieStats: GoaliePlayer[] = [
    {
        number: 26,
        gamerTag: "Houddel_26",
        name: "M. Houdelet",
        position: "goalie",
        image: "/images/esport/players/houddel_26.png",
        stats: {
            games: 7,
            wins: 4,
            losses: 3,
            overtimeLosses: 0,
            saves: 66,
            goalsAgainst: 18,
            savePercentage: 78.57,
            goalsAgainstAverage: 2.57,
            shutouts: 0,
        },
    },
];






export const playoffSkaterStats: SkaterPlayer[] = [
    {
        number: 91,
        gamerTag: "TooEzXx",
        name: "L. Hansen",
        position: "defense",
        image: "/images/esport/players/TooEzXx.png",
        stats: {
            games: 7,
            goals: 7,
            assists: 5,
            points: 12,
            plusMinus: -5,
            pim: 4,
            powerplayGoals: 3,
            shorthandedGoals: 0,
            gameWinningGoals: 3,
            shots: 27,
            shootingPercentage: 25.9,
            hits: 4,
            faceoffWinPercentage: 0,
        },
    },
    {
        number: 9,
        gamerTag: "PantherOnSkates",
        name: "L. Fedra",
        position: "defense",
        image: "/images/esport/players/PantherOnSkates.png",
        stats: {
            games: 7,
            goals: 5,
            assists: 4,
            points: 9,
            plusMinus: -5,
            pim: 4,
            powerplayGoals: 0,
            shorthandedGoals: 0,
            gameWinningGoals: 0,
            shots: 13,
            shootingPercentage: 38.5,
            hits: 12,
            faceoffWinPercentage: 100,
        },
    },
    {
        number: 79,
        gamerTag: "stefanoojj-",
        name: "J. Stenberg",
        position: "forward",
        image: "/images/esport/players/stefanoojj.png",
        stats: {
            games: 6,
            goals: 1,
            assists: 7,
            points: 8,
            plusMinus: -2,
            pim: 2,
            powerplayGoals: 0,
            shorthandedGoals: 0,
            gameWinningGoals: 0,
            shots: 2,
            shootingPercentage: 50,
            hits: 5,
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
            games: 7,
            goals: 2,
            assists: 6,
            points: 8,
            plusMinus: -5,
            pim: 2,
            powerplayGoals: 1,
            shorthandedGoals: 0,
            gameWinningGoals: 1,
            shots: 29,
            shootingPercentage: 6.9,
            hits: 1,
            faceoffWinPercentage: 53.8,
        },
    },
    {
        number: 17,
        gamerTag: "Pasq86uale",
        name: "P. Schultz",
        position: "forward",
        image: "/images/esport/players/Pasq86ualePS.png",
        stats: {
            games: 7,
            goals: 0,
            assists: 4,
            points: 4,
            plusMinus: -5,
            pim: 0,
            powerplayGoals: 0,
            shorthandedGoals: 0,
            gameWinningGoals: 0,
            shots: 6,
            shootingPercentage: 0,
            hits: 24,
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
            games: 1,
            goals: 0,
            assists: 0,
            points: 0,
            plusMinus: -3,
            pim: 4,
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






export const playoffPlayerStats: PlayerStat[] = [

    ...playoffSkaterStats,

    ...playoffGoalieStats,

];
