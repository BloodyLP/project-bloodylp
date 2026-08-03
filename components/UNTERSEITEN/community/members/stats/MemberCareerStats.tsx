"use client";


import CareerStats from "./CareerStats";


import type {

    CareerStatsData,

} from "./types";


import {

    emptyCareerStats,

} from "./data";







type MemberCareerStatsProps = {


    stats?:CareerStatsData;


};









export default function MemberCareerStats({


    stats,


}:MemberCareerStatsProps){



    return (



        <CareerStats


            stats={

                stats

                ??

                emptyCareerStats

            }


        />



    );

}