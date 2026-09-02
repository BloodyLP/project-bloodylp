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
 * ============================================
 *
 * Component:
 *
 * AHL Meiste Strafminuten
 *
 * ============================================
 *
 */

import AhlMeisteStrafminutenCard from "./AhlMeisteStrafminutenCard";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                      */
/* ========================================= */

interface AhlMeisteStrafminutenProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                  */
/* ========================================= */

export default function AhlMeisteStrafminuten({

    member,

}: AhlMeisteStrafminutenProps) {


    /* ========================================= */
    /* JAHRE                                     */
    /* ========================================= */

    const years =

        member.ahlMeisteStrafminuten?.years
        ??
        [];


    /* ========================================= */
    /* KEINE AUSZEICHNUNG                        */
    /* ========================================= */

    if (

        years.length === 0

    ) {

        return null;

    }


    /* ========================================= */
    /* CARD                                      */
    /* ========================================= */

    return (

        <AhlMeisteStrafminutenCard

            title="MEISTE STRAFMINUTEN"

            image="/images/stats/ahl/ahl-meiste-strafminuten.png"

            years={

                years

            }

        />

    );

}