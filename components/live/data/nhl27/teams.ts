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
        season: "2026/27 – 2028/29",
        team: "Toronto Maple Leafs",
        league: "NHL",
        logo: "/images/nhl27/toronto-maple-leafs.png",

        games: 0,
        goals: 0,
        assists: 0,
        points: 0,
        plusMinus: 0,
        pim: 0,

        status: "AKTUELL",
        contractUntil: "2028/29",
    },

    {
        season: "2026/27",
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
        season: "2026/27",
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