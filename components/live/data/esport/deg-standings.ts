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
/* GCL 13 – Division 1                          */
/* Aktueller Stand – 9 Mannschaften             */
/* Platz 1–8 Playoffs                            */
/* Platz 9 keine Playoffs                        */
/*                                              */
/* Stand: 13.10.2026                            */
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

  /* ---------------------------------------- */
  /* GAME RECORD                              */
  /* ---------------------------------------- */

  gamesPlayed: number;
  wins: number;
  overtimeWins: number;
  overtimeLosses: number;
  losses: number;

  /* ---------------------------------------- */
  /* GOALS / POINTS                           */
  /* ---------------------------------------- */

  goalsFor: number;
  goalsAgainst: number;
  points: number;

  /* ---------------------------------------- */
  /* ADDITIONAL STATISTICS                    */
  /* ---------------------------------------- */

  powerplayPercentage?: number | null;
  penaltyKillPercentage?: number | null;
  pim: number;
  shots: number;
  faceoffPercentage?: number | null;
  hits: number;
  last10: string;

  /* ---------------------------------------- */
  /* PLAYOFF STATUS                           */
  /* ---------------------------------------- */

  /**
   * Platz 1–8 = Playoffs
   * Platz 9 = keine Playoffs
   */
  playoffs: boolean;

  /**
   * Kennzeichnung für DEG eSports
   */
  isDeg?: boolean;
};


/* ============================================ */
/* GCL 13 – DIVISION I                          */
/*                                              */
/* 9 TEAMS                                      */
/* 8 PLAYOFF-PLÄTZE                             */
/* 1 TEAM OHNE PLAYOFFS                         */
/*                                              */
/* Stand: 13.10.2026                            */
/* ============================================ */

export const degStandings: DegStanding[] = [

  /* ---------------------------------------- */
  /* 01 – CONEXION                            */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 1,
    team: "Conexion",
    logo: "/images/esport/gcl13/conexion.png",
    players: 8,

    gamesPlayed: 14,
    wins: 11,
    overtimeWins: 1,
    overtimeLosses: 1,
    losses: 1,

    goalsFor: 70,
    goalsAgainst: 31,
    points: 36,

    powerplayPercentage: 30.77,
    penaltyKillPercentage: 80.95,
    pim: 42,
    shots: 316,
    faceoffPercentage: 49.43,
    hits: 209,
    last10: "9-1-0",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 02 – HOCKEYHOLICS                        */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 2,
    team: "Hockeyholics",
    logo: "/images/esport/gcl13/hockeyholics.png",
    players: 7,

    gamesPlayed: 12,
    wins: 8,
    overtimeWins: 1,
    overtimeLosses: 2,
    losses: 1,

    goalsFor: 47,
    goalsAgainst: 28,
    points: 28,

    powerplayPercentage: 9.09,
    penaltyKillPercentage: 75,
    pim: 32,
    shots: 226,
    faceoffPercentage: 49.81,
    hits: 96,
    last10: "7-1-2",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 03 – REH GAMING                          */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 3,
    team: "REH Gaming",
    logo: "/images/esport/gcl13/reh-gaming.png",
    players: 6,

    gamesPlayed: 10,
    wins: 4,
    overtimeWins: 2,
    overtimeLosses: 0,
    losses: 4,

    goalsFor: 24,
    goalsAgainst: 23,
    points: 16,

    powerplayPercentage: null,
    penaltyKillPercentage: 100,
    pim: 24,
    shots: 111,
    faceoffPercentage: 48.69,
    hits: 58,
    last10: "6-4-0",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 04 – DEG ESPORTS                         */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 4,
    team: "DEG eSports",
    logo: "/images/esport/gcl13/deg-esports.png",
    players: 11,

    gamesPlayed: 12,
    wins: 5,
    overtimeWins: 0,
    overtimeLosses: 1,
    losses: 6,

    goalsFor: 30,
    goalsAgainst: 31,
    points: 16,

    powerplayPercentage: 57.14,
    penaltyKillPercentage: 80,
    pim: 20,
    shots: 128,
    faceoffPercentage: 50.26,
    hits: 68,
    last10: "3-6-1",

    playoffs: true,
    isDeg: true,
  },


  /* ---------------------------------------- */
  /* 05 – THE LAST SHIFT                      */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 5,
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
  /* 06 – GERMAN ELITE HOCKEY                */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 6,
    team: "German Elite Hockey",
    logo: "/images/esport/gcl13/german-elite-hockey.png",
    players: 9,

    gamesPlayed: 10,
    wins: 2,
    overtimeWins: 2,
    overtimeLosses: 0,
    losses: 6,

    goalsFor: 22,
    goalsAgainst: 30,
    points: 10,

    powerplayPercentage: 10,
    penaltyKillPercentage: 82.35,
    pim: 34,
    shots: 129,
    faceoffPercentage: 49.17,
    hits: 130,
    last10: "4-6-0",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 07 – DEADLY PHANTOMS                     */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 7,
    team: "Deadly Phantoms",
    logo: "/images/esport/gcl13/deadly-phantoms.png",
    players: 7,

    gamesPlayed: 6,
    wins: 3,
    overtimeWins: 0,
    overtimeLosses: 1,
    losses: 2,

    goalsFor: 13,
    goalsAgainst: 14,
    points: 10,

    powerplayPercentage: 12.5,
    penaltyKillPercentage: 85.71,
    pim: 14,
    shots: 87,
    faceoffPercentage: 52.73,
    hits: 43,
    last10: "3-2-1",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 08 – SCB ESPORTS                         */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 8,
    team: "SCB eSports",
    logo: "/images/esport/gcl13/scb-esports.png",
    players: 8,

    gamesPlayed: 10,
    wins: 2,
    overtimeWins: 1,
    overtimeLosses: 0,
    losses: 7,

    goalsFor: 23,
    goalsAgainst: 37,
    points: 8,

    powerplayPercentage: 30,
    penaltyKillPercentage: 75,
    pim: 40,
    shots: 122,
    faceoffPercentage: 57.67,
    hits: 75,
    last10: "3-7-0",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 09 – ISERLOHN ROOSTERS ESPORTS           */
  /* PLAYOFFS: NEIN                            */
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

    powerplayPercentage: 21.43,
    penaltyKillPercentage: 50,
    pim: 16,
    shots: 112,
    faceoffPercentage: 49.53,
    hits: 60,
    last10: "1-7-2",

    playoffs: false,
  },

];