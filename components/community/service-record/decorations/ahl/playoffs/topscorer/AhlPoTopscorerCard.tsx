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
 * AhlPoTopscorerCard
 *
 * ============================================
 */

import Image from "next/image";

import styles from "./AhlPoTopscorerCard.module.css";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface AhlPoTopscorerCardProps {

    title: string;

    subtitle: string;

    image: string;

    years: number[];

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function AhlPoTopscorerCard({

    title,

    subtitle,

    image,

    years,

}: AhlPoTopscorerCardProps) {

    return (

        <article
            className={
                styles.card
            }
        >

            {/* ================================= */}
            {/* HEADER                            */}
            {/* ================================= */}

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


            {/* ================================= */}
            {/* BADGE                             */}
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
                        title
                    }

                    fill

                    className={
                        styles.image
                    }

                    sizes="160px"

                />

            </div>


            {/* ================================= */}
            {/* FOOTER                            */}
            {/* ================================= */}

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