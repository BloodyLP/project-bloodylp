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
) {

    /*
    ============================================
    FOUNDER
    ============================================
    */

    if (member.prestige === 10) {

        return {
            title: "FOUNDER",
            theme: "prestigeX",
        };

    }


    /*
    ============================================
    PRESTIGE III
    ============================================
    */

    if (member.prestige === 3) {

        return {
            title: "PRESTIGE III",
            theme: "prestigeIII",
        };

    }


    /*
    ============================================
    PRESTIGE II
    ============================================
    */

    if (member.prestige === 2) {

        return {
            title: "PRESTIGE II",
            theme: "prestigeII",
        };

    }


    /*
    ============================================
    PRESTIGE I
    ============================================
    */

    if (member.prestige === 1) {

        return {
            title: "PRESTIGE I",
            theme: "prestigeI",
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


    switch (rank.category) {

        /*
        ========================================
        GENERALE
        ========================================
        */

        case "command":

            return {
                title: "GENERAL",
                theme: "generale",
            };


        /*
        ========================================
        STABSOFFIZIERE
        ========================================
        */

        case "stabsoffiziere":

            return {
                title: "STABSOFFIZIER",
                theme: "stabsoffiziere",
            };


        /*
        ========================================
        OFFIZIERE
        ========================================
        */

        case "offiziere":

            return {
                title: "OFFIZIER",
                theme: "offiziere",
            };


        /*
        ========================================
        FELDWEBEL
        ========================================
        */

        case "feldwebel":

            return {
                title: "UNTEROFFIZIER MIT PORTEPEE",
                theme: "portepee",
            };


        /*
        ========================================
        UNTEROFFIZIERE
        ========================================
        */

        case "unteroffiziere":

            return {
                title: "UNTEROFFIZIER",
                theme: "unteroffiziere",
            };


        /*
        ========================================
        MANNSCHAFTEN
        ========================================
        */

        case "mannschaften":

            return {
                title: "MANNSCHAFT",
                theme: "mannschaften",
            };


        /*
        ========================================
        ZIVILISTEN
        ========================================
        */

        case "zivilisten":

            return {
                title: "ZIVILIST",
                theme: "zivilisten",
            };


        /*
        ========================================
        FALLBACK
        ========================================
        */

        default:

            return {
                title: "UNBEKANNT",
                theme: "zivilisten",
            };

    }

}


/* ========================================= */
/* LEGACY STATS */
/* ========================================= */

type LegacyStats = {

    seasons: (
        | CareerSeasonStats
        | CareerGoalieSeasonStats
    )[];

};


/* ========================================= */
/* DUAL ROLE STATS */
/* ========================================= */

type DualRoleStats = {

    skater?: {

        seasons: CareerSeasonStats[];

    };

    goalie?: {

        seasons: CareerGoalieSeasonStats[];

    };

};


/* ========================================= */
/* CAREER SEASONS ERMITTELN */
/* ========================================= */

function getCareerSeasons(
    member: ServiceRecordMember
) {

    /*
    ============================================
    KEINE STATISTIKEN
    ============================================
    */

    if (!member.stats) {

        return [];

    }


    const stats =
        member.stats as unknown as
        LegacyStats | DualRoleStats;


    /*
    ============================================
    ALTE STRUKTUR
    ============================================
    */

    if (
        "seasons" in stats
        &&
        Array.isArray(stats.seasons)
    ) {

        return stats.seasons;

    }


    /*
    ============================================
    DUAL ROLE - GOALIE
    ============================================
    */

    if (
        member.playerType === "goalie"
        &&
        "goalie" in stats
    ) {

        return (
            stats.goalie?.seasons
            ?? []
        );

    }


    /*
    ============================================
    DUAL ROLE - SKATER
    ============================================
    */

    if (
        member.playerType === "skater"
        &&
        "skater" in stats
    ) {

        return (
            stats.skater?.seasons
            ?? []
        );

    }


    /*
    ============================================
    KEINE PASSENDEN STATISTIKEN
    ============================================
    */

    return [];

}


/* ========================================= */
/* MAPPER */
/* ========================================= */

export function mapMemberToCard(
    member: ServiceRecordMember
) {

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
    KARRIERE SEASONS
    ============================================
    */

    const careerSeasons =
        getCareerSeasons(
            member
        );


    /*
    ============================================
    STATISTIKEN
    ============================================
    */

    let stats:

        | ReturnType<
            typeof buildSkaterCareerStats
        >

        |

        ReturnType<
            typeof buildGoalieCareerStats
        >

        | undefined;


    /*
    ============================================
    GOALIE
    ============================================
    */

    if (
        member.playerType === "goalie"
        &&
        careerSeasons.length > 0
    ) {

        const goalieSeasons:
            CareerGoalieSeasonStats[] =
            careerSeasons as CareerGoalieSeasonStats[];

        stats =
            buildGoalieCareerStats(
                goalieSeasons
            );

    }


    /*
    ============================================
    SKATER
    ============================================
    */

    else if (
        member.playerType === "skater"
        &&
        careerSeasons.length > 0
    ) {

        const skaterSeasons:
            CareerSeasonStats[] =
            careerSeasons as CareerSeasonStats[];

        stats =
            buildSkaterCareerStats(
                skaterSeasons
            );

    }


    /*
    ============================================
    CARD
    ============================================
    */

    return {

        id: member.id,

        armyId: member.recordNumber,

        organization: member.organization,

        name: member.name,

        avatar: member.avatar,

        joinedLabel:
            `SEIT ${member.enlisted}`,

        rank: {

            title: rank.name,

            image:
                getRankImage(
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

        profile: {

            position:
                position?.title
                ?? "",

            number:
                member.playerNumber,

        },

    };

}