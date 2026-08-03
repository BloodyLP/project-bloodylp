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


import type { RankId } from "@/data/service-record/ranks";

import type { OrganizationId } from "@/data/service-record/organizations";

import type { PositionId } from "@/data/service-record/positions";





export interface CareerSeasonStats {


    year:string;


    games:number;


    goals:number;


    assists:number;


    points:number;


    plusMinus:number;


    penaltyMinutes:number;




    playoffGames:number;


    playoffGoals:number;


    playoffAssists:number;


    playoffPoints:number;


    playoffPlusMinus:number;


    playoffPenaltyMinutes:number;




    titles:string[];


}









export interface CareerStats {


    seasons:CareerSeasonStats[];


}









export interface ServiceRecordMember {

    /**
     * Interne UUID
     */
    id: string;



    /**
     * URL-Slug
     */
    slug: string;



    /**
     * BA-000001
     */
    recordNumber: string;



    /**
     * Communityname
     */
    name: string;



    /**
     * Avatar
     */
    avatar: string;



    /**
     * Dienstgrad
     */
    rank: RankId;



    /**
     * Organisation
     */
    organization: OrganizationId;



    /**
     * Position
     */
    position: PositionId;



    /**
     * Reihe
     */
    line: number;



    /**
     * Eintritt
     */
    enlisted: string;



    /**
     * Prestige-Level
     *
     * Werte:
     * 1 - 10
     */
    prestige: number;



    /**
     * Patreon-Level
     *
     * 0 = kein Patreon
     */
    patreon: number;



    /**
     * Aktiv
     */
    active: boolean;



    /**
     * Mitglied sichtbar
     */
    visible: boolean;



    /**
     * Auszeichnungen
     */
    decorations: string[];



    /**
     * Ordensbänder
     */
    ribbons: string[];



    /**
     * Medaillen
     */
    medals: string[];



    /**
     * Abzeichen
     */
    badges: string[];



    /**
     * Erfolge
     */
    achievements: string[];



    /**
     * Karriere Statistiken
     */
    stats?: CareerStats;



    /**
     * Bemerkungen
     */
    remarks?: string;


}