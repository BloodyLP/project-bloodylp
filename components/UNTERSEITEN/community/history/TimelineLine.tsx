"use client";

import styles from "./TimelineLine.module.css";

type TimelineLineProps = {
    isLast?: boolean;
};

export default function TimelineLine({
    isLast = false,
}: TimelineLineProps) {
    return (
        <div className={styles.line}>

            <span className={styles.dot}></span>

            {!isLast && (
                <span className={styles.vertical}></span>
            )}

        </div>
    );
}