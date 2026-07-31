/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * File:
 * organizations.ts
 *
 * Description:
 * Organisationen innerhalb der Community.
 *
 * ============================================
 */

export type OrganizationId =
    | "bloodyArmy"
    | "youngArmy";

export interface Organization {

    id: OrganizationId;

    title: string;

}

export const ORGANIZATIONS: Record<OrganizationId, Organization> = {

    bloodyArmy: {
        id: "bloodyArmy",
        title: "BloodyArmy"
    },

    youngArmy: {
        id: "youngArmy",
        title: "YoungArmy"
    }

};