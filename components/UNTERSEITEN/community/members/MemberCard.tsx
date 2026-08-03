"use client";


import Image from "next/image";

import Link from "next/link";

import { useState } from "react";

import { motion } from "framer-motion";


import MemberCardBack from "./MemberCardBack";

import styles from "./MemberCard.module.css";


import { badgeThemes } from "./badgeThemes";




type MemberCardProps = {


    id:string;

    armyId:string;

    name:string;

    avatar:string;

    joinedLabel:string;


    compact?:boolean;


    rank:{

        title:string;

        image:string;

    };


    badge:{

        title:string;

        subtitle?:string;

        theme:string;

    };


    prestige?:{

        level:number;

        key:string|null;

        title:string|null;

    };


    stats?:any;


    profile?:{

        position:string;

        number:string;

    };


};







export default function MemberCard({


    id,

    armyId,

    name,

    avatar,

    joinedLabel,

    rank,

    badge,

    prestige,

    stats,

    profile,

    compact=false


}:MemberCardProps){



    const [flipped,setFlipped]=useState(false);





    let displayTitle = badge.title;

    let displayTheme = badge.theme;





    if(

        badge.title !== "FOUNDER"

        &&

        prestige?.level

        &&

        prestige.level > 0

    ){

        displayTitle=`PRESTIGE ${prestige.level}`;

        displayTheme=prestige.key ?? badge.theme;

    }






    const theme=badgeThemes[displayTheme];






    return (



        <div

    className={

        compact

        ?

        `${styles.flipContainer} ${styles.compactContainer}`

        :

        styles.flipContainer

    }

>





            <motion.div



                className={styles.flipInner}



                animate={{

                    rotateY: flipped ? 180 : 0

                }}



                transition={{

                    duration:.7,

                    ease:"easeInOut"

                }}



            >







                <article

    className={

        compact

        ?

        `${styles.card} ${styles.compact}`

        :

        `${styles.card} ${styles.founder}`

    }

>




                    <header className={styles.header}>


                        <div className={styles.rankArea}>


                            <Image

                                src={rank.image}

                                alt={rank.title}

                                width={70}

                                height={70}

                                className={styles.rankImage}

                            />


                            <div className={styles.rankContent}>


                                <h2 className={styles.rankTitle}>

                                    {rank.title}

                                </h2>


                            </div>


                        </div>




                        <div className={styles.armyId}>

                            {armyId}

                        </div>



                    </header>








                    <div className={styles.avatarWrapper}>


                        <Image

                            src={avatar}

                            alt={name}

                            width={280}

                            height={280}

                            className={styles.avatar}

                        />


                    </div>







                    <div className={styles.identity}>


                        <h1 className={styles.name}>

                            {name}

                        </h1>





                        <div


                            className={styles.badge}


                            style={{

                                background:theme.background,

                                borderColor:theme.border,

                                color:theme.text,

                                boxShadow:

                                    `0 0 25px ${theme.glow}`

                            }}

                        >


                            <span className={styles.badgeTitle}>

                                {displayTitle}

                            </span>


                        </div>



                    </div>







                    <footer className={styles.footer}>


                        <div className={styles.joined}>

                            {joinedLabel}

                        </div>





                        <button

                            type="button"

                            className={styles.actionButton}

                            onClick={()=>setFlipped(true)}

                        >

                            KARRIERE-STATISTIKEN ÖFFNEN


                        </button>







                        <Link

                            href={`/community/service-record?id=${id}`}

                            className={styles.actionButton}

                        >

                            SERVICE RECORD ÖFFNEN


                        </Link>



                    </footer>





                </article>








                <div className={styles.back}>


                    <MemberCardBack


                        name={name}

                        armyId={armyId}

                        stats={stats}

                        profile={profile}

                        onBack={()=>setFlipped(false)}

                    />



                </div>






            </motion.div>




        </div>


    );


}