/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Member Card Mapper
 *
 * ServiceRecordMember
 * ->
 * MemberCard Props
 *
 * ============================================
 */

import { ServiceRecord } from "@/lib/service-record";
import { getRankImage } from "@/lib/service-record/getRankImage";

import type {
    ServiceRecordMember,
} from "@/types/service-record";

import type {
    CareerSeasonStats,
    CareerGoalieSeasonStats,
} from "@/types/career-stats";

import {
    buildSkaterCareerStats,
} from "./stats/calculateSkaterCareerStats";

import {
    buildGoalieCareerStats,
} from "./stats/calculateGoalieCareerStats";


/* ========================================= */
/* BADGE THEME */
/* ========================================= */

function getBadgeTheme(
    member: ServiceRecordMember
){

    /*
    ============================================
    FOUNDER
    ============================================
    */

    if(member.prestige === 10){

        return {

            title:"FOUNDER",

            theme:"prestigeX",

        };

    }


    /*
    ============================================
    PRESTIGE III
    ============================================
    */

    if(member.prestige === 3){

        return {

            title:"PRESTIGE III",

            theme:"prestigeIII",

        };

    }


    /*
    ============================================
    PRESTIGE II
    ============================================
    */

    if(member.prestige === 2){

        return {

            title:"PRESTIGE II",

            theme:"prestigeII",

        };

    }


    /*
    ============================================
    PRESTIGE I
    ============================================
    */

    if(member.prestige === 1){

        return {

            title:"PRESTIGE I",

            theme:"prestigeI",

        };

    }


    /*
    ============================================
    RANGSYSTEM
    ============================================
    */

    const rank = ServiceRecord.rank(
        member.rank
    );


    switch(rank.category){

        case "command":

            return {

                title:"GENERAL",

                theme:"generale",

            };


        case "offiziere":

            return {

                title:"OFFIZIER",

                theme:"offiziere",

            };


        case "feldwebel":

            return {

                title:"UNTEROFFIZIER MIT PORTEPEE",

                theme:"portepee",

            };


        case "unteroffiziere":

            return {

                title:"UNTEROFFIZIER",

                theme:"unteroffiziere",

            };


        case "mannschaften":

            return {

                title:"MANNSCHAFT",

                theme:"mannschaften",

            };


        case "zivilisten":

            return {

                title:"ZIVILIST",

                theme:"zivilisten",

            };


        default:

            return {

                title:"UNBEKANNT",

                theme:"zivilisten",

            };

    }

}


/* ========================================= */
/* STATISTIK-TYPEN */
/* ========================================= */

/**
 * Alte Struktur:
 *
 * stats:{
 *
 *     seasons:[...]
 *
 * }
 */

type LegacyStats = {

    seasons: (
        | CareerSeasonStats
        | CareerGoalieSeasonStats
    )[];

};


/**
 * Neue Dual-Role-Struktur:
 *
 * stats:{
 *
 *     skater:{
 *         seasons:[...]
 *     },
 *
 *     goalie:{
 *         seasons:[...]
 *     }
 *
 * }
 */

type DualRoleStats = {

    skater?: {

        seasons: CareerSeasonStats[];

    };

    goalie?: {

        seasons: CareerGoalieSeasonStats[];

    };

};


/* ========================================= */
/* STATS AUSLESEN */
/* ========================================= */

function getStatsData(
    member: ServiceRecordMember
){

    if(!member.stats){

        return undefined;

    }


    return member.stats as unknown as
        LegacyStats | DualRoleStats;

}


/* ========================================= */
/* SKATER SEASONS */
/* ========================================= */

function getSkaterSeasons(
    member: ServiceRecordMember
): CareerSeasonStats[] {

    const stats = getStatsData(
        member
    );


    if(!stats){

        return [];

    }


    /*
    ============================================
    ALTE STRUKTUR
    ============================================
    */

    if(
        "seasons" in stats
        &&
        Array.isArray(stats.seasons)
    ){

        const seasons: CareerSeasonStats[] =
            stats.seasons as CareerSeasonStats[];

        return seasons;

    }


    /*
    ============================================
    NEUE STRUKTUR
    ============================================
    */

    if(
        "skater" in stats
        &&
        stats.skater
        &&
        Array.isArray(
            stats.skater.seasons
        )
    ){

        return stats.skater.seasons;

    }


    return [];

}


/* ========================================= */
/* GOALIE SEASONS */
/* ========================================= */

function getGoalieSeasons(
    member: ServiceRecordMember
): CareerGoalieSeasonStats[] {

    const stats = getStatsData(
        member
    );


    if(!stats){

        return [];

    }


    /*
    ============================================
    ALTE STRUKTUR
    ============================================
    */

    if(
        "seasons" in stats
        &&
        Array.isArray(stats.seasons)
    ){

        const seasons: CareerGoalieSeasonStats[] =
            stats.seasons as CareerGoalieSeasonStats[];

        return seasons;

    }


    /*
    ============================================
    NEUE STRUKTUR
    ============================================
    */

    if(
        "goalie" in stats
        &&
        stats.goalie
        &&
        Array.isArray(
            stats.goalie.seasons
        )
    ){

        return stats.goalie.seasons;

    }


    return [];

}


/* ========================================= */
/* DUAL ROLE */
/* ========================================= */

/**
 * Erstellt die beiden getrennten
 * Karriere-Statistiken.
 */

function buildDualRoleStats(
    member: ServiceRecordMember
){

    if(!member.stats){

        return undefined;

    }


    const stats = getStatsData(
        member
    );


    if(!stats){

        return undefined;

    }


    /*
    ============================================
    DUAL ROLE MUSS DIE NEUE STRUKTUR HABEN
    ============================================
    */

    if(
        !("skater" in stats)
        &&
        !("goalie" in stats)
    ){

        return undefined;

    }


    /*
    ============================================
    SKATER
    ============================================
    */

    const skaterSeasons: CareerSeasonStats[] =

        "skater" in stats

        &&

        stats.skater

        &&

        Array.isArray(
            stats.skater.seasons
        )

            ?

            stats.skater.seasons

            :

            [];


    /*
    ============================================
    GOALIE
    ============================================
    */

    const goalieSeasons: CareerGoalieSeasonStats[] =

        "goalie" in stats

        &&

        stats.goalie

        &&

        Array.isArray(
            stats.goalie.seasons
        )

            ?

            stats.goalie.seasons

            :

            [];


    /*
    ============================================
    KEINE DATEN
    ============================================
    */

    if(

        skaterSeasons.length === 0

        &&

        goalieSeasons.length === 0

    ){

        return undefined;

    }


    /*
    ============================================
    STATISTIK BERECHNEN
    ============================================
    */

    const skaterStats =

        skaterSeasons.length > 0

            ?

            buildSkaterCareerStats(
                skaterSeasons
            )

            :

            undefined;


    const goalieStats =

        goalieSeasons.length > 0

            ?

            buildGoalieCareerStats(
                goalieSeasons
            )

            :

            undefined;


    /*
    ============================================
    ERGEBNIS
    ============================================
    */

    return {

        skater: skaterStats,

        goalie: goalieStats,

    };

}


/* ========================================= */
/* MAPPER */
/* ========================================= */

export function mapMemberToCard(
    member: ServiceRecordMember
){

    /*
    ============================================
    RANG
    ============================================
    */

    const rank = ServiceRecord.rank(
        member.rank
    );


    /*
    ============================================
    POSITION
    ============================================
    */

    const position = ServiceRecord.position(
        member.position
    );


    /*
    ============================================
    BADGE
    ============================================
    */

    const badge = getBadgeTheme(
        member
    );


    /*
    ============================================
    STATISTIKEN
    ============================================
    */

    let stats:


        |

        ReturnType<
            typeof buildSkaterCareerStats
        >


        |


        ReturnType<
            typeof buildGoalieCareerStats
        >


        |


        ReturnType<
            typeof buildDualRoleStats
        >


        |


        undefined;


    /*
    ============================================
    DUAL ROLE
    ============================================
    */

    if(member.dualRole === true){

        stats = buildDualRoleStats(
            member
        );

    }


    /*
    ============================================
    NORMALE SPIELER
    ============================================
    */

    else if(member.stats){

        /*
        ========================================
        GOALIE
        ========================================
        */

        if(
            member.playerType === "goalie"
        ){

            const goalieSeasons: CareerGoalieSeasonStats[] =
                getGoalieSeasons(member);


            if(
                goalieSeasons.length > 0
            ){

                stats =
                    buildGoalieCareerStats(
                        goalieSeasons
                    );

            }

        }


        /*
        ========================================
        SKATER
        ========================================
        */

        else{

            const skaterSeasons: CareerSeasonStats[] =
                getSkaterSeasons(member);


            if(
                skaterSeasons.length > 0
            ){

                stats =
                    buildSkaterCareerStats(
                        skaterSeasons
                    );

            }

        }

    }


       /*
    ============================================
    CARD PLAYER TYPE
    ============================================
    */

    const cardPlayerType:
        "skater" | "goalie" | "dual" =

        member.dualRole === true

            ? "dual"

            : member.playerType;


    /*
    ============================================
    CARD
    ============================================
    */

    return {

        id: member.id,


        armyId: member.recordNumber,


        organization:
            member.organization,


        name: member.name,


        avatar: member.avatar,


        joinedLabel:
            `SEIT ${member.enlisted}`,


        /*
        ========================================
        RANG
        ========================================
        */

        rank: {

            title: rank.name,

            image: getRankImage(
                rank.id
            ),

        },


        /*
        ========================================
        BADGE
        ========================================
        */

        badge: {

            title: badge.title,

            theme: badge.theme,

        },


        /*
        ========================================
        PRESTIGE
        ========================================
        */

        prestige: {

            level: member.prestige,

            key: badge.theme,

            title: badge.title,

        },


        /*
        ========================================
        STATISTIKEN
        ========================================
        */

        stats,


        /*
        ========================================
        SPIELERTYP
        ========================================
        */

        playerType: cardPlayerType,


        /*
        ========================================
        DUAL ROLE
        ========================================
        */

        dualRole:
            member.dualRole ?? false,


        /*
        ========================================
        PROFIL
        ========================================
        */

        profile: {

            position:

                position?.title

                ??

                "",


            number:

                member.playerNumber,

        },

    };

    }