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



import type {

    ServiceRecordMember

} from "@/types/service-record";







interface PortraitProps {


    member:ServiceRecordMember;


}








export default function Portrait({

    member

}:PortraitProps) {



    return (



        <section className={styles.portrait}>


            <div className={styles.avatarWrapper}>


                <img


                    src={member.avatar}


                    alt={member.name}


                    className={styles.avatar}


                />


            </div>



        </section>



    );


}