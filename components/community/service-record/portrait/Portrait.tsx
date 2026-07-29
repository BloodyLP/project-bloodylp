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
 * MK-I
 *
 * Author:
 * BloodyLP & ChatGPT
 *
 * ============================================
 */

import styles from "./Portrait.module.css";

interface PortraitProps {
    portrait: string;
    name: string;
}

export default function Portrait({
    portrait,
    name,
}: PortraitProps) {
    return (
        <section className={styles.portrait}>
            <img
                src={portrait}
                alt={name}
                className={styles.image}
            />
        </section>
    );
}