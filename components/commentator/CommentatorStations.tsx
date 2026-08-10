"use client";

import { motion } from "framer-motion";
import {
    Trophy,
    Radio,
    Gamepad2,
    Mic2,
    Star,
} from "lucide-react";

import styles from "./CommentatorStations.module.css";


const stations = [

    {
        year: "2018",

        title: "DEL2",

        subtitle: "PROFESSIONELLER EISHOCKEY-KOMMENTAR",

        description:
            "Der Einstieg in den professionellen Eishockey-Kommentar. Seitdem gehört die DEL2 fest zu meiner Tätigkeit am Mikrofon.",

        icon: Trophy,

        logo: "/commentator/logos/del2.png",

        logoAlt: "DEL2 Logo",

        tags: [
            "EISHOCKEY",
            "DEL2",
            "LIVE-KOMMENTAR",
        ],

        featured: false,

    },

    {
        year: "AKTUELL",

        title: "SPORTEUROPE.TV",

        subtitle: "LIVE-ÜBERTRAGUNGEN",

        description:
            "Live-Kommentare für Eishockeyübertragungen auf SportEurope.TV – mit Leidenschaft, Fachwissen und dem Blick für die Geschichten abseits des reinen Spielgeschehens.",

        icon: Radio,

        logo: "/commentator/logos/sporteurope.png",

        logoAlt: "SportEurope.TV Logo",

        tags: [
            "LIVE",
            "EISHOCKEY",
            "SPORT",
        ],

        featured: false,

    },

    {
        year: "eSPORTS",

        title: "EA SPORTS NHL",

        subtitle: "eSPORTS • KOMMENTAR • MODERATION",

        description:
            "Virtuelles Eishockey ist längst ein fester Bestandteil meiner Arbeit am Mikrofon. Neben klassischen Kommentierungen durfte ich zahlreiche hochkarätige eSports-Formate begleiten, moderieren und kommentieren.",

        icon: Gamepad2,

        logo: "/commentator/logos/ea-sports-nhl.png",

        logoAlt: "EA SPORTS NHL Logo",

        tags: [
            "EA SPORTS NHL",
            "eSPORTS",
            "TURNIERE",
        ],

        featured: true,

        highlights: [

            {
                title: "eDEL",

                text:
                    "Begleitung und Hosting von eDEL-Formaten und Qualifikationen.",
            },

            {
                title: "eNL FINALS",

                text:
                    "Moderation der eNL Finals in Luzern.",
            },

            {
                title: "GCL",

                text:
                    "Duo-Kommentar der GCL für SportsGamer.",
            },

            {
                title: "eSPENGLER CUP 2022",

                text:
                    "Kommentierung des eSpengler Cup 2022 gemeinsam mit Matthias Zander.",
            },

        ],

    },

    {
        year: "AKTUELL",

        title: "DEG eSPORTS",

        subtitle: "eSPORTS-KOMMENTATOR",

        description:
            "Als Kommentator für DEG eSports begleite ich die virtuellen Spiele der Düsseldorfer EG und bringe den Charakter des Clubs auch in die digitale Welt.",

        icon: Mic2,

        logo: "/commentator/logos/deg-esports.png",

        logoAlt: "DEG eSports Logo",

        tags: [
            "DEG",
            "eSPORTS",
            "NHL",
        ],

        featured: false,

    },

];


export default function CommentatorStations() {

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
                        MEIN WEG AM MIKROFON
                    </span>

                    <h2 className={styles.title}>
                        MEINE{" "}
                        <span>STATIONEN.</span>
                    </h2>

                    <p className={styles.intro}>
                        Von der ersten professionellen
                        Eishockeyübertragung bis hin zu
                        eSports und Club-Projekten:
                        Jede Station hat meine Arbeit
                        als Kommentator geprägt.
                    </p>

                </motion.div>


                {/* ================================= */}
                {/* TIMELINE */}
                {/* ================================= */}

                <div className={styles.timeline}>

                    <div className={styles.line} />


                    {stations.map((station, index) => {

                        const Icon = station.icon;

                        return (

                            <motion.article
                                key={`${station.title}-${station.year}`}
                                className={
                                    station.featured
                                        ? `${styles.station} ${styles.featuredStation}`
                                        : styles.station
                                }
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
                                    amount: .2,
                                }}
                                transition={{
                                    duration: .65,
                                    delay: index * .1,
                                }}
                            >

                                {/* ================================= */}
                                {/* YEAR */}
                                {/* ================================= */}

                                <div className={styles.year}>
                                    {station.year}
                                </div>


                                {/* ================================= */}
                                {/* DOT */}
                                {/* ================================= */}

                                <div className={styles.dot}>

                                    <Icon
                                        size={18}
                                        strokeWidth={2}
                                    />

                                </div>


                                {/* ================================= */}
                                {/* CARD */}
                                {/* ================================= */}

                                <div className={styles.card}>

                                    {/* ================================= */}
                                    {/* LOGO */}
                                    {/* ================================= */}

                                    <div className={styles.logoArea}>

                                        <img
                                            src={station.logo}
                                            alt={station.logoAlt}
                                            className={styles.logo}
                                        />

                                    </div>


                                    {/* ================================= */}
                                    {/* CONTENT */}
                                    {/* ================================= */}

                                    <div className={styles.cardContent}>

                                        <span className={styles.subtitle}>
                                            {station.subtitle}
                                        </span>

                                        <h3>
                                            {station.title}
                                        </h3>

                                        <p>
                                            {station.description}
                                        </p>


                                        {/* ================================= */}
                                        {/* eSPORTS REFERENZEN */}
                                        {/* ================================= */}

                                        {station.highlights && (

                                            <div className={styles.highlights}>

                                                <div className={styles.highlightsHeader}>

                                                    <Star
                                                        size={14}
                                                        strokeWidth={2.5}
                                                    />

                                                    <span>
                                                        eSPORTS REFERENZEN
                                                    </span>

                                                </div>


                                                <div className={styles.highlightGrid}>

                                                    {station.highlights.map(
                                                        (highlight) => (

                                                            <div
                                                                key={highlight.title}
                                                                className={styles.highlight}
                                                            >

                                                                <strong>
                                                                    {highlight.title}
                                                                </strong>

                                                                <span>
                                                                    {highlight.text}
                                                                </span>

                                                            </div>

                                                        )
                                                    )}

                                                </div>

                                            </div>

                                        )}


                                        {/* ================================= */}
                                        {/* TAGS */}
                                        {/* ================================= */}

                                        <div className={styles.tags}>

                                            {station.tags.map(
                                                (tag) => (

                                                    <span key={tag}>
                                                        {tag}
                                                    </span>

                                                )
                                            )}

                                        </div>

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