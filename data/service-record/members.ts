/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Service Record
 *
 * Member Database
 *
 * ============================================
 */

import type {

    ServiceRecordMember

} from "@/types/service-record";

import {

    bloodylp

} from "./members/bloodylp";

import {

    dungeon

} from "./members/dungeon";

import {

    o1l3r5

} from "./members/o1l3r5";

import {

    TheIlmfurter

} from "./members/theilmfurter";

import {

    ligoween

} from "./members/ligoween";

export const MEMBERS: ServiceRecordMember[] = [

    bloodylp,

    dungeon,

    o1l3r5,

    TheIlmfurter,

    ligoween,

];