"use client";

import styles from "./Community.module.css";

import CommunityHero from "./hero";
import History from "./history";
import Values from "./values";
import Members from "./members";
import Join from "./join";

export default function Community() {
    return (
        <main className={styles.community}>

            {/* ================================= */}
            {/* Hero */}
            {/* ================================= */}

            <CommunityHero />

            {/* ================================= */}
            {/* Unsere Geschichte */}
            {/* ================================= */}

            <History />

            {/* ================================= */}
            {/* Unsere Werte */}
            {/* ================================= */}

            <Values />

            {/* ================================= */}
            {/* Unsere Mitglieder */}
            {/* ================================= */}

            <Members />

            {/* ================================= */}
            {/* Mitglied werden */}
            {/* ================================= */}

            <Join />

        </main>
    );
}