/**
 * ============================================
 *
 * BloodyArmy
 *
 * ============================================
 *
 * Component:
 *
 * SubBadgeCard
 *
 * Description:
 *
 * Gemeinsame Karte für alle SUB-Badges.
 *
 * Aufbau:
 *
 * SUB BADGE
 *
 * Badge-Bild
 *
 * [ 50 ]
 * MONATE
 *
 * ============================================
 */

import Image from "next/image";

import styles from "./SubBadgeCard.module.css";


/* ========================================= */
/* PROPS                                      */
/* ========================================= */

interface SubBadgeCardProps {

    /**
     * Anzahl der SUB-Monate
     */
    months: number;


    /**
     * Pfad zum Badge-Bild
     */
    image: string;


    /**
     * Hauptfarbe des Badges
     */
    accent: string;


    /**
     * Helle Akzentfarbe
     */
    accentLight: string;


    /**
     * RGB-Wert der Badge-Farbe
     */
    accentRgb: string;

}


/* ========================================= */
/* COMPONENT                                  */
/* ========================================= */

export default function SubBadgeCard({

    months,

    image,

    accent,

    accentLight,

    accentRgb,

}: SubBadgeCardProps) {

    return (

        <article

            className={
                styles.card
            }

            style={{

                ["--accent" as any]:
                    accent,

                ["--accent-light" as any]:
                    accentLight,

                ["--accent-rgb" as any]:
                    accentRgb,

            }}

        >


            {/* ================================= */}
            {/* HEADER                            */}
            {/* ================================= */}

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

                    SUB BADGE

                </h3>

            </header>


            {/* ================================= */}
            {/* BADGE IMAGE                       */}
            {/* ================================= */}

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
                        `${months} Monate SUB Badge`
                    }

                    width={
                        125
                    }

                    height={
                        125
                    }

                    className={
                        styles.image
                    }

                />

            </div>


            {/* ================================= */}
            {/* MONTH BADGE                       */}
            {/* ================================= */}

            <footer

                className={
                    styles.footer
                }

            >

                <div

                    className={
                        styles.monthWrapper
                    }

                >


                    {/* ========================= */}
                    {/* LEFT LINE                 */}
                    {/* ========================= */}

                    <div

                        className={
                            styles.monthLine
                        }

                    />


                    {/* ========================= */}
                    {/* MONTH CIRCLE              */}
                    {/* ========================= */}

                    <div

                        className={
                            styles.monthCircle
                        }

                    >

                        <span

                            className={
                                styles.monthNumber
                            }

                        >

                            {months}

                        </span>


                        <span

                            className={
                                styles.monthLabel
                            }

                        >

                            MONATE

                        </span>

                    </div>


                    {/* ========================= */}
                    {/* RIGHT LINE                */}
                    {/* ========================= */}

                    <div

                        className={
                            styles.monthLine
                        }

                    />

                </div>

            </footer>


        </article>

    );

}