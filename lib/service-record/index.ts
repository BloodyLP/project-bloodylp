import { RANKS } from "@/data/service-record/ranks";
import { ORGANIZATIONS } from "@/data/service-record/organizations";
import { POSITIONS } from "@/data/service-record/positions";

import type { RankId } from "@/data/service-record/ranks";
import type { OrganizationId } from "@/data/service-record/organizations";
import type { PositionId } from "@/data/service-record/positions";

export const ServiceRecord = {

    rank(id: RankId) {
        return RANKS[id];
    },

    organization(id: OrganizationId) {
        return ORGANIZATIONS[id];
    },

    position(id: PositionId) {
        return POSITIONS[id];
    }

};