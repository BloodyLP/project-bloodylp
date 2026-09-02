/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * NHL Playoffs – Meiste Tore
 *
 * Description:
 * Auszeichnung für die meisten Tore
 * in den NHL Playoffs.
 *
 * ============================================
 */

import NhlPoMeisteToreCard from "./NhlPoMeisteToreCard";

import {

    nhlPoMeisteTore,

} from "./NhlPoMeisteToreLevels";

import type {

    ServiceRecordMember,

} from "@/types/service-record";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface NhlPoMeisteToreProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function NhlPoMeisteTore({

    member,

}: NhlPoMeisteToreProps) {


    /* ========================================= */
    /* YEARS                                     */
    /* ========================================= */

    const years =

        member.nhlPoMeisteTore?.years

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

        <NhlPoMeisteToreCard

            title={
                nhlPoMeisteTore.title
            }

            subtitle={
                nhlPoMeisteTore.subtitle
            }

            image={
                nhlPoMeisteTore.image
            }

            years={
                years
            }

        />

    );

}