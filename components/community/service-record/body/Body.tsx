/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * Personnel Data
 *
 * Version:
 * MK-III
 *
 * ============================================
 */

import styles from "./Body.module.css";

import { ServiceRecord } from "@/lib/service-record";

import type { ServiceRecordMember } from "@/types/service-record";

interface BodyProps {
    member: ServiceRecordMember;
}

export default function Body({
    member,
}: BodyProps) {

    const organization = ServiceRecord.organization(member.organization);
    const position = ServiceRecord.position(member.position);

    return (

        <section className={styles.body}>

            <h3 className={styles.sectionTitle}>
                PERSONNEL DATA
            </h3>

            <div className={styles.grid}>

                <div className={styles.item}>
                    <span className={styles.label}>
                        Organisation
                    </span>

                    <span className={styles.value}>
                        {organization.title}
                    </span>
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>
                        Position
                    </span>

                    <span className={styles.value}>
                        {position.title}
                    </span>
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>
                        Reihe
                    </span>

                    <span className={styles.value}>
                        {member.line}. Reihe
                    </span>
                </div>

                <div className={styles.item}>
                    <span className={styles.label}>
                        Mitglied seit
                    </span>

                    <span className={styles.value}>
                        {member.enlisted}
                    </span>
                </div>

            </div>

        </section>

    );

}