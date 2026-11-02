
import Link from "next/link";
import styles from "./page.module.css";

const milestones = [
  {
    year: "2012",
    label: "YOUTUBE",
    title: "Der Anfang",
    description:
      "Mit BloodyLP startet meine Reise auf YouTube. Aus ersten Videos wird über die Jahre ein langfristiges Content-Projekt.",
  },
  {
    year: "2016",
    label: "TWITCH",
    title: "Live statt nur Video",
    description:
      "Mit dem Einstieg auf Twitch kommt der direkte Austausch mit der Community dazu. Gaming und gemeinsame Erlebnisse stehen im Mittelpunkt.",
  },
  {
    year: "2017",
    label: "EA SPORTS NHL",
    title: "Eishockey wird zum Schwerpunkt",
    description:
      "EA SPORTS NHL wird ein fester Bestandteil meiner Inhalte und prägt den weiteren Weg als Creator.",
  },
  {
    year: "2018 – 2024",
    label: "SPRadeTV",
    title: "Erste Schritte als TV-Kommentator",
    description:
      "Von 2018 bis 2024 kommentiere ich DEL2-Übertragungen bei SpradeTV.",
  },
  {
    year: "2020",
    label: "eDEL & IIHF",
    title: "Eishockey und eSports",
    description:
      "Weitere Einsätze als eDEL-Kommentator sowie bei den IIHF eWorld Championships in den Jahren 2020, 2022 und 2023.",
  },
  {
    year: "2022",
    label: "INTERNATIONAL",
    title: "Neue Bühnen",
    description:
      "Unter anderem als Kommentator und Experte bei den eNL Finals von MySportsCH sowie in weiteren eSports-Wettbewerben.",
  },
  {
    year: "2023",
    label: "DEG eSPORTS",
    title: "Ein neues Kapitel",
    description:
      "Seit Oktober 2023 bin ich im eSports-Umfeld der Düsseldorfer EG aktiv – als Kommentator in nationalen und internationalen Wettbewerben.",
  },
  {
    year: "2024 – HEUTE",
    label: "SPORTEUROPE.TV",
    title: "Zurück aufs Eis",
    description:
      "Seit August 2024 kommentiere ich DEL2-Eishockey bei SportEurope.TV, unter anderem die Spiele des EHC Freiburg.",
  },
];

const focusAreas = [
  {
    number: "01",
    eyebrow: "LIVE-KOMMENTAR",
    title: "EISHOCKEY",
    description:
      "Emotionen, Tempo und Leidenschaft. Als Kommentator begleite ich DEL2-Eishockey bei SportEurope.TV und die Spiele des EHC Freiburg.",
    tags: ["DEL2", "EHC FREIBURG", "SPORTEUROPE.TV"],
  },
  {
    number: "02",
    eyebrow: "COMPETITIVE GAMING",
    title: "eSPORTS",
    description:
      "Virtuelles Eishockey auf nationaler und internationaler Bühne. Unter anderem als Kommentator für DEG eSports in GCL- und ECL-Wettbewerben.",
    tags: ["DEG eSPORTS", "GCL", "ECL"],
  },
  {
    number: "03",
    eyebrow: "CONTENT & STREAMING",
    title: "BLOODYLP",
    description:
      "Videos, Livestreams und Gaming-Projekte. Auf YouTube und Twitch entstehen Inhalte rund um Eishockey, Gaming und die Community.",
    tags: ["YOUTUBE", "TWITCH", "GAMING"],
  },
];

const facts = [
  { value: "2012", label: "YOUTUBE-START" },
  { value: "2016", label: "TWITCH-START" },
  { value: "2019", label: "BLOODYARMY" },
  { value: "2024", label: "SPORTEUROPE.TV" },
];

const values = [
  {
    number: "01",
    title: "LEIDENSCHAFT",
    text: "Ob vor der Kamera, am Mikrofon oder hinter den Kulissen – entscheidend ist die Begeisterung für das, was ich mache.",
  },
  {
    number: "02",
    title: "AUTHENTIZITÄT",
    text: "Keine künstliche Rolle. Ich stehe für ehrliche Inhalte, klare Worte und meinen eigenen Stil.",
  },
  {
    number: "03",
    title: "GEMEINSCHAFT",
    text: "BloodyArmy ist mehr als ein Name. Die Community und der gemeinsame Austausch gehören von Anfang an dazu.",
  },
];

export default function UeberMichPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />

        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            ÜBER MICH
          </div>

          <h1 className={styles.heroTitle}>
            ALEXANDER
            <span>BLATTMANN</span>
          </h1>

          <div className={styles.heroAlias}>
            BETTER KNOWN AS <strong>BLOODYLP</strong>
          </div>

          <p className={styles.heroText}>
            Streamer. Content Creator. Kommentator.
            <br />
            Seit vielen Jahren dreht sich bei mir alles um Eishockey,
            Gaming und die Menschen, die diese Leidenschaft teilen.
          </p>

          <div className={styles.heroRoles}>
            <span>STREAMER</span>
            <i />
            <span>CONTENT CREATOR</span>
            <i />
            <span>KOMMENTATOR</span>
          </div>

          <div className={styles.heroButtons}>
            <Link href="#meine-geschichte" className={styles.primaryButton}>
              MEINE GESCHICHTE <span>↘</span>
            </Link>
            <Link href="#bereiche" className={styles.secondaryButton}>
              WAS ICH MACHE
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual} aria-label="BloodyLP">
          <div className={styles.visualFrame}>
            <div className={styles.visualCornerTop} />
            <div className={styles.visualMonogram}>BL</div>
            <div className={styles.visualName}>BLOODYLP</div>
            <div className={styles.visualLine} />
            <div className={styles.visualCaption}>
              <span>EST.</span>
              <strong>2012</strong>
              <span>CONTENT • COMMUNITY • PASSION</span>
            </div>
            <div className={styles.visualCornerBottom} />
          </div>
          <span className={styles.visualSideText}>THE BLOODYLP PROJECT</span>
        </div>

        <div className={styles.heroBottom}>
          <span>SCROLL TO DISCOVER</span>
          <span className={styles.scrollLine} />
          <span>01 / 07</span>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.introSection} id="meine-geschichte">
        <div className={styles.introLabel}>
          <span>01</span>
          <span>WER STECKT DAHINTER?</span>
        </div>

        <div className={styles.introContent}>
          <h2>
            AUS EINER IDEE
            <br />
            WURDE EINE <span>LEIDENSCHAFT.</span>
          </h2>

          <p>
            Ich bin Alexander Blattmann – vielen besser bekannt als
            BloodyLP. Was 2012 mit YouTube begann, hat sich über die Jahre
            zu einem vielseitigen Projekt entwickelt. Heute verbinde ich
            Content Creation, Livestreaming und Eishockey-Kommentar.
          </p>

          <p>
            Dabei ist Eishockey der rote Faden: als Spiel, als Gaming-Thema
            und als Live-Erlebnis am Mikrofon. Gleichzeitig ist BloodyLP
            immer auch eine Plattform für Gaming, Austausch und eine
            Community, die diesen Weg begleitet.
          </p>
        </div>
      </section>

      {/* FACTS */}
      <section className={styles.factsSection}>
        <div className={styles.factsHeader}>
          <div>
            <div className={styles.sectionEyebrow}>BLOODYLP IN ZAHLEN</div>
            <h2>
              EIN WEG MIT
              <span> GESCHICHTE.</span>
            </h2>
          </div>
          <p>
            Mehrere Plattformen, unterschiedliche Formate und eine
            Leidenschaft, die seit Jahren geblieben ist.
          </p>
        </div>

        <div className={styles.factsGrid}>
          {facts.map((fact) => (
            <div className={styles.factCard} key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className={styles.focusSection} id="bereiche">
        <div className={styles.sectionIntro}>
          <div>
            <div className={styles.sectionEyebrow}>MEINE WELT</div>
            <h2>
              DREI BEREICHE.
              <br />
              <span>EINE LEIDENSCHAFT.</span>
            </h2>
          </div>
          <p>
            Unterschiedliche Aufgaben, aber ein gemeinsamer Kern:
            Eishockey, Gaming und die Begeisterung für Live-Entertainment.
          </p>
        </div>

        <div className={styles.focusGrid}>
          {focusAreas.map((area) => (
            <article className={styles.focusCard} key={area.number}>
              <div className={styles.focusTop}>
                <span>{area.number}</span>
                <span className={styles.focusDot} />
              </div>

              <div className={styles.focusBody}>
                <span className={styles.focusEyebrow}>{area.eyebrow}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>

              <div className={styles.focusTags}>
                {area.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className={styles.timelineSection}>
        <div className={styles.timelineHeader}>
          <div className={styles.sectionEyebrow}>VON 2012 BIS HEUTE</div>
          <h2>
            MEIN WEG.
            <br />
            <span>MEINE MEILENSTEINE.</span>
          </h2>
          <p>
            Jedes Projekt, jede Übertragung und jede Begegnung hat
            ihren Teil zur Geschichte von BloodyLP beigetragen.
          </p>
        </div>

        <div className={styles.timeline}>
          {milestones.map((item, index) => (
            <article className={styles.timelineItem} key={item.year + item.label}>
              <div className={styles.timelineMarker}>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className={styles.timelineYear}>{item.year}</div>

              <div className={styles.timelineCard}>
                <span className={styles.timelineLabel}>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesIntro}>
          <div className={styles.sectionEyebrow}>WAS MICH ANTREIBT</div>
          <h2>
            MEHR ALS
            <br />
            <span>NUR CONTENT.</span>
          </h2>
          <p>
            Hinter jedem Stream, jedem Video und jeder Moderation steckt
            mehr als nur Technik und Vorbereitung.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value) => (
            <article className={styles.valueCard} key={value.number}>
              <span>{value.number}</span>
              <div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BLOODYARMY */}
      <section className={styles.communitySection}>
        <div className={styles.communityGlow} />
        <div className={styles.communityContent}>
          <div className={styles.sectionEyebrow}>DIE COMMUNITY</div>
          <h2>
            WIR SIND
            <br />
            <span>BLOODYARMY.</span>
          </h2>
          <p>
            Seit 2019 steht BloodyArmy für die Community rund um BloodyLP.
            Ein Ort für gemeinsame Streams, Gaming, Eishockey und den
            Austausch miteinander. Denn am Ende geht es nicht nur um
            Inhalte – sondern um die Menschen dahinter.
          </p>
          <Link href="https://twitch.tv/bl00dylp" className={styles.primaryButton} target="_blank" rel="noreferrer">
            ZUM TWITCH-KANAL <span>↗</span>
          </Link>
        </div>
        <div className={styles.communityStamp}>
          <span>EST.</span>
          <strong>2019</strong>
          <span>BLOODYARMY</span>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaContent}>
          <div className={styles.sectionEyebrow}>BLEIB IN VERBINDUNG</div>
          <h2>
            DIE GESCHICHTE
            <br />
            GEHT <span>WEITER.</span>
          </h2>
          <p>
            Ob im Livestream, auf YouTube oder bei der nächsten
            Eishockey-Übertragung – ich freue mich, wenn wir uns dort sehen.
          </p>

          <div className={styles.ctaButtons}>
            <Link
              href="https://twitch.tv/bl00dylp"
              target="_blank"
              rel="noreferrer"
              className={styles.primaryButton}
            >
              TWITCH <span>↗</span>
            </Link>
            <Link
              href="https://www.youtube.com/@BloodyLP"
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryButton}
            >
              YOUTUBE <span>↗</span>
            </Link>
            <Link href="/kontakt" className={styles.secondaryButton}>
              KONTAKT <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.footerLine}>
        <span>BLOODYLP</span>
        <span>ALEXANDER BLATTMANN</span>
        <span>CONTENT • COMMUNITY • PASSION</span>
      </div>
    </main>
  );
}
