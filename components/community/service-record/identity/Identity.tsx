/**
 * ============================================
 * BloodyArmy
 *
 * Component:
 * Identity
 *
 * Description:
 * Anzeige von Dienstgrad.
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







interface IdentityProps {


    rank:RankId;


}







export default function Identity({

    rank,

}:IdentityProps) {



    const rankData = ServiceRecord.rank(rank);





    return (



        <section className={styles.identity}>




            {


                rankData?.insignia && (


                    <img


                        src={rankData.insignia}


                        alt={rankData.name}


                        className={styles.insignia}


                    />


                )


            }






            <div className={styles.rank}>


                {rankData?.name}



            </div>




        </section>



    );


}