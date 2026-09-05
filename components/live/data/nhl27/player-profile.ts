export type PlayerProfile = {
    name: string;
    position: string;
    number: number;
    birthPlace: string;
    birthDate: string;
    shoots: "L" | "R";
    height: string;
    weight: string;
    currentTeam: string;
    currentLeague: string;
    contractUntil: string;
    image: string;
};

export const playerProfile: PlayerProfile = {
    name: "Alexander Blattmann",
    position: "CENTER",
    number: 15,
    birthPlace: "Freiburg im Breisgau, Deutschland",
    birthDate: "13. Juli 2008",
    shoots: "R",
    height: "193 cm",
    weight: "100 KG",
    currentTeam: "Toronto Maple Leafs",
    currentLeague: "NHL",
    contractUntil: "2028/29",
    image: "/images/nhl27/toronto2.png",
};