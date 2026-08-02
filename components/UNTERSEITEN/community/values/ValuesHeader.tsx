"use client";

import styles from "./ValuesHeader.module.css";

export default function ValuesHeader() {
    return (
        <header className={styles.header}>

            <span className={styles.overline}>
                BLOODYARMY
            </span>

            <h2 className={styles.title}>
                Unsere <span>Werte</span>
            </h2>

            <p className={styles.description}>
                Was uns verbindet, ist mehr als Gaming.
                Es sind gemeinsame Erlebnisse, gegenseitiger Respekt
                und eine Gemeinschaft, in der jeder seinen Platz finden kann.
            </p>

        </header>
    );
}