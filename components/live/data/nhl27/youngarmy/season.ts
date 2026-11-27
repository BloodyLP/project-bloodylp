/**
 * NHL 27 • Ontario YoungArmy
 * AHL Pacific Division
 *
 * Alle Statistiken starten bei 0.
 * Die Termine basieren auf dem 2026/27-Spielplan der Ontario Reign.
 * Ontario Reign wurde durch Ontario YoungArmy ersetzt.
 */

export interface DivisionStanding {
    rank: number;
    team: string;
    games: number;
    points: number;
    wins: number;
    losses: number;
    overtimeWins: number;
    overtimeLosses: number;
    goalsFor: number;
    goalsAgainst: number;
}

export type PlayerPosition = "LA" | "C" | "RA" | "LV" | "RV";

export interface PlayerStat {
    gamertag: string;
    jerseyNumber: number | null;
    position: PlayerPosition;
    games: number;
    goals: number;
    assists: number;
    points: number;
    plusMinus: number;
    penaltyMinutes: number;
    shots: number;
    shootingPercentage: number;
    hits: number;
    powerPlayGoals: number;
    powerPlayPoints: number;
}

export interface GoalieStat {
    gamertag: string;
    jerseyNumber: number;
    position: "TW";
    games: number;
    starts: number;
    wins: number;
    losses: number;
    overtimeLosses: number;
    shutouts: number;
    saves: number;
    shotsAgainst: number;
    goalsAgainst: number;
    savePercentage: number;
    goalsAgainstAverage: number;
}

export interface TeamGame {
    gameDay: number;
    date: string;
    time?: string;
    home: string;
    away: string;
    homeScore: number | null;
    awayScore: number | null;
    overtime?: boolean;
}

const TEAM_NAME = "Ontario YoungArmy";

const zeroSkater = {
    games: 0,
    goals: 0,
    assists: 0,
    points: 0,
    plusMinus: 0,
    penaltyMinutes: 0,
    shots: 0,
    shootingPercentage: 0,
    hits: 0,
    powerPlayGoals: 0,
    powerPlayPoints: 0,
};

const zeroGoalie = {
    games: 0,
    starts: 0,
    wins: 0,
    losses: 0,
    overtimeLosses: 0,
    shutouts: 0,
    saves: 0,
    shotsAgainst: 0,
    goalsAgainst: 0,
    savePercentage: 0,
    goalsAgainstAverage: 0,
};

/* ========================================================= */
/* AHL PACIFIC DIVISION                                      */
/* Ontario Reign wird durch Ontario YoungArmy ersetzt.       */
/* Alle Werte starten bei 0.                                 */
/* ========================================================= */

const divisionTeams = [
    "Abbotsford Canucks",
    "Bakersfield Condors",
    "Calgary Wranglers",
    "Coachella Valley Firebirds",
    "Colorado Eagles",
    "Henderson Silver Knights",
    TEAM_NAME,
    "San Diego Gulls",
    "San Jose Barracuda",
    "Tucson Roadrunners",
];

export const divisionStandings: DivisionStanding[] =
    divisionTeams.map((team, index) => ({
        rank: index + 1,
        team,
        games: 0,
        points: 0,
        wins: 0,
        losses: 0,
        overtimeWins: 0,
        overtimeLosses: 0,
        goalsFor: 0,
        goalsAgainst: 0,
    }));

/* ========================================================= */
/* FELDSPIELER                                               */
/* 35 Feldspieler aus deinem Screenshot                      */
/* ========================================================= */

const roster: [string, number | null, PlayerPosition][] = [
    ["Tonska98", 2, "LA"],
    ["Mausefinger", 70, "LA"],
    ["FlorianH1999", 65, "RA"],
    ["katzenpfote_1", 25, "RA"],
    ["Hanns Scheinwerfer", 40, "C"],
    ["Lost_Edyvil", 11, "C"],
    ["Kklopapierre_", 77, "C"],
    ["JaQueTraktiv", 62, "C"],
    ["Mayla the Bloodylinchen", 8, "RA"],
    ["adlermannheimfan95", 95, "LV"],
    ["hitzi_canada57", 57, "RV"],
    ["Mister_Rioes", 66, "RV"],
    ["Don R. Wetter", 77, "RV"],
    ["Reiner G. Znich", 81, "RA"],
    ["Harry Gersack", 13, "RA"],
    ["WandaLismus", 55, "LA"],
    ["Misterpmf1980", 19, "LV"],
    ["xREAL121x", 16, "LA"],
    ["BradyDerEchte", 12, "RV"],
    ["Adripey169", 26, "LV"],
    ["adriangross0602", 9, "LV"],
    ["d0n_pac0o", 7, "C"],
    ["Thellmfurter", 91, "LA"],
    ["Fortnitelover", 80, "RV"],
    ["Nightbot", 30, "LV"],
    ["EurasischerWolf", 35, "LA"],
];

export const teamScorers: PlayerStat[] = roster.map(
    ([gamertag, jerseyNumber, position]) => ({
        gamertag,
        jerseyNumber,
        position,
        ...zeroSkater,
    })
);

/* ========================================================= */
/* GOALIES                                                    */
/* ========================================================= */

const goalieRoster: [string, number][] = [
    ["KleinerHans", 5],
    ["ArschanLadde", 99],
];

export const teamGoalies: GoalieStat[] = goalieRoster.map(
    ([gamertag, jerseyNumber]) => ({
        gamertag,
        jerseyNumber,
        position: "TW",
        ...zeroGoalie,
    })
);

/* ========================================================= */
/* SPIELPLAN 2026/27                                          */
/* Ontario Reign -> Ontario YoungArmy                          */
/* Ergebnisse werden nach den Spielen eingetragen.             */
/* ========================================================= */

const schedule: [
    string,
    string,
    string,
    string,
    string
][] = [
    ["02.10.2026", "19:00 PT", "Coachella Valley Firebirds", TEAM_NAME, "away"],
    ["03.10.2026", "18:00 PT", TEAM_NAME, "Coachella Valley Firebirds", "home"],
    ["11.10.2026", "15:00 PT", "Coachella Valley Firebirds", TEAM_NAME, "away"],
    ["14.10.2026", "19:00 PT", "San Diego Gulls", TEAM_NAME, "away"],
    ["17.10.2026", "18:00 PT", TEAM_NAME, "Henderson Silver Knights", "home"],
    ["20.10.2026", "19:00 PT", TEAM_NAME, "Calgary Wranglers", "home"],
    ["23.10.2026", "17:00 PT", "Texas Stars", TEAM_NAME, "away"],
    ["24.10.2026", "17:00 PT", "Texas Stars", TEAM_NAME, "away"],
    ["28.10.2026", "19:00 PT", "Henderson Silver Knights", TEAM_NAME, "away"],
    ["30.10.2026", "19:00 PT", TEAM_NAME, "Tucson Roadrunners", "home"],
    ["31.10.2026", "15:00 PT", TEAM_NAME, "Tucson Roadrunners", "home"],
    ["04.11.2026", "19:00 PT", TEAM_NAME, "San Jose Barracuda", "home"],
    ["06.11.2026", "18:00 PT", "Abbotsford Canucks", TEAM_NAME, "away"],
    ["07.11.2026", "16:00 PT", "Abbotsford Canucks", TEAM_NAME, "away"],
    ["14.11.2026", "18:00 PT", TEAM_NAME, "Abbotsford Canucks", "home"],
    ["15.11.2026", "18:00 PT", TEAM_NAME, "Colorado Eagles", "home"],
    ["18.11.2026", "19:00 PT", TEAM_NAME, "Abbotsford Canucks", "home"],
    ["21.11.2026", "18:00 PT", TEAM_NAME, "Coachella Valley Firebirds", "home"],
    ["22.11.2026", "15:00 PT", TEAM_NAME, "Henderson Silver Knights", "home"],
    ["24.11.2026", "19:00 PT", "San Diego Gulls", TEAM_NAME, "away"],
    ["28.11.2026", "16:00 PT", "Calgary Wranglers", TEAM_NAME, "away"],
    ["29.11.2026", "13:00 PT", "Calgary Wranglers", TEAM_NAME, "away"],
    ["02.12.2026", "19:00 PT", TEAM_NAME, "Calgary Wranglers", "home"],
    ["05.12.2026", "19:10 PT", "Bakersfield Condors", TEAM_NAME, "away"],
    ["06.12.2026", "15:00 PT", TEAM_NAME, "Calgary Wranglers", "home"],
    ["09.12.2026", "19:00 PT", TEAM_NAME, "San Jose Barracuda", "home"],
    ["12.12.2026", "18:00 PT", TEAM_NAME, "San Diego Gulls", "home"],
    ["15.12.2026", "17:30 PT", "Tucson Roadrunners", TEAM_NAME, "away"],
    ["16.12.2026", "17:30 PT", "Tucson Roadrunners", TEAM_NAME, "away"],
    ["19.12.2026", "18:00 PT", "Henderson Silver Knights", TEAM_NAME, "away"],
    ["20.12.2026", "17:00 PT", "Henderson Silver Knights", TEAM_NAME, "away"],
    ["27.12.2026", "15:00 PT", "Coachella Valley Firebirds", TEAM_NAME, "away"],
    ["31.12.2026", "17:00 PT", TEAM_NAME, "San Jose Barracuda", "home"],
    ["02.01.2027", "19:10 PT", "Bakersfield Condors", TEAM_NAME, "away"],
    ["03.01.2027", "15:00 PT", TEAM_NAME, "Coachella Valley Firebirds", "home"],
    ["06.01.2027", "19:00 PT", "Henderson Silver Knights", TEAM_NAME, "away"],
    ["08.01.2027", "19:00 PT", TEAM_NAME, "Milwaukee Admirals", "home"],
    ["09.01.2027", "18:00 PT", TEAM_NAME, "Milwaukee Admirals", "home"],
    ["13.01.2027", "19:00 PT", TEAM_NAME, "San Jose Barracuda", "home"],
    ["15.01.2027", "19:00 PT", TEAM_NAME, "Calgary Wranglers", "home"],
    ["17.01.2027", "15:00 PT", TEAM_NAME, "Bakersfield Condors", "home"],
    ["20.01.2027", "19:00 PT", TEAM_NAME, "Coachella Valley Firebirds", "home"],
    ["23.01.2027", "18:00 PT", TEAM_NAME, "San Diego Gulls", "home"],
    ["29.01.2027", "19:00 PT", "San Jose Barracuda", TEAM_NAME, "away"],
    ["30.01.2027", "18:00 PT", "San Jose Barracuda", TEAM_NAME, "away"],
    ["05.02.2027", "19:10 PT", "Bakersfield Condors", TEAM_NAME, "away"],
    ["06.02.2027", "18:00 PT", TEAM_NAME, "Bakersfield Condors", "home"],
    ["12.02.2027", "17:00 PT", "Milwaukee Admirals", TEAM_NAME, "away"],
    ["13.02.2027", "16:00 PT", "Milwaukee Admirals", TEAM_NAME, "away"],
    ["17.02.2027", "19:00 PT", TEAM_NAME, "Colorado Eagles", "home"],
    ["19.02.2027", "19:00 PT", TEAM_NAME, "Bakersfield Condors", "home"],
    ["20.02.2027", "19:10 PT", "Bakersfield Condors", TEAM_NAME, "away"],
    ["23.02.2027", "17:30 PT", "Tucson Roadrunners", TEAM_NAME, "away"],
    ["24.02.2027", "17:30 PT", "Tucson Roadrunners", TEAM_NAME, "away"],
    ["26.02.2027", "16:00 PT", "Calgary Wranglers", TEAM_NAME, "away"],
    ["28.02.2027", "10:00 PT", "Calgary Wranglers", TEAM_NAME, "away"],
    ["06.03.2027", "18:00 PT", TEAM_NAME, "San Diego Gulls", "home"],
    ["07.03.2027", "17:00 PT", "San Diego Gulls", TEAM_NAME, "away"],
    ["10.03.2027", "19:00 PT", TEAM_NAME, "Texas Stars", "home"],
    ["12.03.2027", "19:00 PT", TEAM_NAME, "Henderson Silver Knights", "home"],
    ["14.03.2027", "15:00 PT", TEAM_NAME, "Texas Stars", "home"],
    ["17.03.2027", "19:00 PT", "San Jose Barracuda", TEAM_NAME, "away"],
    ["19.03.2027", "18:05 PT", "Colorado Eagles", TEAM_NAME, "away"],
    ["20.03.2027", "17:05 PT", "Colorado Eagles", TEAM_NAME, "away"],
    ["24.03.2027", "10:30 PT", "San Jose Barracuda", TEAM_NAME, "away"],
    ["27.03.2027", "18:00 PT", TEAM_NAME, "Tucson Roadrunners", "home"],
    ["31.03.2027", "19:00 PT", TEAM_NAME, "Bakersfield Condors", "home"],
    ["02.04.2027", "19:00 PT", TEAM_NAME, "Tucson Roadrunners", "home"],
    ["03.04.2027", "18:00 PT", "Coachella Valley Firebirds", TEAM_NAME, "away"],
    ["07.04.2027", "19:00 PT", TEAM_NAME, "Henderson Silver Knights", "home"],
    ["09.04.2027", "19:00 PT", TEAM_NAME, "San Diego Gulls", "home"],
    ["10.04.2027", "18:00 PT", "San Diego Gulls", TEAM_NAME, "away"],
];

export const teamGames: TeamGame[] = schedule.map(
    ([date, time, home, away], index) => ({
        gameDay: index + 1,
        date,
        time,
        home,
        away,
        homeScore: null,
        awayScore: null,
    })
);