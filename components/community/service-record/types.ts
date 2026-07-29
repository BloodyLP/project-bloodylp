/**
 * BloodyArmy Service Record
 * -------------------------
 * Zentrale Typdefinitionen für das Service-Record-System.
 */

export type RankCategory =
    | "enlisted"
    | "nco"
    | "seniorNco"
    | "officer"
    | "staffOfficer"
    | "general";

export type PrestigeLevel = 0 | 1 | 2 | 3;

export interface ServiceRecordMember {
    /**
     * Eindeutige ID
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
     * Dienstgrad
     */
    rank: string;

    /**
     * Ranggruppe
     */
    rankCategory: RankCategory;

    /**
     * Prestige
     */
    prestige: PrestigeLevel;

    /**
     * Einheit
     */
    unit: string;

    /**
     * Verwendung
     */
    assignment: string;

    /**
     * Mitglied seit
     */
    enlisted: string;

    /**
     * Avatar
     */
    avatar: string;

    /**
     * Auszeichnungen
     */
    decorations: string[];
}