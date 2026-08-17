"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import MemberCardBack from "./MemberCardBack";
import styles from "./MemberCard.module.css";
import { badgeThemes } from "./badgeThemes";

import {
    getTheme,
    createThemeVariables,
} from "@/lib/service-record/theme";

import type {
    OrganizationId,
} from "@/data/service-record/organizations";

import type {
    SkaterCareerStatsData,
    GoalieCareerStatsData,
    DualCareerStatsData,
} from "./stats/types";


/* ========================================= */
/* PROPS */
/* ========================================= */

type MemberCardProps = {

    id: string;

    armyId: string;

    organization: OrganizationId;

    name: string;

    avatar: string;

    joinedLabel: string;

    compact?: boolean;

    rank: {
        title: string;
        image: string;
    };

    badge: {
        title: string;
        subtitle?: string;
        theme: string;
    };

    prestige?: {
        level: number;
        key: string | null;
        title: string | null;
    };

    stats?:
        | SkaterCareerStatsData
        | GoalieCareerStatsData
        | DualCareerStatsData;

    playerType:
        | "skater"
        | "goalie"
        | "dual";

    dualRole?: boolean;

    profile: {
        position: string;
        number: string;
    };

};


/* ========================================= */
/* COMPONENT */
/* ========================================= */

export default function MemberCard({

    id,

    armyId,

    organization,

    name,

    avatar,

    joinedLabel,

    rank,

    badge,

    prestige,

    stats,

    playerType,

    dualRole = false,

    profile,

    compact = false,

}: MemberCardProps) {


    /* ========================================= */
    /* STATE */
    /* ========================================= */

    const [flipped, setFlipped] =

        useState(false);


    const [isMobile, setIsMobile] =

        useState(false);


    /* ========================================= */
    /* MOBILE DETECTION */
    /* ========================================= */

    useEffect(() => {

        const mediaQuery =

            window.matchMedia(

                "(max-width: 700px)"

            );


        const updateMobile = () => {

            setIsMobile(

                mediaQuery.matches

            );

        };


        updateMobile();


        mediaQuery.addEventListener(

            "change",

            updateMobile

        );


        return () => {

            mediaQuery.removeEventListener(

                "change",

                updateMobile

            );

        };

    }, []);


    /* ========================================= */
    /* BADGE / PRESTIGE */
    /* ========================================= */

    let displayTitle = badge.title;

    let displayTheme = badge.theme;


    if (

        badge.title !== "FOUNDER"

        &&

        prestige?.level

        &&

        prestige.level > 0

    ) {

        displayTitle =

            `PRESTIGE ${prestige.level}`;

        displayTheme =

            prestige.key ?? badge.theme;

    }


    const theme =

        badgeThemes[displayTheme];


    const organizationTheme =

        getTheme(organization);


    /* ========================================= */
    /* THEME */
    /* ========================================= */

    const cardStyle =

        createThemeVariables(

            organizationTheme

        );


    /* ========================================= */
    /* FRONT */
    /* ========================================= */

    const frontCard = (

        <article

            className={

                compact

                    ? `${styles.card} ${styles.compact}`

                    : `${styles.card} ${styles.founder}`

            }

            style={cardStyle}

        >

            {/* ================================= */}
            {/* HEADER */}
            {/* ================================= */}

            <header

                className={styles.header}

            >

                <div

                    className={styles.rankArea}

                >

                    <Image

                        src={rank.image}

                        alt={rank.title}

                        width={70}

                        height={70}

                        className={

                            styles.rankImage

                        }

                    />

                    <div

                        className={

                            styles.rankContent

                        }

                    >

                        <h2

                            className={

                                styles.rankTitle

                            }

                        >

                            {rank.title}

                        </h2>

                    </div>

                </div>


                <div

                    className={styles.armyId}

                >

                    {armyId}

                </div>

            </header>


            {/* ================================= */}
            {/* AVATAR */}
            {/* ================================= */}

            <div

                className={

                    styles.avatarWrapper

                }

            >

                <Image

                    src={avatar}

                    alt={name}

                    width={280}

                    height={280}

                    className={styles.avatar}

                />

            </div>


            {/* ================================= */}
            {/* IDENTITY */}
            {/* ================================= */}

            <div

                className={styles.identity}

            >

                <h1

                    className={styles.name}

                >

                    {name}

                </h1>


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

                    <span

                        className={

                            styles.badgeTitle

                        }

                    >

                        {displayTitle}

                    </span>

                </div>

            </div>


            {/* ================================= */}
            {/* FOOTER */}
            {/* ================================= */}

            <footer

                className={styles.footer}

            >

                <div

                    className={styles.joined}

                >

                    {joinedLabel}

                </div>


                <button

                    type="button"

                    className={

                        styles.actionButton

                    }

                    onClick={() =>

                        setFlipped(true)

                    }

                >

                    KARRIERE-STATISTIKEN ÖFFNEN

                </button>


                <Link

                    href={

                        `/community/service-record?id=${id}`

                    }

                    className={

                        styles.actionButton

                    }

                    onClick={() => {

                        sessionStorage.setItem(

                            "communityScroll",

                            String(

                                window.scrollY

                            )

                        );


                        sessionStorage.setItem(

                            "selectedMember",

                            id

                        );

                    }}

                >

                    SERVICE RECORD ÖFFNEN

                </Link>

            </footer>

        </article>

    );


    /* ========================================= */
    /* BACK */
    /* ========================================= */

    const backCard = (

        <div

            className={

                playerType === "goalie"

                    ? `${styles.back} ${styles.goalieBack}`

                    : styles.back

            }

        >

            <MemberCardBack

                name={name}

                armyId={armyId}

                organization={organization}

                stats={stats}

                playerType={playerType}

                dualRole={dualRole}

                profile={profile}

                onBack={() =>

                    setFlipped(false)

                }

            />

        </div>

    );


    /* ========================================= */
    /* MOBILE */
    /* ========================================= */

    if (isMobile) {

        return (

            <div

                className={

                    compact

                        ? `${styles.flipContainer} ${styles.compactContainer} ${styles.mobileCard}`

                        : `${styles.flipContainer} ${styles.mobileCard}`

                }

            >

                {!flipped

                    ? frontCard

                    : backCard

                }

            </div>

        );

    }


    /* ========================================= */
    /* DESKTOP */
    /* ========================================= */

    return (

        <div

            className={

                compact

                    ? `${styles.flipContainer} ${styles.compactContainer}`

                    : styles.flipContainer

            }

        >

            <motion.div

                className={styles.flipInner}

                initial={false}

                animate={{

                    rotateY:

                        flipped

                            ? 180

                            : 0,

                }}

                transition={{

                    duration:0.7,

                    ease:"easeInOut",

                }}

            >

                {frontCard}

                {backCard}

            </motion.div>

        </div>

    );

}