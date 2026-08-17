"use client";

import CareerStatsSkater from "./CareerStatsSkater";
import CareerStatsGoalie from "./CareerStatsGoalie";

import type {
    SkaterCareerStatsData,
    GoalieCareerStatsData,
    DualCareerStatsData,
} from "./types";


/*
================================================
PROPS
================================================
*/

type CareerStatsProps = {

    playerType:
        | "skater"
        | "goalie"
        | "dual";

    stats:
        | SkaterCareerStatsData
        | GoalieCareerStatsData
        | DualCareerStatsData;

};


/*
================================================
COMPONENT
================================================
*/

export default function CareerStats({

    stats,

    playerType,

}: CareerStatsProps) {


    /*
    ================================================
    DUAL ROLE
    ================================================
    */

    if (playerType === "dual") {

        const dualStats =
            stats as DualCareerStatsData;


        return (

            <div>

                {/* =================================
                   SKATER
                ================================= */}

                <CareerStatsSkater
                    stats={dualStats.skater}
                />


                {/* =================================
                   GOALIE
                ================================= */}

                <CareerStatsGoalie
                    stats={dualStats.goalie}
                />

            </div>

        );

    }


    /*
    ================================================
    GOALIE
    ================================================
    */

    if (playerType === "goalie") {

        const goalieStats =
            stats as GoalieCareerStatsData;


        return (

            <CareerStatsGoalie
                stats={goalieStats}
            />

        );

    }


    /*
    ================================================
    SKATER
    ================================================
    */

    const skaterStats =
        stats as SkaterCareerStatsData;


    return (

        <CareerStatsSkater
            stats={skaterStats}
        />

    );

}