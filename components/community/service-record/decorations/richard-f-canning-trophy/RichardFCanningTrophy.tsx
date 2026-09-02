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
 * RichardFCanningTrophy
 *
 * Description:
 *
 * Richard-F.-Canning-Trophy-Auszeichnung.
 *
 * ============================================
 */

import RichardFCanningTrophyCard
    from "./RichardFCanningTrophyCard";

import {
    richardFCanningTrophy,
} from "./RichardFCanningTrophyLevels";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface RichardFCanningTrophyProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function RichardFCanningTrophy({

    member,

}: RichardFCanningTrophyProps) {


    /* ========================================= */
    /* TROPHY JAHRE                             */
    /* ========================================= */

    const years =

        member.richardFCanningTrophy?.years

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
    /* TROPHY                                   */
    /* ========================================= */

    return (

        <RichardFCanningTrophyCard

            title={
                richardFCanningTrophy.title
            }

            image={
                richardFCanningTrophy.image
            }

            years={
                years
            }

        />

    );

}