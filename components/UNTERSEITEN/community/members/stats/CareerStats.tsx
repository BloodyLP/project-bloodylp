"use client";

import CareerStatsSkater from "./CareerStatsSkater";
import CareerStatsGoalie from "./CareerStatsGoalie";

import type {

    SkaterCareerStatsData,

    GoalieCareerStatsData,

} from "./types";

type CareerStatsProps = {

    playerType:"skater" | "goalie";

    stats:

        | SkaterCareerStatsData

        | GoalieCareerStatsData;

};

export default function CareerStats({

    stats,

    playerType,

}:CareerStatsProps){

    if(playerType==="goalie"){

        return(

            <CareerStatsGoalie

                stats={

                    stats as GoalieCareerStatsData

                }

            />

        );

    }

    return(

        <CareerStatsSkater

            stats={

                stats as SkaterCareerStatsData

            }

        />

    );

}