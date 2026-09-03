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
 * AhlPoMeisteTore
 *
 * ============================================
 *
 * Description:
 *
 * Auszeichnung für die meisten Tore
 * in den AHL Playoffs.
 *
 * ============================================
 */

import AhlPoMeisteToreCard from "./AhlPoMeisteToreCard";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* BADGE DATA                                */
/* ========================================= */

export const ahlPoMeisteTore = {

    title: "MEISTE TORE PLAYOFFS",

    subtitle: "AHL PLAYOFFS",

    image:
        "/images/stats/ahl/ahl-po-meiste-tore.png",

} as const;


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface AhlPoMeisteToreProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function AhlPoMeisteTore({

    member,

}: AhlPoMeisteToreProps) {


    /* ========================================= */
    /* JAHRE                                     */
    /* ========================================= */

    const years =

        member.ahlPoMeisteTore?.years

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

        <AhlPoMeisteToreCard

            title={
                ahlPoMeisteTore.title
            }

            subtitle={
                ahlPoMeisteTore.subtitle
            }

            image={
                ahlPoMeisteTore.image
            }

            years={
                years
            }

        />

    );

}