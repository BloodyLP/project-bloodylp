"use client";


import styles from "./Members.module.css";


import MembersHeader from "./MembersHeader";


import FounderCard from "./FounderCard";


import MemberGroups from "./MemberGroups";


import PersonnelArchive from "./archive/PersonnelArchive";







export default function Members(){



    return (



        <section className={styles.section}>


            <div className={styles.container}>


                <MembersHeader />





                <div className={styles.founderWrapper}>


                    <FounderCard />


                </div>


                <div className={styles.archiveWrapper}>


                    <PersonnelArchive />


                </div>



            </div>



        </section>



    );

}