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

import { bloodylp } from "@/data/service-record/members/bloodylp";



export default function ServiceRecordPage() {


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

                member={bloodylp}

            />


        </main>


    );

}