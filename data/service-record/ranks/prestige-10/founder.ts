/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Rank Database
 *
 * Prestige 10
 *
 * Founder Rank
 *
 * ============================================
 */


import type {

    MilitaryRank

} from "../types";









export const founderRanks: MilitaryRank[] = [



    {


        /**
         * Eindeutige ID
         */
        id:"generalOfTheArmy",





        /**
         * Anzeigename
         */
        name:"General of the Army",





        /**
         * Kürzel
         */
        abbreviation:"GA",





        /**
         * Streitkraft
         */
        branch:"bloodyArmy",





        /**
         * Prestige
         */
        prestige:10,





        /**
         * Kategorie
         */
        category:"command",





        /**
         * Sortierung
         */
        level:100,





        /**
         * Rangabzeichen
         */
        insignia:"/images/ranks/general-of-the-army.png"



    }


];