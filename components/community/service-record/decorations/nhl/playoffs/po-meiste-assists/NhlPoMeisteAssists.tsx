/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * NHL Playoffs – Meiste Assists
 *
 * Description:
 * Auszeichnung für die meisten Assists
 * in den NHL Playoffs.
 *
 * ============================================
 */

import NhlPoMeisteAssistsCard from "./NhlPoMeisteAssistsCard";

import {

    nhlPoMeisteAssists,

} from "./NhlPoMeisteAssistsLevels";

import type {

    ServiceRecordMember,

} from "@/types/service-record";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface NhlPoMeisteAssistsProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function NhlPoMeisteAssists({

    member,

}: NhlPoMeisteAssistsProps) {


    /* ========================================= */
    /* YEARS                                     */
    /* ========================================= */

    const years =

        member.nhlPoMeisteAssists?.years

        ??

        [];


    /* ========================================= */
    /* NOT AWARDED                               */
    /* ========================================= */

    if (

        years.length === 0

    ) {

        return null;

    }


    /* ========================================= */
    /* BADGE                                     */
    /* ========================================= */

    return (

        <NhlPoMeisteAssistsCard

            title={
                nhlPoMeisteAssists.title
            }

            subtitle={
                nhlPoMeisteAssists.subtitle
            }

            image={
                nhlPoMeisteAssists.image
            }

            years={
                years
            }

        />

    );

}