/**
 * ============================================
 *
 * BloodyArmy
 *
 * ============================================
 *
 * Project:
 *
 * BloodyArmy Website
 *
 * File:
 *
 * service-record.ts
 *
 * Description:
 *
 * Typdefinitionen für alle Service Records.
 *
 * ============================================
 */

import type {

    RankId,

    PrestigeLevel,

} from "@/data/service-record/ranks";


import type {

    OrganizationId,

} from "@/data/service-record/organizations";


import type {

    PositionId,

} from "@/data/service-record/positions";


import type {

    CareerSeasonStats,

    CareerGoalieSeasonStats,

} from "./career-stats";


/* ========================================= */
/* TEAMS                                      */
/* ========================================= */

export type TeamType =

    | "BloodyArmy"

    | "Young Army";


/* ========================================= */
/* STANDARD STATS                             */
/* ========================================= */

export type StandardServiceRecordStats = {

    seasons: CareerSeasonStats[];

};


/* ========================================= */
/* DUAL ROLE STATS                            */
/* ========================================= */

export type DualRoleServiceRecordStats = {

    skater?: {

        seasons: CareerSeasonStats[];

    };

    goalie?: {

        seasons: CareerGoalieSeasonStats[];

    };

};


/* ========================================= */
/* SERVICE RECORD MEMBER                      */
/* ========================================= */

export interface ServiceRecordMember {


    /**
     * Interne UUID
     */
    id: string;


    /**
     * URL-Slug
     */
    slug: string;


    /**
     * Service Record Nummer
     */
    recordNumber: string;


    /**
     * Anzeigename
     */
    name: string;


    /**
     * Avatar
     */
    avatar: string;


    /**
     * Dienstgrad
     */
    rank: RankId;


    /**
     * Organisation
     */
    organization: OrganizationId;


    /**
     * Position
     */
    position: PositionId;


    /**
     * Spielertyp
     */
    playerType:

        | "skater"

        | "goalie";


    /**
     * Dual Role
     */
    dualRole?: boolean;


    /**
     * Verstorben
     */
    deceased?: boolean;


    /**
     * Individueller Gedenktext
     */
    memorialText?: string;


    /**
     * Trikotnummer
     */
    playerNumber: string;


    /**
     * Reihe
     */
    line: number;


    /**
     * Eintrittsdatum
     */
    enlisted: string;


    /**
     * Prestige-Level
     */
    prestige: PrestigeLevel;


    /**
     * Patreon-Level
     */
    patreon: number;


    /**
     * Aktiv
     */
    active: boolean;


    /**
     * Sichtbar
     */
    visible: boolean;


    /* ========================================= */
    /* DECORATIONS                                */
    /* ========================================= */

    decorations: string[];


    /* ========================================= */
    /* STANLEY CUP                                */
    /* ========================================= */

    stanleyCup?: {

        years: number[];

    };


    /* ========================================= */
    /* CALDER CUP                                 */
    /* ========================================= */

    calderCup?: {

        years: number[];

    };


    /* ========================================= */
    /* CLARENCE S. CAMPBELL TROPHY                */
    /* ========================================= */

    clarenceSCampbellTrophy?: {

        years: number[];

    };


    /* ========================================= */
    /* PRESIDENT'S TROPHY                         */
    /* ========================================= */

    presidentsTrophy?: {

        years: number[];

    };


    /* ========================================= */
    /* PRINCE OF WALES TROPHY                     */
    /* ========================================= */

    princeOfWalesTrophy?: {

        years: number[];

    };


    /* ========================================= */
    /* MACGREGOR KILPATRICK TROPHY                */
    /* ========================================= */

    macgregorKilpatrickTrophy?: {

        years: number[];

    };


    /* ========================================= */
    /* RICHARD F. CANNING TROPHY                  */
    /* ========================================= */

    richardFCanningTrophy?: {

        years: number[];

    };


    /* ========================================= */
    /* ROBERT W. CLARKE TROPHY                    */
    /* ========================================= */

    robertWClarkeTrophy?: {

        years: number[];

    };


    /* ========================================= */
    /* NHL – TOPSCORER                            */
    /* ========================================= */

    nhlTopscorer?: {

        years: number[];

    };


    /* ========================================= */
    /* NHL – MEISTE TORE                          */
    /* ========================================= */

    nhlMeisteTore?: {

        years: number[];

    };


    /* ========================================= */
    /* NHL – MEISTE ASSISTS                       */
    /* ========================================= */

    nhlMeisteAssists?: {

        years: number[];

    };


    /* ========================================= */
    /* NHL – MEISTE STRAFMINUTEN                  */
    /* ========================================= */

    nhlMeisteStrafminuten?: {

        years: number[];

    };


    /* ========================================= */
    /* NHL – BESTE PLUS-MINUS                     */
    /* ========================================= */

    nhlBestePlusMinus?: {

        years: number[];

    };


    /* ========================================= */
    /* NHL PLAYOFFS – TOPSCORER                   */
    /* ========================================= */

    nhlPoTopscorer?: {

        years: number[];

    };


    /* ========================================= */
    /* NHL PLAYOFFS – MEISTE TORE                 */
    /* ========================================= */

    nhlPoMeisteTore?: {

        years: number[];

    };


    /* ========================================= */
    /* NHL PLAYOFFS – MEISTE ASSISTS              */
    /* ========================================= */

    nhlPoMeisteAssists?: {

        years: number[];

    };


    /* ========================================= */
    /* NHL PLAYOFFS – MEISTE STRAFMINUTEN         */
    /* ========================================= */

    poMeisteStrafminuten?: {

        years: number[];

    };


    /* ========================================= */
    /* NHL PLAYOFFS – BESTE PLUS-MINUS            */
    /* ========================================= */

    nhlPoBestePlusMinus?: {

        years: number[];

    };


    /* ========================================= */
    /* AHL – TOPSCORER                            */
    /* ========================================= */

    ahlTopscorer?: {

        years: number[];

    };


    /* ========================================= */
    /* AHL – MEISTE TORE                          */
    /* ========================================= */

    ahlMeisteTore?: {

        years: number[];

    };


    /* ========================================= */
    /* AHL – MEISTE ASSISTS                       */
    /* ========================================= */

    ahlMeisteAssists?: {

        years: number[];

    };


    /* ========================================= */
    /* AHL – MEISTE STRAFMINUTEN                  */
    /* ========================================= */

    ahlMeisteStrafminuten?: {

        years: number[];

    };


    /* ========================================= */
    /* AHL – BESTE PLUS-MINUS                     */
    /* ========================================= */

    ahlBestePlusMinus?: {

        years: number[];

    };


    /* ========================================= */
    /* AHL PLAYOFFS – TOPSCORER                   */
    /* ========================================= */

    ahlPoTopscorer?: {

        years: number[];

    };


    /* ========================================= */
    /* AHL PLAYOFFS – MEISTE TORE                 */
    /* ========================================= */

    ahlPoMeisteTore?: {

        years: number[];

    };


    /* ========================================= */
    /* AHL PLAYOFFS – MEISTE ASSISTS              */
    /* ========================================= */

    ahlPoMeisteAssists?: {

        years: number[];

    };


    /* ========================================= */
    /* AHL PLAYOFFS – MEISTE STRAFMINUTEN         */
    /* ========================================= */

    ahlPoMeisteStrafminuten?: {

        years: number[];

    };


    /* ========================================= */
    /* AHL PLAYOFFS – BESTE PLUS-MINUS            */
    /* ========================================= */

    ahlPoBestePlusMinus?: {

        years: number[];

    };


   /**
 * =========================================
 * SUB BADGES
 * =========================================
 *
 * Individuelle Subscription-Auszeichnungen.
 *
 * =========================================
 */


/**
 * 50 Monate SUB
 */
sub50Monate?: boolean;


/**
 * 75 Monate SUB
 */
sub75Monate?: boolean;


/**
 * 100 Monate SUB
 */
sub100Monate?: boolean;


/**
 * 150 Monate SUB
 */
sub150Monate?: boolean;


/**
 * 200 Monate SUB
 */
sub200Monate?: boolean;

    /**
 * =========================================
 * PATREON BADGES
 * =========================================
 *
 * Individuelle Patreon-Auszeichnungen.
 *
 * Die Badges werden pro Mitglied
 * separat vergeben.
 *
 * Bronze
 * Silber
 * Gold
 * Hall of Fame
 * GOAT
 *
 * =========================================
 */


/**
 * Patreon Bronze
 */
patreonBronze?: boolean;


/**
 * Patreon Silber
 */
patreonSilber?: boolean;


/**
 * Patreon Gold
 */
patreonGold?: boolean;


/**
 * Patreon Hall of Fame
 */
patreonHallOfFame?: boolean;


/**
 * Patreon GOAT
 */
patreonGoat?: boolean;


    /* ========================================= */
    /* RIBBON RACK                                */
    /* ========================================= */

    ribbons: string[];


    /* ========================================= */
    /* MEDAILLEN                                  */
    /* ========================================= */

    medals: string[];


    /* ========================================= */
    /* ABZEICHEN                                  */
    /* ========================================= */

    badges: string[];


    /* ========================================= */
    /* ACHIEVEMENTS                               */
    /* ========================================= */

    achievements: string[];


    /* ========================================= */
    /* KARRIERE-STATISTIK                         */
    /* ========================================= */

    stats?:

        | StandardServiceRecordStats

        | DualRoleServiceRecordStats;


    /* ========================================= */
    /* BEMERKUNGEN                                */
    /* ========================================= */

    remarks?: string;

}