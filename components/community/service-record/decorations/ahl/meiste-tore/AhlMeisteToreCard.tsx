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
 * AHL Meiste Tore Card
 *
 * ============================================
 *
 */

import Image from "next/image";

import styles from "./AhlMeisteToreCard.module.css";


/* ========================================= */
/* PROPS                                      */
/* ========================================= */

interface AhlMeisteToreCardProps {

    title: string;

    image: string;

    years: number[];

}


/* ========================================= */
/* COMPONENT                                  */
/* ========================================= */

export default function AhlMeisteToreCard({

    title,

    image,

    years,

}: AhlMeisteToreCardProps) {


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