"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    ArrowUpRight,
    Play,
} from "lucide-react";

import styles from "./ContentCreatorYouTube.module.css";

const channels = [
    {
        number: "01",
        image: "/content-creator/images/youtube-main.png",
        title: "BLOODYLPGAMING",
        subtitle: "HAUPTKANAL",
        description:
            "Gaming, Serien und große Projekte. Hier entstehen die Geschichten, die BloodyLP seit Jahren begleiten.",
        tags: [
            "GAMING",
            "SERIEN",
            "PLAYTHROUGHS",
        ],
        href: "https://www.youtube.com/c/BloodyLP",
    },
    {
        number: "02",
        image: "/content-creator/images/youtube-vod.png",
        title: "BLOODYLPNUNCUT",
        subtitle: "VOD & UNCUT",
        description:
            "Mehr vom eigentlichen Stream. Ungeschnittene Inhalte und längere Formate für alle, die wirklich alles sehen wollen.",
        tags: [
            "UNCUT",
            "VODS",
            "FULL LENGTH",
        ],
        href: "https://www.youtube.com/@bloodylpuncut",
    },
    {
        number: "03",
        image: "/content-creator/images/youtube-holy.png",
        title: "BLPGAMINGBOOSTER TESTS",
        subtitle: "TESTS & EXPERIMENTE",
        description:
            "Gamingbooster Geschmackstests, Rankings und Experimente. Ein Bereich für alles, was getestet wird.",
        tags: [
            "TESTS",
            "RANKINGS",
            "EXPERIMENTE",
        ],
        href: "https://www.youtube.com/@BLP-Gamingboostertests",
    },
];

export default function ContentCreatorYouTube() {
    return (
        <section
            id="youtube"
            className={styles.section}
        >

            {/* ================================= */}
            {/* BACKGROUND */}
            {/* ================================= */}

            <div className={styles.backgroundGlow} />

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
                        YOUTUBE
                    </span>

                    <h2 className={styles.title}>
                        DREI KANÄLE.
                        <br />
                        <span>DREI SEITEN.</span>
                    </h2>

                    <p className={styles.intro}>
                        BloodyLP ist nicht nur ein Kanal.
                        Unterschiedliche Inhalte brauchen
                        unterschiedliche Räume – deshalb hat
                        jeder Bereich seine eigene Heimat.
                    </p>

                </motion.div>


                {/* ================================= */}
                {/* CHANNEL GRID */}
                {/* ================================= */}

                <div className={styles.grid}>

                    {channels.map((channel, index) => (

                        <motion.article
                            key={channel.number}
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
                                duration: 0.7,
                                delay: index * 0.1,
                                ease: "easeOut",
                            }}
                        >

                            {/* ================================= */}
                            {/* IMAGE */}
                            {/* ================================= */}

                            <div className={styles.imageWrapper}>

                                <Image
                                    src={channel.image}
                                    alt={channel.title}
                                    fill
                                    sizes="(max-width: 800px) 100vw, 33vw"
                                    className={styles.image}
                                />

                                <div className={styles.imageOverlay} />

                                <span className={styles.channelNumber}>
                                    {channel.number}
                                </span>

                                <div className={styles.playIcon}>
                                    <Play
                                        size={18}
                                        fill="currentColor"
                                        strokeWidth={1.8}
                                    />
                                </div>

                            </div>


                            {/* ================================= */}
                            {/* CONTENT */}
                            {/* ================================= */}

                            <div className={styles.cardContent}>

                                <span className={styles.subtitle}>
                                    {channel.subtitle}
                                </span>

                                <h3>
                                    {channel.title}
                                </h3>

                                <p>
                                    {channel.description}
                                </p>


                                {/* ================================= */}
                                {/* TAGS */}
                                {/* ================================= */}

                                <div className={styles.tags}>

                                    {channel.tags.map((tag) => (

                                        <span key={tag}>
                                            {tag}
                                        </span>

                                    ))}

                                </div>


                                {/* ================================= */}
                                {/* LINK */}
                                {/* ================================= */}

                                <a
                                    href={channel.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.button}
                                >

                                    <span>
                                        KANAL BESUCHEN
                                    </span>

                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={2.2}
                                    />

                                </a>

                            </div>

                        </motion.article>

                    ))}

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
                        duration: 0.7,
                        delay: 0.15,
                    }}
                >

                    <span />

                    <p>
                        VOM LIVE-MOMENT ZUM VIDEO.
                        <strong>
                            DER STREAM ENDET NICHT HIER.
                        </strong>
                    </p>

                    <span />

                </motion.div>

            </div>

        </section>
    );
}