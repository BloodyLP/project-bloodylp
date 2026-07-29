/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * Service Record Framework
 *
 * Component:
 * Body
 *
 * Version:
 * MK-I
 *
 * Author:
 * BloodyLP & ChatGPT
 *
 * ============================================
 */

import styles from "./Body.module.css";

interface BodyProps {
    name: string;
    rank: string;
    unit: string;
    assignment: string;
    enlisted: string;
    prestige: string;
}

export default function Body({
    name,
    rank,
    unit,
    assignment,
    enlisted,
    prestige,
}: BodyProps) {
    return (
        <section className={styles.body}>
            <div className={styles.row}>
                <span>Name</span>
                <strong>{name}</strong>
            </div>

            <div className={styles.row}>
                <span>Dienstgrad</span>
                <strong>{rank}</strong>
            </div>

            <div className={styles.row}>
                <span>Einheit</span>
                <strong>{unit}</strong>
            </div>

            <div className={styles.row}>
                <span>Verwendung</span>
                <strong>{assignment}</strong>
            </div>

            <div className={styles.row}>
                <span>Mitglied seit</span>
                <strong>{enlisted}</strong>
            </div>

            <div className={styles.row}>
                <span>Prestige</span>
                <strong>{prestige}</strong>
            </div>
        </section>
    );
}