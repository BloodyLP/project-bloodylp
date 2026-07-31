/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Data:
 * BloodyLP
 *
 * Description:
 * Service Record Datensatz von BloodyLP.
 *
 * ============================================
 */

import type { ServiceRecordMember } from "@/types/service-record";

export const bloodylp: ServiceRecordMember = {

    /**
     * Interne UUID
     */
    id: "BA-001",

    /**
     * URL
     */
    slug: "bloodylp",

    /**
     * Service Record Nummer
     */
    recordNumber: "BA-001",

    /**
     * Anzeigename
     */
    name: "BloodyLP",

    /**
     * Avatar
     */
    avatar: "/members/bloodylp/avatar.png",

    /**
     * Dienstgrad
     */
    rank: "generalOfTheArmy",

    /**
     * Organisation
     */
    organization: "bloodyArmy",

    /**
     * Position
     */
    position: "leftWing",

    /**
     * Reihe
     */
    line: 1,

    /**
     * Eintrittsjahr
     */
    enlisted: "2019",

    /**
     * Prestige
     */
    prestige: 10,

    /**
     * Patreon
     */
    patreon: 0,

    /**
     * Aktiv
     */
    active: true,

    /**
     * Sichtbar
     */
    visible: true,

    /**
     * Decorations
     */
    decorations: [
        "stanley-cup",
    ],

    /**
     * Ribbon Rack
     */
    ribbons: [],

    /**
     * Medaillen
     */
    medals: [],

    /**
     * Abzeichen
     */
    badges: [],

    /**
     * Achievements
     */
    achievements: [],

    /**
     * Bemerkung
     */
    remarks: "Founder der BloodyArmy.",

};