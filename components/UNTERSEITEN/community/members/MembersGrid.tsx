"use client";

import styles from "./MembersGrid.module.css";

import { members } from "./data";
import MemberCard from "./MemberCard";

export default function MembersGrid() {
    return (
        <div className={styles.grid}>

            {members.map((member) => (

                <MemberCard
                    key={member.id}
                    {...member}
                />

            ))}

        </div>
    );
}