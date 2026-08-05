"use client";

import CareerStats from "./CareerStats";

import type {

    SkaterCareerStatsData,

    GoalieCareerStatsData,

} from "./types";

type MemberCareerStatsProps = {

    playerType:"skater" | "goalie";

    stats?:

        | SkaterCareerStatsData

        | GoalieCareerStatsData;

};

export default function MemberCareerStats({

    playerType,

    stats,

}:MemberCareerStatsProps){

    if(!stats){

        return null;

    }

    return(

        <CareerStats

            playerType={playerType}

            stats={stats}

        />

    );

}