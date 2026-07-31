"use client";

import styles from "./DecorationHeader.module.css";

interface DecorationHeaderProps {

    total: number;

    unlocked: number;

}

export default function DecorationHeader({

    total,

    unlocked,

}: DecorationHeaderProps) {

    const locked = total - unlocked;

    const completion =
        total === 0
            ? 0
            : Math.round((unlocked / total) * 100);

    return (

        <header className={styles.header}>

            <div className={styles.left}>

                <span className={styles.overline}>

                    MILITARY ARCHIVE

                </span>

                <h2 className={styles.title}>

                    SERVICE RECORD

                </h2>

                <span className={styles.subtitle}>

                    DECORATIONS

                </span>

            </div>

            <div className={styles.right}>

                <div className={styles.stats}>

                    <div className={styles.stat}>

                        <span>Total</span>

                        <strong>{total}</strong>

                    </div>

                    <div className={styles.stat}>

                        <span>Freigeschaltet</span>

                        <strong>{unlocked}</strong>

                    </div>

                    <div className={styles.stat}>

                        <span>Gesperrt</span>

                        <strong>{locked}</strong>

                    </div>

                    <div className={styles.stat}>

                        <span>Fortschritt</span>

                        <strong>{completion}%</strong>

                    </div>

                </div>

                <div className={styles.progress}>

                    <div
                        className={styles.progressFill}
                        style={{
                            width: `${completion}%`,
                        }}
                    />

                </div>

            </div>

        </header>

    );

}