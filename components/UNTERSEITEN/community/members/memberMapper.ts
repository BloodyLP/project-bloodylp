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
/* BADGE THEME                               */
/* ========================================= */

function getBadgeTheme(
    member: ServiceRecordMember
) {

    /*
    ============================================
    UNVERGESSEN
    ============================================
    */

    if (
        member.deceased === true
    ) {

        return {
            title: "UNVERGESSEN",
            theme: "memorial",
        };

    }


    /*
    ============================================
    FOUNDER
    ============================================
    */

    if (
        member.prestige === 10
    ) {

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

    if (
        member.prestige === 3
    ) {

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

    if (
        member.prestige === 2
    ) {

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

    if (
        member.prestige === 1
    ) {

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

    const rank =
        ServiceRecord.rank(
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
                title:
                    "UNTEROFFIZIER MIT PORTEPEE",
                theme:
                    "portepee",
            };


        /*
        ========================================
        UNTEROFFIZIERE
        ========================================
        */

        case "unteroffiziere":

            return {
                title:
                    "UNTEROFFIZIER",
                theme:
                    "unteroffiziere",
            };


        /*
        ========================================
        MANNSCHAFTEN
        ========================================
        */

        case "mannschaften":

            return {
                title:
                    "MANNSCHAFT",
                theme:
                    "mannschaften",
            };


        /*
        ========================================
        ZIVILISTEN
        ========================================
        */

        case "zivilisten":

            return {
                title:
                    "ZIVILIST",
                theme:
                    "zivilisten",
            };


        /*
        ========================================
        SANITÄT
        ========================================
        */

        case "sanitaet":

            return {
                title:
                    "SANITÄT",
                theme:
                    "offiziere",
            };


        /*
        ========================================
        WARRANT OFFICERS
        ========================================
        */

        case "warrant":

            return {
                title:
                    "WARRANT OFFICER",
                theme:
                    "offiziere",
            };


        /*
        ========================================
        BLOODYARMY SPEZIALKATEGORIEN
        ========================================
        */

        case "teamkader":

            return {
                title:
                    "TEAMKADER",
                theme:
                    "offiziere",
            };


        case "fuehrungsspieler":

            return {
                title:
                    "FÜHRUNGSSPIELER",
                theme:
                    "offiziere",
            };


        case "teamleitung":

            return {
                title:
                    "TEAMLEITUNG",
                theme:
                    "offiziere",
            };


        case "organisation":

            return {
                title:
                    "ORGANISATION",
                theme:
                    "offiziere",
            };


        case "auszeichnung":

            return {
                title:
                    "AUSZEICHNUNG",
                theme:
                    "offiziere",
            };


        /*
        ========================================
        FALLBACK
        ========================================
        */

        default:

            return {
                title:
                    "UNBEKANNT",
                theme:
                    "zivilisten",
            };

    }

}


/* ========================================= */
/* LEGACY STATS                             */
/* ========================================= */

type LegacyStats = {

    seasons: (
        | CareerSeasonStats
        | CareerGoalieSeasonStats
    )[];

};


/* ========================================= */
/* DUAL ROLE STATS                          */
/* ========================================= */

type DualRoleStats = {

    skater?: {

        seasons:
            CareerSeasonStats[];

    };

    goalie?: {

        seasons:
            CareerGoalieSeasonStats[];

    };

};


/* ========================================= */
/* GET STATS                                 */
/* ========================================= */

function getStats(
    member: ServiceRecordMember
) {

    /* ============================================ */
    /* KEINE STATISTIKEN                            */
    /* ============================================ */

    if (
        !member.stats
    ) {
        return undefined;
    }


    const rawStats =
        member.stats as
        unknown as
        LegacyStats |
        DualRoleStats;


    /* ============================================ */
    /* DUAL ROLE                                    */
    /* ============================================ */

    /*
     * Wichtig:
     * Tonska bleibt auf der MemberCard
     * ein SKATER.
     *
     * Durch:
     *     dualRole: true
     *
     * werden aber beide Statistikbereiche
     * aufgebaut.
     */

    if (
        member.dualRole === true
        &&
        "skater" in rawStats
    ) {

        const skaterSeasons =
            rawStats.skater?.seasons
            ?? [];


        const goalieSeasons =
            "goalie" in rawStats
                ? rawStats.goalie?.seasons
                    ?? []
                : [];


        const skater =
            skaterSeasons.length > 0
                ? buildSkaterCareerStats(
                    skaterSeasons
                )
                : undefined;


        const goalie =
            goalieSeasons.length > 0
                ? buildGoalieCareerStats(
                    goalieSeasons
                )
                : undefined;


        /* ======================================== */
        /* DUAL DATA                                */
        /* ======================================== */

        return {
            skater,
            goalie,
        };
    }


    /* ============================================ */
    /* ALTE STRUKTUR                               */
    /* ============================================ */

    if (
        "seasons" in rawStats
        &&
        Array.isArray(
            rawStats.seasons
        )
    ) {

        /* ======================================== */
        /* GOALIE                                    */
        /* ======================================== */

        if (
            member.playerType ===
            "goalie"
        ) {

            return buildGoalieCareerStats(
                rawStats.seasons as CareerGoalieSeasonStats[]
            );
        }


        /* ======================================== */
        /* SKATER                                    */
        /* ======================================== */

        return buildSkaterCareerStats(
            rawStats.seasons as CareerSeasonStats[]
        );
    }


    /* ============================================ */
    /* NEUE DUAL-STRUKTUR                           */
    /* ============================================ */

    if (
        member.playerType ===
        "goalie"
        &&
        "goalie" in rawStats
    ) {

        const seasons =
            rawStats.goalie?.seasons
            ?? [];


        if (
            seasons.length === 0
        ) {
            return undefined;
        }


        return buildGoalieCareerStats(
            seasons
        );
    }


    if (
        member.playerType ===
        "skater"
        &&
        "skater" in rawStats
    ) {

        const seasons =
            rawStats.skater?.seasons
            ?? [];


        if (
            seasons.length === 0
        ) {
            return undefined;
        }


        return buildSkaterCareerStats(
            seasons
        );
    }


    return undefined;
}


/* ========================================= */
/* MAPPER                                    */
/* ========================================= */

export function mapMemberToCard(
    member: ServiceRecordMember
) {

    /*
    ============================================
    RANG
    ============================================
    */

    const rank =
        ServiceRecord.rank(
            member.rank
        );


    /*
    ============================================
    POSITION
    ============================================
    */

    const position =
        ServiceRecord.position(
            member.position
        );


    /*
    ============================================
    BADGE
    ============================================
    */

    const badge =
        getBadgeTheme(
            member
        );


    /*
    ============================================
    STATISTIKEN
    ============================================
    */

    const stats =
        getStats(
            member
        );


    /*
    ============================================
    CARD
    ============================================
    */

    return {

        /*
        ========================================
        IDENTITÄT
        ========================================
        */

        id:
            member.id,

        armyId:
            member.recordNumber,

        organization:
            member.organization,

        name:
            member.name,

        avatar:
            member.avatar,

        joinedLabel:
            `SEIT ${member.enlisted}`,


        /*
        ========================================
        VERSTORBEN
        ========================================
        */

        deceased:
            member.deceased
            ?? false,


        /*
        ========================================
        RANG
        ========================================
        */

        rank: {

            title:
                rank.name,

            image:
                getRankImage(
                    rank.id
                ),

        },


        /*
        ========================================
        BADGE
        ========================================
        */

        badge: {

            title:
                badge.title,

            theme:
                badge.theme,

        },


        /*
        ========================================
        PRESTIGE
        ========================================
        */

        prestige: {

            level:
                member.prestige,

            key:
                badge.theme,

            title:
                badge.title,

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

        playerType:
            member.playerType,


        /*
        ========================================
        DUAL ROLE
        ========================================
        */

        dualRole:
            member.dualRole
            ?? false,


        /*
        ========================================
        PROFIL
        ========================================
        */

        profile: {

            position:
                position?.title
                ?? "",

            number:
                member.playerNumber,

        },

    };

}