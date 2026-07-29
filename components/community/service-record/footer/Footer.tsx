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
 * MK-II
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

            <span className={styles.label}>
                BloodyArmy Member
            </span>

            <span className={styles.version}>
                {version}
            </span>

        </footer>
    );
}