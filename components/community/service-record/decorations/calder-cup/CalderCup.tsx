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
 * CalderCup
 *
 * Description:
 *
 * Calder-Cup-Auszeichnung
 *
 * ============================================
 */

import CalderCupCard from "./CalderCupCard";

import {
    calderCup,
} from "./CalderCupLevels";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS */
/* ========================================= */

interface CalderCupProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT */
/* ========================================= */

export default function CalderCup({

    member,

}: CalderCupProps) {


    /* ========================================= */
    /* CALDER CUP JAHRE */
    /* ========================================= */

    const years =

        member.calderCup?.years
        ??
        [];


    /* ========================================= */
    /* KEIN CALDER CUP */
    /* ========================================= */

    if (

        years.length === 0

    ) {

        return null;

    }


    /* ========================================= */
    /* CALDER CUP */
    /* ========================================= */

    return (

        <CalderCupCard

            title={
                calderCup.title
            }

            image={
                calderCup.image
            }

            years={
                years
            }

        />

    );

}