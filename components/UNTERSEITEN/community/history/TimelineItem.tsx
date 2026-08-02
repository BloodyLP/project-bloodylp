"use client";

import styles from "./TimelineItem.module.css";

type Props = {

    year:string;

    subtitle:string;

    title:string;

    description:string;

    reverse?:boolean;

};

export default function TimelineItem({

    year,
    subtitle,
    title,
    description,
    reverse=false,

}:Props){

    return(

        <article className={`${styles.item} ${reverse ? styles.reverse : ""}`}>

            <div className={styles.side}>

                <span className={styles.year}>

                    {year}

                </span>

                <span className={styles.subtitle}>

                    {subtitle}

                </span>

            </div>

            <div className={styles.center}>

                <span className={styles.circle}></span>

                <span className={styles.vertical}></span>

            </div>

            <div className={styles.card}>

                <h3>{title}</h3>

                <p>{description}</p>

            </div>

        </article>

    );

}