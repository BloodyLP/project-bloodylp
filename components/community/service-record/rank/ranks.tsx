/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * Service Record Framework
 *
 * Component:
 * Rank
 *
 * Version:
 * MK-I
 *
 * Author:
 * BloodyLP & ChatGPT
 *
 * ============================================
 */

import styles from "./Rank.module.css";

interface RankProps {
    insignia: string;
    rank: string;
}

export default function Rank({
    insignia,
    rank,
}: RankProps) {
    return (
        <section className={styles.rank}>

            <img
                src={insignia}
                alt={rank}
                className={styles.insignia}
            />

            <span className={styles.title}>
                {rank}
            </span>

        </section>
    );
}