/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * MacgregorKilpatrickTrophy
 *
 * Description:
 * Macgregor-Kilpatrick-Trophy-Auszeichnung.
 *
 * ============================================
 */

import MacgregorKilpatrickTrophyCard
    from "./MacgregorKilpatrickTrophyCard";

import {
    macgregorKilpatrickTrophy,
} from "./MacgregorKilpatrickTrophyLevels";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface MacgregorKilpatrickTrophyProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function MacgregorKilpatrickTrophy({

    member,

}: MacgregorKilpatrickTrophyProps) {


    /* ========================================= */
    /* JAHRE                                    */
    /* ========================================= */

    const years =

        member.macgregorKilpatrickTrophy?.years

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

        <MacgregorKilpatrickTrophyCard

            title={
                macgregorKilpatrickTrophy.title
            }

            image={
                macgregorKilpatrickTrophy.image
            }

            years={
                years
            }

        />

    );

}