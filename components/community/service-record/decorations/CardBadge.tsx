import Image from "next/image";

import styles from "./DecorationCard.module.css";

interface CardBadgeProps {

    image: string;

    title: string;

}

export default function CardBadge({

    image,

    title,

}: CardBadgeProps) {

    return (

        <section className={styles.badgeSection}>

            <div className={styles.badge}>

                <Image
                    src={image}
                    alt={title}
                    fill
                    priority={false}
                    className={styles.image}
                />

            </div>

        </section>

    );

}