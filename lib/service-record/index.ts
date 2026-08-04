/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Service Record
 *
 * Central Data Export
 *
 * ============================================
 */

import {
    rankDatabase
} from "@/data/service-record/ranks";

import {
    ORGANIZATIONS
} from "@/data/service-record/organizations";

import {
    POSITIONS
} from "@/data/service-record/positions";

import {
    MEMBERS
} from "@/data/service-record/members";

import type {
    MilitaryRank,
    RankId
} from "@/data/service-record/ranks";

import type {
    OrganizationId
} from "@/data/service-record/organizations";

import type {
    PositionId
} from "@/data/service-record/positions";

export const RANKS = rankDatabase;

export function rank(
    id: RankId
): MilitaryRank {

    const foundRank = RANKS.find(
        item => item.id === id
    );

    if (foundRank) {
        return foundRank;
    }

    return {

        id: "unknown",

        name: "Unknown",

        branch: "bloodyArmy",

        prestige: 0,

        category: "command",

        level: 0

    };

}

export function organization(
    id: OrganizationId
) {

    return ORGANIZATIONS[id];

}

export function position(
    id: PositionId
) {

    return POSITIONS[id];

}

export const ServiceRecord = {

    RANKS,

    ORGANIZATIONS,

    POSITIONS,

    MEMBERS,

    rank,

    organization,

    position

};