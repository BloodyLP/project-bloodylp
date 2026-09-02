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
 * AHL Meiste Assists
 *
 * ============================================
 *
 */

import AhlMeisteAssistsCard from "./AhlMeisteAssistsCard";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                      */
/* ========================================= */

interface AhlMeisteAssistsProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                  */
/* ========================================= */

export default function AhlMeisteAssists({

    member,

}: AhlMeisteAssistsProps) {


    /* ========================================= */
    /* JAHRE                                     */
    /* ========================================= */

    const years =

        member.ahlMeisteAssists?.years
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

        <AhlMeisteAssistsCard

            title="MEISTE ASSISTS"

            image="/images/stats/ahl/ahl-meiste-assists.png"

            years={

                years

            }

        />

    );

}