/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Theme Resolver
 *
 * ============================================
 */

import type {

    OrganizationId,

} from "@/data/service-record/organizations";

import {

    BloodyArmyTheme,

    YoungArmyTheme,

} from "./themes";

import type {

    OrganizationTheme,

} from "./types";

export function getTheme(

    organization:OrganizationId

):OrganizationTheme{

    switch(organization){

        case "youngArmy":

            return YoungArmyTheme;

        case "bloodyArmy":

        default:

            return BloodyArmyTheme;

    }

}