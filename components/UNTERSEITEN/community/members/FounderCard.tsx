"use client";


import MemberCard from "./MemberCard";

import { members } from "./data";

import styles from "./FounderCard.module.css";




export default function FounderCard(){


    const founder = members.find(

        (member)=>

            member.badge?.title === "FOUNDER"

    );



    if(!founder){

        return null;

    }





    return (


        <section className={styles.wrapper}>


            <div className={styles.commandLabel}>


                COMMAND PROFILE


            </div>





            <div className={styles.founderCard}>


                <MemberCard


                    {...founder}


                />


            </div>



        </section>


    );

}