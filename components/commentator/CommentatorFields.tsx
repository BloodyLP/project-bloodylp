"use client";

import { motion } from "framer-motion";
import {
    Trophy,
    Shield,
    Gamepad2,
    Radio,
    ArrowUpRight,
} from "lucide-react";

import styles from "./CommentatorFields.module.css";


const fields = [

    {
        number: "01",
        icon: Trophy,

        title: "DEL2",

        subtitle: "PROFESSIONELLER EISHOCKEYSPORT",

        description:
            "Live-Kommentar für den professionellen Eishockeysport. Das Geschehen auf dem Eis, die Geschichten rund um das Spiel und die Emotionen des Moments stehen im Mittelpunkt.",

        tags: [
            "EISHOCKEY",
            "LIVE",
            "DEL2",
        ],

        featured: true,
    },

    {
        number: "02",
        icon: Shield,

        title: "CLUB-EISHOCKEY",

        subtitle: "VEREINE & SPIELTAGE",

        description:
            "Eishockey ist mehr als 60 Minuten Spielzeit. Vereine, Spieler, Rivalitäten und besondere Geschichten machen jeden Spieltag einzigartig.",

        tags: [
            "CLUBS",
            "SPIELTAGE",
        ],

        featured: false,
    },

    {
        number: "03",
        icon: Gamepad2,

        title: "eSPORTS",

        subtitle: "EA SPORTS NHL & WETTBEWERBE",

        description:
            "Virtuelles Eishockey wird zur Sportübertragung. Matches, Turniere und Wettbewerbe werden mit derselben Leidenschaft und Aufmerksamkeit begleitet wie echtes Eishockey.",

        tags: [
            "EA SPORTS NHL",
            "eSPORTS",
        ],

        featured: false,
    },

    {
        number: "04",
        icon: Radio,

        title: "TURNIERE & EVENTS",

        subtitle: "LIVE-EVENTS & SPECIALS",

        description:
            "Ob einzelnes Match, Turnier oder komplettes Event: Moderation und Kommentar sollen Zuschauer durch den gesamten Ablauf führen und den besonderen Charakter des Events transportieren.",

        tags: [
            "EVENTS",
            "MODERATION",
            "LIVE",
        ],

        featured: true,
    },

];


export default function CommentatorFields() {

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
                        duration: .7,
                    }}
                >

                    <span className={styles.overline}>
                        EINSATZBEREICHE
                    </span>

                    <h2 className={styles.title}>
                        EIN MIKROFON.
                        <br />
                        <span>VIELE SPIELFELDER.</span>
                    </h2>

                    <p className={styles.intro}>
                        Ob auf dem Eis oder virtuell auf der Konsole:
                        Kommentar bedeutet für mich, Sport erlebbar
                        zu machen und den Zuschauer mitten ins
                        Geschehen zu holen.
                    </p>

                </motion.div>


                {/* ================================= */}
                {/* FIELD GRID */}
                {/* ================================= */}

                <div className={styles.grid}>

                    {fields.map((field, index) => {

                        const Icon = field.icon;

                        return (

                            <motion.article
                                key={field.number}
                                className={

                                    field.featured

                                        ? `${styles.card} ${styles.featured}`

                                        : styles.card

                                }
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: .2,
                                }}
                                transition={{
                                    duration: .65,
                                    delay: index * .08,
                                }}
                            >

                                {/* ================================= */}
                                {/* CARD HEADER */}
                                {/* ================================= */}

                                <div className={styles.cardHeader}>

                                    <span className={styles.number}>
                                        {field.number}
                                    </span>

                                    <div className={styles.icon}>

                                        <Icon
                                            size={25}
                                            strokeWidth={2}
                                        />

                                    </div>

                                </div>


                                {/* ================================= */}
                                {/* CONTENT */}
                                {/* ================================= */}

                                <div className={styles.content}>

                                    <span className={styles.subtitle}>
                                        {field.subtitle}
                                    </span>

                                    <h3>
                                        {field.title}
                                    </h3>

                                    <p>
                                        {field.description}
                                    </p>

                                </div>


                                {/* ================================= */}
                                {/* FOOTER */}
                                {/* ================================= */}

                                <div className={styles.footer}>

                                    <div className={styles.tags}>

                                        {field.tags.map(
                                            (tag) => (

                                                <span key={tag}>
                                                    {tag}
                                                </span>

                                            )
                                        )}

                                    </div>


                                    <div className={styles.arrow}>

                                        <ArrowUpRight
                                            size={19}
                                            strokeWidth={2}
                                        />

                                    </div>

                                </div>

                            </motion.article>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}