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
/* GCL 13 – DIVISION 1                          */
/*                                              */
/* 9 TEAMS                                      */
/* 8 PLAYOFF-PLÄTZE                             */
/* 1 TEAM OHNE PLAYOFFS                         */
/*                                              */
/* Stand: 30.09.2026                            */
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

    gamesPlayed: 12,
    wins: 9,
    overtimeWins: 1,
    overtimeLosses: 1,
    losses: 1,

    goalsFor: 49,
    goalsAgainst: 25,
    points: 30,

    powerplayPercentage: 10,
    penaltyKillPercentage: 84.21,
    pim: 38,
    shots: 254,
    faceoffPercentage: 48.26,
    hits: 161,
    last10: "8-1-1",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 02 – THE LAST SHIFT                      */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 2,
    team: "The Last Shift",
    logo: "/images/esport/gcl13/the-last-shift.png",
    players: 5,

    gamesPlayed: 8,
    wins: 4,
    overtimeWins: 1,
    overtimeLosses: 0,
    losses: 3,

    goalsFor: 28,
    goalsAgainst: 21,
    points: 14,

    powerplayPercentage: 50,
    penaltyKillPercentage: 60,
    pim: 10,
    shots: 114,
    faceoffPercentage: 44.05,
    hits: 108,
    last10: "5-3-0",

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

    gamesPlayed: 8,
    wins: 3,
    overtimeWins: 1,
    overtimeLosses: 0,
    losses: 4,

    goalsFor: 18,
    goalsAgainst: 21,
    points: 11,

    powerplayPercentage: null,
    penaltyKillPercentage: 100,
    pim: 18,
    shots: 80,
    faceoffPercentage: 48.37,
    hits: 46,
    last10: "4-4-0",

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

    gamesPlayed: 8,
    wins: 3,
    overtimeWins: 0,
    overtimeLosses: 1,
    losses: 4,

    goalsFor: 20,
    goalsAgainst: 22,
    points: 10,

    powerplayPercentage: 50,
    penaltyKillPercentage: 85.71,
    pim: 14,
    shots: 106,
    faceoffPercentage: 51.68,
    hits: 63,
    last10: "3-4-1",

    playoffs: true,
    isDeg: true,
  },


  /* ---------------------------------------- */
  /* 05 – SCB ESPORTS                         */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 5,
    team: "SCB eSports",
    logo: "/images/esport/gcl13/scb-esports.png",
    players: 8,

    gamesPlayed: 8,
    wins: 2,
    overtimeWins: 1,
    overtimeLosses: 0,
    losses: 5,

    goalsFor: 20,
    goalsAgainst: 31,
    points: 8,

    powerplayPercentage: 33.33,
    penaltyKillPercentage: 77.78,
    pim: 36,
    shots: 102,
    faceoffPercentage: 57.46,
    hits: 64,
    last10: "3-5-0",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 06 – HOCKEYHOLICS                        */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 6,
    team: "Hockeyholics",
    logo: "/images/esport/gcl13/hockeyholics.png",
    players: 7,

    gamesPlayed: 4,
    wins: 2,
    overtimeWins: 0,
    overtimeLosses: 1,
    losses: 1,

    goalsFor: 14,
    goalsAgainst: 13,
    points: 7,

    powerplayPercentage: null,
    penaltyKillPercentage: 100,
    pim: 10,
    shots: 71,
    faceoffPercentage: 49.44,
    hits: 24,
    last10: "2-1-1",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 07 – GERMAN ELITE HOCKEY                */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 7,
    team: "German Elite Hockey",
    logo: "/images/esport/gcl13/german-elite-hockey.png",
    players: 9,

    gamesPlayed: 7,
    wins: 1,
    overtimeWins: 1,
    overtimeLosses: 0,
    losses: 5,

    goalsFor: 16,
    goalsAgainst: 25,
    points: 5,

    powerplayPercentage: 13.33,
    penaltyKillPercentage: 62.5,
    pim: 16,
    shots: 106,
    faceoffPercentage: 46.07,
    hits: 102,
    last10: "2-5-0",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 08 – DEADLY PHANTOMS                     */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 8,
    team: "Deadly Phantoms",
    logo: "/images/esport/gcl13/deadly-phantoms.png",
    players: 7,

    gamesPlayed: 3,
    wins: 1,
    overtimeWins: 0,
    overtimeLosses: 1,
    losses: 1,

    goalsFor: 7,
    goalsAgainst: 8,
    points: 4,

    powerplayPercentage: null,
    penaltyKillPercentage: 80,
    pim: 10,
    shots: 48,
    faceoffPercentage: 60.61,
    hits: 21,
    last10: "1-1-1",

    playoffs: true,
  },


  /* ---------------------------------------- */
  /* 09 – ISERLOHN ROOSTERS ESPORTS            */
  /* PLAYOFFS: NEIN                            */
  /* ---------------------------------------- */

  {
    position: 9,
    team: "Iserlohn Roosters eSports",
    logo: "/images/esport/gcl13/iserlohn-roosters-esports.png",
    players: 5,

    gamesPlayed: 4,
    wins: 1,
    overtimeWins: 0,
    overtimeLosses: 1,
    losses: 2,

    goalsFor: 7,
    goalsAgainst: 13,
    points: 4,

    powerplayPercentage: 14.29,
    penaltyKillPercentage: 100,
    pim: 2,
    shots: 43,
    faceoffPercentage: 52.63,
    hits: 21,
    last10: "1-2-1",

    playoffs: false,
  },

];