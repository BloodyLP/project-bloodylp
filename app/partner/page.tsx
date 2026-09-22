/* ============================================ */
/*                                              */
/* BloodyLP                                     */
/*                                              */
/* Project:                                     */
/* BloodyLP Website                             */
/*                                              */
/* File:                                        */
/* app/partner/page.tsx                         */
/*                                              */
/* Description:                                 */
/* BloodyLP Partner                             */
/*                                              */
/* ============================================ */

import Image from "next/image";
import styles from "./page.module.css";
import { partners, partnerTiers, type Partner, type PartnerTier } from "../../components/live/data/partners";
import PartnerInquiryForm from "./PartnerInquiryForm";

/* ============================================ */
/* REACH / STATISTICS                           */
/* ============================================ */

const statistics = [
    {
        value: "14.200+",
        label: "YOUTUBE",
        description: "Follower",
    },
    {
        value: "7,5 Mio.+",
        label: "YOUTUBE",
        description: "Video Views",
    },
    {
        value: "5.650+",
        label: "TWITCH",
        description: "Follower",
    },
    {
        value: "1000+",
        label: "GAMINGBOOSTER",
        description: "Follower",
    },
    {
        value: "225+",
        label: "BLOODY ARMY",
        description: "Community-Mitglieder",
    },
    {
        value: "11.000+",
        label: "YOUTUBE",
        description: "Videos",
    },
];

/* ============================================ */
/* COLLABORATION AREAS                          */
/* ============================================ */

const collaborationAreas = [
    {
        number: "01",
        title: "STREAMING",
        text:
            "Markenpräsenz und individuelle Integrationen direkt im Live-Content auf Twitch und YouTube.",
    },
    {
        number: "02",
        title: "VIDEO CONTENT",
        text:
            "Produkte, Marken und Kampagnen können authentisch in Gaming- und Eishockey-Content integriert werden.",
    },
    {
        number: "03",
        title: "SOCIAL MEDIA",
        text:
            "Zusätzliche Sichtbarkeit über Social Content, Clips, Reels und weitere digitale Formate.",
    },
    {
        number: "04",
        title: "EISHOCKEY & ESPORTS",
        text:
            "Eine besondere Kombination aus Gaming, eSports und echtem Eishockey durch Content und Kommentatoren-Tätigkeit.",
    },
    {
        number: "05",
        title: "COMMUNITY",
        text:
            "Direkter Zugang zu einer engagierten Community rund um Gaming, Eishockey und die BloodyArmy.",
    },
    {
        number: "06",
        title: "INDIVIDUELLE KONZEPTE",
        text:
            "Kooperationen werden individuell entwickelt und können auf Marke, Produkt und Zielgruppe zugeschnitten werden.",
    },
];

/* ============================================ */
/* GET PARTNERS                                 */
/* ============================================ */

function getTierPartners(tier: PartnerTier) {
    return partners.filter(
        (partner) => partner.tier === tier && partner.active !== false
    );
}

/* ============================================ */
/* PARTNER CARD                                 */
/* ============================================ */

function PartnerCard({
    partner,
}: {
    partner: Partner;
}) {
    return (
        <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.partnerCard} ${
                styles[`tier-${partner.tier}`]
            }`}
        >
            <div className={styles.cardTop}>
                <div className={styles.partnerLevel}>
                    <span className={styles.levelDot} />
                    {partner.tier}
                </div>

                <span className={styles.externalIcon}>↗</span>
            </div>

            <div className={styles.logoArea}>
                <Image
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    width={360}
                    height={180}
                    className={styles.partnerLogo}
                />
            </div>

            <div className={styles.partnerContent}>
                <span className={styles.category}>{partner.category}</span>

                <h3>{partner.name}</h3>

                <p>{partner.description}</p>

                <div className={styles.partnerTags}>
                    {partner.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>

                {partner.discountCode && (
                    <div className={styles.partnerHighlight}>
                        <div>
                            <span className={styles.highlightLabel}>
                                DEIN BLOODYLP VORTEIL
                            </span>
                            <strong>10 % RABATT</strong>
                        </div>

                        <div className={styles.discountCode}>
                            <span>CODE</span>
                            <strong>{partner.discountCode}</strong>
                        </div>
                    </div>
                )}

                {partner.featureTitle && partner.featureText && (
                    <div className={styles.partnerHighlight}>
                        <div>
                            <span className={styles.highlightLabel}>
                                AKTUELLER FOKUS
                            </span>
                            <strong>{partner.featureTitle}</strong>
                        </div>

                        <p>{partner.featureText}</p>
                    </div>
                )}
            </div>

            <div className={styles.visit}>
                PARTNER BESUCHEN
                <span>→</span>
            </div>
        </a>
    );
}

/* ============================================ */
/* TIER SECTION                                 */
/* ============================================ */

function TierSection({
    tier,
}: {
    tier: (typeof partnerTiers)[number];
}) {
    const tierPartners = getTierPartners(tier.id);

    return (
        <section
            className={`${styles.tierSection} ${
                styles[`tierSection-${tier.id}`]
            }`}
        >
            <div className={styles.tierHeader}>
                <div className={styles.tierTitleArea}>
                    <span className={styles.tierNumber}>
                        {tier.number}
                    </span>

                    <div>
                        <span className={styles.tierName}>
                            {tier.name}
                        </span>

                        <h2>{tier.title}</h2>
                    </div>
                </div>

                <p className={styles.tierDescription}>
                    {tier.description}
                </p>
            </div>

            {tierPartners.length > 0 ? (
                <div
                    className={`${styles.partnerGrid} ${
                        tierPartners.length === 1
                            ? styles.singlePartner
                            : ""
                    }`}
                >
                    {tierPartners.map((partner) => (
                        <PartnerCard
                            key={partner.name}
                            partner={partner}
                        />
                    ))}
                </div>
            ) : (
                <div className={styles.emptyTier}>
                    <span>NOCH VERFÜGBAR</span>

                    <p>
                        Diese Partnerschaftsstufe ist aktuell
                        noch offen.
                    </p>
                </div>
            )}
        </section>
    );
}

/* ============================================ */
/* PAGE                                         */
/* ============================================ */

export default function PartnerPage() {
    return (
        <main className={styles.page}>
            {/* ================================== */}
            {/* HERO                               */}
            {/* ================================== */}

            <section className={styles.hero}>
                <div className={styles.heroGlow} />

                <div className={styles.heroGrid} />

                <div className={styles.heroContent}>
                    <div className={styles.eyebrow}>
                        <span className={styles.eyebrowLine} />

                        BLOODYLP PARTNER
                    </div>

                    <h1 className={styles.heroTitle}>
                        GEMEINSAM
                        <span>STÄRKER.</span>
                    </h1>

                    <p className={styles.heroText}>
                        Hinter BloodyLP stehen Partner, die unsere
                        Leidenschaft für Gaming, Eishockey,
                        eSports und Content teilen.
                    </p>

                    <div className={styles.heroStats}>
                        <div className={styles.heroStat}>
                            <strong>14.200+</strong>

                            <span>
                                YOUTUBE
                            </span>
                        </div>

                        <div className={styles.statDivider} />

                        <div className={styles.heroStat}>
                            <strong>5.654</strong>

                            <span>
                                TWITCH
                            </span>
                        </div>

                        <div className={styles.statDivider} />

                        <div className={styles.heroStat}>
                            <strong>7,5 MIO.</strong>

                            <span>
                                VIDEO VIEWS
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.heroSide}>
                    <span>BLOODYLP</span>

                    <strong>PARTNER</strong>

                    <span>2026</span>
                </div>
            </section>

            {/* ================================== */}
            {/* INTRO                              */}
            {/* ================================== */}

            <section className={styles.introSection}>
                <div className={styles.introLabel}>
                    UNSERE PARTNER
                </div>

                <div className={styles.introContent}>
                    <h2>
                        MARKEN, DIE
                        <span> BLOODYLP </span>
                        BEGLEITEN.
                    </h2>

                    <p>
                        Kooperationen sind für BloodyLP mehr als
                        nur Logos. Gemeinsam mit unseren Partnern
                        entstehen Inhalte, Reichweite und
                        Erlebnisse rund um Gaming, Eishockey,
                        eSports und Streaming.
                    </p>
                </div>
            </section>

            {/* ================================== */}
            {/* NUMBERS                            */}
            {/* ================================== */}

            <section className={styles.numbersSection}>
                <div className={styles.numbersHeader}>
                    <div>
                        <span className={styles.sectionEyebrow}>
                            BLOODYLP IN ZAHLEN
                        </span>

                        <h2>
                            REICHWEITE, DIE
                            <span> SICHTBAR </span>
                            WIRD.
                        </h2>
                    </div>

                    <p>
                        Ein Überblick über ausgewählte
                        Plattform- und Community-Kennzahlen.
                    </p>
                </div>

                <div className={styles.statisticsGrid}>
                    {statistics.map((stat) => (
                        <div
                            key={`${stat.label}-${stat.value}`}
                            className={styles.statCard}
                        >
                            <span className={styles.statNumber}>
                                {stat.value}
                            </span>

                            <span className={styles.statLabel}>
                                {stat.label}
                            </span>

                            <span className={styles.statDescription}>
                                {stat.description}
                            </span>
                        </div>
                    ))}
                </div>

                <div className={styles.statisticsSource}>
                    <span>
                        DATENBASIS
                    </span>

                    <a
                        href="https://rahft.com/talents/bl00dylp/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        RAHFT TALENT PROFILE ↗
                    </a>
                </div>
            </section>

            {/* ================================== */}
            {/* PARTNER                            */}
            {/* ================================== */}

            <section className={styles.partnersSection}>
                <div className={styles.sectionHeading}>
                    <span>PARTNERSCHAFTEN</span>

                    <div />
                </div>

                <div className={styles.tiers}>
                    {partnerTiers.map((tier) => (
                        <TierSection
                            key={tier.id}
                            tier={tier}
                        />
                    ))}
                </div>
            </section>

            {/* ================================== */}
            {/* WHY BLOODYLP                        */}
            {/* ================================== */}

            <section className={styles.whySection}>
                <div className={styles.whyGlow} />

                <div className={styles.whyInner}>
                    <div className={styles.whyIntro}>
                        <span className={styles.sectionEyebrow}>
                            WARUM BLOODYLP?
                        </span>

                        <h2>
                            NICHT NUR
                            <span> REICHWEITE.</span>
                            <br />
                            RELEVANZ.
                        </h2>

                        <p>
                            Eine Partnerschaft soll nicht nur sichtbar sein.
                            Sie soll zur Marke passen, glaubwürdig integriert
                            werden und dort stattfinden, wo die Community
                            bereits aktiv ist.
                        </p>
                    </div>

                    <div className={styles.whyGrid}>
                        <article>
                            <span>01</span>
                            <div>
                                <h3>AUTHENTISCH</h3>
                                <p>
                                    Marken können in bestehende Formate und
                                    echte Community-Momente integriert werden.
                                </p>
                            </div>
                        </article>

                        <article>
                            <span>02</span>
                            <div>
                                <h3>MEHRERE WELTEN</h3>
                                <p>
                                    Gaming, Eishockey, eSports und Streaming
                                    treffen auf einer Plattform zusammen.
                                </p>
                            </div>
                        </article>

                        <article>
                            <span>03</span>
                            <div>
                                <h3>CROSS-PLATFORM</h3>
                                <p>
                                    Content kann über YouTube, Twitch und
                                    weitere Social-Plattformen gedacht werden.
                                </p>
                            </div>
                        </article>

                        <article>
                            <span>04</span>
                            <div>
                                <h3>COMMUNITY-NÄHE</h3>
                                <p>
                                    Live-Content ermöglicht direkte Interaktion
                                    zwischen Creator, Marke und Community.
                                </p>
                            </div>
                        </article>

                        <article>
                            <span>05</span>
                            <div>
                                <h3>EISHOCKEY & ESPORTS</h3>
                                <p>
                                    Content Creation wird mit Eishockey-
                                    Kommentierung und eSports-Casting verbunden.
                                </p>
                            </div>
                        </article>

                        <article>
                            <span>06</span>
                            <div>
                                <h3>INDIVIDUELLE KONZEPTE</h3>
                                <p>
                                    Kooperationen können auf Produkt, Marke,
                                    Zielgruppe und Kampagnenziel zugeschnitten werden.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* ================================== */}
            {/* COLLABORATION                      */}
            {/* ================================== */}

            <section className={styles.collaborationSection}>
                <div className={styles.collaborationIntro}>
                    <span className={styles.sectionEyebrow}>
                        MEHR ALS NUR EIN LOGO
                    </span>

                    <h2>
                        PARTNERSCHAFTEN
                        <span> MIT INHALT.</span>
                    </h2>

                    <p>
                        Eine erfolgreiche Kooperation lebt von
                        glaubwürdiger Integration. Deshalb geht es
                        bei BloodyLP nicht nur um Markenpräsenz,
                        sondern darum, Produkte und Unternehmen
                        sinnvoll in bestehende Content-Formate
                        einzubinden.
                    </p>
                </div>

                <div className={styles.collaborationGrid}>
                    {collaborationAreas.map((area) => (
                        <div
                            key={area.number}
                            className={styles.collaborationCard}
                        >
                            <span className={styles.collaborationNumber}>
                                {area.number}
                            </span>

                            <div>
                                <h3>{area.title}</h3>

                                <p>{area.text}</p>
                            </div>

                            <span className={styles.collaborationArrow}>
                                ↗
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================================== */}
            {/* TARGET GROUP                       */}
            {/* ================================== */}

            <section className={styles.audienceSection}>
                <div className={styles.audienceSide}>
                    <span className={styles.sectionEyebrow}>
                        DIE COMMUNITY
                    </span>

                    <span className={styles.audienceNumber}>
                        86,1%
                    </span>

                    <span className={styles.audienceLabel}>
                        MÄNNLICHE ZUSCHAUER
                    </span>
                </div>

                <div className={styles.audienceContent}>
                    <h2>
                        GAMING.
                        <br />
                        EISHOCKEY.
                        <br />
                        <span>COMMUNITY.</span>
                    </h2>

                    <p>
                        Die RAHFT-Daten zeigen eine klar
                        gaming- und sportaffine Zielgruppe.
                        Gleichzeitig verbindet BloodyLP
                        unterschiedliche Content-Welten:
                        Gaming, Eishockey, eSports und
                        Entertainment.
                    </p>

                    <div className={styles.audienceFacts}>
                        <div>
                            <strong>68,5%</strong>
                            <span>DEUTSCHLAND</span>
                        </div>

                        <div>
                            <strong>55%</strong>
                            <span>18–24 JAHRE</span>
                        </div>

                        <div>
                            <strong>26%</strong>
                            <span>25–34 JAHRE</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================================== */}
            {/* PARTNER INQUIRY                    */}
            {/* ================================== */}

            <PartnerInquiryForm />

            {/* ================================== */}
            {/* CTA                                */}
            {/* ================================== */}

            <section className={styles.ctaSection}>
                <div className={styles.ctaGlow} />

                <div className={styles.ctaContent}>
                    <span className={styles.ctaEyebrow}>
                        DEINE MARKE
                    </span>

                    <h2>
                        DEINE MARKE.
                        <span> UNSERE COMMUNITY.</span>
                    </h2>

                    <p>
                        Du möchtest deine Marke im Umfeld von
                        Gaming, Eishockey, eSports und Streaming
                        präsentieren? Lass uns gemeinsam eine
                        passende Partnerschaft entwickeln.
                    </p>

                    <div className={styles.ctaButtons}>
                        <a
                            href="#partner-anfrage"
                            className={styles.ctaButton}
                        >
                            PARTNER WERDEN

                            <span>→</span>
                        </a>

                        <a
                            href="mailto:kontakt@bloodylp.de?subject=BloodyLP%20Media%20Kit"
                            className={styles.ctaSecondary}
                        >
                            MEDIA KIT ANFRAGEN

                            <span>↗</span>
                        </a>
                    </div>

                    <div className={styles.ctaContact}>
                        <span>
                            DIREKTER KONTAKT
                        </span>

                        <a href="mailto:kontakt@bloodylp.de">
                            kontakt@bloodylp.de
                        </a>
                    </div>
                </div>
            </section>

            {/* ================================== */}
            {/* FOOTER LINE                        */}
            {/* ================================== */}

            <div className={styles.footerLine}>
                <span>
                    BLOODYLP PARTNER
                </span>

                <span>
                    GAMING · EISHOCKEY · ESPORTS · CONTENT
                </span>
            </div>
        </main>
    );
}