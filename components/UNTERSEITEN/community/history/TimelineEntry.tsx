"use client";

import { motion } from "framer-motion";

import styles from "./TimelineEntry.module.css";

type TimelineEntryProps = {
    year: string;
    chapter: string;
    label: string;
    title: string;
    description: string;
};

export default function TimelineEntry({
    year,
    chapter,
    label,
    title,
    description,
}: TimelineEntryProps) {
    return (
        <motion.article
            className={styles.entry}
            initial={{
                opacity: 0,
                y: 80,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.35,
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
        >
            <header className={styles.header}>
                <span className={styles.year}>
                    {year}
                </span>

                <span className={styles.chapter}>
                    {chapter}
                </span>
            </header>

            <div className={styles.marker}>
                <span className={styles.dot}></span>
            </div>

            <motion.div
                className={styles.card}
                initial={{
                    opacity: 0,
                    scale: 0.96,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                viewport={{
                    once: true,
                }}
                transition={{
                    delay: 0.15,
                    duration: 0.6,
                }}
            >
                <span className={styles.label}>
                    {label}
                </span>

                <h3>
                    {title}
                </h3>

                <p>
                    {description}
                </p>
            </motion.div>
        </motion.article>
    );
}