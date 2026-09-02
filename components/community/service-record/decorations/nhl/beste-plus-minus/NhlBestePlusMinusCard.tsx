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
 * NHL Beste Plus/Minus Bilanz Card
 *
 * Description:
 *
 * Darstellung der Auszeichnung
 * "Beste +/- Bilanz in der NHL".
 *
 * ============================================
 */

import Image from "next/image";

import styles from "./NhlBestePlusMinusCard.module.css";


interface NhlBestePlusMinusCardProps {

    title: string;

    image: string;

    years: number[];

}


export default function NhlBestePlusMinusCard({

    title,

    image,

    years,

}: NhlBestePlusMinusCardProps) {

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

                    NHL – BESTE +/- BILANZ

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