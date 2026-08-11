"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Check,
    Mail,
} from "lucide-react";

import styles from "./ContactForm.module.css";


const topics = [
    "Kommentierung / Moderation",
    "Content / Streaming",
    "Kooperation / Partnerschaft",
    "Event / Projekt",
    "Sonstige Anfrage",
];


export default function ContactForm() {

    const [submitted, setSubmitted] = useState(false);

    const [sending, setSending] = useState(false);

    const [error, setError] = useState("");


    /* =========================================
       SUBMIT
    ========================================= */

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {

        event.preventDefault();

        setSending(true);

        setError("");


        const form =
            event.currentTarget;

        const formData =
            new FormData(form);


        const data = {

            name:
                formData.get("name"),

            email:
                formData.get("email"),

            topic:
                formData.get("topic"),

            project:
                formData.get("project"),

            message:
                formData.get("message"),

        };


        try {

            const response =
                await fetch(
                    "/api/contact",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json",
                        },

                        body:
                            JSON.stringify(data),
                    }
                );


            const result =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    result.message ||
                    "Beim Senden ist ein Fehler aufgetreten."
                );

            }


            /* =================================
               SUCCESS
            ================================= */

            setSubmitted(true);

            form.reset();


        } catch (error) {

            console.error(
                "Kontaktformular:",
                error
            );


            setError(

                error instanceof Error
                    ? error.message
                    : "Beim Senden ist ein Fehler aufgetreten."

            );


        } finally {

            setSending(false);

        }

    };


    return (

        <section
            id="anfrage"
            className={styles.section}
        >

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div className={styles.backgroundGlow} />


            <div className={styles.container}>


                {/* =========================================
                    HEADER
                ========================================= */}

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
                        DEINE ANFRAGE
                    </span>


                    <h2 className={styles.title}>

                        ERZÄHL MIR VON

                        <br />

                        <span>
                            DEINEM PROJEKT.
                        </span>

                    </h2>


                    <p className={styles.intro}>

                        Je mehr ich über dein Vorhaben weiß,
                        desto besser kann ich einschätzen,
                        wie wir gemeinsam daraus etwas
                        Besonderes machen können.

                    </p>

                </motion.div>


                {/* =========================================
                    FORM CARD
                ========================================= */}

                <motion.div
                    className={styles.formCard}

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
                        duration: 0.75,
                        ease: "easeOut",
                    }}
                >


                    {/* =========================================
                        FORM
                    ========================================= */}

                    {!submitted ? (

                        <form
                            onSubmit={handleSubmit}
                            className={styles.form}
                        >


                            {/* =================================
                                NAME + E-MAIL
                            ================================= */}

                            <div className={styles.row}>


                                <label
                                    className={styles.field}
                                >

                                    <span>
                                        DEIN NAME
                                    </span>

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Max Mustermann"
                                        autoComplete="name"
                                        required
                                    />

                                </label>


                                <label
                                    className={styles.field}
                                >

                                    <span>
                                        E-MAIL
                                    </span>

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="max@beispiel.de"
                                        autoComplete="email"
                                        required
                                    />

                                </label>


                            </div>


                            {/* =================================
                                TOPIC
                            ================================= */}

                            <label
                                className={styles.field}
                            >

                                <span>
                                    WORUM GEHT ES?
                                </span>


                                <select
                                    name="topic"
                                    defaultValue=""
                                    required
                                >

                                    <option
                                        value=""
                                        disabled
                                    >
                                        Thema auswählen
                                    </option>


                                    {topics.map(
                                        (topic) => (

                                            <option
                                                key={topic}
                                                value={topic}
                                            >

                                                {topic}

                                            </option>

                                        )
                                    )}

                                </select>

                            </label>


                            {/* =================================
                                PROJECT
                            ================================= */}

                            <label
                                className={styles.field}
                            >

                                <span>
                                    PROJEKT / EVENT
                                </span>


                                <input
                                    type="text"
                                    name="project"
                                    placeholder="Wie heißt dein Projekt oder Event?"
                                />

                            </label>


                            {/* =================================
                                MESSAGE
                            ================================= */}

                            <label
                                className={styles.field}
                            >

                                <span>
                                    DEINE NACHRICHT
                                </span>


                                <textarea
                                    name="message"
                                    rows={7}
                                    placeholder="Erzähl mir kurz, worum es geht..."
                                    required
                                />

                            </label>


                            {/* =================================
                                ERROR
                            ================================= */}

                            {error && (

                                <motion.div
                                    className={styles.error}

                                    initial={{
                                        opacity: 0,
                                        y: -5,
                                    }}

                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                >

                                    {error}

                                </motion.div>

                            )}


                            {/* =================================
                                FORM FOOTER
                            ================================= */}

                            <div
                                className={styles.formFooter}
                            >


                                {/* =================================
                                    HINT
                                ================================= */}

                                <div
                                    className={styles.formHint}
                                >

                                    <Mail
                                        size={17}
                                        strokeWidth={1.8}
                                    />

                                    <span>
                                        Ich melde mich persönlich bei dir.
                                    </span>

                                </div>


                                {/* =================================
                                    SUBMIT
                                ================================= */}

                                <button
                                    type="submit"
                                    className={styles.button}
                                    disabled={sending}
                                >

                                    <span>

                                        {sending
                                            ? "WIRD GESENDET..."
                                            : "ANFRAGE SENDEN"
                                        }

                                    </span>


                                    {!sending && (

                                        <ArrowUpRight
                                            size={19}
                                            strokeWidth={2.3}
                                        />

                                    )}

                                </button>


                            </div>

                        </form>


                    ) : (


                        /* =========================================
                           SUCCESS
                        ========================================= */

                        <motion.div
                            className={styles.success}

                            initial={{
                                opacity: 0,
                                scale: 0.97,
                            }}

                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}

                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >


                            {/* =================================
                                SUCCESS ICON
                            ================================= */}

                            <div
                                className={styles.successIcon}
                            >

                                <Check
                                    size={30}
                                    strokeWidth={2}
                                />

                            </div>


                            {/* =================================
                                SUCCESS OVERLINE
                            ================================= */}

                            <span
                                className={
                                    styles.successOverline
                                }
                            >

                                DANKE FÜR DEINE ANFRAGE

                            </span>


                            {/* =================================
                                SUCCESS TITLE
                            ================================= */}

                            <h3>
                                DAS SIEHT GUT AUS.
                            </h3>


                            {/* =================================
                                SUCCESS TEXT
                            ================================= */}

                            <p>

                                Deine Nachricht ist angekommen.
                                Ich melde mich so schnell wie möglich
                                persönlich bei dir.

                            </p>


                        </motion.div>

                    )}

                </motion.div>

            </div>

        </section>

    );
}