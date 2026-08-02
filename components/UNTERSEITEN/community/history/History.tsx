"use client";

import styles from "./History.module.css";

import HistoryHeader from "./HistoryHeader";
import Timeline from "./Timeline";

export default function History() {
    return (
        <section className={styles.history}>

            <div className={styles.container}>

                <HistoryHeader />

                <Timeline />

            </div>

        </section>
    );
}