export type TeamRecordHolder = {
year: number;
player: string;
value: string;
highlight?: boolean;
};

export type TeamSeasonResult = {
year: number;
result: string;
highlight?: boolean;
};

export type TeamAwardWinner = {
year: number;
winner: string;
highlight?: boolean;
};

export type SeasonTable = {
year: number;
image?: string;
};

export type TeamStatsData = {
regularSeason: {
games: number;
points: number;
wins: number;
losses: number;
winPercentage: string;
goalsFor: number;
goalsAgainst: number;
};

playoffs: {
    games: number;
    wins: number;
    losses: number;
    winPercentage: string;
    goalsFor: number;
    goalsAgainst: number;
};

regularSeasonRecords: {
    points: TeamRecordHolder[];
    goals: TeamRecordHolder[];
    assists: TeamRecordHolder[];
    penaltyMinutes: TeamRecordHolder[];
    plusMinus: TeamRecordHolder[];
};

playoffRecords: {
    points: TeamRecordHolder[];
    goals: TeamRecordHolder[];
    assists: TeamRecordHolder[];
    penaltyMinutes: TeamRecordHolder[];
    plusMinus: TeamRecordHolder[];
};

seasonTables: SeasonTable[];

awards: {
    stanleyCup: TeamAwardWinner[];
    presidentsTrophy: TeamAwardWinner[];
    clarenceCampbell: TeamAwardWinner[];
    princeOfWales: TeamAwardWinner[];
};

playoffResults: TeamSeasonResult[];

};

export const BLOODY_ARMY_STATS: TeamStatsData = {

regularSeason: {
    games: 574,
    points: 783,
    wins: 371,
    losses: 165,
    winPercentage: "64,6 %",
    goalsFor: 2005,
    goalsAgainst: 1485,
},

playoffs: {
    games: 136,
    wins: 87,
    losses: 49,
    winPercentage: "63,9 %",
    goalsFor: 451,
    goalsAgainst: 314,
},

regularSeasonRecords: {

    points: [
        {
            year: 2019,
            player: "BloodyLP / Dannyice",
            value: "jeweils 78",
        },
        {
            year: 2020,
            player: "BloodyLP",
            value: "67",
        },
        {
            year: 2021,
            player: "Stevethebever",
            value: "65",
        },
        {
            year: 2022,
            player: "HightowerSL",
            value: "70",
        },
        {
            year: 2023,
            player: "BloodyLP",
            value: "71",
        },
        {
            year: 2024,
            player: "Stevethebever",
            value: "89",
        },
        {
            year: 2025,
            player: "BloodyLP",
            value: "91",
            highlight: true,
        },
    ],

    goals: [
        {
            year: 2019,
            player: "BloodyLP",
            value: "46",
        },
        {
            year: 2020,
            player: "BloodyLP",
            value: "37",
        },
        {
            year: 2021,
            player: "LOLFury",
            value: "36",
        },
        {
            year: 2022,
            player: "HightowerSL",
            value: "45",
        },
        {
            year: 2023,
            player: "BloodyLP",
            value: "52",
        },
        {
            year: 2024,
            player: "BloodyLP",
            value: "45",
        },
        {
            year: 2025,
            player: "BloodyLP",
            value: "60",
            highlight: true,
        },
    ],

    assists: [
        {
            year: 2019,
            player: "Krebser",
            value: "45",
        },
        {
            year: 2020,
            player: "BloodyLP",
            value: "30",
        },
        {
            year: 2021,
            player: "Rosendorf",
            value: "45",
        },
        {
            year: 2022,
            player: "ThePiotrek",
            value: "38",
        },
        {
            year: 2023,
            player: "ThePiotrek",
            value: "42",
        },
        {
            year: 2024,
            player: "ThePiotrek",
            value: "65",
            highlight: true,
        },
        {
            year: 2025,
            player: "Krebser",
            value: "52",
        },
    ],

    penaltyMinutes: [
        {
            year: 2019,
            player: "Blackhawk",
            value: "54",
        },
        {
            year: 2020,
            player: "Stevethebever",
            value: "42",
        },
        {
            year: 2021,
            player: "BloodyLP",
            value: "40",
        },
        {
            year: 2022,
            player: "Rosendorf",
            value: "71",
            highlight: true,
        },
        {
            year: 2023,
            player: "BloodyLP",
            value: "29",
        },
        {
            year: 2024,
            player: "Stevethebever",
            value: "48",
        },
        {
            year: 2025,
            player: "BloodyLP",
            value: "23",
        },
    ],

    plusMinus: [
        {
            year: 2019,
            player: "Krebser",
            value: "64",
        },
        {
            year: 2020,
            player: "Bobbele",
            value: "48",
        },
        {
            year: 2021,
            player: "Krebser",
            value: "33",
        },
        {
            year: 2022,
            player: "Rosendorf",
            value: "43",
        },
        {
            year: 2023,
            player: "BloodyLP",
            value: "42",
        },
        {
            year: 2024,
            player: "BloodyLP",
            value: "41",
        },
        {
            year: 2025,
            player: "BloodyLP",
            value: "73",
            highlight: true,
        },
    ],
},

playoffRecords: {

    points: [
        {
            year: 2019,
            player: "DannyIce",
            value: "25",
            highlight: true,
        },
        {
            year: 2020,
            player: "Stevethebever",
            value: "15",
        },
        {
            year: 2021,
            player: "BloodyLP",
            value: "14",
        },
        {
            year: 2022,
            player: "BloodyLP / HightowerSL",
            value: "jeweils 17",
        },
        {
            year: 2023,
            player: "Stevethebever / Blackhawk",
            value: "jeweils 10",
        },
        {
            year: 2024,
            player: "Blackhawk",
            value: "21",
        },
        {
            year: 2025,
            player: "Hightower",
            value: "22",
        },
    ],

    goals: [
        {
            year: 2019,
            player: "BloodyLP",
            value: "15",
            highlight: true,
        },
        {
            year: 2020,
            player: "Stevethebever / Blackhawk",
            value: "jeweils 7",
        },
        {
            year: 2021,
            player: "LOLFury",
            value: "8",
        },
        {
            year: 2022,
            player: "BloodyLP",
            value: "12",
        },
        {
            year: 2023,
            player: "Stevethebever / HightowerSL",
            value: "jeweils 6",
        },
        {
            year: 2024,
            player: "BloodyLP",
            value: "12",
        },
        {
            year: 2025,
            player: "Hightower",
            value: "15",
            highlight: true,
        },
    ],

    assists: [
        {
            year: 2019,
            player: "LOLFury",
            value: "16",
            highlight: true,
        },
        {
            year: 2020,
            player: "Rosendorf",
            value: "11",
        },
        {
            year: 2021,
            player: "BloodyLP",
            value: "10",
        },
        {
            year: 2022,
            player: "HightowerSL / Blackhawk / ThePiotrek",
            value: "jeweils 10",
        },
        {
            year: 2023,
            player: "Blackhawk",
            value: "6",
        },
        {
            year: 2024,
            player: "ThePiotrek",
            value: "13",
        },
        {
            year: 2025,
            player: "Blackhawk",
            value: "15",
        },
    ],

    penaltyMinutes: [
        {
            year: 2019,
            player: "HightowerSL",
            value: "17",
        },
        {
            year: 2020,
            player: "Rosendorf",
            value: "23",
        },
        {
            year: 2021,
            player: "Stevethebever",
            value: "26",
            highlight: true,
        },
        {
            year: 2022,
            player: "ThePiotrek",
            value: "19",
        },
        {
            year: 2023,
            player: "Stevethebever / BloodyLP",
            value: "jeweils 4",
        },
        {
            year: 2024,
            player: "Stevethebever",
            value: "12",
        },
        {
            year: 2025,
            player: "LOLFury",
            value: "9",
        },
    ],

    plusMinus: [
        {
            year: 2019,
            player: "BloodyLP",
            value: "16",
        },
        {
            year: 2020,
            player: "Stevethebever",
            value: "15",
        },
        {
            year: 2021,
            player: "LOLFury",
            value: "12",
        },
        {
            year: 2022,
            player: "Rosendorf",
            value: "20",
            highlight: true,
        },
        {
            year: 2023,
            player: "Dannyice",
            value: "5",
        },
        {
            year: 2024,
            player: "ThePiotrek",
            value: "17",
        },
        {
            year: 2025,
            player: "Blackhawk",
            value: "20",
            highlight: true,
        },
    ],
},

seasonTables: [
    {
        year: 2019,
    },
    {
        year: 2020,
    },
    {
        year: 2021,
    },
    {
        year: 2022,
    },
    {
        year: 2023,
    },
    {
        year: 2024,
    },
    {
        year: 2025,
    },
],

awards: {

    stanleyCup: [
        {
            year: 2019,
            winner: "Atlantic BloodyArmy",
            highlight: true,
        },
        {
            year: 2020,
            winner: "Los Angeles BloodyArmy",
            highlight: true,
        },
        {
            year: 2021,
            winner: "Tampa Bay Lightning",
        },
        {
            year: 2022,
            winner: "Los Angeles BloodyArmy",
            highlight: true,
        },
        {
            year: 2023,
            winner: "Tampa Bay Lightning",
        },
        {
            year: 2024,
            winner: "Toronto Maple Leafs",
        },
        {
            year: 2025,
            winner: "Los Angeles BloodyArmy",
            highlight: true,
        },
    ],

    presidentsTrophy: [
        {
            year: 2019,
            winner: "Nashville Predators",
        },
        {
            year: 2020,
            winner: "Philadelphia Flyers",
        },
        {
            year: 2021,
            winner: "Tampa Bay Lightning",
        },
        {
            year: 2022,
            winner: "Florida Panthers",
        },
        {
            year: 2023,
            winner: "Los Angeles BloodyArmy",
            highlight: true,
        },
        {
            year: 2024,
            winner: "Tampa Bay Lightning",
        },
        {
            year: 2025,
            winner: "Los Angeles BloodyArmy",
            highlight: true,
        },
    ],

    clarenceCampbell: [
        {
            year: 2019,
            winner: "Winnipeg Jets",
        },
        {
            year: 2020,
            winner: "Los Angeles BloodyArmy",
            highlight: true,
        },
        {
            year: 2021,
            winner: "Minnesota Wild",
        },
        {
            year: 2022,
            winner: "Los Angeles BloodyArmy",
            highlight: true,
        },
        {
            year: 2023,
            winner: "Calgary Flames",
        },
        {
            year: 2024,
            winner: "Colorado Avalanche",
        },
        {
            year: 2025,
            winner: "Los Angeles BloodyArmy",
            highlight: true,
        },
    ],

    princeOfWales: [
        {
            year: 2019,
            winner: "Atlantic BloodyArmy",
            highlight: true,
        },
        {
            year: 2020,
            winner: "Boston Bruins",
        },
        {
            year: 2021,
            winner: "Tampa Bay Lightning",
        },
        {
            year: 2022,
            winner: "Pittsburgh Penguins",
        },
        {
            year: 2023,
            winner: "Tampa Bay Lightning",
        },
        {
            year: 2024,
            winner: "Toronto Maple Leafs",
        },
        {
            year: 2025,
            winner: "Tampa Bay Lightning",
        },
    ],
},

playoffResults: [
    {
        year: 2019,
        result: "Stanley Cup Sieger gegen die Winnipeg Jets – Serie 4:1",
        highlight: true,
    },
    {
        year: 2020,
        result: "Stanley Cup Sieger gegen die Boston Bruins – Serie 4:3",
        highlight: true,
    },
    {
        year: 2021,
        result: "Runde 2 gegen die Edmonton Oilers – Serie 1:4",
    },
    {
        year: 2022,
        result: "Stanley Cup Sieger gegen die Pittsburgh Penguins – Serie 4:1",
        highlight: true,
    },
    {
        year: 2023,
        result: "Runde 2 gegen die Calgary Flames – Serie 3:4",
    },
    {
        year: 2024,
        result: "Western Conference Finals gegen die Colorado Avalanche – Serie 3:4",
    },
    {
        year: 2025,
        result: "Stanley Cup Sieger gegen die Tampa Bay Lightning – Serie 4:0",
        highlight: true,
    },
    {
        year: 2026,
        result: "Noch offen",
    },
],

};
