import styles from "./DecorationCard.module.css";

import { DECORATION_RARITIES } from "./constants";

import type { DecorationRarity } from "./types";

interface CardSummaryProps {

    title: string;

    subtitle: string;

    rarity: DecorationRarity;

}

export default function CardSummary({

    title,

    subtitle,

    rarity,

}: CardSummaryProps) {

    return (

        <section className={styles.summary}>

            <h3 className={styles.summaryTitle}>

                {title}

            </h3>

            <span className={styles.summarySubtitle}>

                {subtitle}

            </span>

            <div className={styles.summaryDivider} />

            <footer className={styles.summaryFooter}>

                <span className={styles.summaryLine} />

                <span className={styles.summaryRarity}>

                    {DECORATION_RARITIES[rarity].toUpperCase()}

                </span>

                <span className={styles.summaryLine} />

            </footer>

        </section>

    );

}