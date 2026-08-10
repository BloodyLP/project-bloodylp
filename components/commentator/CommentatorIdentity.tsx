"use client";

import { motion } from "framer-motion";
import {
    Mic2,
    Trophy,
    Gamepad2,
} from "lucide-react";

import styles from "./CommentatorIdentity.module.css";

const stats = [
    {
        value: "2018",
        label: "START ALS KOMMENTATOR",
        description: "Der Einstieg in den professionellen Eishockey-Kommentar.",
        icon: Mic2,
    },
    {
        value: "DEL2",
        label: "ECHTES EISHOCKEY",
        description: "Live-Kommentierung und Berichterstattung rund um die DEL2.",
        icon: Trophy,
    },
    {
        value: "eSPORTS",
        label: "NHL • eDEL • eNL • GCL",
        description: "Kommentierung, Moderation und Hosting auf nationaler und internationaler Ebene.",
        icon: Gamepad2,
    },
];

export default function CommentatorIdentity() {

    return (

        <section className={styles.section}>

            <div className={styles.backgroundGlow} />

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
                        MEINE STIMME. DEIN SPIEL.
                    </span>

                    <h2 className={styles.title}>
                        Eishockey ist mehr als
                        <span> 60 Minuten.</span>
                    </h2>

                    <p className={styles.description}>
                        Seit 2018 begleite ich Eishockeyspiele live.
                        Dabei geht es für mich nicht darum, einfach nur
                        zu beschreiben, was auf dem Eis passiert.
                        Es geht darum, Emotionen einzufangen, Situationen
                        einzuordnen und die Geschichte eines Spiels
                        gemeinsam mit den Zuschauern zu erzählen.
                    </p>

                </motion.div>


                {/* ================================= */}
                {/* STATS */}
                {/* ================================= */}

                <div className={styles.stats}>

                    {stats.map((stat, index) => {

                        const Icon = stat.icon;

                        return (

                            <motion.article
                                key={stat.label}
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
                                    delay: index * 0.12,
                                    ease: "easeOut",
                                }}
                            >

                                {/* Nummer */}

                                <div className={styles.number}>

                                    {String(index + 1).padStart(2, "0")}

                                </div>


                                {/* Icon */}

                                <div className={styles.iconWrapper}>

                                    <Icon
                                        size={24}
                                        strokeWidth={1.8}
                                    />

                                </div>


                                {/* Content */}

                                <div className={styles.cardContent}>

                                    <strong>
                                        {stat.value}
                                    </strong>

                                    <span className={styles.cardTitle}>
                                        {stat.label}
                                    </span>

                                    <p>
                                        {stat.description}
                                    </p>

                                </div>

                            </motion.article>

                        );

                    })}

                </div>


                {/* ================================= */}
                {/* SIGNATURE */}
                {/* ================================= */}

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
                        duration: 0.8,
                        delay: 0.15,
                    }}
                >

                    <span />

                    <p>
                        Emotion trifft Fachwissen.
                        <strong>
                            Das Spiel bekommt eine Stimme.
                        </strong>
                    </p>

                    <span />

                </motion.div>

            </div>

        </section>

    );

}