/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * Service Record Framework
 *
 * Component:
 * Portrait
 *
 * Version:
 * MK-II
 *
 * ============================================
 */

import styles from "./Portrait.module.css";

interface PortraitProps {
    avatar: string;
    name: string;
    rank: string;
    rankInsignia: string;
}

export default function Portrait({
    avatar,
    name,
    rank,
    rankInsignia,
}: PortraitProps) {
    return (
        <section className={styles.portrait}>

            <div className={styles.frame}>

                <img
                    src={avatar}
                    alt={name}
                    className={styles.image}
                />

                <div className={styles.namePlate}>
                    {name}
                </div>

                <div className={styles.rankPlate}>

                    <div className={styles.prestigePlate}>

    <span className={styles.prestigeLabel}>
        PRESTIGE LEVEL
    </span>

    <div className={styles.prestigeStars}>
        ★ ★ ★ ★ 
    </div>

</div>

    <img
        src={rankInsignia}
        alt={rank}
        className={styles.rankImage}
    />

    <span className={styles.rankText}>
        {rank}
    </span>

</div>

            </div>

        </section>
    );
}