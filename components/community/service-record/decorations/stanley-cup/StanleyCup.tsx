/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * StanleyCup
 *
 * Description:
 * Stanley-Cup-Auszeichnung
 *
 * ============================================
 */

import StanleyCupCard from "./StanleyCupCard";

import { stanleyCup } from "./StanleyCupLevels";

import type { ServiceRecordMember } from "@/types/service-record";

interface StanleyCupProps {

    member: ServiceRecordMember;

}

export default function StanleyCup({

    member,

}: StanleyCupProps) {

    if (
        !member.decorations.includes(
            "stanley-cup"
        )
    ) {

        return null;

    }

    /**
     * Übergangslösung.
     *
     * Später kommen die Jahre
     * aus einer Datenbank.
     */

    const years = [

        2019,

        2020,

        2022,

        2025,

    ];

    return (

        <StanleyCupCard

            code={stanleyCup.code}

            title={stanleyCup.title}

            image={stanleyCup.image}

            years={years}

        />

    );

}