"use client";

import styles from "./Join.module.css";

import JoinContent from "./JoinContent";
import MembershipInfo from "./MembershipInfo";

export default function Join() {
    return (
        <section className={styles.section}>

            <div className={styles.background}></div>

            <div className={styles.container}>

                <JoinContent />

                <MembershipInfo />

            </div>

        </section>
    );
}