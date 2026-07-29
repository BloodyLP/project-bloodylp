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
import type { UnitId } from "@/data/service-record/units";
import type { AssignmentId } from "@/data/service-record/assignments";

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
     * Einheit
     */
    unit: UnitId;

    /**
     * Verwendung
     */
    assignment: AssignmentId;

    /**
     * Eintritt
     */
    enlisted: string;

    /**
     * Prestige
     */
    prestige: number;

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
     * Bemerkungen
     */
    remarks?: string;

}