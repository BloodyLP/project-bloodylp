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
 * NHL Meiste Assists
 *
 * Description:
 *
 * Auszeichnung für die meisten
 * Assists in der NHL.
 *
 * ============================================
 */

import NhlMeisteAssistsCard
    from "./NhlMeisteAssistsCard";

import {
    nhlMeisteAssists,
} from "./NhlMeisteAssistsLevels";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface NhlMeisteAssistsProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function NhlMeisteAssists({

    member,

}: NhlMeisteAssistsProps) {

    /* ========================================= */
    /* JAHRE                                    */
    /* ========================================= */

    const years =

        member.nhlMeisteAssists?.years

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

        <NhlMeisteAssistsCard

            title={
                nhlMeisteAssists.title
            }

            image={
                nhlMeisteAssists.image
            }

            years={
                years
            }

        />

    );

}