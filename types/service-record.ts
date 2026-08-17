/**
 * ============================================
 * BloodyArmy
 * ============================================
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
     * Spielertyp
     *
     * BLEIBT WIE BISHER.
     *
     * Die MemberCard wird dadurch
     * NICHT verändert.
     */
    playerType: "skater" | "goalie";


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
     */
    stats?: {

        /**
         * Bisherige Skater-Statistiken
         *
         * BLEIBT BESTEHEN.
         */
        seasons: CareerSeasonStats[];


        /**
         * Zusätzliche Goalie-Statistiken
         *
         * Nur Spieler besitzen dieses Feld,
         * die auch als Torhüter eingesetzt wurden.
         */
        goalieSeasons?: CareerGoalieSeasonStats[];

    };


    /**
     * Bemerkungen
     */
    remarks?: string;

}