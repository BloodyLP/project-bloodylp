export type CareerTeam = {
    season: string;
    team: string;
    league: string;
    logo: string;

    games: number;
    goals: number;
    assists: number;
    points: number;
    plusMinus: number;
    pim: number;

    status: "AKTUELL" | "NICHT MEHR AKTIV";
    contractUntil?: string;
};

export const careerTeams: CareerTeam[] = [
    
     {
        season: "2027/2028",
        team: "Toronto Maple Leafs",
        league: "NHL",
        logo: "/images/nhl27/toronto-maple-leafs.png",

        games: 4,
        goals: 5,
        assists: 1,
        points: 6,
        plusMinus: 5,
        pim: 2,

        status: "AKTUELL",
        contractUntil: "2028/29",
    },  
    
    {
        season: "2026/2027",
        team: "Toronto Maple Leafs",
        league: "NHL",
        logo: "/images/nhl27/toronto-maple-leafs.png",

        games: 77,
        goals: 36,
        assists: 25,
        points: 61,
        plusMinus: 18,
        pim: 48,

        status: "AKTUELL",
        contractUntil: "2028/29",
    },

    {
        season: "2025/26",
        team: "Skellefteå AIK",
        league: "CHAMPIONS HOCKEY LEAGUE",
        logo: "/images/nhl27/skelleftea-aik.svg",

        games: 3,
        goals: 4,
        assists: 2,
        points: 6,
        plusMinus: 4,
        pim: 2,

        status: "NICHT MEHR AKTIV",
    },

    {
        season: "2025/26",
        team: "Deutschland U20",
        league: "U20-NATIONALMANNSCHAFT",
        logo: "/images/nhl27/deb.png",

        games: 2,
        goals: 0,
        assists: 2,
        points: 2,
        plusMinus: 1,
        pim: 4,

        status: "NICHT MEHR AKTIV",
    },
];