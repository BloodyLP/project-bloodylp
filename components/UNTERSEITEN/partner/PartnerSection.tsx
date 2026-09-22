/* ============================================ */
/*                                              */
/* BloodyLP                                     */
/*                                              */
/* Project:                                     */
/* BloodyLP Website                             */
/*                                              */
/* File:                                        */
/* components/UNTERSEITEN/partner/PartnerSection.tsx */
/*                                              */
/* Description:                                 */
/* BloodyLP Partner Section                     */
/*                                              */
/* ============================================ */

import Image from "next/image";

import styles from "./PartnerSection.module.css";

import {
    partners,
    partnerTiers,
    Partner,
    PartnerTier,
} from "@/components/live/data/partners";

/* ============================================ */
/* PARTNER LOGO                                 */
/* ============================================ */

function PartnerLogo({
    partner,
}: {
    partner: Partner;
}) {
    const content = (
        <div className={styles.partnerLogo}>
            <Image
                src={partner.logo}
                alt={`${partner.name} Logo`}
                width={240}
                height={120}
                className={styles.partnerLogoImage}
            />
        </div>
    );

    if (partner.website) {
        return (
            <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partnerLink}
                aria-label={`${partner.name} Website öffnen`}
            >
                {content}
            </a>
        );
    }

    return content;
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
        <article
            className={`${styles.partnerCard} ${
                styles[`tier-${partner.tier}`]
            }`}
        >
            <div className={styles.partnerTier}>
                <span className={styles.tierDot} />
                <span>{partner.tier}</span>
            </div>

            <PartnerLogo partner={partner} />

            <div className={styles.partnerInfo}>
                <h3>{partner.name}</h3>

                {partner.description && (
                    <p>{partner.description}</p>
                )}
            </div>
        </article>
    );
}

/* ============================================ */
/* TIER SECTION                                 */
/* ============================================ */

function TierSection({
    tier,
}: {
    tier: {
        id: PartnerTier;
        name: string;
        title: string;
        description: string;
    };
}) {
    const tierPartners = partners.filter(
        (partner) =>
            partner.tier === tier.id &&
            partner.active !== false
    );

    if (tierPartners.length === 0) {
        return null;
    }

    return (
        <div
            className={`${styles.tierSection} ${
                styles[`tierSection-${tier.id}`]
            }`}
        >
            <div className={styles.tierHeader}>
                <div className={styles.tierHeading}>
                    <span className={styles.tierEyebrow}>
                        {tier.name}
                    </span>

                    <h3>{tier.title}</h3>
                </div>

                <p>{tier.description}</p>
            </div>

            <div className={styles.partnerGrid}>
                {tierPartners.map((partner) => (
                    <PartnerCard
                        key={`${tier.id}-${partner.name}`}
                        partner={partner}
                    />
                ))}
            </div>
        </div>
    );
}

/* ============================================ */
/* MAIN COMPONENT                               */
/* ============================================ */

export default function PartnerSection() {
    const activePartners = partners.filter(
        (partner) => partner.active !== false
    );

    return (
        <section
            id="partner"
            className={styles.section}
        >
            <div className={styles.container}>

                {/* -------------------------------- */}
                {/* HEADER                           */}
                {/* -------------------------------- */}

                <div className={styles.header}>

                    <div className={styles.eyebrow}>
                        <span className={styles.eyebrowLine} />
                        BLOODYLP PARTNER
                    </div>

                    <h2 className={styles.title}>
                        GEMEINSAM
                        <span>STÄRKER.</span>
                    </h2>

                    <p className={styles.intro}>
                        Hinter BloodyLP stehen Partner, die unsere
                        Leidenschaft für Gaming, Eishockey, eSports
                        und Content teilen.
                    </p>

                </div>

                {/* -------------------------------- */}
                {/* PARTNER COUNT                    */}
                {/* -------------------------------- */}

                <div className={styles.partnerMeta}>
                    <div className={styles.metaItem}>
                        <strong>
                            {activePartners.length}
                        </strong>

                        <span>
                            AKTIVE PARTNER
                        </span>
                    </div>

                    <div className={styles.metaDivider} />

                    <div className={styles.metaItem}>
                        <strong>4</strong>

                        <span>
                            PARTNERSTUFEN
                        </span>
                    </div>

                    <div className={styles.metaDivider} />

                    <div className={styles.metaItem}>
                        <strong>∞</strong>

                        <span>
                            GEMEINSAME MÖGLICHKEITEN
                        </span>
                    </div>
                </div>

                {/* -------------------------------- */}
                {/* PARTNER TIERS                    */}
                {/* -------------------------------- */}

                <div className={styles.tiers}>
                    {partnerTiers.map((tier) => (
                        <TierSection
                            key={tier.id}
                            tier={tier}
                        />
                    ))}
                </div>

                {/* -------------------------------- */}
                {/* PARTNER CTA                      */}
                {/* -------------------------------- */}

                <div className={styles.cta}>

                    <div className={styles.ctaContent}>

                        <span className={styles.ctaEyebrow}>
                            PARTNERSCHAFT
                        </span>

                        <h3>
                            WERDE TEIL VON BLOODYLP
                        </h3>

                        <p>
                            Du möchtest deine Marke im Umfeld von
                            Gaming, Eishockey und eSports präsentieren?
                            Gemeinsam entwickeln wir eine passende
                            Partnerschaft.
                        </p>

                    </div>

                    <a
                        href="#kontakt"
                        className={styles.ctaButton}
                    >
                        PARTNER WERDEN
                        <span>→</span>
                    </a>

                </div>

            </div>
        </section>
    );
}