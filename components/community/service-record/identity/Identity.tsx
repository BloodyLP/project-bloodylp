/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * Identity
 *
 * Description:
 * Anzeige von Dienstgrad und Organisation.
 *
 * ============================================
 */


import styles from "./Identity.module.css";



import {

    ServiceRecord

} from "@/lib/service-record";



import type {

    RankId

} from "@/data/service-record/ranks";



import type {

    OrganizationId

} from "@/data/service-record/organizations";







interface IdentityProps {



    rank:RankId;



    organization:OrganizationId;



}







export default function Identity({

    rank,

    organization,

}:IdentityProps) {



    const rankData = ServiceRecord.rank(rank);



    const organizationData = ServiceRecord.organization(

        organization

    );



    return (

        <section className={styles.identity}>



            {
                rankData.insignia && (

                    <img

                        src={rankData.insignia}

                        alt={rankData.name}

                        className={styles.insignia}

                    />

                )
            }





            <div className={styles.rank}>


                {rankData.name}


            </div>





            <div className={styles.organization}>


                {organizationData.title}


            </div>



        </section>

    );

}