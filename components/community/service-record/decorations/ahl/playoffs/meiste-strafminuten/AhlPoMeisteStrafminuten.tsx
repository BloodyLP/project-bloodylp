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
 * AhlPoMeisteStrafminuten
 *
 * ============================================
 *
 * Description:
 *
 * Auszeichnung für die meisten Strafminuten
 * in den AHL Playoffs.
 *
 * ============================================
 */

import AhlPoMeisteStrafminutenCard from "./AhlPoMeisteStrafminutenCard";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* BADGE DATA                                */
/* ========================================= */

export const ahlPoMeisteStrafminuten = {

    title: "MEISTE STRAFMINUTEN PLAYOFFS",

    subtitle: "AHL PLAYOFFS",

    image:
        "/images/stats/ahl/ahl-po-meiste-strafminuten.png",

} as const;


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface AhlPoMeisteStrafminutenProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function AhlPoMeisteStrafminuten({

    member,

}: AhlPoMeisteStrafminutenProps) {


    /* ========================================= */
    /* JAHRE                                     */
    /* ========================================= */

    const years =

        member.ahlPoMeisteStrafminuten?.years

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

        <AhlPoMeisteStrafminutenCard

            title={
                ahlPoMeisteStrafminuten.title
            }

            subtitle={
                ahlPoMeisteStrafminuten.subtitle
            }

            image={
                ahlPoMeisteStrafminuten.image
            }

            years={
                years
            }

        />

    );

}