"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import styles from "./CommentatorHero.module.css";


export default function CommentatorHero() {

    return (

        <section className={styles.hero}>


            {/* ========================================= */}
            {/* HERO IMAGE */}
            {/* ========================================= */}

            <div className={styles.imageArea}>

                <div className={styles.heroImage} />

                <div className={styles.imageLeftFade} />

                <div className={styles.imageBottomFade} />

                <div className={styles.imageTopFade} />

            </div>


            {/* ========================================= */}
            {/* GLOBAL VIGNETTE */}
            {/* ========================================= */}

            <div className={styles.vignette} />


            {/* ========================================= */}
            {/* CONTENT */}
            {/* ========================================= */}

            <div className={styles.container}>

                <motion.div

                    className={styles.content}

                    initial={{
                        opacity: 0,
                        x: -40,
                    }}

                    animate={{
                        opacity: 1,
                        x: 0,
                    }}

                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}

                >


                    {/* ================================= */}
                    {/* KICKER */}
                    {/* ================================= */}

                    <span className={styles.kicker}>

                        KOMMENTATOR • MODERATOR • HOST

                    </span>


                    {/* ================================= */}
                    {/* TITLE */}
                    {/* ================================= */}

                    <h1 className={styles.title}>

                        Die Stimme

                        <br />

                        <span>
                            hinter dem Spiel.
                        </span>

                    </h1>


                    {/* ================================= */}
                    {/* DESCRIPTION */}
                    {/* ================================= */}

                    <p className={styles.description}>

                        Eishockey lebt von seinen Geschichten.
                        Von Emotionen, entscheidenden Momenten
                        und den Menschen auf dem Eis.

                    </p>


                    <p className={styles.description}>

                        Seit 2018 begleite ich Eishockey und eSports
                        live am Mikrofon – mit Fachwissen,
                        Leidenschaft und dem Anspruch,
                        jedes Spiel zu einem Erlebnis zu machen.

                    </p>


                    {/* ================================= */}
                    {/* META */}
                    {/* ================================= */}

                    <div className={styles.meta}>


                        <div className={styles.metaItem}>

                            <strong>
                                2018
                            </strong>

                            <span>

                                START ALS

                                <br />

                                KOMMENTATOR

                            </span>

                        </div>


                        <div className={styles.metaDivider} />


                        <div className={styles.metaItem}>

                            <strong>
                                DEL2
                            </strong>

                            <span>

                                EISHOCKEY

                                <br />

                                LIVE

                            </span>

                        </div>


                        <div className={styles.metaDivider} />


                        <div className={styles.metaItem}>

                            <strong>
                                eSPORTS
                            </strong>

                            <span>

                                NHL • eDEL

                                <br />

                                eNL • GCL

                            </span>

                        </div>


                    </div>


                    {/* ================================= */}
                    {/* ACTIONS */}
                    {/* ================================= */}

                    <div className={styles.actions}>


                        {/* ================================= */}
                        {/* STATIONEN */}
                        {/* ================================= */}

                        <Link

                            href="#stationen"

                            className={styles.primaryButton}

                        >

                            MEINE STATIONEN

                            <span>
                                →
                            </span>

                        </Link>


                        {/* ================================= */}
                        {/* KONTAKT */}
                        {/* ================================= */}

                        <Link

                            href="#kontakt"

                            className={styles.secondaryButton}

                        >

                            KONTAKT

                        </Link>


                    </div>


                </motion.div>

            </div>


            {/* ========================================= */}
            {/* SCROLL INDICATOR */}
            {/* ========================================= */}

            <motion.div

                className={styles.scrollIndicator}

                initial={{
                    opacity: 0,
                }}

                animate={{
                    opacity: 1,
                }}

                transition={{
                    delay: 1.2,
                    duration: 0.8,
                }}

            >

                <span />

                <p>
                    SCROLLEN
                </p>

            </motion.div>


        </section>

    );

}