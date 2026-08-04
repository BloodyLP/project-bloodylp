/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Page:
 * Service Record
 *
 * ============================================
 */


import { ServiceRecord } from "@/components/community/service-record";


import { MEMBERS } from "@/data/service-record/members";




interface ServiceRecordPageProps {


    searchParams:Promise<{

        id?:string;

    }>;


}








export default async function ServiceRecordPage({

    searchParams

}:ServiceRecordPageProps){



    const params = await searchParams;



    const id = params.id;





    const member = MEMBERS.find(


        item =>


            item.id === id

            ||

            item.slug === id

            ||

            item.recordNumber === id



    );








    if(!member){


        return (


            <main


                style={{


                    minHeight:"100vh",


                    display:"flex",


                    justifyContent:"center",


                    alignItems:"center",


                    background:"#101010",


                    color:"#fff"


                }}


            >


                Service Record nicht gefunden.


            </main>


        );


    }








    return (


        <main

            style={{


                minHeight:"100vh",


                display:"flex",


                justifyContent:"center",


                alignItems:"flex-start",


                background:"#101010",


                paddingTop:"140px",


                paddingLeft:"40px",


                paddingRight:"40px",


                paddingBottom:"40px",


            }}



        >



            <ServiceRecord

                member={member}

            />



        </main>



    );


}