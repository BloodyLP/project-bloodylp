/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Rank Database
 *
 * Central Rank Collection
 *
 * ============================================
 */



import type {

    MilitaryRank

} from "./types";





import {

    bundeswehrRanks,

    bundeswehrMarineRanks,

    bundeswehrSanitaetRanks,

    usArmyRanks,

    usNavyRanks,

    canadianArmyRanks,

    bloodyArmyRanks,

    founderRanks,

    civilianRanks,


} from "./index";









/*
================================================
ALLE RÄNGE
================================================
*/


export const rankDatabase: MilitaryRank[] = [



    ...bundeswehrRanks,


    ...bundeswehrMarineRanks,


    ...bundeswehrSanitaetRanks,



    ...usArmyRanks,


    ...usNavyRanks,



    ...canadianArmyRanks,



    ...bloodyArmyRanks,



    ...founderRanks,


    ...civilianRanks
];









/*
================================================
RANG SUCHEN
================================================
*/


export function getRank(

    id:string

): MilitaryRank | undefined {



    return rankDatabase.find(

        rank => rank.id === id

    );



}









/*
================================================
NACH PRESTIGE FILTERN
================================================
*/


export function getRanksByPrestige(

    prestige:number

):MilitaryRank[] {



    return rankDatabase.filter(

        rank => rank.prestige === prestige

    );



}









/*
================================================
NACH BRANCH FILTERN
================================================
*/


export function getRanksByBranch(

    branch:string

):MilitaryRank[] {



    return rankDatabase.filter(

        rank => rank.branch === branch

    );



}









/*
================================================
NACH KATEGORIE FILTERN
================================================
*/


export function getRanksByCategory(

    category:string

):MilitaryRank[] {



    return rankDatabase.filter(

        rank => rank.category === category

    );



}