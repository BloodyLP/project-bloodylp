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
        games: 17,
        goals: 10,
        assists: 2,
        points: 12,
        plusMinus: 0,
        pim: 8,
    },
};