"use client";

import { useEffect } from "react";

import styles from "./Members.module.css";

import MembersHeader from "./MembersHeader";

import FounderCard from "./FounderCard";

import PersonnelArchive from "./archive/PersonnelArchive";

export default function Members(){

    useEffect(()=>{

        const scrollPosition = sessionStorage.getItem(
            "communityScroll"
        );

        if(scrollPosition){

            requestAnimationFrame(()=>{

                window.scrollTo({

                    top:Number(scrollPosition),

                    behavior:"instant"

                });

                sessionStorage.removeItem(
                    "communityScroll"
                );

            });

        }

    },[]);

    return(

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