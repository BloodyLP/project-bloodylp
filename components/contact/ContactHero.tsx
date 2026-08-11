"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowDown,
    Mail,
    Mic2,
    Gamepad2,
} from "lucide-react";

import styles from "./ContactHero.module.css";

export default function ContactHero() {
    return (
        <section className={styles.hero}>

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div className={styles.backgroundGlow} />

            <div className={styles.gridBackground} />

            <div className={styles.vignette} />


            {/* =========================================
                CONTENT
            ========================================= */}

            <div className={styles.container}>

                <motion.div
                    className={styles.content}
                    initial={{
                        opacity: 0,
                        y: 35,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >

                    {/* =================================
                        KICKER
                    ================================= */}

                    <span className={styles.kicker}>
                        KONTAKT • ANFRAGEN • PROJEKTE
                    </span>


                    {/* =================================
                        TITLE
                    ================================= */}

                    <h1 className={styles.title}>

                        LASS UNS

                        <br />

                        <span>REDEN.</span>

                    </h1>


                    {/* =================================
                        DESCRIPTION
                    ================================= */}

                    <p className={styles.description}>
                        Du hast eine Idee, ein Projekt oder eine
                        Anfrage? Dann erzähl mir davon.
                    </p>

                    <p className={styles.description}>
                        Ob Kommentierung, Moderation, Content,
                        Kooperation oder ein gemeinsames Projekt –
                        ich freue mich darauf, mehr darüber zu erfahren.
                    </p>


                    {/* =================================
                        QUICK CONTACT
                    ================================= */}

                    <div className={styles.quickContact}>


                        <div className={styles.contactItem}>

                            <div className={styles.icon}>
                                <Mail
                                    size={19}
                                    strokeWidth={1.8}
                                />
                            </div>

                            <div>
                                <span>
                                    E-MAIL
                                </span>

                                <strong>
                                    kontakt@bloodylp.de
                                </strong>
                            </div>

                        </div>


                        <div className={styles.contactItem}>

                            <div className={styles.icon}>
                                <Mic2
                                    size={19}
                                    strokeWidth={1.8}
                                />
                            </div>

                            <div>
                                <span>
                                    KOMMENTAR & MODERATION
                                </span>

                                <strong>
                                    Eishockey • eSports • Events
                                </strong>
                            </div>

                        </div>


                        <div className={styles.contactItem}>

                            <div className={styles.icon}>
                                <Gamepad2
                                    size={19}
                                    strokeWidth={1.8}
                                />
                            </div>

                            <div>
                                <span>
                                    CONTENT & KOOPERATION
                                </span>

                                <strong>
                                    Gaming • Streaming • Projekte
                                </strong>
                            </div>

                        </div>

                    </div>


                    {/* =================================
                        ACTION
                    ================================= */}

                    <div className={styles.actions}>

                        <Link
                            href="#anfrage"
                            className={styles.primaryButton}
                        >

                            ANFRAGE STELLEN

                            <ArrowDown
                                size={18}
                                strokeWidth={2.4}
                            />

                        </Link>

                    </div>

                </motion.div>

            </div>


            {/* =========================================
                SCROLL INDICATOR
            ========================================= */}

            <motion.div
                className={styles.scrollIndicator}
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 1.2,
                    duration: 0.8,
                }}
            >

                <span />

                <p>
                    KONTAKT AUFNEHMEN
                </p>

            </motion.div>

        </section>
    );
}