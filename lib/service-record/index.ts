/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Service Record
 *
 * Central Data Export
 *
 * ============================================
 */



import {

    rankDatabase

} from "@/data/service-record/ranks";



import {

    ORGANIZATIONS

} from "@/data/service-record/organizations";



import {

    POSITIONS

} from "@/data/service-record/positions";



import type {

    MilitaryRank,

    RankId

} from "@/data/service-record/ranks";



import type {

    OrganizationId

} from "@/data/service-record/organizations";



import type {

    PositionId

} from "@/data/service-record/positions";









/*
================================================
RANKS
================================================
*/


export const RANKS = rankDatabase;









/*
================================================
RANK LOOKUP
================================================
*/


export function rank(

    id:RankId

):MilitaryRank {



    const foundRank = RANKS.find(

        item => item.id === id

    );



    if(foundRank) {


        return foundRank;


    }



    return {


        id:"unknown",


        name:"Unknown",


        branch:"bloodyArmy",


        prestige:0,


        category:"command",


        level:0,


        insignia:""


    };


}









/*
================================================
ORGANIZATION LOOKUP
================================================
*/


export function organization(

    id:OrganizationId

) {


    return ORGANIZATIONS[id];

}









/*
================================================
POSITION LOOKUP
================================================
*/


export function position(

    id:PositionId

) {


    return POSITIONS[id];

}









/*
================================================
LEGACY SERVICE RECORD OBJECT
================================================
*/


export const ServiceRecord = {


    RANKS,


    ORGANIZATIONS,


    POSITIONS,


    rank,


    organization,


    position


};