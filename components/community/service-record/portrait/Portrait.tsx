/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * Portrait
 *
 * Description:
 * Darstellung des Service Record Portraits.
 *
 * ============================================
 */


import styles from "./Portrait.module.css";



import {

    ServiceRecord

} from "@/lib/service-record";



import type {

    ServiceRecordMember

} from "@/types/service-record";







interface PortraitProps {


    member:ServiceRecordMember;


}







export default function Portrait({

    member

}:PortraitProps) {



    const rank = ServiceRecord.rank(

        member.rank

    );



    return (

        <section className={styles.portrait}>



            <div className={styles.avatar}>


                <img

                    src={member.avatar}

                    alt={member.name}

                />


            </div>





            <div className={styles.rank}>


                {rank.name}


            </div>



        </section>

    );

}