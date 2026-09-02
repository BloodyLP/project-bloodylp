/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Component:
 *
 * NHL Playoffs
 * Meiste Strafminuten
 *
 * ============================================
 */

import PoMeisteStrafminutenCard from "./PoMeisteStrafminutenCard";

import {

    poMeisteStrafminuten,

} from "./PoMeisteStrafminutenLevels";

import type {

    ServiceRecordMember,

} from "@/types/service-record";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface PoMeisteStrafminutenProps {

    member:
        ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function PoMeisteStrafminuten({

    member,

}: PoMeisteStrafminutenProps) {


    /* ========================================= */
    /* JAHRE                                    */
    /* ========================================= */

    const years =

        member.poMeisteStrafminuten?.years

        ??

        [];


    /* ========================================= */
    /* KEINE AUSZEICHNUNG                       */
    /* ========================================= */

    if (

        years.length === 0

    ) {

        return null;

    }


    /* ========================================= */
    /* BADGE                                    */
    /* ========================================= */

    return (

        <PoMeisteStrafminutenCard

            title={
                poMeisteStrafminuten.title
            }

            subtitle={
                poMeisteStrafminuten.subtitle
            }

            image={
                poMeisteStrafminuten.image
            }

            years={
                years
            }

        />

    );

}