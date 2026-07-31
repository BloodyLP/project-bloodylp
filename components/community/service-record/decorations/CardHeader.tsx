import styles from "./DecorationCard.module.css";

import { DECORATION_CATEGORIES } from "./constants";

import type { DecorationCategory } from "./types";

interface CardHeaderProps {
    category: DecorationCategory;
    code: string;
}

export default function CardHeader({
    category,
    code,
}: CardHeaderProps) {
    return (
        <header className={styles.header}>
            <span className={styles.category}>
                {DECORATION_CATEGORIES[category]}
            </span>

            <span className={styles.code}>
                {code}
            </span>
        </header>
    );
}