"use client";

import { motion } from "framer-motion";
import {
    ArrowUp,
    Mail,
} from "lucide-react";

import styles from "./ContactFooter.module.css";


export default function ContactFooter() {

    return (

        <section className={styles.section}>

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div className={styles.backgroundGlow} />


            <div className={styles.container}>


                {/* =========================================
                    MAIN CONTENT
                ========================================= */}

                <motion.div
                    className={styles.content}

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
                        amount: 0.25,
                    }}

                    transition={{
                        duration: 0.75,
                        ease: "easeOut",
                    }}
                >

                    <span className={styles.overline}>
                        DER NÄCHSTE SCHRITT
                    </span>


                    <h2 className={styles.title}>

                        DU HAST EINE IDEE?

                        <br />

                        <span>
                            ERZÄHL MIR DAVON.
                        </span>

                    </h2>


                    <p className={styles.description}>

                        Gute Projekte beginnen meistens mit
                        einem einfachen Gespräch. Vielleicht
                        ist genau jetzt der richtige Zeitpunkt
                        dafür.

                    </p>


                    {/* =================================
                        ACTIONS
                    ================================= */}

                    <div className={styles.actions}>

                        <a
                            href="mailto:kontakt@bloodylp.de"
                            className={styles.primaryButton}
                        >

                            <Mail
                                size={18}
                                strokeWidth={2}
                            />

                            <span>
                                kontakt@bloodylp.de
                            </span>

                        </a>


                        <a
                            href="#top"
                            className={styles.secondaryButton}
                        >

                            ZURÜCK NACH OBEN

                            <ArrowUp
                                size={17}
                                strokeWidth={2.2}
                            />

                        </a>

                    </div>

                </motion.div>


                {/* =========================================
                    SIGNATURE
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

                        BLOODYLP

                        <strong>
                            ALEXANDER BLATTMANN
                        </strong>

                    </p>

                    <span />

                </motion.div>


            </div>

        </section>

    );
}