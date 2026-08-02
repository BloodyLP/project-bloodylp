import {
    BadgeCheck,
    Shield,
    Star,
    Trophy,
    UserRound,
    Users,
} from "lucide-react";

import { LucideIcon } from "lucide-react";

export type MembershipBenefit = {
    icon: LucideIcon;
    title: string;
    description: string;
};

export const membershipBenefits: MembershipBenefit[] = [
    {
        icon: Shield,
        title: "Dienstgrad Soldat",
        description:
            "Mit deiner offiziellen Aufnahme beginnt dein Weg als Soldat der BloodyArmy. Durch dein Engagement kannst du später weitere Dienstgrade erreichen.",
    },
    {
        icon: Users,
        title: "Platz in der BloodyArmy",
        description:
            "Du wirst offizieller Bestandteil der BloodyArmy bzw. Young Army und repräsentierst unsere Community in den NHL-Projekten.",
    },
    {
        icon: UserRound,
        title: "Persönliche Begrüßung",
        description:
            "Dein offizieller Beitritt wird während eines Livestreams mit deinem persönlichen Beitrittssound gefeiert.",
    },
    {
        icon: BadgeCheck,
        title: "Eigene Sedcard",
        description:
            "Du erhältst deine persönliche Sedcard auf der Homepage inklusive Comic-Avatar und deinem aktuellen Dienstgrad.",
    },
    {
        icon: Star,
        title: "Persönliches Service Record",
        description:
            "Deine gesamte Laufbahn innerhalb der BloodyArmy wird dauerhaft dokumentiert – inklusive Beförderungen und Auszeichnungen.",
    },
    {
        icon: Trophy,
        title: "Beförderungen & Auszeichnungen",
        description:
            "Mit deinem Engagement innerhalb der Community kannst du im Rang aufsteigen und dir besondere Auszeichnungen verdienen.",
    },
];