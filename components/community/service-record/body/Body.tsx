/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * Body
 *
 * Version:
 * MK-II
 *
 * Description:
 * Zeigt die persönlichen Daten eines Mitglieds.
 *
 * ============================================
 */

import styles from "./Body.module.css";

import { ServiceRecord } from "@/lib/serviceRecord";

import type { ServiceRecordMember } from "@/types/service-record";

interface BodyProps {

    member: ServiceRecordMember;

}

export default function Body({
    member,
}: BodyProps) {

    const unit = ServiceRecord.unit(member.unit);
    const assignment = ServiceRecord.assignment(member.assignment);

    return (

        <section className={styles.body}>

            <h3 className={styles.sectionTitle}>
                PERSONAL DATA
            </h3>

            <div className={styles.row}>
                <span className={styles.label}>Name</span>
                <span className={styles.value}>{member.name}</span>
            </div>

            <div className={styles.row}>
                <span className={styles.label}>Einheit</span>
                <span className={styles.value}>{unit.title}</span>
            </div>

            <div className={styles.row}>
                <span className={styles.label}>Verwendung</span>
                <span className={styles.value}>{assignment.title}</span>
            </div>

            <div className={styles.row}>
                <span className={styles.label}>Mitglied seit</span>
                <span className={styles.value}>{member.enlisted}</span>
            </div>

        </section>

    );

}