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

export const dungeon: ServiceRecordMember = {

    /**
     * Interne UUID
     */
    id: "BA-002",

    /**
     * URL
     */
    slug: "dungeon_62",

    /**
     * Service Record Nummer
     */
    recordNumber: "BA-002",

    /**
     * Anzeigename
     */
    name: "Dungeon_62",

    /**
     * Avatar
     */
    avatar: "/members/dungeon/avatar.png",

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
    position: "rightWing",

    /**
     * Reihe
     */
    line: 2,

    /**
     * Eintrittsjahr
     */
    enlisted: "2017",

    /**
     * Prestige
     */
    prestige: 1 ,

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