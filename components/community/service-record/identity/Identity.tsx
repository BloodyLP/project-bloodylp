/**
 * ============================================
 * BloodyArmy
 *
 * Component:
 * Identity
 *
 * Description:
 * Anzeige von Dienstgrad.
 *
 * ============================================
 */

import styles from "./Identity.module.css";

import {

    ServiceRecord

} from "@/lib/service-record";

import {

    getRankImage

} from "@/lib/service-record/getRankImage";

import type {

    RankId

} from "@/data/service-record/ranks";





interface IdentityProps {

    rank: RankId;

}





export default function Identity({

    rank,

}: IdentityProps) {



    const rankData = ServiceRecord.rank(rank);





    return (

        <section className={styles.identity}>

            <img

                src={getRankImage(rankData.id)}

                alt={rankData.name}

                className={styles.insignia}

            />



            <div className={styles.rank}>

                {rankData.name}

            </div>

        </section>

    );

}