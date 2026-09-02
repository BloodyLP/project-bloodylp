/**
 * ============================================
 *
 * BloodyArmy
 *
 * ============================================
 *
 * Project:
 *
 * BloodyArmy Website
 *
 * ============================================
 *
 * Component:
 *
 * AHL Beste Plus-Minus Bilanz
 *
 * ============================================
 *
 */

import AhlBestePlusMinusCard from "./AhlBestePlusMinusCard";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                      */
/* ========================================= */

interface AhlBestePlusMinusProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                  */
/* ========================================= */

export default function AhlBestePlusMinus({

    member,

}: AhlBestePlusMinusProps) {


    /* ========================================= */
    /* JAHRE                                     */
    /* ========================================= */

    const years =

        member.ahlBestePlusMinus?.years
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
    /* CARD                                      */
    /* ========================================= */

    return (

        <AhlBestePlusMinusCard

            title="BESTE +/- BILANZ"

            image="/images/stats/ahl/ahl-beste-plus-minus.png"

            years={

                years

            }

        />

    );

}