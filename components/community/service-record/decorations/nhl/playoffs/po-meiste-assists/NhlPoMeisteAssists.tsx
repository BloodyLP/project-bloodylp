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
 * NhlPoMeisteAssists
 *
 * ============================================
 *
 * Description:
 *
 * Auszeichnung für die meisten Assists
 * in den NHL Playoffs.
 *
 * ============================================
 */

import NhlPoMeisteAssistsCard from "./NhlPoMeisteAssistsCard";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* BADGE DATA                               */
/* ========================================= */

export const nhlPoMeisteAssists = {

    title: "MEISTE ASSISTS PLAYOFFS",

    subtitle: "NHL PLAYOFFS",

    image:
        "/images/stats/nhl/nhl-po-meiste-assists.png",

} as const;


/* ========================================= */
/* PROPS                                    */
/* ========================================= */

interface NhlPoMeisteAssistsProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                */
/* ========================================= */

export default function NhlPoMeisteAssists({

    member,

}: NhlPoMeisteAssistsProps) {


    /* ========================================= */
    /* JAHRE                                    */
    /* ========================================= */

    const years =

        member.nhlPoMeisteAssists?.years

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
    /* CARD                                     */
    /* ========================================= */

    return (

        <NhlPoMeisteAssistsCard

            title={
                nhlPoMeisteAssists.title
            }

            subtitle={
                nhlPoMeisteAssists.subtitle
            }

            image={
                nhlPoMeisteAssists.image
            }

            years={
                years
            }

        />

    );

}