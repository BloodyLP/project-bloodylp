/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Theme System
 *
 * Themes
 *
 * ============================================
 */

import type {
    OrganizationTheme,
} from "./types";


/* ===================================================== */
/* BLOODY ARMY */
/* ===================================================== */

export const BloodyArmyTheme: OrganizationTheme = {

    accent: "#9EFF2E",

    accentLight: "#ECFFC0",

    accentSoft: "rgba(158,255,46,.15)",

    accentSoft2: "rgba(158,255,46,.06)",

    border: "rgba(158,255,46,.35)",

    glow: "rgba(158,255,46,.35)",

    glowSoft: "rgba(158,255,46,.15)",

    buttonText: "#111111",

    card: "#1F1F1F",

};


/* ===================================================== */
/* YOUNG ARMY */
/* ===================================================== */

export const YoungArmyTheme: OrganizationTheme = {

    accent: "#E53935",

    accentLight: "#FFC0C0",

    accentSoft: "rgba(229,57,53,.15)",

    accentSoft2: "rgba(229,57,53,.06)",

    border: "rgba(229,57,53,.35)",

    glow: "rgba(229,57,53,.35)",

    glowSoft: "rgba(229,57,53,.15)",

    buttonText: "#FFFFFF",

    card: "#1F1F1F",

};


/* ===================================================== */
/* UNVERGESSEN / MEMORIAL */
/* ===================================================== */

/*
 * Diese Farbe ist bewusst NICHT:
 *
 * - BloodyArmy Grün
 * - YoungArmy Rot
 * - Prestige Grün
 * - General Gold
 *
 * Das Memorial Theme soll ruhig, würdevoll
 * und eigenständig wirken.
 */

export const MemorialTheme: OrganizationTheme = {

    accent: "#B8A06A",

    accentLight: "#E8DDBB",

    accentSoft: "rgba(184,160,106,.16)",

    accentSoft2: "rgba(184,160,106,.06)",

    border: "rgba(184,160,106,.28)",

    glow: "rgba(184,160,106,.24)",

    glowSoft: "rgba(184,160,106,.10)",

    buttonText: "#111111",

    card: "#202020",

};