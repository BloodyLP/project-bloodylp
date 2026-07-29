/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * File:
 * getRank.ts
 *
 * Description:
 * Liefert einen Dienstgrad anhand seiner ID.
 *
 * ============================================
 */

import { RANKS } from "@/data/service-record/ranks";
import type { RankId } from "@/data/service-record/ranks";

export function getRank(id: RankId) {

    return RANKS[id];

}