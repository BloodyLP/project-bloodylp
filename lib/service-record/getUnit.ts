/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * File:
 * getUnit.ts
 * ============================================
 */

import { UNITS } from "@/data/service-record/units";
import type { UnitId } from "@/data/service-record/units";

export function getUnit(id: UnitId) {

    return UNITS[id];

}