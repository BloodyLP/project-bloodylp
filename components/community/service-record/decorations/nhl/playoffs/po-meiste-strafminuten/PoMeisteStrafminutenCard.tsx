/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Component:
 *
 * NHL Playoffs
 * Meiste Strafminuten Card
 *
 * ============================================
 */

import Image from "next/image";

import styles from "./PoMeisteStrafminutenCard.module.css";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface PoMeisteStrafminutenCardProps {

    title:
        string;

    subtitle:
        string;

    image:
        string;

    years:
        number[];

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function PoMeisteStrafminutenCard({

    title,

    subtitle,

    image,

    years,

}: PoMeisteStrafminutenCardProps) {


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


                <span

                    className={
                        styles.subtitle
                    }

                >

                    {subtitle}

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
                        `${title} – ${subtitle}`
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