"use client";

import styles from "./HistoryHeader.module.css";

export default function HistoryHeader() {

    return (

        <header className={styles.header}>

            <span className={styles.overline}>
                UNSERE GESCHICHTE
            </span>

            <h2 className={styles.title}>

                Jede große Gemeinschaft

                <br />

                <span>beginnt mit einer Idee.</span>

            </h2>

            <p className={styles.description}>

                Was heute eine Community mit über
                <span> 100 Mitgliedern </span>
                ist, begann 2019 mit einer spontanen Idee
                während eines Livestreams.

                <br /><br />

                Aus einem kleinen Spaß entwickelte sich
                eine Gemeinschaft, die heute Gaming,
                Freundschaft, Loyalität und Zusammenhalt
                miteinander verbindet.

            </p>

        </header>

    );

}