/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * ClarenceSCampbellTrophyCard
 *
 * ============================================
 */

import Image from "next/image";

import styles from "./ClarenceSCampbellTrophyCard.module.css";


interface ClarenceSCampbellTrophyCardProps {

    title: string;

    image: string;

    years: number[];

}


export default function ClarenceSCampbellTrophyCard({

    title,

    image,

    years,

}: ClarenceSCampbellTrophyCardProps) {


    return (

        <article className={styles.card}>


            {/* ================================= */}
            {/* HEADER                            */}
            {/* ================================= */}

            <header className={styles.header}>

                <span className={styles.title}>

                    {title}

                </span>

            </header>


            {/* ================================= */}
            {/* TROPHY                            */}
            {/* ================================= */}

            <div className={styles.badge}>

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

            <footer className={styles.footer}>

                <h3 className={styles.footerTitle}>

                    AUSZEICHNUNGEN

                </h3>


                <div className={styles.years}>


                    {years.map((year) => (

                        <span

                            key={year}

                            className={styles.year}

                        >

                            {year}

                        </span>

                    ))}


                </div>

            </footer>


        </article>

    );

}