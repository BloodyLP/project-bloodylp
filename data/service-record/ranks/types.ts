/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Rank Database
 *
 * Shared Types
 *
 * ============================================
 */





/*
================================================
PRESTIGE LEVEL
================================================
*/


export type PrestigeLevel =

    | 0

    | 1

    | 2

    | 3

    | 10;









/*
================================================
RANK ID
================================================
*/


export type RankId = string;









/*
================================================
MILITARY BRANCHES
================================================
*/


export type RankBranch =



    // Deutschland

    | "bundeswehr"

    | "bundeswehrMarine"

    | "bundeswehrSanitaet"



    // Vereinigte Staaten

    | "usArmy"

    | "usNavy"



    // Kanada

    | "canadianArmy"



    // BloodyArmy

    | "bloodyArmy";









/*
================================================
RANK CATEGORIES
================================================
*/


export type RankCategory =



    // Mannschaften

    | "mannschaften"



    // Unteroffiziere

    | "unteroffiziere"



    // Portepee / Feldwebel

    | "feldwebel"



    // Warrant Officers

    | "warrant"



    // Offiziere

    | "offiziere"



    // Sanität

    | "sanitaet"



    // Führung

    | "command"



    // BloodyArmy

    | "teamkader"

    | "fuehrungsspieler"

    | "teamleitung"

    | "organisation"

    | "auszeichnung";









/*
================================================
MILITARY RANK OBJECT
================================================
*/


export interface MilitaryRank {



    /**
     * Eindeutige ID
     */
    id:RankId;



    /**
     * Anzeigename
     */
    name:string;



    /**
     * Kürzel
     */
    abbreviation?:string;



    /**
     * Organisation / Streitkraft
     */
    branch:RankBranch;



    /**
     * Prestige
     */
    prestige:PrestigeLevel;



    /**
     * Kategorie
     */
    category:RankCategory;



    /**
     * Sortierung
     */
    level:number;

}