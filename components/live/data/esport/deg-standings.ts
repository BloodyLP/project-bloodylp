/*
 * ============================================
 * BloodyLP
 *
 * Project:
 * BloodyLP Website
 *
 * File:
 * components/live/data/esport/deg-standings.ts
 *
 * Description:
 * GCL 13 – Division I
 * Aktueller Tabellenstand
 *
 * Stand: 26.10.2026
 * ============================================
 */

/* ============================================
 * LEAGUE TYPE
 * ============================================ */

export type DegStandingsLeague = {
  name: string;
  logo: string;
  group: string;
  season: string;
};

/* ============================================
 * LEAGUE DATA
 * ============================================ */

export const degStandingsLeague: DegStandingsLeague = {
  name: "GCL 13",
  logo: "/images/esport/logos/gcl.png",
  group: "DIVISION I",
  season: "",
};

/* ============================================
 * TEAM TYPE
 * ============================================ */

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

/* ============================================
 * GCL 13 – DIVISION I
 * 9 TEAMS
 *
 * Stand: 26.10.2026
 * ============================================ */

export const degStandings: DegStanding[] = [
  /* ----------------------------------------
   * 01 – CONEXION
   * ---------------------------------------- */
  {
    position: 1,
    team: "Conexion",
    logo: "/images/esport/gcl13/conexion.png",
    players: 8,

    gamesPlayed: 14,
    wins: 10,
    overtimeWins: 1,
    overtimeLosses: 1,
    losses: 2,

    goalsFor: 65,
    goalsAgainst: 31,
    points: 33,

    powerplayPercentage: 26.67,
    penaltyKillPercentage: 80.95,
    pim: 42,
    shots: 299,
    faceoffPercentage: 48.86,
    hits: 212,
    last10: "8-2-0",

    playoffs: true,
  },

  /* ----------------------------------------
   * 02 – HOCKEYHOLICS
   * ---------------------------------------- */
  {
    position: 2,
    team: "Hockeyholics",
    logo: "/images/esport/gcl13/hockeyholics.png",
    players: 7,

    gamesPlayed: 14,
    wins: 9,
    overtimeWins: 0,
    overtimeLosses: 3,
    losses: 2,

    goalsFor: 50,
    goalsAgainst: 29,
    points: 30,

    powerplayPercentage: 8.7,
    penaltyKillPercentage: 84.62,
    pim: 26,
    shots: 231,
    faceoffPercentage: 48.51,
    hits: 102,
    last10: "5-2-3",

    playoffs: true,
  },

  /* ----------------------------------------
   * 03 – DEADLY PHANTOMS
   * ---------------------------------------- */
  {
    position: 3,
    team: "Deadly Phantoms",
    logo: "/images/esport/gcl13/deadly-phantoms.png",
    players: 7,

    gamesPlayed: 14,
    wins: 8,
    overtimeWins: 2,
    overtimeLosses: 1,
    losses: 3,

    goalsFor: 37,
    goalsAgainst: 26,
    points: 29,

    powerplayPercentage: 20,
    penaltyKillPercentage: 83.33,
    pim: 36,
    shots: 206,
    faceoffPercentage: 53.95,
    hits: 133,
    last10: "9-1-0",

    playoffs: true,
  },

  /* ----------------------------------------
   * 04 – DEG ESPORTS
   * ---------------------------------------- */
  {
    position: 4,
    team: "DEG eSports",
    logo: "/images/esport/gcl13/deg-esports.png",
    players: 11,

    gamesPlayed: 14,
    wins: 7,
    overtimeWins: 0,
    overtimeLosses: 1,
    losses: 6,

    goalsFor: 31,
    goalsAgainst: 31,
    points: 22,

    powerplayPercentage: 27.27,
    penaltyKillPercentage: 91.67,
    pim: 24,
    shots: 188,
    faceoffPercentage: 49.44,
    hits: 79,
    last10: "5-4-1",

    playoffs: true,
    isDeg: true,
  },

  /* ----------------------------------------
   * 05 – GERMAN ELITE HOCKEY
   * ---------------------------------------- */
  {
    position: 5,
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

  /* ----------------------------------------
   * 06 – REH GAMING
   * ---------------------------------------- */
  {
    position: 6,
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

  /* ----------------------------------------
   * 07 – SCB ESPORTS
   * ---------------------------------------- */
  {
    position: 7,
    team: "SCB eSports",
    logo: "/images/esport/gcl13/scb-esports.png",
    players: 8,

    gamesPlayed: 14,
    wins: 1,
    overtimeWins: 1,
    overtimeLosses: 1,
    losses: 11,

    goalsFor: 18,
    goalsAgainst: 45,
    points: 6,

    powerplayPercentage: 22.22,
    penaltyKillPercentage: 86.96,
    pim: 46,
    shots: 135,
    faceoffPercentage: 54.32,
    hits: 83,
    last10: "1-8-1",

    playoffs: true,
  },

  /* ----------------------------------------
   * 08 – ISERLOHN ROOSTERS ESPORTS
   * ---------------------------------------- */
  {
    position: 8,
    team: "Iserlohn Roosters eSports",
    logo: "/images/esport/gcl13/iserlohn-roosters-esports.png",
    players: 5,

    gamesPlayed: 14,
    wins: 1,
    overtimeWins: 0,
    overtimeLosses: 3,
    losses: 10,

    goalsFor: 19,
    goalsAgainst: 59,
    points: 6,

    powerplayPercentage: 23.81,
    penaltyKillPercentage: 64.29,
    pim: 28,
    shots: 169,
    faceoffPercentage: 45.87,
    hits: 95,
    last10: "0-8-2",

    playoffs: true,
  },

  /* ----------------------------------------
   * 09 – THE LAST SHIFT [DSQ]
   * ---------------------------------------- */
  {
    position: 9,
    team: "The Last Shift [DSQ]",
    logo: "/images/esport/gcl13/the-last-shift.png",
    players: 5,

    gamesPlayed: 0,
    wins: 0,
    overtimeWins: 0,
    overtimeLosses: 0,
    losses: 0,

    goalsFor: 0,
    goalsAgainst: 0,
    points: 0,

    powerplayPercentage: null,
    penaltyKillPercentage: null,
    pim: 0,
    shots: 0,
    faceoffPercentage: null,
    hits: 0,
    last10: "0-0-0",

    playoffs: false,
  },
];