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
 * AHL Meiste Tore
 *
 * ============================================
 *
 */

import AhlMeisteToreCard from "./AhlMeisteToreCard";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                      */
/* ========================================= */

interface AhlMeisteToreProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                  */
/* ========================================= */

export default function AhlMeisteTore({

    member,

}: AhlMeisteToreProps) {


    /* ========================================= */
    /* JAHRE                                     */
    /* ========================================= */

    const years =

        member.ahlMeisteTore?.years
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

        <AhlMeisteToreCard

            title="MEISTE TORE"

            image="/images/stats/ahl/ahl-meiste-tore.png"

            years={

                years

            }

        />

    );

}