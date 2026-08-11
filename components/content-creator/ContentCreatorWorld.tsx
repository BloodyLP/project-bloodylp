"use client";

import { motion } from "framer-motion";

import {
    Trophy,
    Clapperboard,
    Gauge,
    Boxes,
} from "lucide-react";

import styles from "./ContentCreatorWorld.module.css";


const worlds = [

    {
        number: "01",
        icon: Trophy,
        title: "SPORT &",
        highlight: "WETTBEWERB",
        description:
            "NHL, BloodyArmy, Be-A-Pro, DEL-Saisons und eSports. Wenn aus einem Spiel ein echter Wettbewerb wird, bin ich in meinem Element.",
        tags: [
            "NHL",
            "SPORT",
            "eSPORTS",
        ],
    },

    {
        number: "02",
        icon: Clapperboard,
        title: "STORY &",
        highlight: "ADVENTURE",
        description:
            "Große Geschichten, besondere Charaktere und Entscheidungen, bei denen man einfach wissen möchte, wie es weitergeht.",
        tags: [
            "STORY",
            "ACTION",
            "ADVENTURE",
        ],
    },

    {
        number: "03",
        icon: Gauge,
        title: "RACING &",
        highlight: "ACTION",
        description:
            "Geschwindigkeit, Wettbewerb und jede Menge Adrenalin. Aus einem Rennen wird eine Show, wenn jeder Meter zählt.",
        tags: [
            "RACING",
            "SPEED",
            "COMPETITION",
        ],
    },

    {
        number: "04",
        icon: Boxes,
        title: "SIMULATION &",
        highlight: "STRATEGIE",
        description:
            "Aufbauen, planen, optimieren und Entscheidungen treffen. Und manchmal feststellen, dass der eigene Plan überhaupt nicht funktioniert.",
        tags: [
            "SIMULATION",
            "STRATEGIE",
            "BUILDING",
        ],
    },

];


export default function ContentCreatorWorld() {

    return (

        <section
            id="formate"
            className={styles.section}
        >


            {/* ================================================= */}
            {/* BACKGROUND */}
            {/* ================================================= */}

            <div className={styles.backgroundGlow} />

            <div className={styles.gridBackground} />


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
                        MEINE WELT
                    </span>


                    <h2 className={styles.title}>

                        VERSCHIEDENE SPIELE.

                        <br />

                        <span>
                            EIN STIL.
                        </span>

                    </h2>


                    <p className={styles.intro}>

                        Gaming ist vielseitig. Genau deshalb
                        ist auch der Content bei BloodyLP nicht
                        auf ein einziges Genre festgelegt.

                        Was alle Formate verbindet:
                        Unterhaltung, Persönlichkeit und
                        die Community mittendrin.

                    </p>

                </motion.div>



                {/* ================================================= */}
                {/* WORLD GRID */}
                {/* ================================================= */}

                <div className={styles.grid}>


                    {worlds.map((world, index) => {

                        const Icon = world.icon;


                        return (

                            <motion.article

                                key={world.number}

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


                                {/* ================================================= */}
                                {/* NUMBER */}
                                {/* ================================================= */}

                                <span className={styles.number}>
                                    {world.number}
                                </span>


                                {/* ================================================= */}
                                {/* ICON */}
                                {/* ================================================= */}

                                <div className={styles.icon}>

                                    <Icon
                                        size={25}
                                        strokeWidth={1.8}
                                    />

                                </div>


                                {/* ================================================= */}
                                {/* CONTENT */}
                                {/* ================================================= */}

                                <div className={styles.cardContent}>

                                    <h3>

                                        {world.title}

                                        <br />

                                        <span>
                                            {world.highlight}
                                        </span>

                                    </h3>


                                    <p>
                                        {world.description}
                                    </p>

                                </div>


                                {/* ================================================= */}
                                {/* TAGS */}
                                {/* ================================================= */}

                                <div className={styles.tags}>

                                    {world.tags.map((tag) => (

                                        <span key={tag}>
                                            {tag}
                                        </span>

                                    ))}

                                </div>


                            </motion.article>

                        );

                    })}

                </div>


                {/* ================================================= */}
                {/* SIGNATURE */}
                {/* ================================================= */}

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

                        Nicht jedes Spiel ist gleich.

                        <strong>
                            Aber jedes kann eine Geschichte werden.
                        </strong>

                    </p>

                    <span />

                </motion.div>


            </div>

        </section>

    );

}