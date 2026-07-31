"use client";

import styles from "./CommunityHero.module.css";

import CommunityHeroLeft from "./CommunityHeroLeft";
import CommunityHeroRight from "./CommunityHeroRight";

export default function CommunityHero() {

    return (

        <section className={styles.hero}>

            <div className={styles.container}>

                <CommunityHeroLeft />

                <CommunityHeroRight />

            </div>

        </section>

    );

}