"use client";

import { motion } from "framer-motion";

import MatchPanel from "@/components/live/sporteurope/MatchPanel";
import InfoPanel from "@/components/live/sporteurope/InfoPanel";

import styles from "./NextCommentary.module.css";

export default function NextCommentary() {
    return (
        <section className={styles.section}>

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div className={styles.background} />

            <div className={styles.glow} />


            {/* =========================================
                CONTAINER
            ========================================= */}

            <div className={styles.container}>


                {/* =========================================
                    HEADER
                ========================================= */}

                <motion.div
                    className={styles.header}

                    initial={{
                        opacity: 0,
                        y: 30,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}

                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                >

                    <span className={styles.overline}>
                        MEIN NÄCHSTER EINSATZ
                    </span>


                    <h2 className={styles.title}>
                        NÄCHSTE{" "}
                        <span>
                            ÜBERTRAGUNG.
                        </span>
                    </h2>


                    <p className={styles.intro}>
                        Hier findest du meinen nächsten Einsatz
                        als Kommentator oder Moderator – mit
                        allen wichtigen Informationen auf einen Blick.
                    </p>

                </motion.div>


                {/* =========================================
                    NEXT COMMENTARY
                ========================================= */}

                <div className={styles.grid}>


                    {/* =====================================
                        MATCH
                    ===================================== */}

                    <motion.div
                        className={styles.panel}

                        initial={{
                            opacity: 0,
                            x: -30,
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}

                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}

                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                    >

                        <MatchPanel />

                    </motion.div>


                    {/* =====================================
                        INFORMATION
                    ===================================== */}

                    <motion.div
                        className={styles.panel}

                        initial={{
                            opacity: 0,
                            x: 30,
                        }}

                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}

                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}

                        transition={{
                            duration: 0.7,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                    >

                        <InfoPanel />

                    </motion.div>


                </div>


                {/* =========================================
                    FOOTER / SIGNATURE
                ========================================= */}

                <motion.div
                    className={styles.signature}

                    initial={{
                        opacity: 0,
                    }}

                    whileInView={{
                        opacity: 1,
                    }}

                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}

                    transition={{
                        duration: 0.7,
                        delay: 0.2,
                    }}
                >

                    <span />

                    <p>
                        LIVE AM MIKROFON.
                        <strong>
                            LIVE FÜR EUCH.
                        </strong>
                    </p>

                    <span />

                </motion.div>


            </div>

        </section>
    );
}