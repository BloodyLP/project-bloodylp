"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import {
    playerCareer,
} from "@/components/live/data/nhl27/career";

import {
    careerTeams,
} from "@/components/live/data/nhl27/teams";

import {
    careerAwards,
} from "@/components/live/data/nhl27/awards";

import {
    careerHighlights,
} from "@/components/live/data/nhl27/highlights";

import {
    playerProfile,
} from "@/components/live/data/nhl27/player-profile";

import styles from "./page.module.css";



const pennyDelStandings = [
    { rank: 1, team: "Kölner Haie", games: 12, points: 26, wins: 8, losses: 3, otWins: 1, otLosses: 0, percentage: "72,2 %", goalsFor: 51, goalsAgainst: 32 },
    { rank: 2, team: "Fischtown Pinguins Bremerhaven", games: 11, points: 24, wins: 7, losses: 2, otWins: 1, otLosses: 1, percentage: "72,7 %", goalsFor: 35, goalsAgainst: 25 },
    { rank: 3, team: "Nürnberg Ice Tigers", games: 12, points: 24, wins: 8, losses: 4, otWins: 0, otLosses: 0, percentage: "66,7 %", goalsFor: 39, goalsAgainst: 32 },
    { rank: 4, team: "Eisbären Berlin", games: 11, points: 19, wins: 4, losses: 3, otWins: 3, otLosses: 1, percentage: "57,6 %", goalsFor: 29, goalsAgainst: 22 },
    { rank: 5, team: "EHC Red Bull München", games: 11, points: 19, wins: 6, losses: 4, otWins: 0, otLosses: 1, percentage: "57,6 %", goalsFor: 39, goalsAgainst: 34 },
    { rank: 6, team: "Schwenninger Wild Wings", games: 12, points: 18, wins: 5, losses: 5, otWins: 1, otLosses: 1, percentage: "50,0 %", goalsFor: 30, goalsAgainst: 35 },
    { rank: 7, team: "Krefeld Pinguine", games: 11, points: 17, wins: 3, losses: 4, otWins: 4, otLosses: 0, percentage: "51,5 %", goalsFor: 26, goalsAgainst: 25 },
    { rank: 8, team: "Straubing Tigers", games: 11, points: 16, wins: 5, losses: 5, otWins: 0, otLosses: 1, percentage: "48,5 %", goalsFor: 29, goalsAgainst: 30 },
    { rank: 9, team: "Adler Mannheim", games: 12, points: 15, wins: 4, losses: 6, otWins: 1, otLosses: 1, percentage: "41,7 %", goalsFor: 29, goalsAgainst: 39 },
    { rank: 10, team: "Grizzlys Wolfsburg", games: 12, points: 15, wins: 3, losses: 4, otWins: 1, otLosses: 4, percentage: "41,7 %", goalsFor: 28, goalsAgainst: 33 },
    { rank: 11, team: "Augsburger Panther", games: 11, points: 14, wins: 4, losses: 6, otWins: 1, otLosses: 0, percentage: "42,4 %", goalsFor: 29, goalsAgainst: 44 },
    { rank: 12, team: "Löwen Frankfurt", games: 11, points: 13, wins: 4, losses: 6, otWins: 0, otLosses: 1, percentage: "39,4 %", goalsFor: 34, goalsAgainst: 36 },
    { rank: 13, team: "ERC Ingolstadt", games: 12, points: 12, wins: 3, losses: 7, otWins: 1, otLosses: 1, percentage: "33,3 %", goalsFor: 38, goalsAgainst: 39 },
    { rank: 14, team: "Iserlohn Roosters", games: 11, points: 8, wins: 2, losses: 7, otWins: 0, otLosses: 2, percentage: "24,2 %", goalsFor: 22, goalsAgainst: 32 },
];


const krefeldSkaterStats = [
    { name: "C. Suess", position: "LA", games: 11, goals: 6, assists: 4, points: 10, plusMinus: 4, pim: 0, shots: 17, shootingPercentage: "35,3 %", hits: 1, powerPlayGoals: 1, powerPlayPoints: 1 },
    { name: "S. Percy", position: "LV/RV", games: 11, goals: 2, assists: 5, points: 7, plusMinus: 3, pim: 0, shots: 14, shootingPercentage: "14,3 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "T. Kero", position: "C", games: 11, goals: 3, assists: 3, points: 6, plusMinus: 0, pim: 0, shots: 23, shootingPercentage: "13,0 %", hits: 2, powerPlayGoals: 0, powerPlayPoints: 1 },
    { name: "P. Gogulla", position: "LA", games: 8, goals: 3, assists: 2, points: 5, plusMinus: -3, pim: 4, shots: 12, shootingPercentage: "25,0 %", hits: 1, powerPlayGoals: 1, powerPlayPoints: 1 },
    { name: "P. Varone", position: "C/LA", games: 11, goals: 3, assists: 2, points: 5, plusMinus: 1, pim: 0, shots: 12, shootingPercentage: "25,0 %", hits: 1, powerPlayGoals: 0, powerPlayPoints: 1 },
    { name: "O. Mebus", position: "LV/RV", games: 9, goals: 0, assists: 5, points: 5, plusMinus: 9, pim: 4, shots: 12, shootingPercentage: "0,0 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "M. Santos", position: "RA", games: 11, goals: 2, assists: 2, points: 4, plusMinus: -3, pim: 0, shots: 20, shootingPercentage: "10,0 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "M. Gildon", position: "LV", games: 11, goals: 1, assists: 3, points: 4, plusMinus: -6, pim: 0, shots: 9, shootingPercentage: "11,1 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "M. Müller", position: "C", games: 11, goals: 1, assists: 2, points: 3, plusMinus: 0, pim: 0, shots: 14, shootingPercentage: "7,1 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "A. Weiß", position: "C", games: 11, goals: 1, assists: 2, points: 3, plusMinus: 0, pim: 2, shots: 12, shootingPercentage: "8,3 %", hits: 1, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "L. Hauf", position: "LA", games: 11, goals: 1, assists: 1, points: 2, plusMinus: 0, pim: 0, shots: 2, shootingPercentage: "50,0 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "Z. Dybowski", position: "RV", games: 11, goals: 0, assists: 2, points: 2, plusMinus: -1, pim: 0, shots: 6, shootingPercentage: "0,0 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "M. Newton", position: "C/RA", games: 5, goals: 1, assists: 0, points: 1, plusMinus: -6, pim: 0, shots: 9, shootingPercentage: "11,1 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "Y. Proske", position: "C/RA", games: 9, goals: 1, assists: 0, points: 1, plusMinus: 0, pim: 0, shots: 3, shootingPercentage: "33,3 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "A. Payerl", position: "LA", games: 11, goals: 1, assists: 0, points: 1, plusMinus: 1, pim: 0, shots: 6, shootingPercentage: "16,7 %", hits: 1, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "E. Buschmann", position: "LV/RV", games: 2, goals: 0, assists: 1, points: 1, plusMinus: -1, pim: 0, shots: 1, shootingPercentage: "0,0 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "D. Vandane", position: "RV/LV", games: 9, goals: 0, assists: 1, points: 1, plusMinus: -2, pim: 15, shots: 2, shootingPercentage: "0,0 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "M. Zengerle", position: "C", games: 9, goals: 0, assists: 1, points: 1, plusMinus: 4, pim: 0, shots: 11, shootingPercentage: "0,0 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "D. Bruch", position: "RA/C", games: 9, goals: 0, assists: 1, points: 1, plusMinus: 0, pim: 0, shots: 3, shootingPercentage: "0,0 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "C. Konze", position: "RV", games: 2, goals: 0, assists: 0, points: 0, plusMinus: 0, pim: 0, shots: 1, shootingPercentage: "0,0 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "T. Schütz", position: "LA/RA", games: 2, goals: 0, assists: 0, points: 0, plusMinus: -1, pim: 0, shots: 0, shootingPercentage: "0,0 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "R. Mäkitalo", position: "C", games: 2, goals: 0, assists: 0, points: 0, plusMinus: 0, pim: 0, shots: 0, shootingPercentage: "0,0 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
    { name: "M. Köhler", position: "LV", games: 11, goals: 0, assists: 0, points: 0, plusMinus: -4, pim: 0, shots: 2, shootingPercentage: "0,0 %", hits: 0, powerPlayGoals: 0, powerPlayPoints: 0 },
];

const krefeldGoalieStats = [
    { name: "J. Jatkola", games: 9, wins: 6, losses: 3, otLosses: 0, shutouts: 2, savePercentage: "0,871", goalsAgainstAverage: "1,95", saves: 121, shotsAgainst: 139, goalsAgainst: 18 },
    { name: "J. Schulte", games: 2, wins: 1, losses: 1, otLosses: 0, shutouts: 0, savePercentage: "0,880", goalsAgainstAverage: "3,00", saves: 44, shotsAgainst: 50, goalsAgainst: 6 },
];


const krefeldGames = [
    { day: 1, date: "18.09.2026", home: "Krefeld Pinguine", away: "Fischtown Pinguins Bremerhaven", homeScore: 3, awayScore: 7, overtime: false },
    { day: 2, date: "20.09.2026", home: "Straubing Tigers", away: "Krefeld Pinguine", homeScore: 5, awayScore: 3, overtime: false },
    { day: 3, date: "25.09.2026", home: "Adler Mannheim", away: "Krefeld Pinguine", homeScore: 1, awayScore: 2, overtime: true },
    { day: 4, date: "27.09.2026", home: "Krefeld Pinguine", away: "Schwenninger Wild Wings", homeScore: 3, awayScore: 2, overtime: true },
    { day: 5, date: "02.10.2026", home: "Krefeld Pinguine", away: "ERC Ingolstadt", homeScore: 2, awayScore: 1, overtime: false },
    { day: 6, date: "04.10.2026", home: "Iserlohn Roosters", away: "Krefeld Pinguine", homeScore: 2, awayScore: 0, overtime: false },
    { day: 7, date: "08.10.2026", home: "Löwen Frankfurt", away: "Krefeld Pinguine", homeScore: 3, awayScore: 4, overtime: true },
    { day: 8, date: "11.10.2026", home: "Krefeld Pinguine", away: "Augsburger Panther", homeScore: 3, awayScore: 0, overtime: false },
    { day: 9, date: "15.10.2026", home: "Grizzlys Wolfsburg", away: "Krefeld Pinguine", homeScore: 3, awayScore: 1, overtime: false },
    { day: 10, date: "18.10.2026", home: "Krefeld Pinguine", away: "Eisbären Berlin", homeScore: 2, awayScore: 1, overtime: true },
    { day: 11, date: "23.10.2026", home: "Nürnberg Ice Tigers", away: "Krefeld Pinguine", homeScore: 0, awayScore: 3, overtime: false },
    { day: 12, date: "25.10.2026", home: "Krefeld Pinguine", away: "EHC Red Bull München", homeScore: null, awayScore: null, overtime: false },
    { day: 41, date: "28.10.2026", home: "Krefeld Pinguine", away: "Schwenninger Wild Wings", homeScore: null, awayScore: null, overtime: false },
    { day: 13, date: "30.10.2026", home: "Krefeld Pinguine", away: "Kölner Haie", homeScore: null, awayScore: null, overtime: false },
    { day: 14, date: "01.11.2026", home: "Schwenninger Wild Wings", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 15, date: "13.11.2026", home: "Krefeld Pinguine", away: "Nürnberg Ice Tigers", homeScore: null, awayScore: null, overtime: false },
    { day: 16, date: "15.11.2026", home: "EHC Red Bull München", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 17, date: "19.11.2026", home: "Krefeld Pinguine", away: "Straubing Tigers", homeScore: null, awayScore: null, overtime: false },
    { day: 18, date: "22.11.2026", home: "Krefeld Pinguine", away: "Grizzlys Wolfsburg", homeScore: null, awayScore: null, overtime: false },
    { day: 19, date: "24.11.2026", home: "Augsburger Panther", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 20, date: "27.11.2026", home: "ERC Ingolstadt", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 21, date: "29.11.2026", home: "Krefeld Pinguine", away: "Iserlohn Roosters", homeScore: null, awayScore: null, overtime: false },
    { day: 22, date: "04.12.2026", home: "Fischtown Pinguins Bremerhaven", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 23, date: "06.12.2026", home: "Krefeld Pinguine", away: "Adler Mannheim", homeScore: null, awayScore: null, overtime: false },
    { day: 24, date: "08.12.2026", home: "Kölner Haie", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 25, date: "11.12.2026", home: "Krefeld Pinguine", away: "Löwen Frankfurt", homeScore: null, awayScore: null, overtime: false },
    { day: 26, date: "13.12.2026", home: "Eisbären Berlin", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 27, date: "18.12.2026", home: "Augsburger Panther", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 28, date: "20.12.2026", home: "EHC Red Bull München", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 29, date: "23.12.2026", home: "Krefeld Pinguine", away: "Grizzlys Wolfsburg", homeScore: null, awayScore: null, overtime: false },
    { day: 30, date: "27.12.2026", home: "Straubing Tigers", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 31, date: "29.12.2026", home: "Krefeld Pinguine", away: "Fischtown Pinguins Bremerhaven", homeScore: null, awayScore: null, overtime: false },
    { day: 32, date: "02.01.2027", home: "Eisbären Berlin", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 33, date: "05.01.2027", home: "Krefeld Pinguine", away: "Adler Mannheim", homeScore: null, awayScore: null, overtime: false },
    { day: 34, date: "08.01.2027", home: "Krefeld Pinguine", away: "Löwen Frankfurt", homeScore: null, awayScore: null, overtime: false },
    { day: 35, date: "10.01.2027", home: "Iserlohn Roosters", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 36, date: "15.01.2027", home: "ERC Ingolstadt", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 37, date: "17.01.2027", home: "Schwenninger Wild Wings", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 38, date: "21.01.2027", home: "Nürnberg Ice Tigers", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 39, date: "24.01.2027", home: "Krefeld Pinguine", away: "Kölner Haie", homeScore: null, awayScore: null, overtime: false },
    { day: 40, date: "29.01.2027", home: "Adler Mannheim", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 42, date: "02.02.2027", home: "Krefeld Pinguine", away: "Augsburger Panther", homeScore: null, awayScore: null, overtime: false },
    { day: 43, date: "05.02.2027", home: "Krefeld Pinguine", away: "Iserlohn Roosters", homeScore: null, awayScore: null, overtime: false },
    { day: 44, date: "07.02.2027", home: "Krefeld Pinguine", away: "ERC Ingolstadt", homeScore: null, awayScore: null, overtime: false },
    { day: 45, date: "17.02.2027", home: "Löwen Frankfurt", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 46, date: "19.02.2027", home: "Krefeld Pinguine", away: "Nürnberg Ice Tigers", homeScore: null, awayScore: null, overtime: false },
    { day: 47, date: "21.02.2027", home: "Kölner Haie", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 48, date: "26.02.2027", home: "Fischtown Pinguins Bremerhaven", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
    { day: 49, date: "28.02.2027", home: "Krefeld Pinguine", away: "EHC Red Bull München", homeScore: null, awayScore: null, overtime: false },
    { day: 50, date: "03.03.2027", home: "Krefeld Pinguine", away: "Straubing Tigers", homeScore: null, awayScore: null, overtime: false },
    { day: 51, date: "05.03.2027", home: "Krefeld Pinguine", away: "Eisbären Berlin", homeScore: null, awayScore: null, overtime: false },
    { day: 52, date: "07.03.2027", home: "Grizzlys Wolfsburg", away: "Krefeld Pinguine", homeScore: null, awayScore: null, overtime: false },
];

export default function NHL27Page() {
    const [activeProject, setActiveProject] = useState<"be-a-pro" | "pennydel" | "bloodyarmy">("be-a-pro");

    return (
        <main className={styles.page}>

            {/* ========================================================= */}
            {/* HERO */}
            {/* ========================================================= */}

            <section className={styles.hero}>

                <div className={styles.heroGlow} />

                <div className={styles.heroInner}>

                    {/* ================================================= */}
                    {/* HERO TEXT */}
                    {/* ================================================= */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className={styles.heroContent}
                    >

                        <div className={styles.eyebrow}>
                            NHL 27
                        </div>

                        <h1>
                            NHL 27
                            <span>
                                PROJEKTE &amp; KARRIEREN
                            </span>
                        </h1>

                        <p className={styles.heroText}>
                            Die NHL-27-Projekte von BloodyLP.
                            Karrieren, Statistiken, Erfolge und
                            zukünftige Spielmodi an einem Ort.
                        </p>

                        <div className={styles.heroActions}>

                            <button
                                type="button"
                                className={styles.primaryButton}
                                onClick={() => setActiveProject("be-a-pro")}
                            >
                                BE A PRO
                                <span>→</span>
                            </button>

                                                        <button
                                type="button"
                                className={styles.primaryButton}
                                onClick={() => setActiveProject("pennydel")}
                            >
                                PENNY DEL
                                <span>→</span>
                            </button>

                                                                                    <button
                                type="button"
                                className={styles.primaryButton}
                                onClick={() => setActiveProject("bloodyarmy")}
                            >
                                BLOODY ARMY
                                <span>→</span>
                            </button>

                        </div>

                    </motion.div>


                    {/* ================================================= */}
                    {/* NHL 27 COVER / PROJEKT-HUB */}
                    {/* ================================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                        }}
                        className={styles.heroVisual}
                    >

                        <div className={styles.nhlLogo}>

                            <Image
                                src="/images/nhl27/cover.jpg"
                                alt="NHL 27"
                                width={420}
                                height={420}
                                priority
                            />

                        </div>

                        <div className={styles.heroVisualText}>

                            <span>
                                OFFIZIELLER
                            </span>

                            <strong>
                                PROJEKT-HUB
                            </strong>

                        </div>

                    </motion.div>

                </div>

            </section>


            {/* ========================================================= */}
            {/* PROJEKT-AUSWAHL */}
            {/* ========================================================= */}

            <section
                id="projekt-auswahl"
                className={styles.projectSwitcherSection}
                aria-label="NHL-27-Projekt auswählen"
            >
                <div className={styles.projectSwitcherHeader}>
                    <span className={styles.sectionEyebrow}>NHL 27 • PROJEKTE</span>
                    <p>Wähle dein Projekt aus. Der ausgewählte Bereich wird hier angezeigt.</p>
                </div>

                <div className={styles.projectSwitcher} role="tablist" aria-label="NHL-27-Projekte">
                    <button
                        type="button"
                        role="tab"
                        id="tab-be-a-pro"
                        aria-selected={activeProject === "be-a-pro"}
                        aria-controls="panel-be-a-pro"
                        className={`${styles.projectTab} ${activeProject === "be-a-pro" ? styles.projectTabActive : ""}`}
                        onClick={() => setActiveProject("be-a-pro")}
                    >
                        <span className={styles.projectTabNumber}></span>
                        <span>BE A PRO</span>
                        <span className={styles.projectTabArrow}></span>
                    </button>

                    <button
                        type="button"
                        role="tab"
                        id="tab-pennydel"
                        aria-selected={activeProject === "pennydel"}
                        aria-controls="panel-pennydel"
                        className={`${styles.projectTab} ${activeProject === "pennydel" ? styles.projectTabActive : ""}`}
                        onClick={() => setActiveProject("pennydel")}
                    >
                        <span className={styles.projectTabNumber}></span>
                        <span>PENNYDEL-SAISON</span>
                        <span className={styles.projectTabArrow}></span>
                    </button>

                    <button
                        type="button"
                        role="tab"
                        id="tab-bloodyarmy"
                        aria-selected={activeProject === "bloodyarmy"}
                        aria-controls="panel-bloodyarmy"
                        className={`${styles.projectTab} ${activeProject === "bloodyarmy" ? styles.projectTabActive : ""}`}
                        onClick={() => setActiveProject("bloodyarmy")}
                    >
                        <span className={styles.projectTabNumber}></span>
                        <span>BLOODYARMY</span>
                        <span className={styles.projectTabArrow}></span>
                    </button>
                </div>
            </section>

            {/* ========================================================= */}
            {/* BE A PRO */}
            {/* ========================================================= */}

            {activeProject === "be-a-pro" && (
            <section
                id="be-a-pro"
                className={styles.section}
            >

                <div className={styles.sectionHeader}>

                    <div>

                        <span className={styles.sectionEyebrow}>
                            NHL 27 • BE A PRO
                        </span>

                        <h2>
                            SPIELERKARRIERE
                        </h2>

                    </div>

                    <p>
                        Die komplette Karriere mit aktuellem Verein,
                        Statistiken, Auszeichnungen und wichtigen
                        Stationen.
                    </p>

                </div>


                {/* ===================================================== */}
                {/* SPIELER-STECKBRIEF */}
                {/* ===================================================== */}

                <motion.div
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
                        amount: 0.15,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className={styles.playerProfile}
                >

                    <div className={styles.playerProfileImage}>

                        <Image
                            src={playerProfile.image}
                            alt={playerProfile.name}
                            width={700}
                            height={900}
                            priority
                        />

                    </div>


                    <div className={styles.playerProfileContent}>

                        <div className={styles.playerProfileEyebrow}>
                            SPIELERPROFIL
                        </div>


                        <div className={styles.playerProfileHeader}>

                            <div>

                                <h3>
                                    {playerProfile.name}
                                </h3>

                                <p>
                                    {playerProfile.currentTeam}
                                    {" • "}
                                    {playerProfile.currentLeague}
                                </p>

                            </div>


                            <div className={styles.playerProfileNumber}>
                                #{playerProfile.number}
                            </div>

                        </div>


                        <div className={styles.playerProfileGrid}>

                            <div className={styles.playerProfileItem}>

                                <span>
                                    GEBURTSORT
                                </span>

                                <strong>
                                    {playerProfile.birthPlace}
                                </strong>

                            </div>


                            <div className={styles.playerProfileItem}>

                                <span>
                                    GEBURTSDATUM
                                </span>

                                <strong>
                                    {playerProfile.birthDate}
                                </strong>

                            </div>


                            <div className={styles.playerProfileItem}>

                                <span>
                                    POSITION
                                </span>

                                <strong>
                                    {playerProfile.position}
                                </strong>

                            </div>


                            <div className={styles.playerProfileItem}>

                                <span>
                                    SCHUSSHAND
                                </span>

                                <strong>
                                    {playerProfile.shoots}
                                </strong>

                            </div>


                            <div className={styles.playerProfileItem}>

                                <span>
                                    GRÖSSE
                                </span>

                                <strong>
                                    {playerProfile.height}
                                </strong>

                            </div>


                            <div className={styles.playerProfileItem}>

                                <span>
                                    GEWICHT
                                </span>

                                <strong>
                                    {playerProfile.weight}
                                </strong>

                            </div>

                        </div>


                        <div className={styles.playerProfileContract}>

                            <div>

                                <span>
                                    AKTUELLER VEREIN
                                </span>

                                <strong>
                                    {playerProfile.currentTeam}
                                </strong>

                            </div>


                            <div>

                                <span>
                                    VERTRAG
                                </span>

                                <strong>
                                    BIS SAISON {playerProfile.contractUntil}
                                </strong>

                            </div>

                        </div>

                    </div>

                </motion.div>


                {/* ===================================================== */}
                {/* KARRIERE-STATISTIKEN */}
                {/* ===================================================== */}

                <div className={styles.subHeader}>

                    <span>
                        KARRIERE-STATISTIKEN
                    </span>

                    <h3>
                        HAUPTRUNDE
                    </h3>

                </div>


                <div className={styles.statsGrid}>

                    <StatCard
                        value={playerCareer.stats.games}
                        label="SPIELE"
                    />

                    <StatCard
                        value={playerCareer.stats.goals}
                        label="TORE"
                    />

                    <StatCard
                        value={playerCareer.stats.assists}
                        label="ASSISTS"
                    />

                    <StatCard
                        value={playerCareer.stats.points}
                        label="PUNKTE"
                        highlight
                    />

                    <StatCard
                        value={playerCareer.stats.plusMinus}
                        label="+ / -"
                    />

                    <StatCard
                        value={playerCareer.stats.pim}
                        label="STRAFMINUTEN"
                    />

                </div>


                {/* ===================================================== */}
                {/* PLAYOFF-KARRIERE-STATISTIKEN */}
                {/* ===================================================== */}

                <div className={styles.subHeader}>

                    <span>
                        KARRIERE-STATISTIKEN
                    </span>

                    <h3>
                        PLAYOFFS
                    </h3>

                </div>


                <div className={styles.statsGrid}>

                    <StatCard
                        value={playerCareer.playoffStats.games}
                        label="SPIELE"
                    />

                    <StatCard
                        value={playerCareer.playoffStats.goals}
                        label="TORE"
                    />

                    <StatCard
                        value={playerCareer.playoffStats.assists}
                        label="ASSISTS"
                    />

                    <StatCard
                        value={playerCareer.playoffStats.points}
                        label="PUNKTE"
                        highlight
                    />

                    <StatCard
                        value={playerCareer.playoffStats.plusMinus}
                        label="+ / -"
                    />

                    <StatCard
                        value={playerCareer.playoffStats.pim}
                        label="STRAFMINUTEN"
                    />

                </div>


                {/* ===================================================== */}
                {/* KARRIERE-TEAMS */}
                {/* ===================================================== */}

                <div className={styles.subHeader}>

                    <span>
                        KARRIERE
                    </span>

                    <h3>
                        VEREINE &amp; STATIONEN
                    </h3>

                </div>


                <div className={styles.teamGrid}>

                    {careerTeams.map((team, index) => (

                        <motion.div
                            key={`${team.team}-${index}`}
                            whileHover={{ y: -4 }}
                            className={styles.careerTeamCard}
                        >

                            {/* ================================================= */}
                            {/* KOPF */}
                            {/* ================================================= */}

                            <div className={styles.careerTeamHeader}>

                                <div className={styles.teamSeason}>
                                    {team.season}
                                </div>

                                <span
                                    className={
                                        team.status === "AKTUELL"
                                            ? styles.teamStatusActive
                                            : styles.teamStatusInactive
                                    }
                                >
                                    {team.status}
                                </span>

                            </div>


                            {/* ================================================= */}
                            {/* LOGO + VEREIN */}
                            {/* ================================================= */}

                            <div className={styles.careerTeamIdentity}>

                                <div className={styles.careerTeamLogo}>

                                    {team.logo && (
                                        <Image
                                            src={team.logo}
                                            alt={team.team}
                                            width={90}
                                            height={90}
                                        />
                                    )}

                                </div>


                                <div className={styles.careerTeamInfo}>

                                    <span>
                                        {team.league}
                                    </span>

                                    <h4>
                                        {team.team}
                                    </h4>

                                </div>

                            </div>


                            {/* ================================================= */}
                            {/* VERTRAG */}
                            {/* ================================================= */}

                            {team.contractUntil && (

                                <div className={styles.teamContract}>

                                    <span>
                                        VERTRAG
                                    </span>

                                    <strong>
                                        BIS SAISON {team.contractUntil}
                                    </strong>

                                </div>

                            )}


                            {/* ================================================= */}
                            {/* STATISTIKEN */}
                            {/* ================================================= */}

                            <div className={styles.teamStats}>

                                <div>

                                    <strong>
                                        {team.games}
                                    </strong>

                                    <span>
                                        SPIELE
                                    </span>

                                </div>


                                <div>

                                    <strong>
                                        {team.goals}
                                    </strong>

                                    <span>
                                        TORE
                                    </span>

                                </div>


                                <div>

                                    <strong>
                                        {team.assists}
                                    </strong>

                                    <span>
                                        ASSISTS
                                    </span>

                                </div>


                                <div>

                                    <strong>
                                        {team.points}
                                    </strong>

                                    <span>
                                        PUNKTE
                                    </span>

                                </div>


                                <div>

                                    <strong>
                                        {team.plusMinus > 0
                                            ? `+${team.plusMinus}`
                                            : team.plusMinus}
                                    </strong>

                                    <span>
                                        + / -
                                    </span>

                                </div>


                                <div>

                                    <strong>
                                        {team.pim}
                                    </strong>

                                    <span>
                                        STR. MIN.
                                    </span>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>


                {/* ===================================================== */}
                {/* AUSZEICHNUNGEN */}
                {/* ===================================================== */}

                <div className={styles.subHeader}>

                    <span>
                        ERFOLGE
                    </span>

                    <h3>
                        AUSZEICHNUNGEN &amp; ERFOLGE
                    </h3>

                </div>


                <div className={styles.awardGrid}>

                    {careerAwards.map((award, index) => (

                        <motion.div
                            key={`${award.title}-${index}`}
                            whileHover={{ y: -4 }}
                            className={`${styles.awardCard} ${
                                award.variant === "silver"
                                    ? styles.awardCardSilver
                                    : ""
                            }`}
                        >

                            <div
                                className={`${styles.awardIcon} ${
                                    award.variant === "silver"
                                        ? styles.awardIconSilver
                                        : ""
                                }`}
                            >

                                {award.image && (
                                    <Image
                                        src={award.image}
                                        alt={award.title}
                                        width={52}
                                        height={52}
                                    />
                                )}

                            </div>


                            <div>

                                <span>
                                    {award.year}
                                </span>

                                <h4>
                                    {award.title}
                                </h4>

                                <p>
                                    {award.description}
                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>


                {/* ===================================================== */}
                {/* KARRIERE-HIGHLIGHTS */}
                {/* ===================================================== */}

                <div className={styles.subHeader}>

                    <span>
                        KARRIERE
                    </span>

                    <h3>
                        HIGHLIGHTS
                    </h3>

                </div>


                <div className={styles.highlightGrid}>

                    {careerHighlights.map((highlight, index) => (

                        <motion.div
                            key={`${highlight.title}-${index}`}
                            whileHover={{ y: -4 }}
                            className={styles.highlightCard}
                        >

                            <div className={styles.highlightNumber}>
                                {String(index + 1).padStart(2, "0")}
                            </div>


                            <div>

                                <span>
                                    {highlight.category}
                                </span>

                                <h4>
                                    {highlight.title}
                                </h4>

                                <p>
                                    {highlight.description}
                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </section>
            )}

            {activeProject === "pennydel" && (
                <section
                    id="panel-pennydel"
                    role="tabpanel"
                    aria-labelledby="tab-pennydel"
                    className={styles.section}
                >
                    <div className={styles.sectionHeader}>
                        <div>
                            <span className={styles.sectionEyebrow}>NHL 27 • PENNYDEL</span>
                            <h2>PENNY-DEL-SAISON</h2>
                        </div>
                        <p>Die Saison mit den Krefeld Pinguinen – Tabellenstand, Ergebnisse und Spielplan auf einen Blick.</p>
                    </div>

                    <div className={styles.seasonIntroCard}>
                        <div className={styles.seasonIntroLogos}>
                            <Image
                                src="/images/nhl27/krefeld-pinguine-logo.png"
                                alt="Logo der Krefeld Pinguine"
                                width={140}
                                height={140}
                                className={styles.krefeldLogo}
                            />
                        </div>
                        <div>
                            <span className={styles.projectStatus}>SAISONPROJEKT</span>
                            <h3>Krefeld Pinguine</h3>
                            <p>Die PENNY-DEL-Saison in NHL 27. Hier findest du den aktuellen Tabellenstand und alle bisherigen Spiele der Krefeld Pinguine.</p>
                        </div>
                    </div>

                    <div className={styles.subHeader}>
                        <span>PENNY-DEL</span>
                        <h3>TABELLE</h3>
                    </div>

                    <div className={styles.tableFrame}>
                        <div className={styles.tableFrameHeader}>
                            <div>
                                <span className={styles.tableEyebrow}>SAISONÜBERSICHT</span>
                                <h3>Aktueller Tabellenstand</h3>
                            </div>
                            <Image src="/images/nhl27/penny-del-logo.svg" alt="PENNY DEL" width={112} height={44} className={styles.tablePennyLogo} />
                        </div>
                        <div className={styles.standingsScroller}>
                            <table className={styles.standingsTable}>
                                <thead>
                                    <tr><th>Pl.</th><th>Team</th><th>SP</th><th>PKT</th><th>S</th><th>N</th><th>OTS</th><th>OTN</th><th>P %</th><th>T</th><th>GT</th><th>Diff.</th></tr>
                                </thead>
                                <tbody>
                                    {pennyDelStandings.map((team) => {
                                        const isKrefeld = team.team === "Krefeld Pinguine";
                                        return (
                                            <tr
                                                key={team.team}
                                                className={[
                                                    team.rank <= 6 ? styles.playoffZone : "",
                                                    team.rank >= 7 && team.rank <= 10 ? styles.prePlayoffZone : "",
                                                    team.rank === 14 ? styles.relegationZone : "",
                                                    isKrefeld ? styles.krefeldStandingsRow : "",
                                                ].filter(Boolean).join(" ")}
                                            >
                                                <td>{team.rank}</td>
                                                <td className={styles.standingsTeamCell}>
                                                    <span>{team.team}</span>
                                                </td>
                                                <td>{team.games}</td><td className={styles.standingsPoints}>{team.points}</td><td>{team.wins}</td><td>{team.losses}</td><td>{team.otWins}</td><td>{team.otLosses}</td><td>{team.percentage}</td><td>{team.goalsFor}</td><td>{team.goalsAgainst}</td><td>{team.goalsFor - team.goalsAgainst > 0 ? "+" : ""}{team.goalsFor - team.goalsAgainst}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            <div className={styles.standingsLegend}>
    <div className={styles.legendItem}>
        <span className={`${styles.legendDot} ${styles.legendPlayoff}`} />
        <span>Platz 1–6: Direkte Playoffs</span>
    </div>

    <div className={styles.legendItem}>
        <span className={`${styles.legendDot} ${styles.legendPrePlayoff}`} />
        <span>Platz 7–10: Pre-Playoffs</span>
    </div>

    <div className={styles.legendItem}>
        <span className={`${styles.legendDot} ${styles.legendRelegation}`} />
        <span>Platz 14: Sportlicher Abstieg in die DEL2</span>
    </div>
</div>
                        </div>
                        <p className={styles.tableFootnote}></p>
                    </div>


{/* SPIELERSTATISTIKEN – FELDSPIELER */}
<div className={styles.subHeader}>
    <span>PENNY-DEL • KREFELD PINGUINE</span>
    <h3>FELDSPIELER-STATISTIKEN</h3>
</div>

<div className={styles.tableFrame}>
    <div className={styles.tableFrameHeader}>
        <div>
            <span className={styles.tableEyebrow}>SAISONÜBERSICHT</span>
            <h3>Scorerliste</h3>
        </div>
    </div>

    <div className={styles.standingsScroller}>
        <table className={styles.standingsTable}>
            <thead>
                <tr>
                    <th>Pos.</th>
                    <th>Spieler</th>
                    <th>SP</th>
                    <th>T</th>
                    <th>A</th>
                    <th>P</th>
                    <th>+/-</th>
                    <th>STM</th>
                    <th>S</th>
                    <th>S %</th>
                    <th>SGT</th>
                    <th>PPT</th>
                    <th>PPP</th>
                </tr>
            </thead>
            <tbody>
                {[...krefeldSkaterStats]
                    .sort((a, b) => b.points - a.points || b.goals - a.goals)
                    .map((player) => (
                        <tr key={player.name}>
                            <td>{player.position}</td>
                            <td className={styles.standingsTeamCell}>
                                <span>{player.name}</span>
                            </td>
                            <td>{player.games}</td>
                            <td>{player.goals}</td>
                            <td>{player.assists}</td>
                            <td className={styles.standingsPoints}>
                                {player.points}
                            </td>
                            <td>
                                {player.plusMinus > 0 ? "+" : ""}
                                {player.plusMinus}
                            </td>
                            <td>{player.pim}</td>
                            <td>{player.shots}</td>
                            <td>{player.shootingPercentage}</td>
                            <td>{player.hits}</td>
                            <td>{player.powerPlayGoals}</td>
                            <td>{player.powerPlayPoints}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
</div>

{/* SPIELERSTATISTIKEN – GOALIES */}
<div className={styles.subHeader}>
    <span>PENNY-DEL • KREFELD PINGUINE</span>
    <h3>GOALIE-STATISTIKEN</h3>
</div>

<div className={styles.tableFrame}>
    <div className={styles.tableFrameHeader}>
        <div>
            <span className={styles.tableEyebrow}>SAISONÜBERSICHT</span>
            <h3>Torhüterstatistiken</h3>
        </div>
    </div>

    <div className={styles.standingsScroller}>
        <table className={styles.standingsTable}>
            <thead>
                <tr>
                    <th>Pos.</th>
                    <th>Goalie</th>
                    <th>SP</th>
                    <th>S</th>
                    <th>N</th>
                    <th>OTN</th>
                    <th>SO</th>
                    <th>FQ</th>
                    <th>GGS</th>
                    <th>Schüsse</th>
                    <th>GT</th>
                </tr>
            </thead>
            <tbody>
                {krefeldGoalieStats.map((goalie) => (
                    <tr key={goalie.name}>
                        <td>G</td>
                        <td className={styles.standingsTeamCell}>
                            <span>{goalie.name}</span>
                        </td>
                        <td>{goalie.games}</td>
                        <td>{goalie.wins}</td>
                        <td>{goalie.losses}</td>
                        <td>{goalie.otLosses}</td>
                        <td>{goalie.shutouts}</td>
                        <td>{goalie.savePercentage}</td>
                        <td>{goalie.goalsAgainstAverage}</td>
                        <td>{goalie.shotsAgainst}</td>
                        <td>{goalie.goalsAgainst}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>


                    <div className={styles.subHeader}>
                        <span>SPIELTAGE</span>
                        <h3>ERGEBNISSE &amp; SPIELPLAN</h3>
                    </div>

                    <div className={styles.gameList}>
                        <div className={styles.gameListHeader}>
                            <div>
                                <span className={styles.tableEyebrow}>KREFELD PINGUINE</span>
                                <h3>Gespielte Spiele</h3>
                            </div>
                            <span className={styles.tableStatus}>SAISONVERLAUF</span>
                        </div>
                        <div className={styles.krefeldGameList}>
                            {krefeldGames.map((game) => {
                                const isHome = game.home === "Krefeld Pinguine";
                                const played = game.homeScore !== null && game.awayScore !== null;
                                const krefeldScore = isHome ? game.homeScore : game.awayScore;
                                const opponentScore = isHome ? game.awayScore : game.homeScore;
                                const won = played && krefeldScore! > opponentScore!;
                                const lost = played && krefeldScore! < opponentScore!;
                                return (
                                    <div className={styles.krefeldGameRow} key={`${game.day}-${game.date}`}>
                                        <div className={styles.gameDayLabel}>
                                            <span>SPIELTAG</span>
                                            <strong>{String(game.day).padStart(2, "0")}</strong>
                                            <small>{game.date}</small>
                                        </div>
                                        <div className={styles.gameMatchInfo}>
                                            <span className={styles.gameVenue}>{isHome ? "HEIMSPIEL" : "AUSWÄRTS"}</span>
                                            <strong>{game.home}</strong>
                                            <span className={styles.gameVs}>-</span>
                                            <strong>{game.away}</strong>
                                        </div>
                                        {played ? (
                                            <div className={`${styles.gameScore} ${won ? styles.gameScoreWin : ""} ${lost ? styles.gameScoreLoss : ""}`}>
                                                <strong>{game.homeScore} : {game.awayScore}</strong>
                                                {game.overtime && <span>OT</span>}
                                            </div>
                                        ) : (
                                            <div className={styles.gameScoreUpcoming}>
                                                <span>ANSTEHEND</span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {activeProject === "bloodyarmy" && (
                <section
                    id="panel-bloodyarmy"
                    role="tabpanel"
                    aria-labelledby="tab-bloodyarmy"
                    className={styles.section}
                >
                    <div className={styles.sectionHeader}>
                        <div>
                            <span className={styles.sectionEyebrow}>NHL 27 • BLOODYARMY</span>
                            <h2>LOS ANGELES BLOODYARMY</h2>
                        </div>
                        <p>Das BloodyArmy-Projekt bekommt seinen eigenen Bereich für Kader, Saisonverlauf, Ergebnisse und Statistiken.</p>
                    </div>

                   
<div className={styles.bloodyArmyTeamGrid}>
    <div className={styles.seasonIntroCard}>
        <div className={styles.seasonIntroLogos}>
            <Image
                src="/images/nhl27/bloodyarmy-logo.png"
                alt="Los Angeles BloodyArmy Logo"
                width={140}
                height={140}
                className={styles.bloodyArmyTeamLogo}
            />
        </div>

        <div>
            <span className={styles.projectStatus}>
                NHL • PACIFIC DIVISION
            </span>
            <h3>Los Angeles BloodyArmy</h3>
            <p>
                Die Los Angeles BloodyArmy startet in NHL 27 in ein
                neues Teamprojekt. Hier entsteht die Heimat für den
                Kader, den Saisonverlauf, Ergebnisse und Statistiken
                unseres Teams.
            </p>
        </div>
    </div>

    <div className={styles.seasonIntroCard}>
        <div className={styles.seasonIntroLogos}>
            <Image
                src="/images/nhl27/youngarmy-logo.png"
                alt="Ontario YoungArmy Logo"
                width={140}
                height={140}
                className={styles.bloodyArmyTeamLogo}
            />
        </div>

        <div>
            <span className={styles.projectStatus}>
                AHL • PACIFIC DIVISION
            </span>
            <h3>Ontario YoungArmy</h3>
            <p>
                Die Ontario YoungArmy steht für die nächste Generation
                der BloodyArmy. Hier werden künftig das Team, die
                Entwicklung der Spieler, Ergebnisse und Statistiken
                des Nachwuchsprojekts präsentiert.
            </p>
        </div>
    </div>
</div>

                </section>
            )}

        </main>
    );
}


/* ============================================================= */
/* STATISTIK-KARTE */
/* ============================================================= */

function StatCard({
    value,
    label,
    highlight = false,
}: {
    value: number;
    label: string;
    highlight?: boolean;
}) {

    return (

        <div
            className={`${styles.statCard} ${
                highlight ? styles.statCardHighlight : ""
            }`}
        >

            <strong>
                {value}
            </strong>

            <span>
                {label}
            </span>

        </div>

    );
}