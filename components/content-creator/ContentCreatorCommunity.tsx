"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    ShieldCheck,
    Users,
    MessageCircle,
    ArrowUpRight,
} from "lucide-react";

import styles from "./ContentCreatorCommunity.module.css";

const communityItems = [
    {
        icon: Users,
        title: "GEMEINSAM",
        highlight: "ERLEBEN",
        text:
            "Ein Stream funktioniert für mich nicht nur auf dem Bildschirm. Die Menschen im Chat gehören genauso zum Erlebnis.",
    },
    {
        icon: MessageCircle,
        title: "MITREDEN",
        highlight: "MITFIEBERN",
        text:
            "Ob Diskussion, spontane Entscheidung oder kompletter Eskalationsmoment: Die Community darf und soll Teil der Geschichte sein.",
    },
    {
        icon: ShieldCheck,
        title: "BLOODY",
        highlight: "ARMY",
        text:
            "Aus Zuschauern ist über die Jahre eine Community mit eigener Identität geworden. Die BloodyArmy ist ein Teil dessen, was BloodyLP ausmacht.",
    },
];

export default function ContentCreatorCommunity() {
    return (
        <section
            id="community"
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
                        DIE COMMUNITY
                    </span>

                    <h2 className={styles.title}>
                        HINTER DEM
                        <br />
                        <span>STREAM STEHT IHR.</span>
                    </h2>

                    <p className={styles.intro}>
                        Gaming macht gemeinsam mehr Spaß.
                        Genau deshalb ist die Community kein
                        Nebenschauplatz, sondern ein wichtiger
                        Teil jedes Streams.
                    </p>

                </motion.div>


                {/* ================================= */}
                {/* COMMUNITY GRID */}
                {/* ================================= */}

                <div className={styles.grid}>

                    {communityItems.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.article
                                key={item.title}
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
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                            >

                                <div className={styles.icon}>

                                    {Icon && (
                                        <Icon
                                            size={25}
                                            strokeWidth={1.8}
                                        />
                                    )}

                                </div>


                                <span className={styles.number}>
                                    0{index + 1}
                                </span>


                                <div className={styles.content}>

                                    <h3>
                                        {item.title}
                                        <span>
                                            {item.highlight}
                                        </span>
                                    </h3>

                                    <p>
                                        {item.text}
                                    </p>

                                </div>

                            </motion.article>

                        );

                    })}

                </div>


                {/* ================================= */}
                {/* BLOODYARMY BLOCK */}
                {/* ================================= */}

                <motion.div
                    className={styles.armyBlock}
                    initial={{
                        opacity: 0,
                        y: 30,
                        scale: 0.98,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >

                    {/* ================================= */}
                    {/* EMBLEM */}
                    {/* ================================= */}

                    <div className={styles.armyImage}>

                        <Image
                            src="/content-creator/images/bloodyarmy-community.png"
                            alt="BloodyArmy"
                            fill
                            sizes="140px"
                            className={styles.armyImageContent}
                        />

                    </div>


                    {/* ================================= */}
                    {/* CONTENT */}
                    {/* ================================= */}

                    <div className={styles.armyContent}>

                        <span>
                            BLOODYARMY
                        </span>

                        <h3>
                            Mehr als nur Zuschauer.
                        </h3>

                        <p>
                            Eine Community mit eigener Identität,
                            eigenen Geschichten und vielen gemeinsamen
                            Erinnerungen. Genau das macht aus einem
                            Stream eine Gemeinschaft.
                        </p>

                    </div>


                    {/* ================================= */}
                    {/* BUTTON */}
                    {/* ================================= */}

                    <a
                        href="/community"
                        className={styles.armyButton}
                    >

                        BLOODYARMY ENTDECKEN

                        <ArrowUpRight
                            size={18}
                            strokeWidth={2.2}
                        />

                    </a>

                </motion.div>

            </div>

        </section>
    );
}