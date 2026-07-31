"use client";

import styles from "./CommunityHeroStats.module.css";

import {
    Users,
    Medal,
    FileBadge,
    Shield,
} from "lucide-react";

const stats = [
    {
        value: "100+",
        label: "Mitglieder",
        icon: Users,
    },
    {
        value: "250+",
        label: "Auszeichnungen",
        icon: Medal,
    },
    {
        value: "100+",
        label: "Service Records",
        icon: FileBadge,
    },
    {
        value: "2019",
        label: "Gegründet",
        icon: Shield,
    },
];

export default function CommunityHeroStats() {

    return (

        <div className={styles.stats}>

            {stats.map((stat) => {

                const Icon = stat.icon;

                return (

                    <div
                        key={stat.label}
                        className={styles.card}
                    >

                        <div className={styles.header}>

                            <div className={styles.iconWrapper}>

                                <Icon
                                    className={styles.icon}
                                    strokeWidth={2}
                                />

                            </div>

                        </div>

                        <strong>{stat.value}</strong>

                        <span>{stat.label}</span>

                    </div>

                );

            })}

        </div>

    );

}