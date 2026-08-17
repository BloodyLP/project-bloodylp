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

    CareerGoalieSeasonStats,

} from "./career-stats";


/* ========================================= */
/* TEAMS */
/* ========================================= */

export type TeamType =

    | "BloodyArmy"

    | "Young Army";


/* ========================================= */
/* STANDARD STATS */
/* ========================================= */

export type StandardServiceRecordStats = {

    seasons: CareerSeasonStats[];

};


/* ========================================= */
/* DUAL ROLE STATS */
/* ========================================= */

export type DualRoleServiceRecordStats = {

    skater?: {

        seasons: CareerSeasonStats[];

    };

    goalie?: {

        seasons: CareerGoalieSeasonStats[];

    };

};


/* ========================================= */
/* SERVICE RECORD MEMBER */
/* ========================================= */

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
     * Service Record Nummer
     */
    recordNumber: string;


    /**
     * Anzeigename
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
     * Spielertyp
     *
     * Bestimmt grundsätzlich den
     * primären Spielertyp der Karte.
     *
     * Bei einem Dual-Role-Spieler kann
     * hier weiterhin "skater" stehen.
     */
    playerType:
        | "skater"
        | "goalie";


    /**
     * Dual Role
     *
     * true:
     *
     * Der Spieler war sowohl
     * Skater als auch Goalie.
     *
     * false / undefined:
     *
     * Normaler Spieler.
     */
    dualRole?: boolean;


    /**
     * Trikotnummer
     */
    playerNumber: string;


    /**
     * Reihe
     */
    line: number;


    /**
     * Eintrittsjahr
     */
    enlisted: string;


    /**
     * Prestige-Level
     */
    prestige: PrestigeLevel;


    /**
     * Patreon-Level
     */
    patreon: number;


    /**
     * Aktiv
     */
    active: boolean;


    /**
     * Sichtbar
     */
    visible: boolean;


    /**
     * Decorations
     */
    decorations: string[];


    /**
     * Stanley Cup
     */
    stanleyCup?: {

        years: number[];

    };


    /**
     * Ribbon Rack
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
     * Achievements
     */
    achievements: string[];


    /**
     * Karriere-Statistik
     *
     * Standard:
     *
     * stats:{
     *     seasons:[...]
     * }
     *
     * Dual Role:
     *
     * stats:{
     *
     *     skater:{
     *         seasons:[...]
     *     },
     *
     *     goalie:{
     *         seasons:[...]
     *     }
     *
     * }
     */
    stats?:

        | StandardServiceRecordStats

        | DualRoleServiceRecordStats;


    /**
     * Bemerkungen
     */
    remarks?: string;

}