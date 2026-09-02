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
 * RobertWClarkeTrophy
 *
 * Description:
 *
 * Robert-W.-Clarke-Trophy-Auszeichnung.
 *
 * ============================================
 */

import RobertWClarkeTrophyCard
    from "./RobertWClarkeTrophyCard";

import {
    robertWClarkeTrophy,
} from "./RobertWClarkeTrophyLevels";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface RobertWClarkeTrophyProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function RobertWClarkeTrophy({

    member,

}: RobertWClarkeTrophyProps) {


    /* ========================================= */
    /* TROPHY JAHRE                              */
    /* ========================================= */

    const years =

        member.robertWClarkeTrophy?.years

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
    /* TROPHY                                    */
    /* ========================================= */

    return (

        <RobertWClarkeTrophyCard

            title={
                robertWClarkeTrophy.title
            }

            image={
                robertWClarkeTrophy.image
            }

            years={
                years
            }

        />

    );

}