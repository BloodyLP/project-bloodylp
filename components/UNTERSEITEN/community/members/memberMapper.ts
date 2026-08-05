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

import type { ServiceRecordMember } from "@/types/service-record";

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

function getBadgeTheme(

    member:ServiceRecordMember

){

    /*
    ============================================
    FOUNDER
    ============================================
    */

    if(member.prestige===10){

        return{

            title:"FOUNDER",

            theme:"prestigeX",

        };

    }

    /*
    ============================================
    PRESTIGE
    ============================================
    */

    if(member.prestige===3){

        return{

            title:"PRESTIGE III",

            theme:"prestigeIII",

        };

    }

    if(member.prestige===2){

        return{

            title:"PRESTIGE II",

            theme:"prestigeII",

        };

    }

    if(member.prestige===1){

        return{

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

        default:

            return{

                title:"ZIVILIST",

                theme:"zivilisten",

            };

    }

}

export function mapMemberToCard(

    member:ServiceRecordMember

){

    const rank = ServiceRecord.rank(

        member.rank

    );

    const position = ServiceRecord.position(

        member.position

    );

    const badge = getBadgeTheme(

        member

    );

    return{

        id:member.id,

        armyId:member.recordNumber,

        name:member.name,

        avatar:member.avatar,

        joinedLabel:`SEIT ${member.enlisted}`,

        rank:{

            title:rank.name,

            image:getRankImage(

                rank.id

            ),

        },

        badge:{

            title:badge.title,

            theme:badge.theme,

        },

        prestige:{

            level:member.prestige,

            key:badge.theme,

            title:badge.title,

        },

        stats:

            member.stats

                ?

                member.playerType==="goalie"

                    ?

                    buildGoalieCareerStats(

                        member.stats.seasons as GoalieSeasonStats[]

                    )

                    :

                    buildSkaterCareerStats(

                        member.stats.seasons as SkaterSeasonStats[]

                    )

                :

                undefined,

        playerType:member.playerType,

        profile:{

            position:

                position?.title

                ??

                "",

            number:member.playerNumber,

        },

    };

}