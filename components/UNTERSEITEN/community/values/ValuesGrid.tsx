"use client";

import styles from "./ValuesGrid.module.css";

import { values } from "./data";
import ValueCard from "./ValueCard";

export default function ValuesGrid() {
    return (
        <div className={styles.grid}>
            {values.map((value) => (
                <ValueCard
                    key={value.title}
                    {...value}
                />
            ))}
        </div>
    );
}