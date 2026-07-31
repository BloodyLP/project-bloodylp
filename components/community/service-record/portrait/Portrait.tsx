/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * Portrait
 *
 * Version:
 * MK-V Premium Portrait
 *
 * ============================================
 */

import styles from "./Portrait.module.css";

import { ServiceRecord } from "@/lib/service-record";

import type { ServiceRecordMember } from "@/types/service-record";

interface PortraitProps {
    member: ServiceRecordMember;
}

export default function Portrait({
    member,
}: PortraitProps) {

    const rank = ServiceRecord.rank(member.rank);

    return (

        <section className={styles.portrait}>

            <div className={styles.frame}>

                <span className={styles.cornerTL}></span>
                <span className={styles.cornerTR}></span>
                <span className={styles.cornerBL}></span>
                <span className={styles.cornerBR}></span>

                <img
                    src={member.avatar}
                    alt={member.name}
                    className={styles.image}
                />

                <div className={styles.imageOverlay}></div>

                <div className={styles.footer}>

                    <div className={styles.name}>
                        {member.name}
                    </div>

                    <div className={styles.rank}>
                        {rank.title}
                    </div>

                </div>

            </div>

        </section>

    );

}