"use client";


import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";


import MemberCard from "../MemberCard";


import { badgeThemes } from "../badgeThemes";


import {

    mapMemberToCard

} from "../memberMapper";


import styles from "./PersonnelArchive.module.css";







type ArchiveFolderProps = {


    title:string;

    theme:string;

    members:any[];


};








export default function ArchiveFolder({


    title,

    theme,

    members,


}:ArchiveFolderProps){



    const [open,setOpen] = useState(false);





    const color =


        badgeThemes[theme]?.border

        ??

        "#A3E635";







    return (



        <section


            className={styles.folder}



            style={{


                borderColor:

                    `${color}55`


            }}



        >






            <button



                className={styles.folderHeader}



                onClick={()=>setOpen(!open)}



                style={{


                    borderLeft:

                        `4px solid ${color}`


                }}



            >



                <span className={styles.arrow}>


                    {open ? "▼" : "▶"}


                </span>





                <span className={styles.folderTitle}>


                    {title}


                </span>





                <span


                    className={styles.folderCount}



                    style={{


                        color:color


                    }}



                >



                    {members.length

                        .toString()

                        .padStart(2,"0")

                    }


                    {" "}MEMBER



                </span>





            </button>









            <AnimatePresence>



                {open && (



                    <motion.div



                        className={styles.folderContent}



                        initial={{


                            opacity:0,


                            height:0,


                        }}



                        animate={{


                            opacity:1,


                            height:"auto",


                        }}



                        exit={{


                            opacity:0,


                            height:0,


                        }}



                        transition={{


                            duration:.35,


                        }}



                    >





                        {


                            members.map(

                                member => (



                                    <MemberCard



                                        key={member.id}



                                        compact



                                        {...mapMemberToCard(member)}



                                    />



                                )


                            )


                        }





                    </motion.div>



                )}



            </AnimatePresence>





        </section>



    );


}