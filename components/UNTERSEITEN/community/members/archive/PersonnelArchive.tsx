"use client";


import ArchiveFolder from "./ArchiveFolder";

import {
    getArchiveGroups,
    getMemorialMembers,
} from "./archiveData";

import MemberCard from "../MemberCard";

import {
    mapMemberToCard,
} from "../memberMapper";

import styles from "./PersonnelArchive.module.css";


/* ========================================= */
/* COMPONENT */
/* ========================================= */

export default function PersonnelArchive(){


    /*
    ============================================
    ARCHIV-GRUPPEN
    ============================================
    */

    const groups =
        getArchiveGroups();


    /*
    ============================================
    UNVERGESSENE MITGLIEDER
    ============================================
    */

    const memorialMembers =
        getMemorialMembers();


    /*
    ============================================
    RENDER
    ============================================
    */

    return (

        <div className={styles.archive}>


            {/* ================================= */}
            {/* NORMALES PERSONALARCHIV */}
            {/* ================================= */}

            {groups.map((group)=>(

                <ArchiveFolder

                    key={group.id}

                    title={group.title}

                    theme={group.theme}

                    members={group.members}

                />

            ))}


            {/* ================================= */}
            {/* UNVERGESSEN */}
            {/* ================================= */}

            {memorialMembers.length > 0 && (

                <section
                    className={styles.memorial}
                >


                    {/* ========================= */}
                    {/* MEMORIAL HEADER */}
                    {/* ========================= */}

                    <div
                        className={styles.memorialHeader}
                    >

                        <div
                            className={styles.memorialLine}
                        />


                        <div
                            className={styles.memorialTitle}
                        >

                            <span>
                                UNVERGESSEN
                            </span>


                            <small>
                                IN EHRENDEM GEDENKEN
                            </small>

                        </div>


                        <div
                            className={styles.memorialLine}
                        />

                    </div>


                    {/* ========================= */}
                    {/* MEMORIAL CARDS */}
                    {/* ========================= */}

                    <div
                        className={styles.memorialCards}
                    >

                        {memorialMembers.map(
                            member => (

                                <MemberCard

                                    key={member.id}

                                    compact

                                    {...mapMemberToCard(
                                        member
                                    )}

                                />

                            )
                        )}

                    </div>


                </section>

            )}


        </div>

    );

}