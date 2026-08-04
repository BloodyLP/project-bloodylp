/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * File:
 * service-record.ts
 *
 * Description:
 * Typdefinitionen für alle Service Records.
 *
 * ============================================
 */



import type {

    RankId,

    PrestigeLevel

} from "@/data/service-record/ranks";



import type {

    OrganizationId

} from "@/data/service-record/organizations";



import type {

    PositionId

} from "@/data/service-record/positions";









/*
================================================
TEAMS
================================================
*/


export type TeamType =


    | "BloodyArmy"


    | "Young Army";









/*
================================================
CAREER STATISTICS
================================================
*/


export type CareerSeasonStats = {



    /**
     * Anzeige Saison
     */
    season?:string;



    /**
     * Jahr
     */
    year:string;



    /**
     * Mannschaft
     */
    team:TeamType;





    games:number;



    goals:number;



    assists:number;



    points:number;



    plusMinus:number;



    penaltyMinutes:number;





    playoffGames?:number;



    playoffGoals?:number;



    playoffAssists?:number;



    playoffPoints?:number;



    playoffPlusMinus?:number;



    playoffPenaltyMinutes?:number;





    titles?:string[];



};









/*
================================================
SERVICE RECORD MEMBER
================================================
*/


export interface ServiceRecordMember {





    /**
     * Interne UUID
     */
    id:string;





    /**
     * URL-Slug
     */
    slug:string;





    /**
     * Service Record Nummer
     */
    recordNumber:string;





    /**
     * Communityname
     */
    name:string;





    /**
     * Avatar
     */
    avatar:string;





    /**
     * Dienstgrad ID
     *
     * Verbindung zur Rangdatenbank
     */
    rank:RankId;





    /**
     * Organisation
     */
    organization:OrganizationId;





    /**
     * Position in Formation
     */
    position:PositionId;





    /**
     * Reihe
     */
    line:number;





    /**
     * Eintrittsjahr
     */
    enlisted:string;





    /**
     * Prestige-Level
     */
    prestige:PrestigeLevel;





    /**
     * Patreon-Level
     */
    patreon:number;





    /**
     * Aktiv
     */
    active:boolean;





    /**
     * Sichtbar
     */
    visible:boolean;





    /**
     * Auszeichnungen
     */
    decorations:string[];





    /**
     * Ordensbänder
     */
    ribbons:string[];





    /**
     * Medaillen
     */
    medals:string[];





    /**
     * Abzeichen
     */
    badges:string[];





    /**
     * Erfolge
     */
    achievements:string[];





    /**
     * Karriere Statistik
     */
    stats?:{


        seasons:CareerSeasonStats[];


    };





    /**
     * Bemerkungen
     */
    remarks?:string;



}