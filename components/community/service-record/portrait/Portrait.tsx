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
    avatar: string;
    name: string;
}

export default function Portrait({
    avatar,
    name,
}: PortraitProps) {
    return (
        <section className={styles.portrait}>
            <img
                src={avatar}
                alt={name}
                className={styles.image}
            />
        </section>
    );
}