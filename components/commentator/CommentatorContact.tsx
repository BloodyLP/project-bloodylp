"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Mic2,
    ArrowUpRight,
} from "lucide-react";

import styles from "./CommentatorContact.module.css";


export default function CommentatorContact() {

    const mailSubject =
        "Anfrage Kommentierung / Moderation";

    const mailBody =
        "Hallo Alexander,%0D%0A%0D%0Aich habe eine Anfrage bezüglich einer Kommentierung bzw. Moderation.%0D%0A%0D%0AProjekt / Event:%0D%0ADatum:%0D%0AWeitere Informationen:%0D%0A%0D%0AViele Grüße";


    return (

        <section className={styles.section}>

            <div className={styles.glow} />

            <div className={styles.container}>

                <motion.div
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
                        amount: 0.25,
                    }}
                    transition={{
                        duration: .7,
                    }}
                >

                    {/* ================================= */}
                    {/* ICON */}
                    {/* ================================= */}

                    <div className={styles.iconWrapper}>

                        <Mic2
                            size={28}
                            strokeWidth={1.8}
                        />

                    </div>


                    {/* ================================= */}
                    {/* CONTENT */}
                    {/* ================================= */}

                    <div className={styles.content}>

                        <span className={styles.overline}>
                            KOMMENTAR • MODERATION • eSPORTS
                        </span>

                        <h2>
                            DU PLANST EINE{" "}
                            <span>ÜBERTRAGUNG?</span>
                        </h2>

                        <p>
                            Du suchst einen Kommentator für
                            Eishockey, eSports oder ein besonderes
                            Event? Dann lass uns über dein Projekt
                            sprechen.
                        </p>


                        {/* ================================= */}
                        {/* EMAIL */}
                        {/* ================================= */}

                        <div className={styles.email}>

                            <Mail
                                size={18}
                                strokeWidth={2}
                            />

                            <span>
                                kontakt@bloodylp.de
                            </span>

                        </div>


                        {/* ================================= */}
                        {/* BUTTON */}
                        {/* ================================= */}

                        <a
                            href={`mailto:kontakt@bloodylp.de?subject=${encodeURIComponent(mailSubject)}&body=${mailBody}`}
                            className={styles.button}
                        >

                            <span>
                                KONTAKT AUFNEHMEN
                            </span>

                            <ArrowUpRight
                                size={19}
                                strokeWidth={2.5}
                            />

                        </a>

                    </div>

                </motion.div>

            </div>

        </section>

    );

}