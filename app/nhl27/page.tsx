"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function NHL27Page() {
    const currentTeam = careerTeams[0];

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

                            <Link
                                href="#be-a-pro"
                                className={styles.primaryButton}
                            >
                                BE A PRO
                                <span>→</span>
                            </Link>

                            <Link
                                href="#projekte"
                                className={styles.secondaryButton}
                            >
                                PROJEKTE
                            </Link>

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
            {/* PROJEKTE */}
            {/* ========================================================= */}

            <section
                id="projekte"
                className={styles.section}
            >

                <div className={styles.sectionHeader}>

                    <div>

                        <span className={styles.sectionEyebrow}>
                            NHL 27
                        </span>

                        <h2>
                            MEINE PROJEKTE
                        </h2>

                    </div>

                    <p>
                        Hier entstehen und wachsen die verschiedenen
                        NHL-27-Projekte von BloodyLP.
                    </p>

                </div>


                <div className={styles.projectGrid}>

                    {/* ================================================= */}
                    {/* BE A PRO */}
                    {/* ================================================= */}

                    <motion.a
                        href="#be-a-pro"
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.2 }}
                        className={`${styles.projectCard} ${styles.projectActive}`}
                    >

                        <div className={styles.projectNumber}>
                            01
                        </div>

                        <div className={styles.projectIcon}>
                            27
                        </div>

                        <div className={styles.projectContent}>

                            <span className={styles.projectStatus}>
                                AKTIV
                            </span>

                            <h3>
                                BE A PRO
                            </h3>

                            <p>
                                Die Spielerkarriere von BloodyLP
                                mit Karriereverlauf, Statistiken,
                                Teams und Auszeichnungen.
                            </p>

                        </div>

                        <span className={styles.projectArrow}>
                            →
                        </span>

                    </motion.a>


                    {/* ================================================= */}
                    {/* GM CONNECTED */}
                    {/* ================================================= */}

                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className={styles.projectCard}
                    >

                        <div className={styles.projectNumber}>
                            02
                        </div>

                        <div className={styles.projectIcon}>
                            GM
                        </div>

                        <div className={styles.projectContent}>

                            <span className={styles.projectStatusMuted}>
                                IN PLANUNG
                            </span>

                            <h3>
                                GM CONNECTED
                            </h3>

                            <p>
                                Ein zukünftiger Bereich für
                                Franchise-, GM- und Connected-Projekte
                                rund um NHL 27.
                            </p>

                        </div>

                        <span className={styles.projectArrowMuted}>
                            →
                        </span>

                    </motion.div>

                </div>

            </section>


            <div className={styles.divider} />


            {/* ========================================================= */}
            {/* BE A PRO */}
            {/* ========================================================= */}

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


            {/* ========================================================= */}
            {/* ABSCHLUSS */}
            {/* ========================================================= */}

            <section className={styles.bottomSection}>

                <div>

                    <span>
                        NHL 27
                    </span>

                    <h2>
                        WEITERE PROJEKTE
                        <br />
                        FOLGEN.
                    </h2>

                </div>

                <p>
                    Dieser Bereich wird kontinuierlich erweitert
                    und kann zukünftig weitere NHL-27-Spielmodi,
                    Karrieren und Statistiken aufnehmen.
                </p>

            </section>

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