import { RANKS } from "@/data/service-record/ranks";
import { UNITS } from "@/data/service-record/units";
import { ASSIGNMENTS } from "@/data/service-record/assignments";

import type { RankId } from "@/data/service-record/ranks";
import type { UnitId } from "@/data/service-record/units";
import type { AssignmentId } from "@/data/service-record/assignments";

export const ServiceRecord = {

    rank(id: RankId) {
        return RANKS[id];
    },

    unit(id: UnitId) {
        return UNITS[id];
    },

    assignment(id: AssignmentId) {
        return ASSIGNMENTS[id];
    }

};