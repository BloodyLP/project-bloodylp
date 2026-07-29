/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * Service Record Framework
 *
 * Component:
 * Footer
 *
 * Version:
 * MK-I
 *
 * Author:
 * BloodyLP & ChatGPT
 *
 * ============================================
 */

import styles from "./Footer.module.css";

interface FooterProps {
    version: string;
}

export default function Footer({
    version,
}: FooterProps) {
    return (
        <footer className={styles.footer}>
            <span>BloodyArmy Community</span>

            <span>{version}</span>
        </footer>
    );
}