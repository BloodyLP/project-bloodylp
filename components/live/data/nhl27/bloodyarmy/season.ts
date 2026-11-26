/**
 * NHL 27 – Los Angeles BloodyArmy
 * Pacific Division | 20 Spieler der Aufstellung
 * 18 Feldspieler + 2 Torhüter
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

export type PlayerPosition = "LF" | "C" | "RF" | "LV" | "RV";

export interface PlayerStat {
    gamertag: string;
    jerseyNumber: number;
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
    home: string;
    away: string;
    homeScore: number | null;
    awayScore: number | null;
    overtime?: boolean;
}

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

const standingsRows: [
    number,
    string,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
][] = [
    [1, "Anaheim Ducks", 0, 0, 0, 0, 0, 0, 0, 0],
    [2, "Calgary Flames", 0, 0, 0, 0, 0, 0, 0, 0],
    [3, "Edmonton Oilers", 0, 0, 0, 0, 0, 0, 0, 0],
    [4, "Los Angeles BloodyArmy", 0, 0, 0, 0, 0, 0, 0, 0],
    [5, "San Jose Sharks", 0, 0, 0, 0, 0, 0, 0, 0],
    [6, "Seattle Kraken", 0, 0, 0, 0, 0, 0, 0, 0],
    [7, "Vancouver Canucks", 0, 0, 0, 0, 0, 0, 0, 0],
    [8, "Vegas Golden Knights", 0, 0, 0, 0, 0, 0, 0, 0],
];

export const divisionStandings: DivisionStanding[] =
    standingsRows.map(
        ([
            rank,
            team,
            games,
            points,
            wins,
            losses,
            overtimeWins,
            overtimeLosses,
            goalsFor,
            goalsAgainst,
        ]) => ({
            rank,
            team,
            games,
            points,
            wins,
            losses,
            overtimeWins,
            overtimeLosses,
            goalsFor,
            goalsAgainst,
        })
    );

const roster: [string, number, PlayerPosition][] = [
    ["David211197", 21, "LF"],
    ["stevethebever", 96, "C"],
    ["Kn3cht82", 14, "RF"],
    ["HightowerSL", 73, "LF"],
    ["Surstroemingtyp124", 22, "C"],
    ["dungeon_02", 62, "RF"],
    ["Krebser94", 94, "LV"],
    ["ThePiotrek1993", 93, "RV"],
    ["derPolarstern", 18, "LV"],
    ["Rosendorf1981", 23, "RV"],
    ["BloodyLP", 13, "LF"],
    ["Dannylce87", 16, "C"],
    ["LOLFury37", 37, "RF"],
    ["Krabson83", 83, "LF"],
    ["condor1986", 10, "C"],
    ["annihilatorLP97", 97, "RF"],
    ["B0bbe1e", 72, "LV"],
    ["NurSoEinDoggie", 58, "RV"],
];

export const teamScorers: PlayerStat[] = roster.map(
    ([gamertag, jerseyNumber, position]) => ({
        gamertag,
        jerseyNumber,
        position,
        ...zeroSkater,
    })
);

const goalieRoster: [string, number][] = [
    ["O1L3R5", 27],
    ["Ligoween", 50],
];

export const teamGoalies: GoalieStat[] = goalieRoster.map(
    ([gamertag, jerseyNumber]) => ({
        gamertag,
        jerseyNumber,
        position: "TW",
        ...zeroGoalie,
    })
);

const schedule: [
    number,
    string,
    string,
    string,
    number | null,
    number | null,
    boolean?
][] = [
    [1, "30.09.2026", "Colorado Avalanche", "Los Angeles BloodyArmy", null, null, false],
    [2, "03.10.2026", "San Jose Sharks", "Los Angeles BloodyArmy", null, null, false],
    [3, "06.10.2026", "Los Angeles BloodyArmy", "Florida Panthers", null, null, false],
    [4, "10.10.2026", "Vegas Golden Knights", "Los Angeles BloodyArmy", null, null, false],
    [5, "13.10.2026", "Los Angeles BloodyArmy", "Edmonton Oilers", null, null, false],
    [6, "17.10.2026", "Los Angeles BloodyArmy", "Boston Bruins", null, null, false],
    [7, "20.10.2026", "Washington Capitals", "Los Angeles BloodyArmy", null, null, false],
    [8, "22.10.2026", "New York Islanders", "Los Angeles BloodyArmy", null, null, false],
    [9, "24.10.2026", "New Jersey Devils", "Los Angeles BloodyArmy", null, null, false],
    [10, "26.10.2026", "New York Rangers", "Los Angeles BloodyArmy", null, null, false],
    [11, "27.10.2026", "Chicago Blackhawks", "Los Angeles BloodyArmy", null, null, false],
    [12, "29.10.2026", "Los Angeles BloodyArmy", "Ottawa Senators", null, null, false],
    [13, "31.10.2026", "Los Angeles BloodyArmy", "Buffalo Sabres", null, null, false],
    [14, "04.11.2026", "Los Angeles BloodyArmy", "San Jose Sharks", null, null, false],
    [15, "07.11.2026", "Los Angeles BloodyArmy", "Pittsburgh Penguins", null, null, false],
    [16, "10.11.2026", "Los Angeles BloodyArmy", "Nashville Predators", null, null, false],
    [17, "12.11.2026", "Los Angeles BloodyArmy", "New York Islanders", null, null, false],
    [18, "14.11.2026", "Los Angeles BloodyArmy", "Calgary Flames", null, null, false],
    [19, "17.11.2026", "Boston Bruins", "Los Angeles BloodyArmy", null, null, false],
    [20, "19.11.2026", "Toronto Maple Leafs", "Los Angeles BloodyArmy", null, null, false],
    [21, "21.11.2026", "Ottawa Senators", "Los Angeles BloodyArmy", null, null, false],
    [22, "23.11.2026", "Montreal Canadiens", "Los Angeles BloodyArmy", null, null, false],
    [23, "27.11.2026", "Anaheim Ducks", "Los Angeles BloodyArmy", null, null, false],
    [24, "28.11.2026", "Los Angeles BloodyArmy", "Anaheim Ducks", null, null, false],
    [25, "01.12.2026", "Los Angeles BloodyArmy", "Vegas Golden Knights", null, null, false],
    [26, "03.12.2026", "Los Angeles BloodyArmy", "Minnesota Wild", null, null, false],
    [27, "05.12.2026", "Los Angeles BloodyArmy", "Utah Mammoth", null, null, false],
    [28, "09.12.2026", "Los Angeles BloodyArmy", "San Jose Sharks", null, null, false],
    [29, "11.12.2026", "San Jose Sharks", "Los Angeles BloodyArmy", null, null, false],
    [30, "12.12.2026", "Los Angeles BloodyArmy", "Vancouver Canucks", null, null, false],
    [31, "15.12.2026", "Detroit Red Wings", "Los Angeles BloodyArmy", null, null, false],
    [32, "17.12.2026", "Pittsburgh Penguins", "Los Angeles BloodyArmy", null, null, false],
    [33, "19.12.2026", "Columbus Blue Jackets", "Los Angeles BloodyArmy", null, null, false],
    [34, "20.12.2026", "Buffalo Sabres", "Los Angeles BloodyArmy", null, null, false],
    [35, "22.12.2026", "Minnesota Wild", "Los Angeles BloodyArmy", null, null, false],
    [36, "26.12.2026", "Los Angeles BloodyArmy", "Utah Mammoth", null, null, false],
    [37, "28.12.2026", "Vancouver Canucks", "Los Angeles BloodyArmy", null, null, false],
    [38, "30.12.2026", "Los Angeles BloodyArmy", "Toronto Maple Leafs", null, null, false],
    [39, "02.01.2027", "Los Angeles BloodyArmy", "New Jersey Devils", null, null, false],
    [40, "04.01.2027", "Los Angeles BloodyArmy", "Philadelphia Flyers", null, null, false],
    [41, "06.01.2027", "Los Angeles BloodyArmy", "Washington Capitals", null, null, false],
    [42, "09.01.2027", "Los Angeles BloodyArmy", "Dallas Stars", null, null, false],
    [43, "11.01.2027", "Los Angeles BloodyArmy", "New York Rangers", null, null, false],
    [44, "13.01.2027", "Los Angeles BloodyArmy", "St. Louis Blues", null, null, false],
    [45, "15.01.2027", "Utah Mammoth", "Los Angeles BloodyArmy", null, null, false],
    [46, "16.01.2027", "Calgary Flames", "Los Angeles BloodyArmy", null, null, false],
    [47, "19.01.2027", "Los Angeles BloodyArmy", "Seattle Kraken", null, null, false],
    [48, "21.01.2027", "Los Angeles BloodyArmy", "Edmonton Oilers", null, null, false],
    [49, "23.01.2027", "Nashville Predators", "Los Angeles BloodyArmy", null, null, false],
    [50, "24.01.2027", "Florida Panthers", "Los Angeles BloodyArmy", null, null, false],
    [51, "26.01.2027", "Tampa Bay Lightning", "Los Angeles BloodyArmy", null, null, false],
    [52, "28.01.2027", "Philadelphia Flyers", "Los Angeles BloodyArmy", null, null, false],
    [53, "30.01.2027", "Carolina Hurricanes", "Los Angeles BloodyArmy", null, null, false],
    [54, "08.02.2027", "Dallas Stars", "Los Angeles BloodyArmy", null, null, false],
    [55, "09.02.2027", "St. Louis Blues", "Los Angeles BloodyArmy", null, null, false],
    [56, "11.02.2027", "Los Angeles BloodyArmy", "Detroit Red Wings", null, null, false],
    [57, "13.02.2027", "Los Angeles BloodyArmy", "Chicago Blackhawks", null, null, false],
    [58, "15.02.2027", "Los Angeles BloodyArmy", "Calgary Flames", null, null, false],
    [59, "17.02.2027", "Winnipeg Jets", "Los Angeles BloodyArmy", null, null, false],
    [60, "18.02.2027", "Minnesota Wild", "Los Angeles BloodyArmy", null, null, false],
    [61, "20.02.2027", "Los Angeles BloodyArmy", "Seattle Kraken", null, null, false],
    [62, "24.02.2027", "Los Angeles BloodyArmy", "Montreal Canadiens", null, null, false],
    [63, "26.02.2027", "Chicago Blackhawks", "Los Angeles BloodyArmy", null, null, false],
    [64, "27.02.2027", "Nashville Predators", "Los Angeles BloodyArmy", null, null, false],
    [65, "01.03.2027", "Los Angeles BloodyArmy", "Anaheim Ducks", null, null, false],
    [66, "03.03.2027", "Los Angeles BloodyArmy", "Tampa Bay Lightning", null, null, false],
    [67, "05.03.2027", "Los Angeles BloodyArmy", "Columbus Blue Jackets", null, null, false],
    [68, "07.03.2027", "Los Angeles BloodyArmy", "Colorado Avalanche", null, null, false],
    [69, "09.03.2027", "Edmonton Oilers", "Los Angeles BloodyArmy", null, null, false],
    [70, "11.03.2027", "Seattle Kraken", "Los Angeles BloodyArmy", null, null, false],
    [71, "13.03.2027", "Los Angeles BloodyArmy", "Dallas Stars", null, null, false],
    [72, "16.03.2027", "Los Angeles BloodyArmy", "Winnipeg Jets", null, null, false],
    [73, "18.03.2027", "Los Angeles BloodyArmy", "Carolina Hurricanes", null, null, false],
    [74, "21.03.2027", "Seattle Kraken", "Los Angeles BloodyArmy", null, null, false],
    [75, "23.03.2027", "Vancouver Canucks", "Los Angeles BloodyArmy", null, null, false],
    [76, "25.03.2027", "Calgary Flames", "Los Angeles BloodyArmy", null, null, false],
    [77, "27.03.2027", "Edmonton Oilers", "Los Angeles BloodyArmy", null, null, false],
    [78, "29.03.2027", "Los Angeles BloodyArmy", "Vancouver Canucks", null, null, false],
    [79, "31.03.2027", "Los Angeles BloodyArmy", "Winnipeg Jets", null, null, false],
    [80, "02.04.2027", "Colorado Avalanche", "Los Angeles BloodyArmy", null, null, false],
    [81, "03.04.2027", "Los Angeles BloodyArmy", "St. Louis Blues", null, null, false],
    [82, "06.04.2027", "Anaheim Ducks", "Los Angeles BloodyArmy", null, null, false],
    [83, "08.04.2027", "Los Angeles BloodyArmy", "Vegas Golden Knights", null, null, false],
    [84, "10.04.2027", "Vegas Golden Knights", "Los Angeles BloodyArmy", null, null, false],
];

export const teamGames: TeamGame[] = schedule.map(
    ([gameDay, date, home, away, homeScore, awayScore, overtime]) => ({
        gameDay,
        date,
        home,
        away,
        homeScore,
        awayScore,
        overtime,
    })
);