"use client";

import { motion } from "framer-motion";

import styles from "./ValueCard.module.css";

type ValueCardProps = {
    icon: string;
    title: string;
    description: string;
};

export default function ValueCard({
    icon,
    title,
    description,
}: ValueCardProps) {
    return (
        <motion.article

            className={styles.card}

            initial={{
                opacity: 0,
                y: 40,
            }}

            whileInView={{
                opacity: 1,
                y: 0,
            }}

            viewport={{
                once: true,
                amount: .25,
            }}

            transition={{
                duration: .6,
            }}

        >

            <div className={styles.icon}>

                {icon}

            </div>

            <h3>

                {title}

            </h3>

            <p>

                {description}

            </p>

        </motion.article>
    );
}