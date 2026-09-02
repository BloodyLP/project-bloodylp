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
 * AHL Topscorer
 *
 * ============================================
 *
 */

import AhlTopscorerCard from "./AhlTopscorerCard";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                      */
/* ========================================= */

interface AhlTopscorerProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                  */
/* ========================================= */

export default function AhlTopscorer({

    member,

}: AhlTopscorerProps) {


    /* ========================================= */
    /* JAHRE                                     */
    /* ========================================= */

    const years =

        member.ahlTopscorer?.years
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

        <AhlTopscorerCard

            title="TOPSCORER"

            image="/images/stats/ahl/ahl-topscorer.png"

            years={

                years

            }

        />

    );

}