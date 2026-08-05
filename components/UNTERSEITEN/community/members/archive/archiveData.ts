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



import {

    ServiceRecord

} from "@/lib/service-record";



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



        /*
        ============================================
        PRESTIGE III
        ============================================
        */


        {

            id:"prestigeIII",

            title:"Prestige III",

            theme:"prestigeIII",


            members:

                members.filter(

                    member =>

                        member.prestige === 3

                )

        },







        /*
        ============================================
        PRESTIGE II
        ============================================
        */


        {

            id:"prestigeII",

            title:"Prestige II",

            theme:"prestigeII",


            members:

                members.filter(

                    member =>

                        member.prestige === 2

                )

        },







        /*
        ============================================
        PRESTIGE I
        ============================================
        */


        {

            id:"prestigeI",

            title:"Prestige I",

            theme:"prestigeI",


            members:

                members.filter(

                    member =>

                        member.prestige === 1

                )

        },







        /*
        ============================================
        GENERALE
        ============================================
        */


        {

            id:"generale",

            title:"Generale",

            theme:"generale",


            members:

                members.filter(

                    member => {



                        if(member.prestige > 0)

                            return false;



                        const rank =

                            ServiceRecord.rank(

                                member.rank

                            );



                        return (

                            rank?.category === "command"

                        );

                    }

                )

        },







        /*
============================================
STABSOFFIZIERE
============================================
*/


{


    id:"stabsoffiziere",


    title:"Stabsoffiziere",


    theme:"stabsoffiziere",



    members:


        members.filter(


            member => {



                if(member.prestige > 0)

                    return false;





                const rank =

                    ServiceRecord.rank(

                        member.rank

                    );





                return (


                    rank?.category === "offiziere"


                    &&


                    rank.level >= 80



                );


            }


        )


},
        /*
============================================
OFFIZIERE
============================================
*/


{


    id:"offiziere",


    title:"Offiziere",


    theme:"offiziere",



    members:


        members.filter(


            member => {



                if(member.prestige > 0)

                    return false;





                const rank =

                    ServiceRecord.rank(

                        member.rank

                    );





                return (


                    rank?.category === "offiziere"


                    &&


                    rank.level < 80



                );


            }


        )


},
        /*
        ============================================
        UNTEROFFIZIERE MIT PORTEPEE
        ============================================
        */


        {

            id:"portepee",

            title:"Unteroffiziere mit Portepee",

            theme:"portepee",


            members:

                members.filter(

                    member => {



                        if(member.prestige > 0)

                            return false;



                        const rank =

                            ServiceRecord.rank(

                                member.rank

                            );



                        return (

                            rank?.category === "feldwebel"

                        );

                    }

                )

        },







        /*
        ============================================
        UNTEROFFIZIERE
        ============================================
        */


        {

            id:"unteroffiziere",

            title:"Unteroffiziere",

            theme:"unteroffiziere",


            members:

                members.filter(

                    member => {



                        if(member.prestige > 0)

                            return false;



                        const rank =

                            ServiceRecord.rank(

                                member.rank

                            );



                        return (

                            rank?.category === "unteroffiziere"

                        );

                    }

                )

        },







        /*
        ============================================
        MANNSCHAFTEN
        ============================================
        */


        {

            id:"mannschaften",

            title:"Mannschafter",

            theme:"mannschaften",


            members:

                members.filter(

                    member => {



                        if(member.prestige > 0)

                            return false;



                        const rank =

                            ServiceRecord.rank(

                                member.rank

                            );



                        return (

                            rank?.category === "mannschaften"

                        );

                    }

                )

        },







        /*
        ============================================
        ZIVILISTEN
        ============================================
        */


        {
    id:"zivilisten",

    title:"Zivilisten",

    theme:"zivilisten",

    members:

        members.filter(member => {

            const rank = ServiceRecord.rank(member.rank);
            
            return rank?.category === "zivilisten";

        })

}



    ];

}