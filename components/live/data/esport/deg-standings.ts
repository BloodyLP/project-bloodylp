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
/* Stand: 14.10.2026                            */
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
/* Stand: 14.10.2026                            */
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
  /* 03 – REH GAMING                          */
  /* ---------------------------------------- */

  {
    position: 3,
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
  /* 04 – DEADLY PHANTOMS                     */
  /* ---------------------------------------- */

  {
    position: 4,
    team: "Deadly Phantoms",
    logo: "/images/esport/gcl13/deadly-phantoms.png",
    players: 7,

    gamesPlayed: 10,
    wins: 6,
    overtimeWins: 1,
    overtimeLosses: 1,
    losses: 2,

    goalsFor: 25,
    goalsAgainst: 20,
    points: 21,

    powerplayPercentage: 16.67,
    penaltyKillPercentage: 90.91,
    pim: 22,
    shots: 144,
    faceoffPercentage: 51.46,
    hits: 76,
    last10: "7-2-1",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 05 – GERMAN ELITE HOCKEY                */
  /* ---------------------------------------- */

  {
    position: 5,
    team: "German Elite Hockey",
    logo: "/images/esport/gcl13/german-elite-hockey.png",
    players: 9,

    gamesPlayed: 12,
    wins: 4,
    overtimeWins: 2,
    overtimeLosses: 0,
    losses: 6,

    goalsFor: 30,
    goalsAgainst: 31,
    points: 16,

    powerplayPercentage: 17.39,
    penaltyKillPercentage: 84.21,
    pim: 38,
    shots: 159,
    faceoffPercentage: 50,
    hits: 145,
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

    gamesPlayed: 12,
    wins: 1,
    overtimeWins: 0,
    overtimeLosses: 2,
    losses: 9,

    goalsFor: 19,
    goalsAgainst: 55,
    points: 5,

    powerplayPercentage: 18.75,
    penaltyKillPercentage: 60,
    pim: 20,
    shots: 128,
    faceoffPercentage: 48.82,
    hits: 77,
    last10: "0-9-1",

    playoffs: false,
  },

];