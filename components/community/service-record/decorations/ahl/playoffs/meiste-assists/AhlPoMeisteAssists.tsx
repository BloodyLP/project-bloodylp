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
 * AhlPoMeisteAssists
 *
 * ============================================
 *
 * Description:
 *
 * Auszeichnung für die meisten Assists
 * in den AHL Playoffs.
 *
 * ============================================
 */

import AhlPoMeisteAssistsCard from "./AhlPoMeisteAssistsCard";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* BADGE DATA                                */
/* ========================================= */

export const ahlPoMeisteAssists = {

    title: "MEISTE ASSISTS PLAYOFFS",

    subtitle: "AHL PLAYOFFS",

    image:
        "/images/stats/ahl/ahl-po-meiste-assists.png",

} as const;


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface AhlPoMeisteAssistsProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function AhlPoMeisteAssists({

    member,

}: AhlPoMeisteAssistsProps) {


    /* ========================================= */
    /* JAHRE                                     */
    /* ========================================= */

    const years =

        member.ahlPoMeisteAssists?.years

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

        <AhlPoMeisteAssistsCard

            title={
                ahlPoMeisteAssists.title
            }

            subtitle={
                ahlPoMeisteAssists.subtitle
            }

            image={
                ahlPoMeisteAssists.image
            }

            years={
                years
            }

        />

    );

}