"use client";

import { motion } from "framer-motion";

import styles from "./CommunityHeroRight.module.css";

import MemberAvatar from "../member-avatar";

const rows = [
    [1],
    [2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12, 13],
    [14, 15, 16, 17],
    [18, 19, 20],
    [21],
];

export default function CommunityHeroRight() {
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
                {rows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={styles.row}
                    >
                        {row.map((member) =>
                            member === 11 ? (
                                <motion.div
                                    key={member}
                                    animate={{
                                        scale: [1, 1.03, 1],
                                        filter: [
                                            "drop-shadow(0 0 0px rgba(163,230,53,.20))",
                                            "drop-shadow(0 0 18px rgba(163,230,53,.65))",
                                            "drop-shadow(0 0 0px rgba(163,230,53,.20))",
                                        ],
                                    }}
                                    transition={{
                                        duration: 9,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <MemberAvatar
                                        image="/members/bloodylp/avatar.png"
                                        name="BloodyLP"
                                        founder
                                    />
                                </motion.div>
                            ) : (
                                <div
                                    key={member}
                                    className={styles.avatar}
                                />
                            )
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}