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
 * RichardFCanningTrophyCard
 *
 * Description:
 *
 * Darstellung der Richard-F.-Canning-Trophy.
 *
 * ============================================
 */

import Image from "next/image";

import styles from "./RichardFCanningTrophyCard.module.css";


interface RichardFCanningTrophyCardProps {

    title: string;

    image: string;

    years: number[];

}


export default function RichardFCanningTrophyCard({

    title,

    image,

    years,

}: RichardFCanningTrophyCardProps) {

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