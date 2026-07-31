/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * Service Record - Decorations
 *
 * Description:
 * Gemeinsame Typdefinitionen für sämtliche
 * Auszeichnungen innerhalb des Service Records.
 *
 * ============================================
 */

import {
    DECORATION_CATEGORIES,
    DECORATION_CLASSIFICATIONS,
    DECORATION_RARITIES,
} from "./constants";

/* ============================================
 * BASIC TYPES
 * ============================================ */

export type DecorationCategory =
    keyof typeof DECORATION_CATEGORIES;

export type DecorationRarity =
    keyof typeof DECORATION_RARITIES;

export type DecorationClassification =
    keyof typeof DECORATION_CLASSIFICATIONS;

/* ============================================
 * ISSUE TYPES
 * ============================================ */

export type DecorationIssueType =
    | "only-once"
    | "unlimited"
    | "seasonal"
    | "event";

/* ============================================
 * DECORATION
 * ============================================ */

export interface Decoration {

    /**
     * Interne ID
     */
    id: string;

    /**
     * Militärischer Code
     */
    code: string;

    /**
     * Kategorie
     */
    category: DecorationCategory;

    /**
     * Seltenheit
     */
    rarity: DecorationRarity;

    /**
     * Militärische Einstufung
     */
    classification: DecorationClassification;

    /**
     * Vergabeart
     */
    issued: DecorationIssueType;

    /**
     * Titel
     */
    title: string;

    /**
     * Untertitel
     */
    subtitle: string;

    /**
     * Beschreibung
     */
    description: string;

    /**
     * Voraussetzungen
     */
    requirements: string[];

    /**
     * Badge
     */
    image: string;

    /* ========================================
     * SERVICE RECORD
     * ======================================== */

    /**
     * Punktewert
     */
    points?: number;

    /**
     * Freigeschaltet
     */
    unlocked?: boolean;

    /**
     * Datum der Verleihung
     */
    unlockDate?: string;

    /**
     * Fortschritt
     */
    progress?: number;

    /**
     * Maximaler Fortschritt
     */
    maxProgress?: number;

    /**
     * Geheime Auszeichnung
     */
    secret?: boolean;

    /**
     * Exklusive Auszeichnung
     */
    exclusive?: boolean;

    /**
     * Sichtbar im Service Record
     */
    visible?: boolean;

}