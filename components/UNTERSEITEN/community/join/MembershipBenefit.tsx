"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

import styles from "./MembershipBenefit.module.css";

type MembershipBenefitProps = {
    icon: LucideIcon;
    title: string;
    description: string;
};

export default function MembershipBenefit({
    icon: Icon,
    title,
    description,
}: MembershipBenefitProps) {
    return (
        <motion.article
            className={styles.card}
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.6,
            }}
        >
            <div className={styles.iconWrapper}>

                <div className={styles.iconBackground}>

                    <Icon
                        className={styles.icon}
                        size={34}
                        strokeWidth={2.2}
                    />

                </div>

            </div>

            <h3 className={styles.title}>
                {title}
            </h3>

            <p className={styles.description}>
                {description}
            </p>

        </motion.article>
    );
}