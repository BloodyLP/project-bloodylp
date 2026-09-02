/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * NHL Meiste Tore Card
 *
 * ============================================
 */

import Image from "next/image";

import styles from "./NhlMeisteToreCard.module.css";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface NhlMeisteToreCardProps {

    title: string;

    image: string;

    years: number[];

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function NhlMeisteToreCard({

    title,

    image,

    years,

}: NhlMeisteToreCardProps) {

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

                    AUSZEICHNUNGEN

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