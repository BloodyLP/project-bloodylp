"use client";

import { motion } from "framer-motion";
import {
    Mic2,
    Trophy,
    Gamepad2,
} from "lucide-react";

import styles from "./CommentatorIdentity.module.css";


/* ========================================================= */
/* IDENTITY DATA */
/* ========================================================= */

const stats = [

    {
        value: "2018",
        label: "DAS ERSTE BULlY",
        description:
            "Der Einstieg in den professionellen Eishockey-Kommentar. Seitdem ist das Mikrofon ein fester Bestandteil meiner Arbeit.",

        icon: Mic2,

        eyebrow:
            "SEIT",

    },

    {
        value: "DEL2",
        label: "ECHTES EISHOCKEY",
        description:
            "Live-Kommentierung, Emotionen und Geschichten rund um den professionellen Eishockeysport.",

        icon: Trophy,

        eyebrow:
            "LIVE",

    },

    {
        value: "eSPORTS",
        label: "VIRTUELLES EISHOCKEY",
        description:
            "Kommentar, Moderation und Hosting rund um NHL, eDEL, eNL, GCL und weitere eSports-Formate.",

        icon: Gamepad2,

        eyebrow:
            "BROADCAST",

    },

];


/* ========================================================= */
/* COMPONENT */
/* ========================================================= */

export default function CommentatorIdentity() {

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
                {/* INTRO */}
                {/* ================================================= */}

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

                        <span>
                            60 Minuten.
                        </span>

                    </h2>


                    <p className={styles.description}>

                        Seit 2018 begleite ich Eishockeyspiele live.
                        Dabei geht es für mich nicht darum,
                        einfach nur zu beschreiben, was auf dem Eis passiert.

                    </p>


                    <p className={styles.description}>

                        Es geht darum, Emotionen einzufangen,
                        Situationen einzuordnen und die Geschichte
                        eines Spiels gemeinsam mit den Zuschauern zu erzählen.

                    </p>

                </motion.div>


                {/* ================================================= */}
                {/* STATS */}
                {/* ================================================= */}

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

                                {/* ================================= */}
                                {/* CARD NUMBER */}
                                {/* ================================= */}

                                <div className={styles.number}>

                                    {String(index + 1).padStart(2, "0")}

                                </div>


                                {/* ================================= */}
                                {/* CARD TOP */}
                                {/* ================================= */}

                                <div className={styles.cardTop}>

                                    <div className={styles.iconWrapper}>

                                        <Icon
                                            size={24}
                                            strokeWidth={1.8}
                                        />

                                    </div>


                                    <span className={styles.eyebrow}>

                                        {stat.eyebrow}

                                    </span>

                                </div>


                                {/* ================================= */}
                                {/* CARD CONTENT */}
                                {/* ================================= */}

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


                                {/* ================================= */}
                                {/* CARD FOOTER */}
                                {/* ================================= */}

                                <div className={styles.cardFooter}>

                                    <span />

                                    <span>

                                        0{index + 1}

                                    </span>

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