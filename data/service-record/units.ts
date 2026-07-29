/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * File:
 * units.ts
 * ============================================
 */

export type UnitId =
    | "bloodyarmy"
    | "headquarters"
    | "command"
    | "staff"
    | "community"
    | "creator";

export interface Unit {

    id: UnitId;

    title: string;

}

export const UNITS: Record<UnitId, Unit> = {

    bloodyarmy: {
        id: "bloodyarmy",
        title: "BloodyArmy"
    },

    headquarters: {
        id: "headquarters",
        title: "Hauptquartier"
    },

    command: {
        id: "command",
        title: "Oberkommando"
    },

    staff: {
        id: "staff",
        title: "Stabsabteilung"
    },

    community: {
        id: "community",
        title: "Community"
    },

    creator: {
        id: "creator",
        title: "Content Creator"
    }

};