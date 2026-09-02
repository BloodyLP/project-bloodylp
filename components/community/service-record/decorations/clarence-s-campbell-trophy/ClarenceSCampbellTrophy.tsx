/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * ClarenceSCampbellTrophy
 *
 * Description:
 * Clarence-S.-Campbell-Trophy-Auszeichnung.
 *
 * ============================================
 */

import ClarenceSCampbellTrophyCard from "./ClarenceSCampbellTrophyCard";

import {
    clarenceSCampbellTrophy,
} from "./ClarenceSCampbellTrophyLevels";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                      */
/* ========================================= */

interface ClarenceSCampbellTrophyProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                  */
/* ========================================= */

export default function ClarenceSCampbellTrophy({

    member,

}: ClarenceSCampbellTrophyProps) {


    /* ========================================= */
    /* TROPHY JAHRE                              */
    /* ========================================= */

    const years =

        member.clarenceSCampbellTrophy?.years

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

        <ClarenceSCampbellTrophyCard

            title={
                clarenceSCampbellTrophy.title
            }

            image={
                clarenceSCampbellTrophy.image
            }

            years={
                years
            }

        />

    );

}