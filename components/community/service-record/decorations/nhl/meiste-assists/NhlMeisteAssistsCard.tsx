/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 *
 * BloodyArmy Website
 *
 * Component:
 *
 * NHL Meiste Assists Card
 *
 * Description:
 *
 * Darstellung der Auszeichnung
 * "Meiste Assists in der NHL".
 *
 * ============================================
 */

import Image from "next/image";

import styles from "./NhlMeisteAssistsCard.module.css";


interface NhlMeisteAssistsCardProps {

    title: string;

    image: string;

    years: number[];

}


export default function NhlMeisteAssistsCard({

    title,

    image,

    years,

}: NhlMeisteAssistsCardProps) {

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

                    NHL – MEISTE ASSISTS

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