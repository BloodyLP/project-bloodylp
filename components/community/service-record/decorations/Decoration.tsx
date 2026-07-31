import styles from "./Decoration.module.css";

interface DecorationsProps {
    children: React.ReactNode;
}

export default function Decorations({
    children,
}: DecorationsProps) {
    return (
        <section className={styles.decorations}>

            <header className={styles.header}>

                <h3>AUSZEICHNUNGEN</h3>

            </header>

            <div className={styles.content}>

                {children}

            </div>

        </section>
    );
}