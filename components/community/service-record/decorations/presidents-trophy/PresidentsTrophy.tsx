/**
 * ============================================
 *
 * BloodyArmy
 *
 * ============================================
 *
 * Project:
 *
 * BloodyArmy Website
 *
 * Component:
 *
 * PresidentsTrophy
 *
 * Description:
 *
 * President's-Trophy
 *
 * ============================================
 */

import PresidentsTrophyCard from "./PresidentsTrophyCard";

import {
    presidentsTrophy,
} from "./PresidentsTrophyLevels";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


interface PresidentsTrophyProps {

    member: ServiceRecordMember;

}


export default function PresidentsTrophy({

    member,

}: PresidentsTrophyProps) {


    const years =

        member.presidentsTrophy?.years
        ??
        [];


    if (

        years.length === 0

    ) {

        return null;

    }


    return (

        <PresidentsTrophyCard

            title={
                presidentsTrophy.title
            }

            image={
                presidentsTrophy.image
            }

            years={
                years
            }

        />

    );

}