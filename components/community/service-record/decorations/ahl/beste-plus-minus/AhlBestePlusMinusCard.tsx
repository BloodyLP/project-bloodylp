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
 * AHL Beste Plus-Minus Bilanz Card
 *
 * ============================================
 *
 */

import Image from "next/image";

import styles from "./AhlBestePlusMinusCard.module.css";


/* ========================================= */
/* PROPS                                      */
/* ========================================= */

interface AhlBestePlusMinusCardProps {

    title: string;

    image: string;

    years: number[];

}


/* ========================================= */
/* COMPONENT                                  */
/* ========================================= */

export default function AhlBestePlusMinusCard({

    title,

    image,

    years,

}: AhlBestePlusMinusCardProps) {


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