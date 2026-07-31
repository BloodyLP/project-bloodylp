import styles from "./DecorationCard.module.css";

import { DECORATION_RARITIES } from "./constants";

import type { DecorationRarity } from "./types";

interface CardDetailsProps {

    rarity: DecorationRarity;

    classification: string;

    issued: string;

    description: string;

    requirements: string[];

}

export default function CardDetails({

    rarity,

    classification,

    issued,

    description,

    requirements,

}: CardDetailsProps) {

    return (

        <section className={styles.details}>

            <div className={styles.meta}>

                <div className={styles.metaItem}>

                    <span className={styles.metaLabel}>
                        CLASSIFICATION
                    </span>

                    <strong className={styles.metaValue}>
                        {classification}
                    </strong>

                </div>

                <div className={styles.metaItem}>

                    <span className={styles.metaLabel}>
                        RARITY
                    </span>

                    <strong className={styles.metaValue}>
                        {DECORATION_RARITIES[rarity].toUpperCase()}
                    </strong>

                </div>

                <div className={styles.metaItem}>

                    <span className={styles.metaLabel}>
                        ISSUED
                    </span>

                    <strong className={styles.metaValue}>
                        {issued}
                    </strong>

                </div>

            </div>

            <p className={styles.description}>
                {description}
            </p>

            <div className={styles.requirements}>

                <span className={styles.requirementsTitle}>
                    REQUIREMENTS
                </span>

                <ul className={styles.requirementsList}>

                    {requirements.map((requirement) => (

                        <li
                            key={requirement}
                            className={styles.requirement}
                        >
                            {requirement}
                        </li>

                    ))}

                </ul>

            </div>

        </section>

    );

}