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
        games: 0,
        goals: 0,
        assists: 0,
        points: 0,
        plusMinus: 0,
        pim: 0,
    },

    /*
     * =========================================================
     * PLAYOFF-KARRIERE-STATISTIKEN
     * =========================================================
     */

    playoffStats: {
        games: 0,
        goals: 0,
        assists: 0,
        points: 0,
        plusMinus: 0,
        pim: 0,
    },
};