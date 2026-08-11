"use client";

import { motion } from "framer-motion";
import {
    Mic2,
    Gamepad2,
    Handshake,
    MessageCircle,
    ArrowUpRight,
} from "lucide-react";

import styles from "./ContactOptions.module.css";


const contactOptions = [

    {
        number: "01",
        icon: Mic2,
        title: "KOMMENTIERUNG &",
        highlight: "MODERATION",
        description:
            "Du planst eine Eishockey-, eSports- oder Event-Übertragung und suchst eine Stimme, die Fachwissen und Emotion verbindet?",
        label:
            "EISHOCKEY • eSPORTS • EVENTS",
    },

    {
        number: "02",
        icon: Gamepad2,
        title: "CONTENT &",
        highlight: "STREAMING",
        description:
            "Du möchtest gemeinsam Content produzieren, ein Gaming-Projekt umsetzen oder ein Format rund um Livestreaming entwickeln?",
        label:
            "GAMING • STREAMING • VIDEO",
    },

    {
        number: "03",
        icon: Handshake,
        title: "KOOPERATIONEN &",
        highlight: "PARTNERSCHAFTEN",
        description:
            "Du hast eine Marke, ein Produkt oder eine Kampagne und suchst einen authentischen Creator für eine Zusammenarbeit?",
        label:
            "BRANDS • PRODUKTE • KAMPAGNEN",
    },

    {
        number: "04",
        icon: MessageCircle,
        title: "SONSTIGE",
        highlight: "ANFRAGEN",
        description:
            "Du hast eine andere Idee oder bist dir noch nicht ganz sicher, wo dein Projekt hingehört? Kein Problem. Schreib mir einfach.",
        label:
            "IDEEN • FRAGEN • PROJEKTE",
    },

];


export default function ContactOptions() {

    return (

        <section className={styles.section}>

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div className={styles.backgroundGlow} />


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
                        amount: 0.25,
                    }}

                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}

                >

                    <span className={styles.overline}>
                        WORÜBER MÖCHTEST DU SPRECHEN?
                    </span>


                    <h2 className={styles.title}>

                        VIELE MÖGLICHKEITEN.

                        <br />

                        <span>EIN KONTAKT.</span>

                    </h2>


                    <p className={styles.intro}>

                        Egal, was du vorhast:
                        Der erste Schritt ist immer ein Gespräch.
                        Such dir einfach den Bereich aus, der am
                        besten zu deiner Anfrage passt.

                    </p>

                </motion.div>


                {/* =========================================
                    OPTIONS GRID
                ========================================= */}

                <div className={styles.grid}>

                    {contactOptions.map((option, index) => {

                        const Icon = option.icon;


                        return (

                            <motion.article
                                key={option.number}
                                className={styles.card}

                                initial={{
                                    opacity: 0,
                                    y: 35,
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
                                    duration: 0.65,
                                    delay: index * 0.08,
                                    ease: "easeOut",
                                }}
                            >


                                {/* =================================
                                    TOP
                                ================================= */}

                                <div className={styles.cardTop}>

                                    <div className={styles.icon}>

                                        <Icon
                                            size={24}
                                            strokeWidth={1.8}
                                        />

                                    </div>


                                    <span className={styles.number}>
                                        {option.number}
                                    </span>

                                </div>


                                {/* =================================
                                    CONTENT
                                ================================= */}

                                <div className={styles.cardContent}>

                                    <h3>

                                        {option.title}

                                        <br />

                                        <span>
                                            {option.highlight}
                                        </span>

                                    </h3>


                                    <p>
                                        {option.description}
                                    </p>

                                </div>


                                {/* =================================
                                    FOOTER
                                ================================= */}

                                <div className={styles.cardFooter}>

                                    <span>
                                        {option.label}
                                    </span>


                                    <div className={styles.arrow}>

                                        <ArrowUpRight
                                            size={17}
                                            strokeWidth={2.2}
                                        />

                                    </div>

                                </div>


                            </motion.article>

                        );

                    })}

                </div>


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
                        amount: 0.3,
                    }}

                    transition={{
                        duration: 0.7,
                        delay: 0.15,
                    }}
                >

                    <span />

                    <p>

                        DEINE IDEE.

                        <strong>
                            MEIN MIKROFON.
                        </strong>

                    </p>

                    <span />

                </motion.div>


            </div>

        </section>

    );
}