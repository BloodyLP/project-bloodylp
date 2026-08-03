"use client";


import styles from "./Members.module.css";


import MembersHeader from "./MembersHeader";

import FounderCard from "./FounderCard";

import PersonnelArchive from "./archive/PersonnelArchive";



export default function Members() {


    return (

        <section className={styles.section}>


            <div className={styles.container}>


                {/* HEADER */}

                <MembersHeader />





                {/* FOUNDER COMMAND PROFILE */}

                <div className={styles.founderWrapper}>


                    <FounderCard />


                </div>





                {/* PERSONAL ARCHIVE */}

                <div className={styles.archiveWrapper}>


                    <PersonnelArchive />


                </div>



            </div>


        </section>

    );

}