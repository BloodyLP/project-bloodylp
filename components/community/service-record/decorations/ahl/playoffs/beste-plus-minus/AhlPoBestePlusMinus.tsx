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
 * AhlPoBestePlusMinus
 *
 * ============================================
 *
 * Description:
 *
 * Auszeichnung für die beste +/- Bilanz
 * in den AHL Playoffs.
 *
 * ============================================
 */

import AhlPoBestePlusMinusCard from "./AhlPoBestePlusMinusCard";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* BADGE DATA                                */
/* ========================================= */

export const ahlPoBestePlusMinus = {

    title: "BESTE +/- BILANZ PLAYOFFS",

    subtitle: "AHL PLAYOFFS",

    image:
        "/images/stats/ahl/ahl-po-beste-plus-minus.png",

} as const;


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface AhlPoBestePlusMinusProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function AhlPoBestePlusMinus({

    member,

}: AhlPoBestePlusMinusProps) {


    /* ========================================= */
    /* JAHRE                                     */
    /* ========================================= */

    const years =

        member.ahlPoBestePlusMinus?.years

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

        <AhlPoBestePlusMinusCard

            title={
                ahlPoBestePlusMinus.title
            }

            subtitle={
                ahlPoBestePlusMinus.subtitle
            }

            image={
                ahlPoBestePlusMinus.image
            }

            years={
                years
            }

        />

    );

}