"use client";

import styles from "./Timeline.module.css";

import { historyEntries } from "./data";
import TimelineEntry from "./TimelineEntry";

export default function Timeline() {

    return (

        <section className={styles.timeline}>

            <div className={styles.intro}>

                <div className={styles.introDot}></div>

                <h2>

                    Jede Geschichte hat einen Anfang.

                </h2>

                <p>

                    Und unsere beginnt im Jahr 2019.

                </p>

            </div>

            <div className={styles.entries}>

                {historyEntries.map((entry) => (

                    <TimelineEntry

                        key={entry.year}

                        {...entry}

                    />

                ))}

            </div>

        </section>

    );

}