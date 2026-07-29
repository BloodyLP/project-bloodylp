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
 * MK-I
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
    SERVICE_RECORD_VERSION,
} from "../constants";

interface HeaderProps {
    recordNumber: string;
}

export default function Header({
    recordNumber,
}: HeaderProps) {
    return (
        <header className={styles.header}>
            <div>
                <h2>{CARD_TITLE}</h2>

                <span>{CARD_SUBTITLE}</span>
            </div>

            <div className={styles.record}>
                <span>{SERVICE_RECORD_VERSION}</span>

                <strong>{recordNumber}</strong>
            </div>
        </header>
    );
}