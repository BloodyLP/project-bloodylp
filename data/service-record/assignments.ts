/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * File:
 * assignments.ts
 * ============================================
 */

export type AssignmentId =
    | "commander"
    | "executiveOfficer"
    | "operations"
    | "moderator"
    | "member"
    | "contentCreator"
    | "developer";

export interface Assignment {

    id: AssignmentId;

    title: string;

}

export const ASSIGNMENTS: Record<AssignmentId, Assignment> = {

    commander: {
        id: "commander",
        title: "Community Commander"
    },

    executiveOfficer: {
        id: "executiveOfficer",
        title: "Executive Officer"
    },

    operations: {
        id: "operations",
        title: "Operations Officer"
    },

    moderator: {
        id: "moderator",
        title: "Moderator"
    },

    member: {
        id: "member",
        title: "Mitglied"
    },

    contentCreator: {
        id: "contentCreator",
        title: "Content Creator"
    },

    developer: {
        id: "developer",
        title: "Developer"
    }

};