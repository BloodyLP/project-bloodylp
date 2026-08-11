"use client";

import { motion } from "framer-motion";

import {
    Mic2,
    MessageCircle,
    MonitorPlay,
    Radio,
} from "lucide-react";

import styles from "./ContentCreatorExperience.module.css";


const experiences = [

    {
        number: "01",
        icon: Radio,
        title: "LIVE",
        highlight: "ENTERTAINMENT",
        description:
            "Ein Stream ist für mich keine bloße Bildschirmübertragung. Es ist eine Live-Sendung, bei der jeder Moment spontan entstehen darf.",
    },

    {
        number: "02",
        icon: MessageCircle,
        title: "DIE",
        highlight: "COMMUNITY",
        description:
            "Der Chat ist nicht nur Zuschauer. Diskussionen, Reaktionen und gemeinsame Entscheidungen machen aus einem Spiel ein gemeinsames Erlebnis.",
    },

    {
        number: "03",
        icon: MonitorPlay,
        title: "DIE",
        highlight: "PRODUKTION",
        description:
            "Szenen, Overlays, Grafiken, Sounds und Technik gehören genauso dazu wie das eigentliche Spiel. Der Anspruch: Es soll sich wie eine echte Produktion anfühlen.",
    },

    {
        number: "04",
        icon: Mic2,
        title: "DIE",
        highlight: "STIMME",
        description:
            "Jahrelange Erfahrung am Mikrofon verändert auch Gaming-Content. Situationen werden eingeordnet, Momente aufgebaut und Geschichten erzählt.",
    },

];


export default function ContentCreatorExperience() {

    return (

        <section
            id="experience"
            className={styles.section}
        >

            {/* ================================= */}
            {/* BACKGROUND */}
            {/* ================================= */}

            <div className={styles.backgroundGlow} />

            <div className={styles.backgroundLine} />


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
                        ease: "easeOut",
                    }}

                >

                    <span className={styles.overline}>
                        HINTER DEN STREAMS
                    </span>


                    <h2 className={styles.title}>

                        LIVE IST MEHR ALS

                        <br />

                        <span>
                            NUR SPIELEN.
                        </span>

                    </h2>


                    <p className={styles.intro}>

                        Ein gutes Spiel liefert den Inhalt.
                        Die eigentliche Show entsteht durch
                        das, was drumherum passiert.

                        Technik, Timing, Persönlichkeit
                        und eine Community, die mittendrin ist.

                    </p>

                </motion.div>



                {/* ================================= */}
                {/* EXPERIENCE GRID */}
                {/* ================================= */}

                <div className={styles.grid}>


                    {experiences.map((experience, index) => {

                        const Icon = experience.icon;


                        return (

                            <motion.article

                                key={experience.number}

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
                                    delay: index * 0.09,
                                    ease: "easeOut",
                                }}

                            >


                                {/* ================================= */}
                                {/* TOP */}
                                {/* ================================= */}

                                <div className={styles.cardTop}>

                                    <span className={styles.number}>
                                        {experience.number}
                                    </span>


                                    <div className={styles.icon}>

                                        <Icon
                                            size={23}
                                            strokeWidth={1.8}
                                        />

                                    </div>

                                </div>


                                {/* ================================= */}
                                {/* CONTENT */}
                                {/* ================================= */}

                                <div className={styles.cardContent}>

                                    <h3>

                                        {experience.title}

                                        <span>
                                            {experience.highlight}
                                        </span>

                                    </h3>


                                    <p>
                                        {experience.description}
                                    </p>

                                </div>


                                {/* ================================= */}
                                {/* DECORATION */}
                                {/* ================================= */}

                                <div className={styles.cardLine} />

                            </motion.article>

                        );

                    })}

                </div>



                {/* ================================= */}
                {/* STATEMENT */}
                {/* ================================= */}

                <motion.div

                    className={styles.statement}

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
                        amount: 0.3,
                    }}

                    transition={{
                        duration: 0.8,
                        delay: .1,
                        ease: "easeOut",
                    }}

                >

                    <span className={styles.statementMark}>
                        "
                    </span>


                    <p>

                        Ich möchte nicht einfach nur
                        <strong> Spiele spielen.</strong>

                        <br />

                        Ich möchte daraus
                        <span> Erlebnisse machen.</span>

                    </p>

                </motion.div>


            </div>

        </section>

    );

}