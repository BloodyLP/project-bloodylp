/**
 * BloodyArmy Service Record
 * -------------------------
 * Globale Konstanten und Definitionen.
 */

import { PrestigeLevel, RankCategory } from "./types";

/**
 * Aktuelle Version des Service Records
 */
export const SERVICE_RECORD_VERSION = "MK-I";

/**
 * Kartentitel
 */
export const CARD_TITLE = "BLOODYARMY";
export const CARD_SUBTITLE = "SERVICE RECORD";

/**
 * Seitenverhältnis
 * (ähnlich einer Sammelkarte)
 */
export const CARD_ASPECT_RATIO = 0.70;

/**
 * Rahmenfarben
 */
export const RANK_COLORS: Record<RankCategory, string> = {
    enlisted: "#6B7280",
    nco: "#5CCB5F",
    seniorNco: "#F59E0B",
    officer: "#D62828",
    staffOfficer: "#C0C0C0",
    general: "#FFD700",
};

/**
 * Deutsche Bezeichnungen
 */
export const RANK_CATEGORY_LABELS: Record<RankCategory, string> = {
    enlisted: "Mannschaften",
    nco: "Unteroffiziere",
    seniorNco: "Unteroffiziere mit Portepee",
    officer: "Offiziere",
    staffOfficer: "Stabsoffiziere",
    general: "Generale",
};

/**
 * Prestige-Stufen
 */
export const PRESTIGE_LABELS: Record<PrestigeLevel, string> = {
    0: "Standard",
    1: "Prestige I",
    2: "Prestige II",
    3: "Prestige III",
};