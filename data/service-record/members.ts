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







export const MEMBERS:ServiceRecordMember[] = [


    bloodylp,


    dungeon


];