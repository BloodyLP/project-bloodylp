/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * Identity
 *
 * Description:
 * Zeigt den Dienstgrad oberhalb
 * des Portraits.
 *
 * Version:
 * MK-IV
 *
 * ============================================
 */

import styles from "./Identity.module.css";

import { ServiceRecord } from "@/lib/service-record";

import type { RankId } from "@/data/service-record/ranks";
import type { OrganizationId } from "@/data/service-record/organizations";

interface IdentityProps {

    rank: RankId;

    organization: OrganizationId;

}

export default function Identity({

    rank,

}: IdentityProps) {

    const rankData = ServiceRecord.rank(rank);

    return (

        <section className={styles.identity}>

            <img
                src={rankData.insignia}
                alt={rankData.title}
                className={styles.insignia}
            />

        </section>

    );

}