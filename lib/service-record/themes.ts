/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Module:
 * Service Record Themes
 *
 * ============================================
 */

export interface ServiceRecordTheme {

    name: string;

    accent: string;

    accentSoft: string;

    accentGlow: string;

    border: string;

    topBar: string;

    card: string;

}

/* ===================================================== */
/* Mannschaften */
/* ===================================================== */

export const EnlistedTheme: ServiceRecordTheme = {

    name: "Enlisted",

    accent: "#D5D5D5",

    accentSoft: "rgba(213,213,213,.18)",

    accentGlow: "rgba(213,213,213,.22)",

    border: "rgba(255,255,255,.10)",

    topBar:
        "linear-gradient(90deg,#D5D5D5,transparent)",

    card: "#1E1E1E",

};

/* ===================================================== */
/* Unteroffiziere */
/* ===================================================== */

export const NCOTheme: ServiceRecordTheme = {

    name: "NCO",

    accent: "#C88B43",

    accentSoft: "rgba(200,139,67,.18)",

    accentGlow: "rgba(200,139,67,.25)",

    border: "rgba(200,139,67,.25)",

    topBar:
        "linear-gradient(90deg,#C88B43,transparent)",

    card: "#1E1E1E",

};

/* ===================================================== */
/* Portepee */
/* ===================================================== */

export const PortepeeTheme: ServiceRecordTheme = {

    name: "Portepee",

    accent: "#D8B652",

    accentSoft: "rgba(216,182,82,.18)",

    accentGlow: "rgba(216,182,82,.25)",

    border: "rgba(216,182,82,.28)",

    topBar:
        "linear-gradient(90deg,#D8B652,transparent)",

    card: "#1E1E1E",

};

/* ===================================================== */
/* Offiziere */
/* ===================================================== */

export const OfficerTheme: ServiceRecordTheme = {

    name: "Officer",

    accent: "#C9D7E8",

    accentSoft: "rgba(201,215,232,.18)",

    accentGlow: "rgba(201,215,232,.22)",

    border: "rgba(201,215,232,.28)",

    topBar:
        "linear-gradient(90deg,#C9D7E8,transparent)",

    card: "#1E1E1E",

};

/* ===================================================== */
/* Stabsoffiziere */
/* ===================================================== */

export const StaffOfficerTheme: ServiceRecordTheme = {

    name: "Staff",

    accent: "#D95555",

    accentSoft: "rgba(217,85,85,.18)",

    accentGlow: "rgba(217,85,85,.25)",

    border: "rgba(217,85,85,.25)",

    topBar:
        "linear-gradient(90deg,#D95555,transparent)",

    card: "#1E1E1E",

};

/* ===================================================== */
/* Generale */
/* ===================================================== */

export const GeneralTheme: ServiceRecordTheme = {

    name: "General",

    accent: "#9EFF2E",

    accentSoft: "rgba(158,255,46,.18)",

    accentGlow: "rgba(158,255,46,.24)",

    border: "rgba(158,255,46,.25)",

    topBar:
        "linear-gradient(90deg,#9EFF2E,transparent)",

    card: "#1F1F1F",

};

/* ===================================================== */
/* BloodyArmy */
/* ===================================================== */

export const BloodyArmyTheme: ServiceRecordTheme = {

    name: "BloodyArmy",

    accent: "#9EFF2E",

    accentSoft: "rgba(158,255,46,.18)",

    accentGlow: "rgba(158,255,46,.24)",

    border: "rgba(158,255,46,.25)",

    topBar:
        "linear-gradient(90deg,#9EFF2E,transparent)",

    card: "#1F1F1F",

};

/* ===================================================== */
/* Young Army */
/* ===================================================== */

export const YoungArmyTheme: ServiceRecordTheme = {

    name: "YoungArmy",

    accent: "#FF4A4A",

    accentSoft: "rgba(255,74,74,.18)",

    accentGlow: "rgba(255,74,74,.25)",

    border: "rgba(255,74,74,.25)",

    topBar:
        "linear-gradient(90deg,#FF4A4A,transparent)",

    card: "#1F1F1F",

};