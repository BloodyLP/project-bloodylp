"use client";

import Image from "next/image";

import styles from "./DecorationCard.module.css";

import { useDecoration } from "./DecorationContext";

import {
    DECORATION_CATEGORIES,
    DECORATION_CLASSIFICATIONS,
    DECORATION_ISSUED,
    DECORATION_RARITIES,
    DECORATION_LABELS,
} from "./constants";

export default function DecorationInspector() {

    const {
        selectedDecoration,
    } = useDecoration();

    if (!selectedDecoration) {

        return (

            <aside className={styles.inspector}>

                <div className={styles.inspectorEmpty}>

                    <span className={styles.inspectorHint}>

                        {DECORATION_LABELS.empty}

                    </span>

                </div>

            </aside>

        );

    }

    return (

        <aside
            className={`${styles.inspector} ${styles[selectedDecoration.rarity]}`}
        >

            <header className={styles.inspectorHeader}>

                <span className={styles.category}>

                    {
                        DECORATION_CATEGORIES[
                            selectedDecoration.category
                        ]
                    }

                </span>

                <span className={styles.code}>

                    {selectedDecoration.code}

                </span>

            </header>

            <div className={styles.inspectorBadge}>

                <Image
                    src={selectedDecoration.image}
                    alt={selectedDecoration.title}
                    fill
                    className={styles.image}
                />

            </div>

            <section className={styles.inspectorContent}>

                <h2 className={styles.inspectorTitle}>

                    {selectedDecoration.title}

                </h2>

                <span className={styles.inspectorSubtitle}>

                    {selectedDecoration.subtitle}

                </span>

                <div className={styles.summaryRarity}>

                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>

                    <span className={styles.rarityText}>

                        {
                            DECORATION_RARITIES[
                                selectedDecoration.rarity
                            ]
                        }

                    </span>

                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>

                </div>

            </section>

            <section className={styles.meta}>

                <div className={styles.metaItem}>

                    <span className={styles.metaLabel}>

                        {DECORATION_LABELS.classification}

                    </span>

                    <strong className={styles.metaValue}>

                        {
                            DECORATION_CLASSIFICATIONS[
                                selectedDecoration.classification
                            ]
                        }

                    </strong>

                </div>

                <div className={styles.metaItem}>

                    <span className={styles.metaLabel}>

                        {DECORATION_LABELS.rarity}

                    </span>

                    <strong className={styles.metaValue}>

                        {
                            DECORATION_RARITIES[
                                selectedDecoration.rarity
                            ]
                        }

                    </strong>

                </div>

                <div className={styles.metaItem}>

                    <span className={styles.metaLabel}>

                        {DECORATION_LABELS.issued}

                    </span>

                    <strong className={styles.metaValue}>

                        {
                            DECORATION_ISSUED[
                                selectedDecoration.issued
                            ]
                        }

                    </strong>

                </div>

            </section>

            <section className={styles.requirements}>

                <span className={styles.requirementsTitle}>

                    {DECORATION_LABELS.description}

                </span>

                <p className={styles.description}>

                    {selectedDecoration.description}

                </p>

            </section>

            <section className={styles.requirements}>

                <span className={styles.requirementsTitle}>

                    {DECORATION_LABELS.requirements}

                </span>

                <ul className={styles.requirementsList}>

                    {selectedDecoration.requirements.map(

                        (requirement) => (

                            <li
                                key={requirement}
                                className={styles.requirement}
                            >

                                {requirement}

                            </li>

                        )

                    )}

                </ul>

            </section>

        </aside>

    );

}