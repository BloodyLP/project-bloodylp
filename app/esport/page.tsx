/**
 * ============================================
 *
 * BloodyLP
 *
 * ============================================
 *
 * Project:
 *
 * BloodyLP Website
 *
 * File:
 *
 * app/esport/page.tsx
 *
 * Description:
 *
 * DEG eSports Bereich.
 *
 * ============================================
 */

import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";

import DegMatches from "@/components/UNTERSEITEN/esport/DegMatches";
import DegRoster from "@/components/UNTERSEITEN/esport/DegRoster";
import DegStandings from "@/components/UNTERSEITEN/esport/DegStandings";


/**
 * ============================================
 * PAGE
 * ============================================
 */

export default function EsportPage() {

    return (

        <main className={styles.page}>

            {/* ========================================= */}
            {/* HERO                                      */}
            {/* ========================================= */}

            <section className={styles.hero}>

                <Image
                    src="/images/esport/hero/deg-esports-hero2.jpg"
                    alt="DEG eSports auf dem virtuellen Eis"
                    fill
                    priority
                    sizes="100vw"
                    className={styles.heroImage}
                />

                <div className={styles.heroOverlay} />

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
                            <span>→</span>
                        </Link>


                        <Link
                            href="#history"
                            className={styles.secondaryButton}
                        >
                            TEAM HISTORY
                            <span>→</span>
                        </Link>

                    </div>


                    <div className={styles.heroSignature}>
                        GAMING AUS LEIDENSCHAFT
                    </div>

                </div>

            </section>


            {/* ========================================= */}
            {/* TEAM HISTORY                              */}
            {/* ========================================= */}

            <section
                id="history"
                className={`${styles.section} ${styles.historySection}`}
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


                {/* ========================================= */}
                {/* HISTORY IMAGE                              */}
                {/* ========================================= */}

                <div className={styles.historyVisual}>

                    <div className={styles.historyVisualImage}>

                        <Image
                            src="/images/esport/hero/deg-esports-hero.jpg"
                            alt="DEG eSports"
                            fill
                            sizes="(max-width: 700px) 100vw, 1180px"
                        />

                    </div>


                    <div className={styles.historyVisualOverlay} />


                    <div className={styles.historyVisualContent}>

                        <span>
                            GAMING AUS LEIDENSCHAFT
                        </span>

                        <strong>
                            DEG ESPORTS
                        </strong>

                    </div>

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
            {/* STANDINGS                                 */}
            {/* ========================================= */}

            <DegStandings />


            {/* ========================================= */}
            {/* ESPORT HUB                                */}
            {/* ========================================= */}

            <section
                id="bereiche"
                className={styles.section}
            >

                <div className={styles.sectionHeader}>

                    <p className={styles.sectionEyebrow}>
                        DEG ESPORTS HUB
                    </p>


                    <h2 className={styles.sectionTitle}>
                        DIE WELT DER DEG
                    </h2>

                </div>


                <div className={styles.worldGrid}>

                    {/* ===================================== */}
                    {/* DAS TEAM                              */}
                    {/* ===================================== */}

                    <Link
                        href="#team"
                        className={styles.worldCard}
                    >

                        <div className={styles.worldCardLogo}>

                            <Image
                                src="/images/esport/logos/deg-esports.png"
                                alt="DEG eSports"
                                width={64}
                                height={64}
                                className={styles.worldLogoImage}
                            />

                        </div>


                        <span className={styles.worldNumber}>
                            01
                        </span>


                        <h3 className={styles.worldTitle}>
                            DAS TEAM
                        </h3>


                        <p className={styles.worldText}>
                            Lerne die Spieler von DEG eSports kennen
                            und entdecke die aktuelle Mannschaft auf
                            dem virtuellen Eis.
                        </p>


                        <span className={styles.worldLink}>

                            ZUM TEAM

                            <span className={styles.worldArrow}>
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

                        <div className={styles.worldCardLeagueLogos}>

                            <Image
                                src="/images/esport/logos/gcl.png"
                                alt="GCL"
                                width={64}
                                height={64}
                                className={styles.worldLeagueLogo}
                            />


                            <Image
                                src="/images/esport/logos/ecl2.png"
                                alt="ECL"
                                width={72}
                                height={72}
                                className={styles.worldLeagueLogo}
                            />

                        </div>


                        <span className={styles.worldNumber}>
                            02
                        </span>


                        <h3 className={styles.worldTitle}>
                            LIGA &amp; MATCHES
                        </h3>


                        <p className={styles.worldText}>
                            Entdecke Wettbewerbe, Begegnungen,
                            Ergebnisse und die Welt des
                            professionellen NHL eSports.
                        </p>


                        <span className={styles.worldLink}>

                            ZU SPORTSGAMER

                            <span className={styles.worldArrow}>
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

                        <div className={styles.worldCardLogo}>

                            <Image
                                src="/images/esport/logos/twitch2.png"
                                alt="Twitch"
                                width={64}
                                height={64}
                                className={styles.worldLogoImage}
                            />

                        </div>


                        <span className={styles.worldNumber}>
                            03
                        </span>


                        <h3 className={styles.worldTitle}>
                            LIVE AUF TWITCH
                        </h3>


                        <p className={styles.worldText}>
                            Verfolge DEG eSports live und verpasse
                            keine spannenden Spiele, Übertragungen
                            und eSports-Momente.
                        </p>


                        <span className={styles.worldLink}>

                            ZUM STREAM

                            <span className={styles.worldArrow}>
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
            {/* COMMENTATOR                               */}
            {/* ========================================= */}

            <section className={styles.section}>

                <div className={styles.commentator}>

                    {/* ===================================== */}
                    {/* CONTENT                               */}
                    {/* ===================================== */}

                    <div className={styles.commentatorContent}>

                        <p className={styles.commentatorLabel}>
                            BROADCAST &amp; COMMENTARY
                        </p>


                        <h2 className={styles.commentatorName}>

                            ALEXANDER

                            <br />

                            <span>
                                „BLOODYLP“
                            </span>

                            <br />

                            BLATTMANN

                        </h2>


                        <p className={styles.commentatorRole}>
                            ESPORTS-COMMENTATOR
                        </p>


                        <p className={styles.commentatorText}>
                            Seit 2020 kommentiert Alexander
                            „BloodyLP“ Blattmann NHL-eSports-Partien
                            und begleitet die DEG eSports als
                            Kommentator und Host.
                        </p>


                        {/* ================================= */}
                        {/* FACTS                             */}
                        {/* ================================= */}

                        <div className={styles.commentatorFacts}>

                            <div className={styles.commentatorFact}>

                                <strong>
                                    SEIT 2020
                                </strong>

                                <span>
                                    NHL ESPORTS
                                </span>

                            </div>


                            <div className={styles.commentatorFact}>

                                <strong>
                                    DEG ESPORTS
                                </strong>

                                <span>
                                    KOMMENTATOR / HOST
                                </span>

                            </div>


                            <div className={styles.commentatorFact}>

                                <strong>
                                    LIVE
                                </strong>

                                <span>
                                    TWITCH
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* ===================================== */}
                    {/* IMAGE                                 */}
                    {/* ===================================== */}

                    <div className={styles.commentatorImage}>

                        <Image
                            src="/images/esport/commentator/bloodylp-commentator4.png"
                            alt='Alexander "BloodyLP" Blattmann – DEG eSports Kommentator'
                            fill
                            sizes="(max-width: 700px) 100vw, 560px"
                            className={styles.commentatorImageElement}
                        />

                    </div>

                </div>

            </section>


            {/* ========================================= */}
            {/* SPONSOREN                                 */}
            {/* ========================================= */}

            <section className={styles.sponsorsSection}>

                <div className={styles.sponsorsHeader}>

                    <p className={styles.sponsorsEyebrow}>
                        DEG ESPORTS
                    </p>


                    <h2 className={styles.sponsorsTitle}>
                        UNSERE PARTNER
                    </h2>


                    <p className={styles.sponsorsIntro}>
                        Starke Partner hinter DEG eSports.
                    </p>

                </div>


                {/* ===================================== */}
                {/* HAUPTSPONSOREN                        */}
                {/* ===================================== */}

                <div className={styles.mainSponsors}>

                    {/* ================================= */}
                    {/* ASE HOCKEY                         */}
                    {/* ================================= */}

                    <article className={styles.mainSponsor}>

                        <span className={styles.sponsorLabel}>
                            HAUPTSPONSOR
                        </span>


                        <div className={styles.mainSponsorImage}>

                            <Image
                                src="/images/esport/sponsors/ase-hockey.png"
                                alt="ASE Hockey"
                                fill
                                sizes="(max-width: 700px) 100vw, 500px"
                            />

                        </div>

                    </article>


                    {/* ================================= */}
                    {/* RENÉ GRÖLL                         */}
                    {/* ================================= */}

                    <article className={styles.mainSponsor}>

                        <span className={styles.sponsorLabel}>
                            HAUPTSPONSOR
                        </span>


                        <div className={styles.mainSponsorImage}>

                            <Image
                                src="/images/esport/sponsors/rene-groell.jpg"
                                alt="René Gröll – Signal Iduna"
                                fill
                                sizes="(max-width: 700px) 100vw, 500px"
                            />

                        </div>

                    </article>

                </div>


                {/* ===================================== */}
                {/* WEITERER PARTNER                     */}
                {/* ===================================== */}

                <div className={styles.otherSponsors}>

                    <p className={styles.otherSponsorsLabel}>
                        WEITERER PARTNER
                    </p>


                    <div className={styles.otherSponsor}>

                        <Image
                            src="/images/esport/sponsors/ccm.jpg"
                            alt="CCM"
                            fill
                            sizes="230px"
                        />

                    </div>

                </div>

            </section>

        </main>

    );

}