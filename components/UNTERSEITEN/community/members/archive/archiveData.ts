import { members } from "../data";

import { archiveOrder } from "./archiveOrder";



export type ArchiveGroup = {

    id:string;

    title:string;

    theme:string;

    members:any[];

};





const archiveTitles:Record<string,string> = {


    prestigeX:"PRESTIGE X",

    prestigeIX:"PRESTIGE IX",

    prestigeVIII:"PRESTIGE VIII",

    prestigeVII:"PRESTIGE VII",

    prestigeVI:"PRESTIGE VI",

    prestigeV:"PRESTIGE V",

    prestigeIV:"PRESTIGE IV",

    prestigeIII:"PRESTIGE III",

    prestigeII:"PRESTIGE II",

    prestigeI:"PRESTIGE I",


    generale:"GENERALE",

    stabsoffiziere:"STABSOFFIZIERE",

    offiziere:"OFFIZIERE",

    portepee:"PORTEPEE",

    unteroffiziere:"UNTEROFFIZIERE",

    mannschaften:"MANNSCHAFTEN",

    zivilisten:"ZIVILISTEN",

};





export function getArchiveGroups():ArchiveGroup[]{


    const groups:Record<string,any[]> = {};



    members.forEach((member)=>{


        /*
            Founder nicht ins Archiv
        */


        if(

            member.badge?.title === "FOUNDER"

        ){

            return;

        }




        let key:string;



        /*
            Prestige vor Dienstgrad
        */


        if(member.prestige?.key){


            key = member.prestige.key;


        }



        else {


            key = member.badge.theme;


        }




        if(!groups[key]){


            groups[key]=[];

        }




        groups[key].push(member);


    });





    return archiveOrder


        .filter(

            key =>

            groups[key]

            &&

            groups[key].length > 0

        )


        .map((key)=>({


            id:key,


            title:

                archiveTitles[key],


            theme:key,


            members:

                groups[key],


        }));


}