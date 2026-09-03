/**
 * ============================================
 *
 * BloodyArmy
 *
 * ============================================
 *
 * Project:
 *
 * BloodyArmy Website
 *
 * ============================================
 *
 * Component:
 *
 * AhlPoMeisteToreCard
 *
 * ============================================
 */

import Image from "next/image";

import styles from "./AhlPoMeisteToreCard.module.css";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface AhlPoMeisteToreCardProps {

    title: string;

    subtitle: string;

    image: string;

    years: number[];

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function AhlPoMeisteToreCard({

    title,

    subtitle,

    image,

    years,

}: AhlPoMeisteToreCardProps) {

    return (

        <article
            className={
                styles.card
            }
        >

            <header
                className={
                    styles.header
                }
            >

                <span
                    className={
                        styles.title
                    }
                >

                    {title}

                </span>

            </header>


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
                        title
                    }

                    fill

                    className={
                        styles.image
                    }

                    sizes="160px"

                />

            </div>


            <footer
                className={
                    styles.footer
                }
            >

                <h3
                    className={
                        styles.footerTitle
                    }
                >

                    {subtitle}

                </h3>


                <div
                    className={
                        styles.years
                    }
                >

                    {

                        years.map(

                            (year) => (

                                <span

                                    key={
                                        year
                                    }

                                    className={
                                        styles.year
                                    }

                                >

                                    {year}

                                </span>

                            )

                        )

                    }

                </div>

            </footer>

        </article>

    );

}