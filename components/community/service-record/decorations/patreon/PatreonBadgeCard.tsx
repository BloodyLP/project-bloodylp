/**
 * ============================================
 *
 * BloodyArmy
 *
 * ============================================
 *
 * Component:
 *
 * PatreonBadgeCard
 *
 * ============================================
 */

import Image from "next/image";

import styles from "./PatreonBadgeCard.module.css";


/* ========================================= */
/* PROPS                                      */
/* ========================================= */

interface PatreonBadgeCardProps {

    title: string;

    level: string;

    image: string;

    accent: string;

    accentLight: string;

    accentRgb: string;

}


/* ========================================= */
/* COMPONENT                                  */
/* ========================================= */

export default function PatreonBadgeCard({

    title,

    level,

    image,

    accent,

    accentLight,

    accentRgb,

}: PatreonBadgeCardProps) {

    return (

        <article

            className={
                styles.card
            }

            style={{

                ["--accent" as string]:
                    accent,

                ["--accent-light" as string]:
                    accentLight,

                ["--accent-rgb" as string]:
                    accentRgb,

            }}

        >

            {/* HEADER */}

            <header

                className={
                    styles.header
                }

            >

                <h3

                    className={
                        styles.title
                    }

                >

                    PATREON BADGE

                </h3>

            </header>


            {/* BADGE */}

            <div

                className={
                    styles.badge
                }

            >

                <Image

                    src={
                        image
                    }

                    alt={
                        `${title} Patreon Badge`
                    }

                    width={
                        120
                    }

                    height={
                        120
                    }

                    className={
                        styles.image
                    }

                />

            </div>


            {/* FOOTER */}

            <footer

                className={
                    styles.footer
                }

            >

                <div

                    className={
                        styles.levelCircle
                    }

                >

                    <span

                        className={
                            styles.level
                        }

                    >

                        {level}

                    </span>

                </div>


                <span

                    className={
                        styles.footerTitle
                    }

                >

                    {title}

                </span>

            </footer>

        </article>

    );

}