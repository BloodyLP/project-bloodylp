"use client";

import Image from "next/image";
import styles from "./BrandBadge.module.css";

export default function BrandBadge() {
    return (
        <div className={styles.badge}>
            <Image
                src="/logos/bloodylp-logo.png"
                alt="BloodyArmy Emblem"
                width={46}
                height={46}
                className={styles.logo}
            />

            <div className={styles.content}>
                <span className={styles.name}>
                    BLOODYARMY
                </span>

                <span className={styles.est}>
                    EST. 2019
                </span>
            </div>
        </div>
    );
}