/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * File:
 * positions.ts
 *
 * Description:
 * Spielpositionen innerhalb der BloodyArmy.
 *
 * ============================================
 */

export type PositionId =
    | "goalie"
    | "leftDefense"
    | "rightDefense"
    | "leftWing"
    | "center"
    | "rightWing";

export interface Position {

    id: PositionId;

    title: string;

}

export const POSITIONS: Record<PositionId, Position> = {

    goalie: {
        id: "goalie",
        title: "Torwart",
    },

    leftDefense: {
        id: "leftDefense",
        title: "Linker Verteidiger",
    },

    rightDefense: {
        id: "rightDefense",
        title: "Rechter Verteidiger",
    },

    leftWing: {
        id: "leftWing",
        title: "Linker Flügel",
    },

    center: {
        id: "center",
        title: "Center",
    },

    rightWing: {
        id: "rightWing",
        title: "Rechter Flügel",
    },

};