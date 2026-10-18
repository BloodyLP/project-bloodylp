/* ============================================ */
/*                                              */
/* BloodyLP                                     */
/*                                              */
/* Project:                                     */
/* BloodyLP Website                             */
/*                                              */
/* File:                                        */
/* components/live/data/esport/deg-standings.ts */
/*                                              */
/* Description:                                 */
/* GCL 13 – Division I                          */
/* Aktueller Tabellenstand                      */
/*                                              */
/* Stand: 18.10.2026                            */
/*                                              */
/* ============================================ */


/* ============================================ */
/* LEAGUE TYPE                                  */
/* ============================================ */

export type DegStandingsLeague = {
  name: string;
  logo: string;
  group: string;
  season: string;
};


/* ============================================ */
/* LEAGUE DATA                                  */
/* ============================================ */

export const degStandingsLeague: DegStandingsLeague = {
  name: "GCL 13",
  logo: "/images/esport/logos/gcl.png",
  group: "DIVISION I",
  season: "",
};


/* ============================================ */
/* TEAM TYPE                                    */
/* ============================================ */

export type DegStanding = {
  position: number;
  team: string;
  logo: string;
  players: number;

  /* GAME RECORD */
  gamesPlayed: number;
  wins: number;
  overtimeWins: number;
  overtimeLosses: number;
  losses: number;

  /* GOALS / POINTS */
  goalsFor: number;
  goalsAgainst: number;
  points: number;

  /* ADDITIONAL STATISTICS */
  powerplayPercentage?: number | null;
  penaltyKillPercentage?: number | null;
  pim: number;
  shots: number;
  faceoffPercentage?: number | null;
  hits: number;
  last10: string;

  /* PLAYOFF STATUS */
  playoffs: boolean;

  /* DEG IDENTIFIER */
  isDeg?: boolean;
};


/* ============================================ */
/* GCL 13 – DIVISION I                          */
/* 9 TEAMS                                      */
/* 8 PLAYOFF-PLÄTZE                             */
/*                                              */
/* Stand: 18.10.2026                            */
/* ============================================ */

export const degStandings: DegStanding[] = [

  /* ---------------------------------------- */
  /* 01 – CONEXION                            */
  /* ---------------------------------------- */

  {
    position: 1,
    team: "Conexion",
    logo: "/images/esport/gcl13/conexion.png",
    players: 8,

    gamesPlayed: 16,
    wins: 11,
    overtimeWins: 1,
    overtimeLosses: 1,
    losses: 3,

    goalsFor: 72,
    goalsAgainst: 36,
    points: 36,

    powerplayPercentage: 26.67,
    penaltyKillPercentage: 79.17,
    pim: 48,
    shots: 347,
    faceoffPercentage: 49.87,
    hits: 230,
    last10: "7-3-0",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 02 – HOCKEYHOLICS                        */
  /* ---------------------------------------- */

  {
    position: 2,
    team: "Hockeyholics",
    logo: "/images/esport/gcl13/hockeyholics.png",
    players: 7,

    gamesPlayed: 14,
    wins: 8,
    overtimeWins: 1,
    overtimeLosses: 3,
    losses: 2,

    goalsFor: 51,
    goalsAgainst: 35,
    points: 29,

    powerplayPercentage: 8.33,
    penaltyKillPercentage: 76.47,
    pim: 34,
    shots: 266,
    faceoffPercentage: 49.37,
    hits: 113,
    last10: "5-2-3",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 03 – DEADLY PHANTOMS                     */
  /* ---------------------------------------- */

  {
    position: 3,
    team: "Deadly Phantoms",
    logo: "/images/esport/gcl13/deadly-phantoms.png",
    players: 7,

    gamesPlayed: 12,
    wins: 8,
    overtimeWins: 1,
    overtimeLosses: 1,
    losses: 2,

    goalsFor: 33,
    goalsAgainst: 22,
    points: 27,

    powerplayPercentage: 21.43,
    penaltyKillPercentage: 81.25,
    pim: 32,
    shots: 179,
    faceoffPercentage: 53.1,
    hits: 109,
    last10: "9-1-0",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 04 – GERMAN ELITE HOCKEY                 */
  /* ---------------------------------------- */

  {
    position: 4,
    team: "German Elite Hockey",
    logo: "/images/esport/gcl13/german-elite-hockey.png",
    players: 9,

    gamesPlayed: 14,
    wins: 5,
    overtimeWins: 3,
    overtimeLosses: 0,
    losses: 6,

    goalsFor: 35,
    goalsAgainst: 32,
    points: 21,

    powerplayPercentage: 16,
    penaltyKillPercentage: 85,
    pim: 40,
    shots: 193,
    faceoffPercentage: 51.11,
    hits: 174,
    last10: "7-3-0",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 05 – REH GAMING                          */
  /* ---------------------------------------- */

  {
    position: 5,
    team: "REH Gaming",
    logo: "/images/esport/gcl13/reh-gaming.png",
    players: 6,

    gamesPlayed: 14,
    wins: 5,
    overtimeWins: 3,
    overtimeLosses: 0,
    losses: 6,

    goalsFor: 30,
    goalsAgainst: 32,
    points: 21,

    powerplayPercentage: null,
    penaltyKillPercentage: 87.5,
    pim: 32,
    shots: 173,
    faceoffPercentage: 48.56,
    hits: 93,
    last10: "6-4-0",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 06 – DEG ESPORTS                         */
  /* ---------------------------------------- */

  {
    position: 6,
    team: "DEG eSports",
    logo: "/images/esport/gcl13/deg-esports.png",
    players: 11,

    gamesPlayed: 12,
    wins: 5,
    overtimeWins: 0,
    overtimeLosses: 1,
    losses: 6,

    goalsFor: 30,
    goalsAgainst: 32,
    points: 16,

    powerplayPercentage: 44.44,
    penaltyKillPercentage: 83.33,
    pim: 24,
    shots: 173,
    faceoffPercentage: 51.08,
    hits: 78,
    last10: "4-6-0",

    playoffs: true,
    isDeg: true,
  },


  /* ---------------------------------------- */
  /* 07 – THE LAST SHIFT                      */
  /* ---------------------------------------- */

  {
    position: 7,
    team: "The Last Shift",
    logo: "/images/esport/gcl13/the-last-shift.png",
    players: 5,

    gamesPlayed: 10,
    wins: 4,
    overtimeWins: 1,
    overtimeLosses: 1,
    losses: 4,

    goalsFor: 34,
    goalsAgainst: 32,
    points: 15,

    powerplayPercentage: 50,
    penaltyKillPercentage: 66.67,
    pim: 12,
    shots: 141,
    faceoffPercentage: 44.5,
    hits: 133,
    last10: "5-4-1",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 08 – SCB ESPORTS                         */
  /* ---------------------------------------- */

  {
    position: 8,
    team: "SCB eSports",
    logo: "/images/esport/gcl13/scb-esports.png",
    players: 8,

    gamesPlayed: 12,
    wins: 2,
    overtimeWins: 1,
    overtimeLosses: 1,
    losses: 8,

    goalsFor: 24,
    goalsAgainst: 42,
    points: 9,

    powerplayPercentage: 27.27,
    penaltyKillPercentage: 80,
    pim: 50,
    shots: 141,
    faceoffPercentage: 56.11,
    hits: 87,
    last10: "2-7-1",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 09 – ISERLOHN ROOSTERS ESPORTS           */
  /* ---------------------------------------- */

  {
    position: 9,
    team: "Iserlohn Roosters eSports",
    logo: "/images/esport/gcl13/iserlohn-roosters-esports.png",
    players: 5,

    gamesPlayed: 16,
    wins: 1,
    overtimeWins: 0,
    overtimeLosses: 3,
    losses: 12,

    goalsFor: 22,
    goalsAgainst: 68,
    points: 6,

    powerplayPercentage: 22.73,
    penaltyKillPercentage: 64.29,
    pim: 28,
    shots: 187,
    faceoffPercentage: 46.63,
    hits: 98,
    last10: "0-8-2",

    playoffs: false,
  },

];