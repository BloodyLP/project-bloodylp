"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import styles from "./ContentCreatorHero.module.css";

export default function ContentCreatorHero() {

    return (

        <section className={styles.hero}>

            {/* ================================================= */}
            {/* HERO IMAGE */}
            {/* ================================================= */}

            <div className={styles.imageArea}>

                <div className={styles.heroImage} />

                <div className={styles.imageLeftFade} />

                <div className={styles.imageBottomFade} />

                <div className={styles.imageTopFade} />

            </div>


            {/* ================================================= */}
            {/* GLOBAL VIGNETTE */}
            {/* ================================================= */}

            <div className={styles.vignette} />


            {/* ================================================= */}
            {/* CONTENT */}
            {/* ================================================= */}

            <div className={styles.container}>

                <motion.div
                    className={styles.content}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {
                            opacity: 0,
                        },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.11,
                                delayChildren: 0.15,
                            },
                        },
                    }}
                >

                    {/* ================================================= */}
                    {/* KICKER */}
                    {/* ================================================= */}

                    <motion.span
                        className={styles.kicker}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 18,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.55,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    >
                        CONTENT CREATOR • STREAMER • GAMER
                    </motion.span>


                    {/* ================================================= */}
                    {/* TITLE */}
                    {/* ================================================= */}

                    <motion.h1
                        className={styles.title}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 24,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.7,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    >

                        Gaming wird zur

                        <br />

                        <span>
                            Geschichte.
                        </span>

                    </motion.h1>


                    {/* ================================================= */}
                    {/* DESCRIPTION */}
                    {/* ================================================= */}

                    <motion.p
                        className={styles.description}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 18,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.55,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    >
                        Spiele sind für mich nicht einfach nur Spiele.

                        Sie sind Geschichten, Herausforderungen,
                        Wettbewerbe und gemeinsame Erlebnisse.
                    </motion.p>


                    <motion.p
                        className={styles.description}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 18,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.55,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    >
                        Ob Eishockey, Story-Game, Racing oder
                        Simulation: Entscheidend ist für mich,
                        was daraus gemeinsam mit der Community entsteht.
                    </motion.p>


                    {/* ================================================= */}
                    {/* META */}
                    {/* ================================================= */}

                    <motion.div
                        className={styles.meta}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 18,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.55,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    >

                        <div className={styles.metaItem}>

                            <strong>
                                2012
                            </strong>

                            <span>
                                START ALS
                                <br />
                                CONTENT CREATOR
                            </span>

                        </div>


                        <div className={styles.metaDivider} />


                        <div className={styles.metaItem}>

                            <strong>
                                1500+
                            </strong>

                            <span>
                                LIVESTREAMS
                                <br />
                                AUF TWITCH
                            </span>

                        </div>


                        <div className={styles.metaDivider} />


                        <div className={styles.metaItem}>

                            <strong>
                                LIVE
                            </strong>

                            <span>
                                GAMING
                                <br />
                                & ENTERTAINMENT
                            </span>

                        </div>

                    </motion.div>


                    {/* ================================================= */}
                    {/* ACTIONS */}
                    {/* ================================================= */}

                    <motion.div
                        className={styles.actions}
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 18,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.55,
                                    ease: "easeOut",
                                },
                            },
                        }}
                    >

                        <Link
                            href="#formate"
                            className={styles.primaryButton}
                        >

                            MEINE FORMATE

                            <span>
                                →
                            </span>

                        </Link>


                        <a
                            href="https://www.twitch.tv/bl00dylp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryButton}
                        >

                            LIVE AUF TWITCH

                            <span>
                                ↗
                            </span>

                        </a>

                    </motion.div>

                </motion.div>

            </div>


            {/* ================================================= */}
            {/* SCROLL INDICATOR */}
            {/* ================================================= */}

            <motion.div
                className={styles.scrollIndicator}
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 1.5,
                    duration: 0.8,
                }}
            >

                <span />

                <p>
                    SCROLLEN
                </p>

            </motion.div>

        </section>

    );

}