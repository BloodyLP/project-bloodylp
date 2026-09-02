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
 * NHL Beste Plus/Minus Bilanz
 *
 * Description:
 *
 * Auszeichnung für die beste
 * Plus/Minus-Bilanz in der NHL.
 *
 * ============================================
 */

import NhlBestePlusMinusCard
    from "./NhlBestePlusMinusCard";

import {
    nhlBestePlusMinus,
} from "./NhlBestePlusMinusLevels";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface NhlBestePlusMinusProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function NhlBestePlusMinus({

    member,

}: NhlBestePlusMinusProps) {

    /* ========================================= */
    /* JAHRE                                    */
    /* ========================================= */

    const years =

        member.nhlBestePlusMinus?.years

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
    /* AUSZEICHNUNG                              */
    /* ========================================= */

    return (

        <NhlBestePlusMinusCard

            title={
                nhlBestePlusMinus.title
            }

            image={
                nhlBestePlusMinus.image
            }

            years={
                years
            }

        />

    );

}