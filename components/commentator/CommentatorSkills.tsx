"use client";

import { motion } from "framer-motion";
import {
    Mic2,
    Gamepad2,
    Radio,
    BarChart3,
} from "lucide-react";

import styles from "./CommentatorSkills.module.css";


const skills = [

    {
        icon: Mic2,

        number: "01",

        title: "LIVE-KOMMENTAR",

        description:
            "Das Spiel live erleben, die entscheidenden Momente einordnen und Emotionen genau dort entstehen lassen, wo sie hingehören: mitten im Spiel.",

        tags: [
            "DEL2",
            "EISHOCKEY",
            "LIVE",
        ],
    },

    {
        icon: Gamepad2,

        number: "02",

        title: "eSPORTS",

        description:
            "Virtuelles Eishockey verdient dieselbe Leidenschaft wie das Spiel auf dem Eis. NHL-eSports wird bei mir zur echten Sportübertragung.",

        tags: [
            "EA SPORTS NHL",
            "TURNIERE",
            "eSPORTS",
        ],
    },

    {
        icon: Radio,

        number: "03",

        title: "MODERATION",

        description:
            "Ob Spieltag, eSports-Event oder Special: Moderation bedeutet für mich, Menschen durch ein Event zu führen und dabei den richtigen Ton zu treffen.",

        tags: [
            "HOST",
            "EVENTS",
            "LIVE",
        ],
    },

    {
        icon: BarChart3,

        number: "04",

        title: "ANALYSE",

        description:
            "Hinter jedem Spiel stecken Entscheidungen, Systeme und Geschichten. Fachwissen hilft dabei, auch die Details sichtbar zu machen.",

        tags: [
            "TAKTIK",
            "ANALYSE",
            "FACHWISSEN",
        ],
    },

];


export default function CommentatorSkills() {

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
                        MEINE KOMPETENZEN
                    </span>

                    <h2 className={styles.title}>
                        KOMMENTAR MIT{" "}
                        <span>LEIDENSCHAFT.</span>
                    </h2>

                    <p className={styles.intro}>
                        Ein gutes Mikrofon allein macht noch keine
                        gute Übertragung. Entscheidend sind
                        Erfahrung, Vorbereitung, Timing und die
                        Fähigkeit, den Moment zu fühlen.
                    </p>

                </motion.div>


                {/* ================================= */}
                {/* GRID */}
                {/* ================================= */}

                <div className={styles.grid}>

                    {skills.map((skill, index) => {

                        const Icon = skill.icon;

                        return (

                            <motion.article
                                key={skill.number}
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
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                            >

                                <div className={styles.cardTop}>

                                    <span className={styles.number}>
                                        {skill.number}
                                    </span>

                                    <div className={styles.icon}>

                                        <Icon
                                            size={24}
                                            strokeWidth={2}
                                        />

                                    </div>

                                </div>


                                <div className={styles.cardContent}>

                                    <h3>
                                        {skill.title}
                                    </h3>

                                    <p>
                                        {skill.description}
                                    </p>

                                </div>


                                <div className={styles.tags}>

                                    {skill.tags.map((tag) => (

                                        <span key={tag}>
                                            {tag}
                                        </span>

                                    ))}

                                </div>

                            </motion.article>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}