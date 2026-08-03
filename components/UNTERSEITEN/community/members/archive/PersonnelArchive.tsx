"use client";


import ArchiveFolder from "./ArchiveFolder";

import { getArchiveGroups } from "./archiveData";

import styles from "./PersonnelArchive.module.css";



export default function PersonnelArchive(){


    const groups = getArchiveGroups();



    return (

        <div className={styles.archive}>


            {groups.map((group)=>(


                <ArchiveFolder


                    key={group.id}


                    title={group.title}


                    theme={group.theme}


                    members={group.members}


                />


            ))}



        </div>

    );

}