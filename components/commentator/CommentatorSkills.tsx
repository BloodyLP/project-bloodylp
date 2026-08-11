"use client";

import { motion } from "framer-motion";

import {
    Mic2,
    Gamepad2,
    Radio,
    BarChart3,
} from "lucide-react";

import styles from "./CommentatorSkills.module.css";


/* ========================================================= */
/* SKILLS DATA */
/* ========================================================= */

const skills = [

    {
        icon: Mic2,

        number: "01",

        eyebrow: "PLAY-BY-PLAY",

        title: "LIVE-KOMMENTAR",

        description:
            "Das Spiel live erleben, die entscheidenden Momente erkennen und genau dann die richtige Stimme finden, wenn es darauf ankommt.",

        tags: [
            "DEL2",
            "EISHOCKEY",
            "LIVE",
        ],
    },

    {
        icon: Gamepad2,

        number: "02",

        eyebrow: "VIRTUAL HOCKEY",

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

        eyebrow: "ON AIR",

        title: "MODERATION",

        description:
            "Ob Spieltag, eSports-Event oder Special: Moderation bedeutet, Menschen durch ein Event zu führen und dabei den richtigen Ton zu treffen.",

        tags: [
            "HOST",
            "EVENTS",
            "LIVE",
        ],
    },

    {
        icon: BarChart3,

        number: "04",

        eyebrow: "GAME INSIGHT",

        title: "ANALYSE",

        description:
            "Hinter jedem Spiel stecken Entscheidungen, Systeme und Geschichten. Fachwissen macht auch die Details sichtbar, die sonst verborgen bleiben.",

        tags: [
            "TAKTIK",
            "ANALYSE",
            "FACHWISSEN",
        ],
    },

];


/* ========================================================= */
/* COMPONENT */
/* ========================================================= */

export default function CommentatorSkills() {

    return (

        <section className={styles.section}>

            {/* ================================================= */}
            {/* BACKGROUND */}
            {/* ================================================= */}

            <div className={styles.backgroundGlow} />

            <div className={styles.backgroundGrid} />


            {/* ================================================= */}
            {/* CONTAINER */}
            {/* ================================================= */}

            <div className={styles.container}>


                {/* ================================================= */}
                {/* HEADER */}
                {/* ================================================= */}

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

                        MEINE KOMPETENZEN

                    </span>


                    <h2 className={styles.title}>

                        KOMMENTAR MIT{" "}

                        <span>
                            LEIDENSCHAFT.
                        </span>

                    </h2>


                    <p className={styles.intro}>

                        Ein gutes Mikrofon allein macht noch keine
                        gute Übertragung. Entscheidend sind
                        Erfahrung, Vorbereitung, Timing und die
                        Fähigkeit, den Moment zu fühlen.

                    </p>

                </motion.div>


                {/* ================================================= */}
                {/* SKILLS GRID */}
                {/* ================================================= */}

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
                                    ease: "easeOut",
                                }}

                            >

                                {/* ================================= */}
                                {/* CARD HEADER */}
                                {/* ================================= */}

                                <div className={styles.cardTop}>

                                    <span className={styles.number}>

                                        {skill.number}

                                    </span>


                                    <span className={styles.eyebrow}>

                                        {skill.eyebrow}

                                    </span>

                                </div>


                                {/* ================================= */}
                                {/* ICON */}
                                {/* ================================= */}

                                <div className={styles.icon}>

                                    <Icon
                                        size={24}
                                        strokeWidth={1.8}
                                    />

                                </div>


                                {/* ================================= */}
                                {/* CONTENT */}
                                {/* ================================= */}

                                <div className={styles.cardContent}>

                                    <h3>

                                        {skill.title}

                                    </h3>


                                    <p>

                                        {skill.description}

                                    </p>

                                </div>


                                {/* ================================= */}
                                {/* TAGS */}
                                {/* ================================= */}

                                <div className={styles.tags}>

                                    {skill.tags.map((tag) => (

                                        <span key={tag}>

                                            {tag}

                                        </span>

                                    ))}

                                </div>


                                {/* ================================= */}
                                {/* CARD FOOTER */}
                                {/* ================================= */}

                                <div className={styles.cardFooter}>

                                    <span />

                                    <span>

                                        BLOODYLP

                                    </span>

                                </div>

                            </motion.article>

                        );

                    })}

                </div>


                {/* ================================================= */}
                {/* BOTTOM STATEMENT */}
                {/* ================================================= */}

                <motion.div

                    className={styles.bottomStatement}

                    initial={{
                        opacity: 0,
                        y: 15,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
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

                        Nicht nur hören.

                        <strong>
                            Mitten im Spiel sein.
                        </strong>

                    </p>

                    <span />

                </motion.div>

            </div>

        </section>

    );

}