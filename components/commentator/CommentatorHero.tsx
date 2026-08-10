"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./CommentatorHero.module.css";

export default function CommentatorHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.backgroundGlow} />

            <div className={styles.container}>

                {/* ================================= */}
                {/* LEFT */}
                {/* ================================= */}

                <div className={styles.left}>

                    <motion.span
                        className={styles.overline}
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                    >
                        KOMMENTATOR
                    </motion.span>


                    <motion.h1
                        className={styles.title}
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                        }}
                    >
                        EMOTION.
                        <br />

                        <span>ANALYSE.</span>
                        <br />

                        EISHOCKEY.
                    </motion.h1>


                    <motion.div
                        className={styles.nameBlock}
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.25,
                        }}
                    >
                        <span className={styles.nameLabel}>
                            ALEXANDER BLATTMANN
                        </span>

                        <span className={styles.nameRole}>
                            EISHOCKEY-KOMMENTATOR & HOST
                        </span>
                    </motion.div>


                    <motion.p
                        className={styles.description}
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.35,
                        }}
                    >
                        Eishockey-Kommentar mit Leidenschaft,
                        Erfahrung und der richtigen Portion Emotion.
                        Ob klassischer Live-Kommentar oder eSports –
                        jedes Spiel verdient seine eigene Geschichte.
                    </motion.p>


                    <motion.div
                        className={styles.actions}
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.45,
                        }}
                    >

                        <Link
                            href="#stationen"
                            className={`${styles.button} ${styles.primary}`}
                        >
                            MEINE STATIONEN
                        </Link>

                        <Link
                            href="/kontakt"
                            className={`${styles.button} ${styles.secondary}`}
                        >
                            KONTAKT
                        </Link>

                    </motion.div>

                </div>


                {/* ================================= */}
                {/* RIGHT */}
                {/* ================================= */}

                <motion.div
                    className={styles.right}
                    initial={{
                        opacity: 0,
                        x: 40,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.25,
                    }}
                >

                    <div className={styles.visualGlow} />

                    <div className={styles.visual}>

                        <div className={styles.visualTop}>
                            <span>
                                BLOODYLP
                            </span>

                            <span>
                                COMMENTARY
                            </span>
                        </div>


                        <div className={styles.visualCenter}>

                            <div className={styles.microphone}>
                                🎙️
                            </div>

                            <span className={styles.visualTitle}>
                                LIVE
                            </span>

                            <span className={styles.visualSubtitle}>
                                EISHOCKEY
                            </span>

                        </div>


                        <div className={styles.visualBottom}>

                            <div>
                                <strong>
                                    DEL2
                                </strong>

                                <span>
                                    COMMENTARY
                                </span>
                            </div>

                            <div>
                                <strong>
                                    eSPORTS
                                </strong>

                                <span>
                                    COMMENTARY
                                </span>
                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}