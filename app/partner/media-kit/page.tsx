import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const statistics = [
    {
        value: "14.200+",
        label: "YOUTUBE",
        description: "Abonnenten",
    },
    {
        value: "7,5 Mio.",
        label: "YOUTUBE",
        description: "Video Views",
    },
    {
        value: "5.654",
        label: "TWITCH",
        description: "Follower",
    },
    {
        value: "947",
        label: "GAMINGBOOSTER",
        description: "Follower",
    },
    {
        value: "225",
        label: "BLOODY ARMY",
        description: "Community-Mitglieder",
    },
    {
        value: "10.954",
        label: "YOUTUBE",
        description: "Videos",
    },
];

const audience = [
    {
        value: "86,1%",
        label: "MÄNNLICH",
    },
    {
        value: "68,5%",
        label: "DEUTSCHLAND",
    },
    {
        value: "55%",
        label: "18–24 JAHRE",
    },
    {
        value: "26%",
        label: "25–34 JAHRE",
    },
];

const platforms = [
    {
        number: "01",
        title: "YOUTUBE",
        text: "Gaming, Eishockey, Let’s Plays, First Looks, Projekte und ausführlicher Video-Content.",
    },
    {
        number: "02",
        title: "TWITCH",
        text: "Live-Streams mit direkter Community-Interaktion, Gaming, Eishockey und besonderen Events.",
    },
    {
        number: "03",
        title: "INSTAGRAM",
        text: "Reels, Posts, Stories und zusätzlicher Content rund um BloodyLP, Eishockey und Gaming.",
    },
    {
        number: "04",
        title: "TIKTOK",
        text: "Kurzform-Content, Highlights, Clips und aufmerksamkeitsstarke Ausschnitte aus dem BloodyLP Universum.",
    },
];

const cooperationAreas = [
    {
        number: "01",
        title: "PRODUCT PLACEMENT",
        text: "Produkte authentisch und passend in Streams, Videos und Community-Content integrieren.",
    },
    {
        number: "02",
        title: "STREAM INTEGRATION",
        text: "Markenpräsenz direkt im Live-Content auf Twitch und YouTube.",
    },
    {
        number: "03",
        title: "VIDEO CONTENT",
        text: "Individuelle Videos, Vorstellungen, Reviews, Tests oder Produktintegrationen.",
    },
    {
        number: "04",
        title: "SOCIAL MEDIA",
        text: "Reels, Stories, Posts und Clips für zusätzliche Reichweite über mehrere Plattformen.",
    },
    {
        number: "05",
        title: "EVENTS",
        text: "Einbindung von Marken und Partnern in Events, Community-Aktionen und besondere Formate.",
    },
    {
        number: "06",
        title: "INDIVIDUELLE KAMPAGNEN",
        text: "Individuelle Kooperationen, abgestimmt auf Marke, Produkt, Zielgruppe und Kampagnenziel.",
    },
];

const sportsAreas = [
    "DEL2",
    "EISHOCKEY-KOMMENTAR",
    "DEG ESPORTS",
    "ESPORTS-CASTING",
    "GAMING CONTENT",
    "LIVE-ENTERTAINMENT",
];

const partners = [
    {
        name: "HOLY",
        logo: "/images/partner/holy.png",
        website:
            "https://de.holy.com/?ref=BloodyLP&utm_medium=creator&utm_source=creator",
        category: "ENERGY · HYDRATION · ICED TEA",
    },
    {
        name: "EA SPORTS",
        logo: "/images/partner/ea-sports2.png",
        website: "https://www.ea.com/de/games/nhl",
        category: "GAMING · NHL",
    },
];

export default function MediaKitPage() {
    return (
        <main className={styles.page}>
            {/* HERO */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />

                <div className={styles.heroContent}>
                    <div className={styles.eyebrow}>
                        <span />
                        BLOODYLP MEDIA KIT
                    </div>

                    <h1>
                        DEINE MARKE.
                        <br />
                        <strong>UNSERE COMMUNITY.</strong>
                    </h1>

                    <p className={styles.heroLead}>
                        Gaming · Eishockey · eSports · Streaming
                    </p>

                    <p className={styles.heroText}>
                        BloodyLP verbindet Gaming, Eishockey, eSports und
                        Live-Entertainment mit einer engagierten Community und
                        authentischem Content.
                    </p>

                    <div className={styles.heroActions}>
                        <a
                            href="mailto:kontakt@bloodylp.de?subject=Kooperationsanfrage%20BloodyLP"
                            className={styles.primaryButton}
                        >
                            KOOPERATION ANFRAGEN
                        </a>

                        <Link
                            href="/partner"
                            className={styles.secondaryButton}
                        >
                            ZU DEN PARTNERN
                        </Link>
                    </div>
                </div>

                <div className={styles.heroBottom}>
                    <div>
                        <strong>14.200+</strong>
                        <span>YOUTUBE</span>
                    </div>

                    <div>
                        <strong>5.654</strong>
                        <span>TWITCH</span>
                    </div>

                    <div>
                        <strong>7,5 MIO.</strong>
                        <span>VIDEO VIEWS</span>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className={styles.introSection}>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionLabel}>
                        <span>01</span>
                        ÜBER BLOODYLP
                    </div>

                    <div className={styles.introGrid}>
                        <div>
                            <h2>
                                MEHR ALS
                                <br />
                                <span>CONTENT.</span>
                            </h2>
                        </div>

                        <div className={styles.introText}>
                            <p>
                                BloodyLP steht für Gaming, Eishockey, eSports
                                und Live-Entertainment. Dabei entsteht Content
                                nicht nur für Zuschauer, sondern gemeinsam mit
                                einer aktiven Community.
                            </p>

                            <p>
                                Als Streamer, Content Creator, Eishockey-
                                Kommentator und eSports-Caster verbindet
                                BloodyLP unterschiedliche Bereiche und schafft
                                dadurch vielfältige Möglichkeiten für Marken,
                                Produkte und Kampagnen.
                            </p>
                        </div>
                    </div>

                    <div className={styles.roleGrid}>
                        <div className={styles.roleCard}>
                            <span>01</span>
                            <strong>CONTENT CREATOR</strong>
                        </div>

                        <div className={styles.roleCard}>
                            <span>02</span>
                            <strong>STREAMER</strong>
                        </div>

                        <div className={styles.roleCard}>
                            <span>03</span>
                            <strong>EISHOCKEY-KOMMENTATOR</strong>
                        </div>

                        <div className={styles.roleCard}>
                            <span>04</span>
                            <strong>ESPORTS-CASTER</strong>
                        </div>
                    </div>
                </div>
            </section>

            {/* REACH */}
            <section className={styles.reachSection}>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionLabel}>
                        <span>02</span>
                        REICHWEITE
                    </div>

                    <div className={styles.sectionHeading}>
                        <h2>
                            ZAHLEN, DIE
                            <br />
                            <span>REICHWEITE</span> ZEIGEN.
                        </h2>

                        <p>
                            BloodyLP erreicht seine Community über mehrere
                            Plattformen und Content-Formate.
                        </p>
                    </div>

                    <div className={styles.statisticsGrid}>
                        {statistics.map((stat) => (
                            <div
                                key={`${stat.label}-${stat.description}`}
                                className={styles.statCard}
                            >
                                <span className={styles.statLabel}>
                                    {stat.label}
                                </span>

                                <strong>{stat.value}</strong>

                                <span className={styles.statDescription}>
                                    {stat.description}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AUDIENCE */}
            <section className={styles.audienceSection}>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionLabel}>
                        <span>03</span>
                        ZIELGRUPPE
                    </div>

                    <div className={styles.audienceGrid}>
                        <div className={styles.audienceIntro}>
                            <h2>
                                EINE
                                <br />
                                <span>ENGAGIERTE</span>
                                <br />
                                COMMUNITY.
                            </h2>

                            <p>
                                Die BloodyLP Community verbindet Gaming,
                                Eishockey und digitale Unterhaltung.
                            </p>
                        </div>

                        <div className={styles.audienceStats}>
                            {audience.map((item) => (
                                <div
                                    key={item.label}
                                    className={styles.audienceCard}
                                >
                                    <strong>{item.value}</strong>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PLATFORMS */}
            <section className={styles.platformSection}>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionLabel}>
                        <span>04</span>
                        CONTENT & PLATTFORMEN
                    </div>

                    <div className={styles.sectionHeading}>
                        <h2>
                            EIN
                            <br />
                            <span>UNIVERSUM.</span>
                            <br />
                            VIELE FORMATE.
                        </h2>

                        <p>
                            Marken können dort stattfinden, wo die Community
                            bereits aktiv ist.
                        </p>
                    </div>

                    <div className={styles.contentGrid}>
                        {platforms.map((item) => (
                            <article
                                key={item.number}
                                className={styles.contentCard}
                            >
                                <span>{item.number}</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* COOPERATIONS */}
            <section className={styles.cooperationSection}>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionLabel}>
                        <span>05</span>
                        KOOPERATIONEN
                    </div>

                    <div className={styles.cooperationHeading}>
                        <h2>
                            GEMEINSAM
                            <br />
                            <span>MEHR ERREICHEN.</span>
                        </h2>

                        <p>
                            Von klassischer Markenpräsenz bis zur individuell
                            entwickelten Kampagne: Kooperationen werden passend
                            zu Marke und Zielgruppe umgesetzt.
                        </p>
                    </div>

                    <div className={styles.cooperationGrid}>
                        {cooperationAreas.map((item) => (
                            <article
                                key={item.number}
                                className={styles.cooperationCard}
                            >
                                <div className={styles.cooperationNumber}>
                                    {item.number}
                                </div>

                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* EISHOCKEY / ESPORTS */}
            <section className={styles.sportsSection}>
                <div className={styles.sportsGlow} />

                <div className={styles.sectionContainer}>
                    <div className={styles.sectionLabel}>
                        <span>06</span>
                        EISHOCKEY & ESPORTS
                    </div>

                    <div className={styles.sportsGrid}>
                        <div>
                            <h2>
                                GAMING.
                                <br />
                                <span>EISHOCKEY.</span>
                                <br />
                                ESPORTS.
                            </h2>
                        </div>

                        <div className={styles.sportsContent}>
                            <p>
                                Ein besonderer Bestandteil von BloodyLP ist
                                die Verbindung zwischen digitalem Gaming,
                                eSports und echtem Eishockey.
                            </p>

                            <p>
                                Als Eishockey-Kommentator und eSports-Caster
                                entstehen Berührungspunkte zu unterschiedlichen
                                Communities und Zielgruppen.
                            </p>

                            <div className={styles.sportsTags}>
                                {sportsAreas.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PARTNERS */}
            <section className={styles.partnersSection}>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionLabel}>
                        <span>07</span>
                        PARTNER
                    </div>

                    <div className={styles.sectionHeading}>
                        <h2>
                            MARKEN,
                            <br />
                            DIE <span>BLOODYLP</span>
                            <br />
                            BEGLEITEN.
                        </h2>
                    </div>

                    <div className={styles.partnerGrid}>
                        {partners.map((partner) => (
                            <a
                                key={partner.name}
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.partnerCard}
                            >
                                <div className={styles.partnerLogo}>
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} Logo`}
                                        fill
                                        sizes="(max-width: 700px) 80vw, 350px"
                                    />
                                </div>

                                <div className={styles.partnerInfo}>
                                    <span>{partner.category}</span>
                                    <strong>{partner.name}</strong>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaGlow} />

                <div className={styles.ctaContent}>
                    <div className={styles.sectionLabel}>
                        <span>08</span>
                        KONTAKT
                    </div>

                    <h2>
                        DEINE MARKE.
                        <br />
                        <span>UNSERE COMMUNITY.</span>
                    </h2>

                    <p>
                        Du möchtest BloodyLP als Partner begleiten oder eine
                        individuelle Kooperation besprechen?
                    </p>

                    <div className={styles.ctaActions}>
                        <a
                            href="mailto:kontakt@bloodylp.de?subject=Kooperationsanfrage%20BloodyLP"
                            className={styles.primaryButton}
                        >
                            KOOPERATION ANFRAGEN
                        </a>

                        <a
                            href="mailto:kontakt@bloodylp.de?subject=BloodyLP%20Media%20Kit"
                            className={styles.secondaryButton}
                        >
                            MEDIA KIT ANFRAGEN
                        </a>
                    </div>

                    <a
                        href="mailto:kontakt@bloodylp.de"
                        className={styles.email}
                    >
                        kontakt@bloodylp.de
                    </a>
                </div>
            </section>

            {/* FOOTER */}
            <footer className={styles.footer}>
                <span>BLOODYLP</span>
                <span>MEDIA KIT · 2026</span>
            </footer>
        </main>
    );
}