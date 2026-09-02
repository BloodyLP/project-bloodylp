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
 * NHL Topscorer
 *
 * Description:
 *
 * NHL-Topscorer-Auszeichnung.
 *
 * ============================================
 */

import NhlTopscorerCard
    from "./NhlTopscorerCard";

import {
    nhlTopscorer,
} from "./NhlTopscorerLevels";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface NhlTopscorerProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function NhlTopscorer({

    member,

}: NhlTopscorerProps) {


    /* ========================================= */
    /* AUSZEICHNUNGSJAHRE                       */
    /* ========================================= */

    const years =

        member.nhlTopscorer?.years

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

        <NhlTopscorerCard

            title={
                nhlTopscorer.title
            }

            image={
                nhlTopscorer.image
            }

            years={
                years
            }

        />

    );

}