/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * NHL Playoffs Topscorer Card
 *
 * ============================================
 */

import Image from "next/image";

import styles from "./NhlPoTopscorerCard.module.css";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface NhlPoTopscorerCardProps {

    title: string;

    subtitle: string;

    image: string;

    years: number[];

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function NhlPoTopscorerCard({

    title,

    subtitle,

    image,

    years,

}: NhlPoTopscorerCardProps) {

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
                        `${subtitle} ${title}`
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