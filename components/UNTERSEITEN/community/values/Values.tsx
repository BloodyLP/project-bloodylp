"use client";

import styles from "./Values.module.css";

import ValuesHeader from "./ValuesHeader";
import ValuesGrid from "./ValuesGrid";

export default function Values() {
    return (
        <section className={styles.section}>

            <div className={styles.container}>

                <ValuesHeader />

                <ValuesGrid />

            </div>

        </section>
    );
}