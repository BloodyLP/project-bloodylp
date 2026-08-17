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
    SkaterSeasonStats,
    GoalieSeasonStats,
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

    if(member.prestige === 10){

        return{

            title:"FOUNDER",

            theme:"prestigeX",

        };

    }


    if(member.prestige === 3){

        return{

            title:"PRESTIGE III",

            theme:"prestigeIII",

        };

    }


    if(member.prestige === 2){

        return{

            title:"PRESTIGE II",

            theme:"prestigeII",

        };

    }


    if(member.prestige === 1){

        return{

            title:"PRESTIGE I",

            theme:"prestigeI",

        };

    }


    const rank = ServiceRecord.rank(
        member.rank
    );


    switch(rank.category){

        case "command":

            return{

                title:"GENERAL",

                theme:"generale",

            };


        case "offiziere":

            return{

                title:"OFFIZIER",

                theme:"offiziere",

            };


        case "feldwebel":

            return{

                title:"UNTEROFFIZIER MIT PORTEPEE",

                theme:"portepee",

            };


        case "unteroffiziere":

            return{

                title:"UNTEROFFIZIER",

                theme:"unteroffiziere",

            };


        case "mannschaften":

            return{

                title:"MANNSCHAFT",

                theme:"mannschaften",

            };


        case "zivilisten":

            return{

                title:"ZIVILIST",

                theme:"zivilisten",

            };


        default:

            return{

                title:"UNBEKANNT",

                theme:"zivilisten",

            };

    }

}


/* ========================================= */
/* STATISTIK-TYPEN */
/* ========================================= */

type LegacyStats = {

    seasons:
        (
            | SkaterSeasonStats
            | GoalieSeasonStats
        )[];

};


type DualRoleStats = {

    skater?: {

        seasons: SkaterSeasonStats[];

    };

    goalie?: {

        seasons: GoalieSeasonStats[];

    };

};


/* ========================================= */
/* STATS LESEN */
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

): SkaterSeasonStats[] {

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

        const seasons =
            stats.seasons;

        return seasons as SkaterSeasonStats[];

    }


    /*
    ============================================
    DUAL ROLE
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

): GoalieSeasonStats[] {

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

        const seasons =
            stats.seasons;

        return seasons as GoalieSeasonStats[];

    }


    /*
    ============================================
    DUAL ROLE
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

    let stats;


    /*
    ============================================
    DUAL ROLE
    ============================================
    */

    if(
        member.dualRole === true
        &&
        member.stats
    ){

        const skaterSeasons =
            getSkaterSeasons(
                member
            );


        const goalieSeasons =
            getGoalieSeasons(
                member
            );


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


        stats = {

            skater: skaterStats,

            goalie: goalieStats,

        };

    }


    /*
    ============================================
    NORMALE SPIELER
    ============================================
    */

    else if(member.stats){

        if(
            member.playerType === "goalie"
        ){

            const goalieSeasons =
                getGoalieSeasons(
                    member
                );


            stats =

                goalieSeasons.length > 0

                    ?

                    buildGoalieCareerStats(
                        goalieSeasons
                    )

                    :

                    undefined;

        }

        else{

            const skaterSeasons =
                getSkaterSeasons(
                    member
                );


            stats =

                skaterSeasons.length > 0

                    ?

                    buildSkaterCareerStats(
                        skaterSeasons
                    )

                    :

                    undefined;

        }

    }


    /*
    ============================================
    KEINE STATISTIK
    ============================================
    */

    else{

        stats = undefined;

    }


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


        rank: {

            title: rank.name,

            image: getRankImage(
                rank.id
            ),

        },


        badge: {

            title: badge.title,

            theme: badge.theme,

        },


        prestige: {

            level: member.prestige,

            key: badge.theme,

            title: badge.title,

        },


        stats,


        playerType:
            member.playerType,


        dualRole:
            member.dualRole ?? false,


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