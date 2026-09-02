import Image from "next/image";

import styles from "./NhlPoBestePlusMinusCard.module.css";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface NhlPoBestePlusMinusCardProps {

    title: string;

    image: string;

    years: number[];

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function NhlPoBestePlusMinusCard({

    title,

    image,

    years,

}: NhlPoBestePlusMinusCardProps) {


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

                    NHL PLAYOFFS

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