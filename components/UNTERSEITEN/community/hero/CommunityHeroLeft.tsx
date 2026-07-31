"use client";

import styles from "./CommunityHeroLeft.module.css";

import BrandBadge from "../brand-badge";
import CommunityHeroStats from "./CommunityHeroStats";

export default function CommunityHeroLeft() {
    return (
        <div className={styles.left}>

            <span className={styles.overline}>
                BLOODYARMY
            </span>

            <h1 className={styles.title}>
                MEHR ALS EINE <span>COMMUNITY.</span>
                <br />
                EINE <span>GEMEINSCHAFT.</span>
            </h1>

            <BrandBadge />

            <p className={styles.description}>
                Aus einer spontanen Idee im Livestream entstand die{" "}
                <span>BloodyArmy</span>, die heute bereits über{" "}
                <span>100 Mitglieder</span> vereint.

                <br /><br />

                Gemeinsam stehen wir für{" "}
                <span>Gaming</span>,{" "}
                <span>Loyalität</span>,{" "}
                <span>Zusammenhalt</span> und eine Community, in der{" "}
                <span>jeder seinen Platz findet.</span>
            </p>

            <CommunityHeroStats />

        </div>
    );
}