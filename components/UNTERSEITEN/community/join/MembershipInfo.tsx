"use client";

import styles from "./MembershipInfo.module.css";

import MembershipBenefit from "./MembershipBenefit";
import { membershipBenefits } from "./membership-data";

export default function MembershipInfo() {
    return (
        <section className={styles.section}>

            <div className={styles.card}>

                <span className={styles.overline}>
                    OFFIZIELLER BEITRITT
                </span>

                <h2 className={styles.title}>
                    Mitglied der BloodyArmy werden
                </h2>

                <p className={styles.intro}>

                    Die BloodyArmy ist und bleibt eine offene Community.
                    Jeder ist jederzeit herzlich willkommen –
                    unabhängig davon, ob er offizielles Mitglied ist oder nicht.

                </p>

                <p className={styles.intro}>

                    Wenn du offizieller Teil der BloodyArmy werden möchtest,
                    kannst du dies mit einer
                    <strong> einmaligen freiwilligen Unterstützung von 49 €</strong>.

                </p>

                <p className={styles.intro}>

                    Während eines Livestreams ertönt dein persönlicher
                    Beitrittssound und du wirst anschließend offiziell
                    in die BloodyArmy aufgenommen.

                </p>

                <div className={styles.divider}></div>

                <h3 className={styles.subtitle}>

                    So funktioniert dein Beitritt

                </h3>

                <div className={styles.process}>

                    <article className={styles.processCard}>

                        <div className={styles.number}>

                            01

                        </div>

                        <h4>

                            Freiwillige Unterstützung

                        </h4>

                        <p>

                            Unterstütze die BloodyArmy einmalig
                            mit <strong>49 €</strong>.

                        </p>

                    </article>

                    <div className={styles.arrow}>

                        →

                    </div>

                    <article className={styles.processCard}>

                        <div className={styles.number}>

                            02

                        </div>

                        <h4>

                            Persönlicher Beitritt

                        </h4>

                        <p>

                            Während eines Livestreams ertönt
                            dein persönlicher Beitrittssound
                            und die Community begrüßt dich
                            offiziell.

                        </p>

                    </article>

                    <div className={styles.arrow}>

                        →

                    </div>

                                        <article className={styles.processCard}>

                        <div className={styles.number}>

                            03

                        </div>

                        <h4>

                            Offizielle Aufnahme

                        </h4>

                        <p>

                            Willkommen in der BloodyArmy.
                            Dein Abenteuer beginnt mit deinem
                            Dienstgrad <strong>Soldat</strong>.

                        </p>

                    </article>

                </div>

                <div className={styles.divider}></div>

                <h3 className={styles.subtitle}>

                    Das erwartet dich als offizielles Mitglied

                </h3>

                <div className={styles.grid}>

                    {membershipBenefits.map((benefit) => (

                        <MembershipBenefit
                            key={benefit.title}
                            {...benefit}
                        />

                    ))}

                </div>

                <div className={styles.notice}>

                    <h4>

                        💚 Jeder ist willkommen.

                    </h4>

                    <p>

                        Eine offizielle Mitgliedschaft ist vollkommen
                        freiwillig.

                        Auch ohne offiziellen Beitritt bist du jederzeit
                        ein geschätzter Teil unserer Community und
                        herzlich willkommen.

                    </p>

                </div>

                <div className={styles.buttons}>

                    <a
                        href="https://www.tipeeestream.com/bl00dylp/donation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.primary}
                    >

                        Offiziell der BloodyArmy beitreten

                    </a>

                    <a
                        href="https://discord.gg/EPNZYZBx8b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondary}
                    >

                        Discord entdecken

                    </a>

                </div>

            </div>

        </section>
    );
}