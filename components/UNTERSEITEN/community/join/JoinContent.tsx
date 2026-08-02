"use client";

import styles from "./JoinContent.module.css";

export default function JoinContent() {
    return (
        <div className={styles.content}>

            <span className={styles.overline}>
                BLOODYARMY
            </span>

            <h2 className={styles.title}>
                Deine Geschichte

                <span>
                    beginnt hier.
                </span>

            </h2>

            <p className={styles.lead}>
                Vielleicht beginnt genau heute dein nächstes Kapitel.
            </p>

            <p className={styles.text}>

                Du hast unsere Geschichte kennengelernt.

                <br />
                <br />

                Die BloodyArmy ist mehr als eine Gaming-Community.
                Sie ist ein Ort für Menschen, die Leidenschaft,
                Respekt und Zusammenhalt teilen.

                <br />
                <br />

                Ganz gleich, ob du uns schon seit Jahren begleitest
                oder gerade erst auf uns aufmerksam geworden bist –
                bei uns bist du jederzeit herzlich willkommen.

                <br />
                <br />

                Wenn du noch einen Schritt weitergehen und offizieller
                Teil der BloodyArmy werden möchtest, findest du
                nachfolgend alle Informationen zum Beitritt sowie
                die Vorteile einer Mitgliedschaft.

            </p>

        </div>
    );
}