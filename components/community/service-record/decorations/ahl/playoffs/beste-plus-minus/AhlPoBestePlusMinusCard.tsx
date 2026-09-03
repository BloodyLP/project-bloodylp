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
 * AhlPoBestePlusMinusCard
 *
 * ============================================
 */

import Image from "next/image";

import styles from "./AhlPoBestePlusMinusCard.module.css";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface AhlPoBestePlusMinusCardProps {

    title: string;

    subtitle: string;

    image: string;

    years: number[];

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function AhlPoBestePlusMinusCard({

    title,

    subtitle,

    image,

    years,

}: AhlPoBestePlusMinusCardProps) {

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