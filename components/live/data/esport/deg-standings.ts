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
/* Stand: 08.10.2026                            */
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
/* Stand: 08.10.2026                            */
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
  /* 02 – HOCKEYHOLICS                        */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 2,
    team: "Hockeyholics",
    logo: "/images/esport/gcl13/hockeyholics.png",
    players: 7,

    gamesPlayed: 9,
    wins: 7,
    overtimeWins: 0,
    overtimeLosses: 1,
    losses: 1,

    goalsFor: 35,
    goalsAgainst: 20,
    points: 22,

    powerplayPercentage: 13.33,
    penaltyKillPercentage: 77.78,
    pim: 18,
    shots: 164,
    faceoffPercentage: 50.54,
    hits: 79,
    last10: "7-1-1",

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
  /* 04 – THE LAST SHIFT                      */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 4,
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
  /* 05 – DEADLY PHANTOMS                     */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 5,
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
  /* 06 – DEG ESPORTS                         */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 6,
    team: "DEG eSports",
    logo: "/images/esport/gcl13/deg-esports.png",
    players: 11,

    gamesPlayed: 10,
    wins: 3,
    overtimeWins: 0,
    overtimeLosses: 1,
    losses: 6,

    goalsFor: 23,
    goalsAgainst: 31,
    points: 10,

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
  /* 07 – GERMAN ELITE HOCKEY                */
  /* PLAYOFFS: JA                             */
  /* ---------------------------------------- */

  {
    position: 7,
    team: "German Elite Hockey",
    logo: "/images/esport/gcl13/german-elite-hockey.png",
    players: 9,

    gamesPlayed: 9,
    wins: 2,
    overtimeWins: 1,
    overtimeLosses: 0,
    losses: 6,

    goalsFor: 20,
    goalsAgainst: 29,
    points: 8,

    powerplayPercentage: 11.76,
    penaltyKillPercentage: 72.73,
    pim: 22,
    shots: 119,
    faceoffPercentage: 47.32,
    hits: 119,
    last10: "3-6-0",

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

    gamesPlayed: 8,
    wins: 1,
    overtimeWins: 0,
    overtimeLosses: 2,
    losses: 5,

    goalsFor: 12,
    goalsAgainst: 27,
    points: 5,

    powerplayPercentage: 16.67,
    penaltyKillPercentage: 80,
    pim: 10,
    shots: 88,
    faceoffPercentage: 51.32,
    hits: 42,
    last10: "1-5-2",

    playoffs: false,
  },

];