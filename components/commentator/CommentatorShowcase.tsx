"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./CommentatorShowcase.module.css";

export default function CommentatorShowcase() {
    return (
        <section className={styles.section}>

            <div className={styles.container}>

                {/* ================================= */}
                {/* INTRO */}
                {/* ================================= */}

                <motion.div
                    className={styles.intro}
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
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                >

                    <span className={styles.kicker}>
                        VOM SPIEL ZUR STIMME
                    </span>

                    <h2 className={styles.title}>
                        Mehr als nur
                        <span> Kommentieren.</span>
                    </h2>

                    <p className={styles.introText}>
                        Ein Spiel besteht nicht nur aus Ergebnissen,
                        Statistiken und Spielzügen. Es sind die Geschichten,
                        Emotionen und besonderen Momente, die eine
                        Übertragung unvergesslich machen.
                    </p>

                </motion.div>


                {/* ================================= */}
                {/* MAIN SHOWCASE */}
                {/* ================================= */}

                <div className={styles.showcase}>

                    {/* ================================= */}
                    {/* MAIN IMAGE */}
                    {/* ================================= */}

                    <motion.div
                        className={styles.mainImage}
                        initial={{
                            opacity: 0,
                            x: -40,
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
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >

                        <Image
                            src="/commentator/images/sport-europe-mikrofon.png"
                            alt="SportEurope.TV Kommentatoren-Mikrofone"
                            fill
                            sizes="(max-width: 900px) 100vw, 65vw"
                            className={styles.mainImageContent}
                            priority={false}
                        />

                        <div className={styles.imageOverlay} />

                        <div className={styles.imageLabel}>

                            <span>
                                LIVE
                            </span>

                            <strong>
                                SPORT EUROPE.TV
                            </strong>

                        </div>

                    </motion.div>


                    {/* ================================= */}
                    {/* TEXT */}
                    {/* ================================= */}

                    <motion.div
                        className={styles.content}
                        initial={{
                            opacity: 0,
                            x: 40,
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
                            duration: 0.8,
                            delay: 0.1,
                            ease: "easeOut",
                        }}
                    >

                        <span className={styles.contentKicker}>
                            DIE AUFGABE
                        </span>

                        <h3>
                            Emotion.
                            <br />
                            <span>Fachwissen.</span>
                            <br />
                            Persönlichkeit.
                        </h3>

                        <p>
                            Wenn das erste Bully fällt, beginnt die eigentliche
                            Arbeit. Dann geht es darum, das Geschehen auf dem
                            Eis nicht einfach wiederzugeben, sondern den
                            Zuschauern ein Gefühl für das Spiel zu vermitteln.
                        </p>

                        <p>
                            Wer steht unter Druck? Wo entscheidet sich das
                            Spiel? Welche Geschichte steckt hinter einem
                            Zweikampf, einem Tor oder einer besonderen
                            Leistung?
                        </p>

                        <div className={styles.quote}>

                            <span className={styles.quoteMark}>
                                “
                            </span>

                            <p>
                                Ein gutes Spiel erzählt seine eigene Geschichte.
                                Meine Aufgabe ist es, sie hörbar zu machen.
                            </p>

                        </div>

                    </motion.div>

                </div>


                {/* ================================= */}
                {/* SECONDARY IMAGES */}
                {/* ================================= */}

                <div className={styles.secondaryGrid}>

                    <motion.div
                        className={styles.secondaryImage}
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
                        }}
                    >

                        <Image
                            src="/commentator/images/interview-eisflaeche.jpg"
                            alt="Alexander Blattmann bei einer SportEurope.TV Übertragung"
                            fill
                            sizes="(max-width: 700px) 100vw, 50vw"
                            className={styles.secondaryImageContent}
                        />

                        <div className={styles.secondaryOverlay} />

                        <div className={styles.secondaryLabel}>

                            <span>
                                VOR DER KAMERA
                            </span>

                            <strong>
                                INTERVIEW & MODERATION
                            </strong>

                        </div>

                    </motion.div>


                    <motion.div
                        className={styles.secondaryImage}
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
                            delay: 0.12,
                        }}
                    >

                        <Image
                            src="/commentator/images/commentator-portrait.png"
                            alt="Alexander Blattmann als Eishockey-Kommentator"
                            fill
                            sizes="(max-width: 700px) 100vw, 50vw"
                            className={styles.secondaryImageContent}
                        />

                        <div className={styles.secondaryOverlay} />

                        <div className={styles.secondaryLabel}>

                            <span>
                                DIE PERSON DAHINTER
                            </span>

                            <strong>
                                ALEXANDER BLATTMANN
                            </strong>

                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    );
}