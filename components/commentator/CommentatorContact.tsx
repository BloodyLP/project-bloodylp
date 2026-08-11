"use client";

import { motion } from "framer-motion";

import {
    Mail,
    Mic2,
    Trophy,
    Gamepad2,
    Radio,
    ArrowUpRight,
} from "lucide-react";

import styles from "./CommentatorContact.module.css";


/* ========================================================= */
/* CONTACT OPTIONS */
/* ========================================================= */

const contactOptions = [

    {
        icon: Mic2,
        title: "EISHOCKEY",
        text: "Live-Kommentar",
    },

    {
        icon: Gamepad2,
        title: "eSPORTS",
        text: "NHL & Turniere",
    },

    {
        icon: Radio,
        title: "MODERATION",
        text: "Hosting & Events",
    },

    {
        icon: Trophy,
        title: "SPECIALS",
        text: "Individuelle Formate",
    },

];


export default function CommentatorContact() {


    /* ========================================================= */
    /* MAIL */
    /* ========================================================= */

    const mailSubject =
        "Anfrage Kommentierung / Moderation";


    const mailBody =
        "Hallo Alexander,%0D%0A%0D%0Aich habe eine Anfrage bezüglich einer Kommentierung bzw. Moderation.%0D%0A%0D%0AProjekt / Event:%0D%0ADatum:%0D%0AArt der Anfrage:%0D%0AWeitere Informationen:%0D%0A%0D%0AViele Grüße";


    return (

        <section className={styles.section}>


            {/* ================================================= */}
            {/* BACKGROUND */}
            {/* ================================================= */}

            <div className={styles.glow} />

            <div className={styles.gridBackground} />


            {/* ================================================= */}
            {/* CONTAINER */}
            {/* ================================================= */}

            <div className={styles.container}>


                {/* ================================================= */}
                {/* TOP LABEL */}
                {/* ================================================= */}

                <motion.div

                    className={styles.sectionIntro}

                    initial={{
                        opacity: 0,
                        y: 20,
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
                        duration: 0.6,
                    }}

                >

                    <span>
                        KONTAKT & BOOKING
                    </span>

                </motion.div>


                {/* ================================================= */}
                {/* MAIN CARD */}
                {/* ================================================= */}

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
                        duration: .75,
                        ease: "easeOut",
                    }}

                >


                    {/* ================================================= */}
                    {/* ICON */}
                    {/* ================================================= */}

                    <div className={styles.iconWrapper}>

                        <Mic2
                            size={29}
                            strokeWidth={1.8}
                        />

                    </div>


                    {/* ================================================= */}
                    {/* CONTENT */}
                    {/* ================================================= */}

                    <div className={styles.content}>


                        <span className={styles.overline}>

                            KOMMENTAR • MODERATION • eSPORTS

                        </span>


                        <h2>

                            DU PLANST EINE{" "}

                            <span>
                                ÜBERTRAGUNG?
                            </span>

                        </h2>


                        <p>

                            Du suchst einen Kommentator für Eishockey,
                            eSports oder ein besonderes Event? Dann
                            lass uns über dein Projekt sprechen.

                        </p>


                        {/* ================================================= */}
                        {/* OPTIONS */}
                        {/* ================================================= */}

                        <div className={styles.options}>

                            {contactOptions.map((option, index) => {

                                const Icon = option.icon;

                                return (

                                    <motion.div

                                        key={option.title}

                                        className={styles.option}

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
                                            amount: 0.4,
                                        }}

                                        transition={{
                                            duration: .45,
                                            delay: index * .07,
                                        }}

                                    >

                                        <div className={styles.optionIcon}>

                                            <Icon
                                                size={16}
                                                strokeWidth={1.8}
                                            />

                                        </div>


                                        <div>

                                            <strong>
                                                {option.title}
                                            </strong>

                                            <span>
                                                {option.text}
                                            </span>

                                        </div>

                                    </motion.div>

                                );

                            })}

                        </div>


                        {/* ================================================= */}
                        {/* EMAIL */}
                        {/* ================================================= */}

                        <div className={styles.email}>

                            <Mail
                                size={18}
                                strokeWidth={2}
                            />

                            <span>
                                kontakt@bloodylp.de
                            </span>

                        </div>


                        {/* ================================================= */}
                        {/* BUTTON */}
                        {/* ================================================= */}

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


                    {/* ================================================= */}
                    {/* DECORATIVE SIDE NUMBER */}
                    {/* ================================================= */}

                    <div className={styles.sideNumber}>

                        04

                    </div>


                </motion.div>


                {/* ================================================= */}
                {/* FOOTER STATEMENT */}
                {/* ================================================= */}

                <motion.div

                    className={styles.footerStatement}

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
                        duration: .7,
                        delay: .15,
                    }}

                >

                    <span />

                    <p>

                        Dein Event.

                        <strong>
                            Meine Stimme.
                        </strong>

                    </p>

                    <span />

                </motion.div>


            </div>

        </section>

    );

}