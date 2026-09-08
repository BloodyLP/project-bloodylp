"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./CommunityHeroRight.module.css";
import MemberAvatar from "../member-avatar";

type FeaturedMember = {
    image: string;
    name: string;
    organization: "bloodyArmy" | "youngArmy";
    founder?: boolean;
};

/*
 * Die Formation bleibt immer identisch:
 *
 *           1
 *         2 3 4
 *       5 6 7 8
 *     9 10 11 12 13
 *      14 15 16 17
 *        18 19 20
 *           21
 *
 * Position 11 = BloodyLP und bleibt fest.
 */
const rows = [
    [1],
    [2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12, 13],
    [14, 15, 16, 17],
    [18, 19, 20],
    [21],
];

const featuredMembers: Record<number, FeaturedMember> = {
    11: {
        image: "/members/bloodylp/avatar.png",
        name: "BloodyLP",
        organization: "bloodyArmy",
        founder: true,
    },

    12: {
        image: "/members/dungeon/avatar.png",
        name: "Dungeon_62",
        organization: "bloodyArmy",
    },

    10: {
        image: "/members/o1l3r5/avatar.png",
        name: "O1L3R5",
        organization: "bloodyArmy",
    },

    15: {
        image: "/members/theilmfurter/avatar.png",
        name: "Theilmfurter",
        organization: "youngArmy",
    },

    9: {
        image: "/members/ligoween/avatar.png",
        name: "Ligoween",
        organization: "bloodyArmy",
    },

    6: {
        image: "/members/lolfury37/avatar.png",
        name: "LOLFury37",
        organization: "bloodyArmy",
    },

    7: {
        image: "/members/david211197/avatar.png",
        name: "David211197",
        organization: "bloodyArmy",
    },

    19: {
        image: "/members/adlermannheimfan/avatar.png",
        name: "Adlermannheimfan95",
        organization: "youngArmy",
    },

    3: {
        image: "/members/knecht/avatar.png",
        name: "Kn3cht82",
        organization: "bloodyArmy",
    },

    1: {
        image: "/members/stevethebever/avatar.png",
        name: "stevethebever",
        organization: "bloodyArmy",
    },

    21: {
        image: "/members/real121x/avatar.png",
        name: "real121x",
        organization: "youngArmy",
    },

    16: {
        image: "/members/sackzefix/avatar.png",
        name: "Sackzefix",
        organization: "youngArmy",
    },

    13: {
        image: "/members/condor/avatar.png",
        name: "Condor",
        organization: "bloodyArmy",
    },

    14: {
        image: "/members/annihilatorlp/avatar.png",
        name: "AnnihilatorLP97",
        organization: "youngArmy",
    },

    2: {
        image: "/members/surstroemingtyp/avatar.png",
        name: "surstroemingtyp123",
        organization: "bloodyArmy",
    },

    17: {
        image: "/members/mayla/avatar.png",
        name: "MaylatheBloodylinchen",
        organization: "youngArmy",
    },

    18: {
        image: "/members/maeusefinger/avatar.png",
        name: "maeusefinger",
        organization: "youngArmy",
    },

    4: {
        image: "/members/nursoeindoggie/avatar.png",
        name: "NurSoEinDoggie",
        organization: "bloodyArmy",
    },

    20: {
        image: "/members/tonska/avatar.png",
        name: "tonska",
        organization: "youngArmy",
    },

    5: {
        image: "/members/derpolarstern/avatar.png",
        name: "derpolarstern",
        organization: "bloodyArmy",
    },

    8: {
        image: "/members/bobbele/avatar2.png",
        name: "bobbele",
        organization: "bloodyArmy",
    },
};

/*
 * Fisher-Yates Shuffle
 *
 * Mischt ein Array wirklich zufällig durch,
 * ohne Elemente zu verlieren oder zu duplizieren.
 */
function shuffle<T>(array: T[]): T[] {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));

        [result[i], result[randomIndex]] = [
            result[randomIndex],
            result[i],
        ];
    }

    return result;
}

export default function CommunityHeroRight() {
    /*
     * Zu Beginn verwenden wir die normale Anordnung.
     * Nach dem Mount wird diese einmal zufällig gemischt.
     *
     * Dadurch vermeiden wir Hydration-Probleme mit Next.js.
     */
    const [randomizedRows, setRandomizedRows] = useState(rows);

    useEffect(() => {
        /*
         * Alle Mitglieder außer BloodyLP sammeln.
         */
        const otherMemberIds = Object.keys(featuredMembers)
            .map(Number)
            .filter((id) => id !== 11);

        /*
         * Mitglieder zufällig mischen.
         */
        const shuffledMembers = shuffle(otherMemberIds);

        /*
         * Die Positionen werden neu befüllt.
         *
         * Position 11 bleibt anschließend wieder BloodyLP.
         */
        let shuffledIndex = 0;

        const newRows = rows.map((row) =>
            row.map((position) => {
                /*
                 * Die zentrale Position 11 bleibt fest.
                 */
                if (position === 11) {
                    return 11;
                }

                const newMember = shuffledMembers[shuffledIndex];

                shuffledIndex++;

                return newMember;
            }),
        );

        setRandomizedRows(newRows);
    }, []);

    return (
        <div className={styles.right}>
            <motion.div
                className={styles.formation}
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {randomizedRows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={styles.row}
                    >
                        {row.map((member) => {
                            const featured =
                                featuredMembers[member];

                            if (featured) {
                                return (
                                    <motion.div
                                        key={member}
                                        animate={{
                                            scale: [1, 1.03, 1],
                                            filter: [
                                                featured.organization ===
                                                "bloodyArmy"
                                                    ? "drop-shadow(0 0 0px rgba(163,230,53,.20))"
                                                    : "drop-shadow(0 0 0px rgba(255,60,60,.20))",

                                                featured.organization ===
                                                "bloodyArmy"
                                                    ? "drop-shadow(0 0 18px rgba(163,230,53,.65))"
                                                    : "drop-shadow(0 0 18px rgba(255,60,60,.65))",

                                                featured.organization ===
                                                "bloodyArmy"
                                                    ? "drop-shadow(0 0 0px rgba(163,230,53,.20))"
                                                    : "drop-shadow(0 0 0px rgba(255,60,60,.20))",
                                            ],
                                        }}
                                        transition={{
                                            duration: 9,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <MemberAvatar
                                            image={featured.image}
                                            name={featured.name}
                                            organization={
                                                featured.organization
                                            }
                                            founder={featured.founder}
                                        />
                                    </motion.div>
                                );
                            }

                            return (
                                <div
                                    key={member}
                                    className={styles.avatar}
                                />
                            );
                        })}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}