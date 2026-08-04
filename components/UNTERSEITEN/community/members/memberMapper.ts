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


import {

    ServiceRecord

} from "@/lib/service-record";


import type {

    ServiceRecordMember

} from "@/types/service-record";









function getBadgeTheme(

    member:ServiceRecordMember

){



    /*
    ============================================
    FOUNDER
    ============================================
    */


    if(member.prestige === 10){


        return {


            title:"FOUNDER",


            theme:"prestigeX"


        };


    }







    /*
    ============================================
    PRESTIGE
    ============================================
    */


    if(member.prestige === 3){


        return {


            title:"PRESTIGE III",


            theme:"prestigeIII"


        };


    }






    if(member.prestige === 2){


        return {


            title:"PRESTIGE II",


            theme:"prestigeII"


        };


    }






    if(member.prestige === 1){


        return {


            title:"PRESTIGE I",


            theme:"prestigeI"


        };


    }







    /*
    ============================================
    RANG SYSTEM
    ============================================
    */


    const rank = ServiceRecord.rank(

        member.rank

    );






    if(!rank){


        return {


            title:"ZIVILIST",


            theme:"zivilisten"


        };


    }







    switch(rank.category){



        case "command":


            return {


                title:"GENERAL",


                theme:"generale"


            };







        case "offiziere":


            return {


                title:"OFFIZIER",


                theme:"offiziere"


            };







        case "feldwebel":


            return {


                title:"UNTEROFFIZIER MIT PORTEPEE",


                theme:"portepee"


            };







        case "unteroffiziere":


            return {


                title:"UNTEROFFIZIER",


                theme:"unteroffiziere"


            };







        case "mannschaften":


            return {


                title:"MANNSCHAFT",


                theme:"mannschaften"


            };







        default:


            return {


                title:"ZIVILIST",


                theme:"zivilisten"


            };


    }



}













export function mapMemberToCard(

    member:ServiceRecordMember

){



    const rank = ServiceRecord.rank(

        member.rank

    );





    const organization = ServiceRecord.organization(

        member.organization

    );





    const position = ServiceRecord.position(

        member.position

    );





    const badge = getBadgeTheme(

        member

    );







    return {



        id:member.id,



        armyId:member.recordNumber,



        name:member.name,



        avatar:member.avatar,





        joinedLabel:

            `SEIT ${member.enlisted}`,







        rank:{



            title:

                rank?.name ??

                "Zivilist",





            image:

                rank?.insignia ??

                ""

        },







        badge:{



            title:

                badge.title,





            theme:

                badge.theme



        },







        prestige:{



            level:

                member.prestige,





            key:

                badge.theme,





            title:

                badge.title



        },







        stats:

            member.stats,







        profile:{



            position:

                position?.title ??

                "",





            number:

                member.recordNumber



        }







    };

}