/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * Service Record Framework
 *
 * Component:
 * Header
 *
 * Version:
 * MK-II
 *
 * Author:
 * BloodyLP & ChatGPT
 *
 * ============================================
 */

import styles from "./Header.module.css";

import {
    CARD_TITLE,
    CARD_SUBTITLE,
} from "../constants";

interface HeaderProps {
    recordNumber: string;
}

export default function Header({
    recordNumber,
}: HeaderProps) {
    return (
        <header className={styles.header}>

            <div className={styles.titleBlock}>

                <h2>{CARD_TITLE}</h2>

                <small>MEMBER CARD</small>

            </div>

            <div className={styles.recordBox}>

                <span className={styles.recordLabel}>
                    ARMY-ID
                </span>

                <strong className={styles.recordNumber}>
                    {recordNumber}
                </strong>

            </div>

        </header>
    );
}