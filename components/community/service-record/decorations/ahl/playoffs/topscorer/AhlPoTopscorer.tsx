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
 * AhlPoTopscorer
 *
 * ============================================
 *
 * Description:
 *
 * Auszeichnung für den Topscorer
 * in den AHL Playoffs.
 *
 * ============================================
 */

import AhlPoTopscorerCard from "./AhlPoTopscorerCard";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* BADGE DATA                                */
/* ========================================= */

export const ahlPoTopscorer = {

    title: "TOPSCORER PLAYOFFS",

    subtitle: "AHL PLAYOFFS",

    image:
        "/images/stats/ahl/ahl-po-topscorer.png",

} as const;


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface AhlPoTopscorerProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function AhlPoTopscorer({

    member,

}: AhlPoTopscorerProps) {


    /* ========================================= */
    /* JAHRE                                     */
    /* ========================================= */

    const years =

        member.ahlPoTopscorer?.years

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

        <AhlPoTopscorerCard

            title={
                ahlPoTopscorer.title
            }

            subtitle={
                ahlPoTopscorer.subtitle
            }

            image={
                ahlPoTopscorer.image
            }

            years={
                years
            }

        />

    );

}