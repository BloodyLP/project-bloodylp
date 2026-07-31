import styles from "./DecorationCategory.module.css";

interface DecorationCategoryProps {
    title: string;
    badge: React.ReactNode;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

export default function DecorationCategory({
    title,
    badge,
    label,
    active = false,
    onClick,
}: DecorationCategoryProps) {
    return (
        <button
            type="button"
            className={`${styles.category} ${active ? styles.active : ""}`}
            onClick={onClick}
        >
            <header className={styles.header}>
                {title}
            </header>

            <div className={styles.badge}>
                {badge}
            </div>

            <footer className={styles.footer}>
                {label}
            </footer>
        </button>
    );
}