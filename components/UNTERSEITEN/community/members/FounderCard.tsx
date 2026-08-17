"use client";

import styles from "./FounderCard.module.css";

import MemberCard from "./MemberCard";

import {
    members,
} from "./data";

import {
    mapMemberToCard,
} from "./memberMapper";


/* ================================= */
/* FOUNDER CARD */
/* ================================= */

export default function FounderCard() {


    /* ================================= */
    /* FIND FOUNDER */
    /* ================================= */

    const founder = members.find(

        member =>

            member.prestige === 10

    );


    /* ================================= */
    /* NO FOUNDER */
    /* ================================= */

    if (!founder) {

        return null;

    }


    /* ================================= */
    /* RENDER */
    /* ================================= */

    return (

        <div

            className={styles.wrapper}

        >

            {/* ========================= */}
            {/* COMMAND LABEL */}
            {/* ========================= */}

            <div

                className={styles.commandLabel}

            >

                FOUNDER

            </div>


            {/* ========================= */}
            {/* FOUNDER CARD */}
            {/* ========================= */}

            <div

                className={styles.founderCard}

            >

                <MemberCard

                    {...mapMemberToCard(

                        founder

                    )}

                    compact={false}

                />

            </div>

        </div>

    );

}