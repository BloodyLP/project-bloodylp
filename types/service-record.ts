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

    PrestigeLevel,

} from "@/data/service-record/ranks";

import type {

    OrganizationId,

} from "@/data/service-record/organizations";

import type {

    PositionId,

} from "@/data/service-record/positions";

import type {

    CareerSeasonStats,

} from "./career-stats";

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
     * Dienstgrad
     */
    rank:RankId;

    /**
     * Organisation
     */
    organization:OrganizationId;

    /**
     * Position
     */
    position:PositionId;

    /**
     * Spielertyp
     */
    playerType:"skater" | "goalie";

    /**
     * Trikotnummer
     */
    playerNumber:string;

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
     * Decorations
     */
    decorations:string[];

    /**
     * Ribbon Racks
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
     * Achievements
     */
    achievements:string[];

    /**
     * Karriere-Statistik
     */
    stats?:{

        seasons:CareerSeasonStats[];

    };

    /**
     * Bemerkungen
     */
    remarks?:string;

}