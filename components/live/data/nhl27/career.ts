export type CareerStats = {
    games: number;
    goals: number;
    assists: number;
    points: number;
    plusMinus: number;
    pim: number;
};

export type PlayerCareer = {
    playerName: string;
    season: string;
    position: string;
    number: number;

    stats: CareerStats;

    playoffStats: CareerStats;
};

export const playerCareer: PlayerCareer = {
    playerName: "BloodyLP",

    season: "2026/27",

    position: "LINKER FLÜGEL",

    number: 15,

    /*
     * =========================================================
     * KARRIERE-STATISTIKEN
     * =========================================================
     */

    stats: {
        games: 155,
        goals: 113,
        assists: 55,
        points: 168,
        plusMinus: 96,
        pim: 99,
    },

    /*
     * =========================================================
     * PLAYOFF-KARRIERE-STATISTIKEN
     * =========================================================
     */

    playoffStats: {
        games: 6,
        goals: 1,
        assists: 1,
        points: 2,
        plusMinus: -3,
        pim: 2,
    },
};