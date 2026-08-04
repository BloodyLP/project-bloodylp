/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * File:
 * archiveData.ts
 *
 * Description:
 * Archiv Gruppen für Service Records.
 *
 * ============================================
 */


import {

    members

} from "../data";



import type {

    ServiceRecordMember

} from "@/types/service-record";







export interface ArchiveGroup {


    id:string;


    title:string;


    theme:string;


    members:ServiceRecordMember[];


}









export function getArchiveGroups():ArchiveGroup[] {



    return [


        {


            id:"founder",


            title:"Founder",


            theme:"founder",


            members:

                members.filter(

                    member =>

                        member.prestige === 10

                )


        },





        {


            id:"bloodyArmy",


            title:"BloodyArmy",


            theme:"bloodyArmy",


            members:

                members.filter(

                    member =>

                        member.prestige === 3

                )


        },





        {


            id:"canadianArmy",


            title:"Canadian Army",


            theme:"canadianArmy",


            members:

                members.filter(

                    member =>

                        member.prestige === 2

                )


        },





        {


            id:"unitedStates",


            title:"United States Forces",


            theme:"unitedStates",


            members:

                members.filter(

                    member =>

                        member.prestige === 1

                )


        },





        {


            id:"bundeswehr",


            title:"Bundeswehr / Zivilisten",


            theme:"bundeswehr",


            members:

                members.filter(

                    member =>

                        member.prestige === 0

                )


        }



    ];

}