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
 * RobertWClarkeTrophyCard
 *
 * Description:
 *
 * Darstellung der Robert-W.-Clarke-Trophy.
 *
 * ============================================
 */

import Image from "next/image";

import styles from "./RobertWClarkeTrophyCard.module.css";


interface RobertWClarkeTrophyCardProps {

    title: string;

    image: string;

    years: number[];

}


export default function RobertWClarkeTrophyCard({

    title,

    image,

    years,

}: RobertWClarkeTrophyCardProps) {

    return (

        <article
            className={styles.card}
        >

            {/* ================================= */}
            {/* HEADER                            */}
            {/* ================================= */}

            <header
                className={styles.header}
            >

                <span
                    className={styles.title}
                >

                    {title}

                </span>

            </header>


            {/* ================================= */}
            {/* TROPHY                            */}
            {/* ================================= */}

            <div
                className={styles.badge}
            >

                <Image

                    src={image}

                    alt={title}

                    fill

                    className={styles.image}

                    sizes="160px"

                />

            </div>


            {/* ================================= */}
            {/* FOOTER                            */}
            {/* ================================= */}

            <footer
                className={styles.footer}
            >

                <h3
                    className={styles.footerTitle}
                >

                    AUSZEICHNUNGEN

                </h3>


                <div
                    className={styles.years}
                >

                    {

                        years.map((year) => (

                            <span

                                key={year}

                                className={styles.year}

                            >

                                {year}

                            </span>

                        ))

                    }

                </div>

            </footer>

        </article>

    );

}