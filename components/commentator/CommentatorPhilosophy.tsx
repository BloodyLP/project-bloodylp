"use client";

import { motion } from "framer-motion";
import {
    Brain,
    HeartPulse,
    MessageCircle,
    Target,
} from "lucide-react";

import styles from "./CommentatorPhilosophy.module.css";


const principles = [
    {
        number: "01",
        icon: Brain,
        title: "VORBEREITUNG",

        text:
            "Ein guter Kommentar beginnt nicht erst mit dem ersten Bully. Teams, Spieler, Statistiken und Geschichten gehören für mich genauso zur Vorbereitung wie das eigentliche Spiel.",

        accent: "WISSEN",
    },

    {
        number: "02",
        icon: HeartPulse,
        title: "EMOTION",

        text:
            "Eishockey lebt von Geschwindigkeit, Intensität und Emotionen. Genau diese Energie möchte ich transportieren, ohne dabei den Blick für das Spiel zu verlieren.",

        accent: "LEIDENSCHAFT",
    },

    {
        number: "03",
        icon: MessageCircle,
        title: "NÄHE",

        text:
            "Kommentar soll Zuschauer nicht auf Distanz halten. Er soll sie mitnehmen, informieren, unterhalten und ihnen das Gefühl geben, gemeinsam mitten im Geschehen zu sein.",

        accent: "VERBINDUNG",
    },

    {
        number: "04",
        icon: Target,
        title: "TIMING",

        text:
            "Nicht jeder Moment braucht Worte. Manchmal ist die wichtigste Aufgabe eines Kommentators, den richtigen Augenblick zu erkennen – und dann genau die richtigen Worte zu finden.",

        accent: "GEFÜHL",
    },
];


export default function CommentatorPhilosophy() {

    return (

        <section className={styles.section}>

            <div className={styles.container}>

                {/* ================================= */}
                {/* HEADER */}
                {/* ================================= */}

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
                    }}
                >

                    <span className={styles.overline}>
                        MEINE ART ZU KOMMENTIEREN
                    </span>

                    <h2 className={styles.title}>
                        MEHR ALS{" "}
                        <span>EINE STIMME.</span>
                    </h2>

                    <p className={styles.intro}>
                        Ein Kommentar ist für mich mehr als die
                        Beschreibung dessen, was gerade passiert.
                        Er soll ein Spiel verständlicher machen,
                        Emotionen transportieren und Geschichten
                        erzählen.
                    </p>

                </motion.div>


                {/* ================================= */}
                {/* FEATURE QUOTE */}
                {/* ================================= */}

                <motion.div
                    className={styles.quote}
                    initial={{
                        opacity: 0,
                        scale: .97,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    transition={{
                        duration: .75,
                    }}
                >

                    <div className={styles.quoteMark}>
                        “
                    </div>

                    <p>
                        Ich möchte nicht einfach erzählen,
                        <span> was passiert.</span>
                        <br />
                        Ich möchte vermitteln,
                        <span> warum es passiert.</span>
                    </p>

                    <div className={styles.quoteLine} />

                    <span className={styles.quoteAuthor}>
                        ALEXANDER BLATTMANN
                    </span>

                </motion.div>


                {/* ================================= */}
                {/* PRINCIPLES */}
                {/* ================================= */}

                <div className={styles.grid}>

                    {principles.map((principle, index) => {

                        const Icon = principle.icon;

                        return (

                            <motion.article
                                key={principle.number}
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
                                    duration: .6,
                                    delay: index * .08,
                                }}
                            >

                                <div className={styles.cardTop}>

                                    <span className={styles.number}>
                                        {principle.number}
                                    </span>

                                    <div className={styles.icon}>

                                        <Icon
                                            size={23}
                                            strokeWidth={2}
                                        />

                                    </div>

                                </div>


                                <div className={styles.cardBody}>

                                    <span className={styles.accent}>
                                        {principle.accent}
                                    </span>

                                    <h3>
                                        {principle.title}
                                    </h3>

                                    <p>
                                        {principle.text}
                                    </p>

                                </div>

                            </motion.article>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}