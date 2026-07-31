/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * StanleyCupCard
 *
 * ============================================
 */

import Image from "next/image";

import styles from "./StanleyCupCard.module.css";

interface StanleyCupCardProps {

    code: string;

    title: string;

    image: string;

    years: number[];

}

export default function StanleyCupCard({

    code,

    title,

    image,

    years,

}: StanleyCupCardProps) {

    return (

        <article className={styles.card}>

            <header className={styles.header}>

                <span className={styles.title}>
                    {title}
                </span>

                <span className={styles.code}>
                    {code}
                </span>

            </header>

            <div className={styles.badge}>

                <Image
                    src={image}
                    alt={title}
                    fill
                    className={styles.image}
                    sizes="160px"
                />

            </div>

            <footer className={styles.footer}>

                <h3 className={styles.footerTitle}>
                    STANLEY-CUP SIEGE
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