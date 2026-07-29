/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * File:
 * getAssignment.ts
 * ============================================
 */

import { ASSIGNMENTS } from "@/data/service-record/assignments";
import type { AssignmentId } from "@/data/service-record/assignments";

export function getAssignment(id: AssignmentId) {

    return ASSIGNMENTS[id];

}