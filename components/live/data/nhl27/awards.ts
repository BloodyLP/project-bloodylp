export type CareerAward = {
    year: string;
    title: string;
    description: string;
    image?: string;
    variant?: "gold" | "silver";
};

export const careerAwards: CareerAward[] = [
    {
        year: "2025/26",
        title: "CHL CHAMPION",
        description:
            "Gewinn der Champions Hockey League in der Saison 2025/26.",
        image: "/images/nhl27/chl.png",
    },

    {
    year: "2026/27",
    title: "Vizeweltmeister U20",
    description:
        "Vizeweltmeister mit der deutschen U20-Nationalmannschaft.",
    image: "/images/nhl27/silber-u20.png",
    variant: "silver",
},
];