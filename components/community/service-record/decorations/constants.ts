/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * Decorations
 *
 * Description:
 * Gemeinsame Konstanten für alle Auszeichnungen.
 *
 * ============================================
 */

export const DECORATION_CATEGORIES = {

    prestige: "PRESTIGE",

    patreon: "PATREON",

    ribbon: "BANDSPANGE",

    order: "ORDEN",

    medal: "MEDAILLE",

    badge: "ABZEICHEN",

    achievement: "ERFOLG",

} as const;

export const DECORATION_RARITIES = {

    steel: "STAHL",

    bronze: "BRONZE",

    silver: "SILBER",

    gold: "GOLD",

    platinum: "PLATIN",

    emerald: "SMARAGD",

    sapphire: "SAPHIR",

    ruby: "RUBIN",

    obsidian: "OBSIDIAN",

    founder: "GRÜNDER",

} as const;

export const DECORATION_ISSUED = {

    "only-once": "Einmalig",

    unlimited: "Unbegrenzt",

    seasonal: "Saisonal",

    event: "Event-Exklusiv",

} as const;

export const DECORATION_CLASSIFICATIONS = {

    "Steel Class": "Stahlklasse",

    "Bronze Class": "Bronzeklasse",

    "Silver Class": "Silberklasse",

    "Gold Class": "Goldklasse",

    "Platinum Class": "Platinklasse",

    "Emerald Class": "Smaragdklasse",

    "Sapphire Class": "Saphirklasse",

    "Ruby Class": "Rubinklasse",

    "Obsidian Class": "Obsidianklasse",

    "Founder Class": "Gründerklasse",

} as const;

export const DECORATION_LABELS = {

    classification: "KLASSIFIZIERUNG",

    rarity: "PRESTIGEKLASSE",

    issued: "VERGABE",

    description: "BESCHREIBUNG",

    requirements: "VORAUSSETZUNGEN",

    inspect: "AUSZEICHNUNGSAKTE",

    empty: "Bitte wähle eine Auszeichnung aus.",

} as const;