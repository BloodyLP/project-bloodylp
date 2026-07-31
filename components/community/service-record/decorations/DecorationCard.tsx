/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * DecorationCard
 *
 * Description:
 * Universelle Darstellung einer Auszeichnung
 * innerhalb des Service Records.
 *
 * ============================================
 */

import Image from "next/image";

import styles from "./DecorationCard.module.css";

import {
    DECORATION_CATEGORIES,
    DECORATION_CLASSIFICATIONS,
} from "./constants";

import type {
    DecorationCategory,
    DecorationClassification,
    DecorationRarity,
} from "./types";

interface DecorationCardProps {

    code: string;

    category: DecorationCategory;

    rarity: DecorationRarity;

    classification: DecorationClassification;

    issued: string;

    title: string;

    subtitle: string;

    description: string;

    requirements: string[];

    image: string;

}

export default function DecorationCard({

    code,

    category,

    rarity,

    classification,

    image,

    title,

    subtitle,

}: DecorationCardProps) {

    return (

        <article
            className={`${styles.card} ${styles[rarity]}`}
        >

            <header className={styles.header}>

                <span className={styles.category}>
                    {DECORATION_CATEGORIES[category]}
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
                    sizes="96px"
                    className={styles.image}
                />

            </div>

            <footer className={styles.footer}>

                <h3 className={styles.title}>
                    {title}
                </h3>

                <span className={styles.subtitle}>
                    {subtitle}
                </span>

                <span className={styles.classification}>
                    {DECORATION_CLASSIFICATIONS[classification]}
                </span>

            </footer>

        </article>

    );

}