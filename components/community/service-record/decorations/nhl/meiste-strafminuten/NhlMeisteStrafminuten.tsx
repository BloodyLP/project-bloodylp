/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 *
 * BloodyArmy Website
 *
 * Component:
 *
 * NHL Meiste Strafminuten
 *
 * Description:
 *
 * Auszeichnung für die meisten
 * Strafminuten in der NHL.
 *
 * ============================================
 */

import NhlMeisteStrafminutenCard
    from "./NhlMeisteStrafminutenCard";

import {
    nhlMeisteStrafminuten,
} from "./NhlMeisteStrafminutenLevels";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface NhlMeisteStrafminutenProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function NhlMeisteStrafminuten({

    member,

}: NhlMeisteStrafminutenProps) {

    /* ========================================= */
    /* JAHRE                                    */
    /* ========================================= */

    const years =

        member.nhlMeisteStrafminuten?.years

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
    /* AUSZEICHNUNG                              */
    /* ========================================= */

    return (

        <NhlMeisteStrafminutenCard

            title={
                nhlMeisteStrafminuten.title
            }

            image={
                nhlMeisteStrafminuten.image
            }

            years={
                years
            }

        />

    );

}