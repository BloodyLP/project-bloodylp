"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./MemberCard.module.css";

import { badgeThemes } from "./badgeThemes";


type MemberCardProps = {

    id: string;

    armyId: string;

    name: string;

    avatar: string;

    joinedLabel: string;


    rank: {

        title: string;

        image: string;

    };


    badge: {

        title: string;

        theme: string;

    };


    prestige?: {

        level: number;

        key: string | null;

        title: string | null;

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

}: MemberCardProps) {



    let displayTitle = badge.title;

    let displayTheme = badge.theme;



    /*
        Founder bleibt Founder
    */

    if (badge.title !== "FOUNDER" && prestige?.level && prestige.level > 0) {


        displayTitle = `PRESTIGE ${prestige.level}`;

        displayTheme = prestige.key ?? badge.theme;


    }



    const theme = badgeThemes[displayTheme];



    return (

        <motion.article

            className={styles.card}


            initial={{

                opacity:0,

                y:40,

            }}


            whileInView={{

                opacity:1,

                y:0,

            }}


            viewport={{

                once:true,

                amount:.2,

            }}


            transition={{

                duration:.6,

            }}


            whileHover={{

                y:-8,

            }}

        >



            {/* HEADER */}


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





            {/* AVATAR */}


            <div className={styles.avatarWrapper}>


                <Image

                    src={avatar}

                    alt={name}

                    width={240}

                    height={240}

                    className={styles.avatar}

                />


            </div>





            {/* NAME */}


            <div className={styles.identity}>


                <h1 className={styles.name}>

                    {name}

                </h1>





                {/* STATUS BADGE */}


                <div

                    className={styles.badge}


                    style={{


                        background:

                            theme.background,


                        borderColor:

                            theme.border,


                        color:

                            theme.text,


                        boxShadow:

                            `0 0 25px ${theme.glow}`,


                    }}

                >


                    <span className={styles.badgeTitle}>

                        {displayTitle}

                    </span>


                </div>



            </div>





            {/* FOOTER */}


            <footer className={styles.footer}>


                <div className={styles.joined}>

                    {joinedLabel}

                </div>




                <Link

                    href={`/community/service-record?id=${id}`}

                    className={styles.button}

                >

                    PERSONALAKTE ÖFFNEN

                </Link>


            </footer>




        </motion.article>

    );

}