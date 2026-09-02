/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * NHL Playoffs Topscorer
 *
 * Description:
 * NHL-Playoffs-Topscorer-Auszeichnung.
 *
 * ============================================
 */

import NhlPoTopscorerCard from "./NhlPoTopscorerCard";

import {

    nhlPoTopscorer,

} from "./NhlPoTopscorerLevels";

import type {

    ServiceRecordMember,

} from "@/types/service-record";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface NhlPoTopscorerProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function NhlPoTopscorer({

    member,

}: NhlPoTopscorerProps) {


    /* ========================================= */
    /* YEARS                                     */
    /* ========================================= */

    const years =

        member.nhlPoTopscorer?.years

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

        <NhlPoTopscorerCard

            title={
                nhlPoTopscorer.title
            }

            subtitle={
                nhlPoTopscorer.subtitle
            }

            image={
                nhlPoTopscorer.image
            }

            years={
                years
            }

        />

    );

}