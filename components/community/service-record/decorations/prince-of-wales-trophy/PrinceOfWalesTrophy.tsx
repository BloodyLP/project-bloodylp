/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * PrinceOfWalesTrophy
 *
 * Description:
 * Prince-of-Wales-Trophy-Auszeichnung.
 *
 * ============================================
 */

import PrinceOfWalesTrophyCard from "./PrinceOfWalesTrophyCard";

import {

    princeOfWalesTrophy,

} from "./PrinceOfWalesTrophyLevels";

import type {

    ServiceRecordMember,

} from "@/types/service-record";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface PrinceOfWalesTrophyProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function PrinceOfWalesTrophy({

    member,

}: PrinceOfWalesTrophyProps) {


    /* ========================================= */
    /* TROPHY JAHRE                              */
    /* ========================================= */

    const years =

        member.princeOfWalesTrophy?.years

        ??

        [];


    /* ========================================= */
    /* KEINE TROPHY                              */
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

        <PrinceOfWalesTrophyCard

            title={
                princeOfWalesTrophy.title
            }

            image={
                princeOfWalesTrophy.image
            }

            years={
                years
            }

        />

    );

}