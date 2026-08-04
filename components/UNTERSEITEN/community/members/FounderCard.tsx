"use client";


import styles from "./FounderCard.module.css";


import MemberCard from "./MemberCard";


import {

    members

} from "./data";


import {

    mapMemberToCard

} from "./memberMapper";









export default function FounderCard(){



    const founder = members.find(


        member =>

            member.prestige === 10


    );





    if(!founder){


        return null;


    }






    return (



        <div className={styles.wrapper}>


            <div className={styles.commandLabel}>


                FOUNDER


            </div>





            <div className={styles.founderCard}>


                <MemberCard



                    {...mapMemberToCard(founder)}



                    compact={false}



                />


            </div>



        </div>



    );

}