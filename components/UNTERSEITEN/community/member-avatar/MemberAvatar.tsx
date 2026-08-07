"use client";

import Image from "next/image";

import styles from "./MemberAvatar.module.css";

type MemberAvatarProps = {

    image:string;

    name:string;

    organization:"bloodyArmy" | "youngArmy";

    founder?:boolean;

};

export default function MemberAvatar({

    image,

    name,

    organization,

    founder=false,

}:MemberAvatarProps){

    return(

        <div

            className={`

                ${styles.avatar}

                ${founder ? styles.founder : ""}

                ${organization==="bloodyArmy"

                    ? styles.bloodyArmy

                    : styles.youngArmy}

            `}

        >

            <Image

                src={image}

                alt={name}

                fill

                sizes="120px"

                className={styles.image}

            />

        </div>

    );

}