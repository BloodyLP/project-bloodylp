/* ============================================ */
/*                                             */
/* BloodyLP                                    */
/*                                             */
/* ============================================ */
/*                                             */
/* Project: BloodyLP Website                    */
/* File: app/esport/page.tsx                    */
/* Description: DEG eSports Bereich.            */
/*                                             */
/* ============================================ */

import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";

import DegMatches from "@/components/UNTERSEITEN/esport/DegMatches";
import DegRoster from "@/components/UNTERSEITEN/esport/DegRoster";

/* ============================================ */
/* PAGE                                        */
/* ============================================ */

export default function EsportPage() {
    return (
        <main className={styles.page}>

            {/* ========================================= */}
            {/* HERO                                      */}
            {/* ========================================= */}

            <section className={styles.hero}>

                <div className={styles.heroGlow} />

                <div className={styles.heroContent}>

                    <p className={styles.eyebrow}>
                        DÜSSELDORFER EG • ESPORTS
                    </p>

                    <h1 className={styles.title}>
                        DEG
                        <span className={styles.titleAccent}>
                            ESPORTS
                        </span>
                    </h1>

                    <p className={styles.description}>
                        Competitive NHL Gaming.
                        Leidenschaftlicher Eishockey eSport.
                        Gemeinsam für die DEG auf dem
                        virtuellen Eis.
                    </p>

                    <div className={styles.heroActions}>

                        <Link
                            href="#team"
                            className={styles.primaryButton}
                        >
                            DAS TEAM
                        </Link>

                        <Link
                            href="#history"
                            className={styles.secondaryButton}
                        >
                            TEAM HISTORY
                        </Link>

                    </div>

                </div>

            </section>


            {/* ========================================= */}
            {/* TEAM HISTORY                              */}
            {/* ========================================= */}

            <section
                id="history"
                className={styles.section}
            >

                <div className={styles.sectionHeader}>

                    <p
                        className={`${styles.sectionEyebrow} ${styles.historyEyebrow}`}
                    >
                        DEG ESPORTS
                    </p>

                    <h2 className={styles.sectionTitle}>
                        TEAM HISTORY
                    </h2>

                </div>


                <div className={styles.statsGrid}>

                    <article className={styles.statCard}>

                        <span className={styles.statValue}>
                            882
                        </span>

                        <span className={styles.statLabel}>
                            SPIELE
                        </span>

                    </article>


                    <article className={styles.statCard}>

                        <span className={styles.statValue}>
                            396
                        </span>

                        <span className={styles.statLabel}>
                            SIEGE
                        </span>

                    </article>


                    <article className={styles.statCard}>

                        <span className={styles.statValue}>
                            409
                        </span>

                        <span className={styles.statLabel}>
                            NIEDERLAGEN
                        </span>

                    </article>


                    <article className={styles.statCard}>

                        <span className={styles.statValue}>
                            77
                        </span>

                        <span className={styles.statLabel}>
                            OVERTIME NIEDERLAGEN
                        </span>

                    </article>

                </div>

            </section>


            {/* ========================================= */}
            {/* DIVIDER                                   */}
            {/* ========================================= */}

            <div className={styles.divider} />


            {/* ========================================= */}
            {/* TEAM / ROSTER                             */}
            {/* ========================================= */}

            <section
                id="team"
                className={styles.section}
            >

                <DegRoster />

            </section>


            {/* ========================================= */}
            {/* DIVIDER                                   */}
            {/* ========================================= */}

            <div className={styles.divider} />


            {/* ========================================= */}
            {/* SPIELE & ERGEBNISSE                       */}
            {/* ========================================= */}

            <DegMatches />


            {/* ========================================= */}
            {/* DIVIDER                                   */}
            {/* ========================================= */}

            <div className={styles.divider} />


           {/* ========================================= */}
{/* ESPORT HUB                                */}
{/* ========================================= */}

<section
    id="bereiche"
    className={styles.section}
>
    <div
        className={styles.sectionHeader}
    >
        <p
            className={styles.sectionEyebrow}
        >
            DEG ESPORTS HUB
        </p>

        <h2
            className={styles.sectionTitle}
        >
            DIE WELT DER DEG
        </h2>
    </div>

    <div
        className={styles.worldGrid}
    >

        {/* ===================================== */}
        {/* DAS TEAM                              */}
        {/* ===================================== */}

        <Link
            href="#team"
            className={styles.worldCard}
        >
            <div
                className={styles.worldCardLogo}
            >
                <Image
                    src="/images/esport/logos/deg-esports.png"
                    alt="DEG eSports"
                    width={72}
                    height={72}
                    className={styles.worldLogoImage}
                />
            </div>

            <span
                className={styles.worldNumber}
            >
                01
            </span>

            <h3
                className={styles.worldTitle}
            >
                DAS TEAM
            </h3>

            <p
                className={styles.worldText}
            >
                Lerne die Spieler von DEG eSports kennen
                und entdecke die aktuelle Mannschaft auf
                dem virtuellen Eis.
            </p>

            <span
                className={styles.worldLink}
            >
                ZUM TEAM
                <span
                    className={styles.worldArrow}
                >
                    →
                </span>
            </span>
        </Link>


        {/* ===================================== */}
        {/* LIGA & MATCHES                        */}
        {/* ===================================== */}

        <Link
            href="https://sportsgamer.gg"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.worldCard}
        >
            <div
                className={styles.worldCardLeagueLogos}
            >
                <Image
                    src="/images/esport/logos/gcl.png"
                    alt="GCL"
                    width={64}
                    height={64}
                    className={styles.worldLeagueLogo}
                />

                <Image
                    src="/images/esport/logos/ecl.png"
                    alt="ECL"
                    width={64}
                    height={64}
                    className={styles.worldLeagueLogo}
                />
            </div>

            <span
                className={styles.worldNumber}
            >
                02
            </span>

            <h3
                className={styles.worldTitle}
            >
                LIGA & MATCHES
            </h3>

            <p
                className={styles.worldText}
            >
                Entdecke Wettbewerbe, Begegnungen,
                Ergebnisse und die Welt des
                professionellen NHL eSports.
            </p>

            <span
                className={styles.worldLink}
            >
                ZU SPORTSGAMER
                <span
                    className={styles.worldArrow}
                >
                    →
                </span>
            </span>
        </Link>


        {/* ===================================== */}
        {/* LIVE AUF TWITCH                       */}
        {/* ===================================== */}

        <Link
            href="https://www.twitch.tv/degesports"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.worldCard}
        >
            <div
                className={styles.worldCardLogo}
            >
                <Image
                    src="/images/esport/logos/twitch2.png"
                    alt="Twitch"
                    width={68}
                    height={68}
                    className={styles.worldLogoImage}
                />
            </div>

            <span
                className={styles.worldNumber}
            >
                03
            </span>

            <h3
                className={styles.worldTitle}
            >
                LIVE AUF TWITCH
            </h3>

            <p
                className={styles.worldText}
            >
                Verfolge DEG eSports live und verpasse
                keine spannenden Spiele, Übertragungen
                und eSports-Momente.
            </p>

            <span
                className={styles.worldLink}
            >
                ZUM STREAM
                <span
                    className={styles.worldArrow}
                >
                    →
                </span>
            </span>
        </Link>

    </div>
</section>


            {/* ========================================= */}
            {/* DIVIDER                                   */}
            {/* ========================================= */}

            <div className={styles.divider} />


            {/* ========================================= */}
            {/* COMMENTARY                                 */}
            {/* ========================================= */}

            <section className={styles.section}>

                <div className={styles.commentator}>

                    <div>

                        <p className={styles.commentatorLabel}>
                            BROADCAST & COMMENTARY
                        </p>

                        <h2 className={styles.commentatorName}>
                            ALEXANDER
                            <br />
                            „BLOODYLP“
                            <br />
                            BLATTMANN
                        </h2>

                        <p className={styles.commentatorRole}>
                            eSports Kommentator für DEG eSports.
                            Begleitung der Mannschaft bei
                            spannenden Begegnungen und
                            Wettbewerben auf dem virtuellen Eis.
                        </p>

                    </div>


                    <div className={styles.commentatorBadge}>
                        DEG eSPORTS
                        <br />
                        BROADCAST
                    </div>

                </div>

            </section>

        </main>
    );
}