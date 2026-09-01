"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Trophy,
    ArrowUpRight,
    Gamepad2,
    Crosshair,
} from "lucide-react";

import styles from "./ContentCreatorShowCase.module.css";

const projects = [
    {
        number: "01",
        type: "SPORT • WETTBEWERB",
        title: "NHL",
        highlight: "27",
        description:
            "Eishockey gehört zu BloodyLP wie das Mikrofon zum Spiel. NHL verbindet Sport, Wettbewerb, Franchise und die Geschichten, die über eine ganze Saison entstehen.",
        image: "/content-creator/images/nhl-showcase.jpg",
        icon: Trophy,
        featured: true,
    },

    {
        number: "02",
        type: "STORY • ADVENTURE",
        title: "ASSASSIN'S CREED",
        highlight: "BLACK FLAG",
        description:
            "Große Geschichten, offene Welten und Abenteuer, die aus einer Gaming-Session eine eigene Reise machen.",
        image: "/content-creator/images/assassins-creed-showcase.jpg",
        icon: Crosshair,
        featured: true,
    },

    {
        number: "04",
        type: "GAMING • ENTERTAINMENT",
        title: "VIELE SPIELE.",
        highlight: "EINE LEIDENSCHAFT.",
        description:
            "Von Story-Games über Action bis zu Sport und Simulation: Der Gaming-Kosmos von BloodyLP ist größer als ein einzelnes Genre.",
        image: "/content-creator/images/gaming-showcase.png",
        icon: Gamepad2,
        featured: true,
    },
];

export default function ContentCreatorShowcase() {
    return (
        <section
            id="showcase"
            className={styles.section}
        >
            {/* ========================================= */}
            {/* BACKGROUND */}
            {/* ========================================= */}

            <div className={styles.backgroundGlow} />

            <div className={styles.container}>

                {/* ========================================= */}
                {/* HEADER */}
                {/* ========================================= */}

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
                        AKTUELLE WELTEN
                    </span>

                    <h2 className={styles.title}>
                        GAMES, DIE{" "}
                        <span>
                            GESCHICHTEN ERZÄHLEN.
                        </span>
                    </h2>

                    <p className={styles.intro}>
                        Manche Spiele bleiben einfach Spiele.
                        Andere werden zu Abenteuern, Wettbewerben
                        und Erinnerungen, die man gemeinsam erlebt.
                    </p>
                </motion.div>


                {/* ========================================= */}
                {/* SHOWCASE GRID */}
                {/* ========================================= */}

                <div className={styles.grid}>

                    {projects.map((project, index) => {

                        const Icon = project.icon;

                        return (
                            <motion.article
                                key={project.number}
                                className={`${styles.card} ${
                                    project.featured
                                        ? styles.featured
                                        : ""
                                } ${
                                    index === 3
                                        ? styles.lastCard
                                        : ""
                                }`}
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
                                    amount: 0.15,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.08,
                                    ease: "easeOut",
                                }}
                            >

                                {/* ================================= */}
                                {/* IMAGE */}
                                {/* ================================= */}

                                <div className={styles.imageWrapper}>

                                    <Image
                                        src={project.image}
                                        alt={`${project.title} ${project.highlight}`}
                                        fill
                                        sizes={
                                            project.featured
                                                ? "(max-width: 700px) 100vw, 100vw"
                                                : "(max-width: 700px) 100vw, 50vw"
                                        }
                                        className={styles.image}
                                    />

                                    <div
                                        className={
                                            styles.imageOverlay
                                        }
                                    />

                                    <div
                                        className={
                                            styles.imageVignette
                                        }
                                    />

                                </div>


                                {/* ================================= */}
                                {/* NUMBER */}
                                {/* ================================= */}

                                <span
                                    className={styles.number}
                                >
                                    {project.number}
                                </span>


                                {/* ================================= */}
                                {/* ICON */}
                                {/* ================================= */}

                                <div
                                    className={styles.icon}
                                >
                                    <Icon
                                        size={21}
                                        strokeWidth={1.8}
                                    />
                                </div>


                                {/* ================================= */}
                                {/* CONTENT */}
                                {/* ================================= */}

                                <div
                                    className={
                                        styles.cardContent
                                    }
                                >

                                    <span
                                        className={
                                            styles.cardType
                                        }
                                    >
                                        {project.type}
                                    </span>

                                    <h3>

                                        {project.title}

                                        <br />

                                        <span>
                                            {project.highlight}
                                        </span>

                                    </h3>

                                    <p>
                                        {project.description}
                                    </p>

                                </div>


                                {/* ================================= */}
                                {/* CORNER */}
                                {/* ================================= */}

                                <div
                                    className={
                                        styles.cornerArrow
                                    }
                                >
                                    <ArrowUpRight
                                        size={20}
                                        strokeWidth={2}
                                    />
                                </div>

                            </motion.article>
                        );
                    })}

                </div>


                {/* ========================================= */}
                {/* SIGNATURE */}
                {/* ========================================= */}

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