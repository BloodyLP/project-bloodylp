"use client";

import Image from "next/image";
import styles from "./MemberAvatar.module.css";

type MemberAvatarProps = {
    image: string;
    name: string;
    founder?: boolean;
};

export default function MemberAvatar({
    image,
    name,
    founder = false,
}: MemberAvatarProps) {
    return (
        <div
            className={`${styles.avatar} ${
                founder ? styles.founder : ""
            }`}
        >
            {founder && <span className={styles.pulse}></span>}

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