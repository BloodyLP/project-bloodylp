/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Rank Database
 *
 * Central Export
 *
 * ============================================
 */



/*
================================================
TYPES
================================================
*/


export * from "./types";







/*
================================================
PRESTIGE 0
BUNDESWEHR
================================================
*/


export {

    bundeswehrRanks

} from "./prestige-0/bundeswehr";



export {

    bundeswehrMarineRanks

} from "./prestige-0/bundeswehr-marine";



export {

    bundeswehrSanitaetRanks

} from "./prestige-0/bundeswehr-sanitaet";







/*
================================================
PRESTIGE 1
UNITED STATES
================================================
*/


export {

    usArmyRanks

} from "./prestige-1/us-army";



export {

    usNavyRanks

} from "./prestige-1/us-navy";







/*
================================================
PRESTIGE 2
CANADA
================================================
*/


export {

    canadianArmyRanks

} from "./prestige-2/canadian-army";







/*
================================================
PRESTIGE 3
BLOODYARMY
================================================
*/


export {

    bloodyArmyRanks

} from "./prestige-3/eigene-dienstgrade";







/*
================================================
PRESTIGE 10
FOUNDER
================================================
*/


export {

    founderRanks

} from "./prestige-10/founder";







/*
================================================
DATABASE FUNCTIONS
================================================
*/


export {

    rankDatabase,

    getRank,

    getRanksByPrestige,

    getRanksByBranch,

    getRanksByCategory


} from "./rankDatabase";