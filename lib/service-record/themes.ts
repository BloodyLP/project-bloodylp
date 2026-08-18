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


/* ===================================================== */
/* THEME TYPE */
/* ===================================================== */

export interface OrganizationTheme {

    accent: string;

    accentLight: string;

    accentSoft: string;

    accentSoft2: string;

    border: string;

    glow: string;

    glowSoft: string;

    buttonText: string;

    card: string;

}


/* ===================================================== */
/* BLOODYARMY */
/* ===================================================== */

export const BloodyArmyTheme: OrganizationTheme = {

    accent: "#9EFF2E",

    accentLight: "#ECFFC0",

    accentSoft:
        "rgba(158,255,46,.15)",

    accentSoft2:
        "rgba(158,255,46,.06)",

    border:
        "rgba(158,255,46,.35)",

    glow:
        "rgba(158,255,46,.35)",

    glowSoft:
        "rgba(158,255,46,.15)",

    buttonText:
        "#111111",

    card:
        "#1F1F1F",

};


/* ===================================================== */
/* YOUNG ARMY */
/* ===================================================== */

export const YoungArmyTheme: OrganizationTheme = {

    accent: "#E53935",

    accentLight: "#FFC0C0",

    accentSoft:
        "rgba(229,57,53,.15)",

    accentSoft2:
        "rgba(229,57,53,.06)",

    border:
        "rgba(229,57,53,.35)",

    glow:
        "rgba(229,57,53,.35)",

    glowSoft:
        "rgba(229,57,53,.15)",

    buttonText:
        "#FFFFFF",

    card:
        "#1F1F1F",

};


/* ===================================================== */
/* MEMORIAL / UNVERGESSEN */
/* ===================================================== */

export const MemorialTheme: OrganizationTheme = {

    /*
    Ruhiges Memorial-Design.

    Kein BloodyArmy-Grün.
    Kein YoungArmy-Rot.

    Silber / Anthrazit.
    */

    accent: "#D4D4D8",

    accentLight: "#F4F4F5",

    accentSoft:
        "rgba(212,212,216,.16)",

    accentSoft2:
        "rgba(212,212,216,.06)",

    border:
        "rgba(212,212,216,.28)",

    glow:
        "rgba(212,212,216,.30)",

    glowSoft:
        "rgba(212,212,216,.12)",

    buttonText:
        "#111111",

    card:
        "#242424",

};