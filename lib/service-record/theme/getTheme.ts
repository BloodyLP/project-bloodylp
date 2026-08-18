/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Theme Resolver
 *
 * Organisation + Memorial
 *
 * ============================================
 */

import type {
    OrganizationId,
} from "@/data/service-record/organizations";


import {
    BloodyArmyTheme,
    YoungArmyTheme,
    MemorialTheme,
} from "./themes";


import type {
    OrganizationTheme,
} from "./types";


/* ========================================= */
/* ORGANISATION THEME */
/* ========================================= */

export function getTheme(

    organization: OrganizationId,

    deceased: boolean = false

): OrganizationTheme {


    /*
    ============================================
    UNVERGESSEN
    ============================================

    Verstorbene Mitglieder erhalten unabhängig
    von ihrer ursprünglichen Organisation das
    Memorial-Theme.
    */

    if (deceased === true) {

        return MemorialTheme;

    }


    /*
    ============================================
    YOUNG ARMY
    ============================================
    */

    switch (organization) {

        case "youngArmy":

            return YoungArmyTheme;


        /*
        ========================================
        BLOODYARMY
        ========================================
        */

        case "bloodyArmy":

            return BloodyArmyTheme;


        /*
        ========================================
        FALLBACK
        ========================================
        */

        default:

            return BloodyArmyTheme;

    }

}