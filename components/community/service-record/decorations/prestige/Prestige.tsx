import DecorationCard from "../DecorationCard";

import {
    prestigeLevels,
    type PrestigeKey,
} from "./PrestigeLevels";

import type { ServiceRecordMember } from "@/types/service-record";

interface PrestigeProps {
    member: ServiceRecordMember;
}

export default function Prestige({
    member,
}: PrestigeProps) {

    const level = Math.min(
        Math.max(member.prestige, 1),
        10
    );

    const key = `prestige${toRoman(level)}` as PrestigeKey;

    const prestige = prestigeLevels[key];

    return (

        <DecorationCard

            code={prestige.code}

            category={prestige.category}

            rarity={prestige.rarity}

            classification={prestige.classification}

            issued={prestige.issued}

            title={prestige.title}

            subtitle={prestige.subtitle}

            description={prestige.description}

            requirements={prestige.requirements}

            image={prestige.image}

        />

    );

}

function toRoman(level: number): string {

    switch (level) {

        case 1:
            return "I";

        case 2:
            return "II";

        case 3:
            return "III";

        case 4:
            return "IV";

        case 5:
            return "V";

        case 6:
            return "VI";

        case 7:
            return "VII";

        case 8:
            return "VIII";

        case 9:
            return "IX";

        case 10:
            return "X";

        default:
            return "I";

    }

}