"use client";

import styles from "./DecorationToolbar.module.css";

export default function DecorationToolbar() {

    return (

        <section className={styles.toolbar}>

            <div className={styles.left}>

                <button className={`${styles.filter} ${styles.active}`}>
                    Alle
                </button>

                <button className={styles.filter}>
                    Prestige
                </button>

                <button className={styles.filter}>
                    Orden
                </button>

                <button className={styles.filter}>
                    Medaillen
                </button>

                <button className={styles.filter}>
                    Abzeichen
                </button>

                <button className={styles.filter}>
                    Erfolge
                </button>

            </div>

            <div className={styles.right}>

                <input
                    type="text"
                    placeholder="Auszeichnung suchen..."
                    className={styles.search}
                />

            </div>

        </section>

    );

}