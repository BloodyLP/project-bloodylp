/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * NHL Meiste Tore
 *
 * Description:
 * Auszeichnung für die meisten Tore
 * in einer NHL-Saison.
 *
 * ============================================
 */

import NhlMeisteToreCard from "./NhlMeisteToreCard";

import {
    nhlMeisteTore,
} from "./NhlMeisteToreLevels";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface NhlMeisteToreProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function NhlMeisteTore({

    member,

}: NhlMeisteToreProps) {


    /* ========================================= */
    /* JAHRE                                    */
    /* ========================================= */

    const years =

        member.nhlMeisteTore?.years

        ??

        [];


    /* ========================================= */
    /* KEINE AUSZEICHNUNG                       */
    /* ========================================= */

    if (

        years.length === 0

    ) {

        return null;

    }


    /* ========================================= */
    /* BADGE                                    */
    /* ========================================= */

    return (

        <NhlMeisteToreCard

            title={
                nhlMeisteTore.title
            }

            image={
                nhlMeisteTore.image
            }

            years={
                years
            }

        />

    );

}