"use client";

import { useState } from "react";

import {
    motion,
    AnimatePresence,
} from "framer-motion";

import MemberCard from "../MemberCard";

import { badgeThemes } from "../badgeThemes";

import {
    mapMemberToCard,
} from "../memberMapper";

import type {
    ServiceRecordMember,
} from "@/types/service-record";

import styles from "./PersonnelArchive.module.css";


/* ============================================ */
/* TYPES                                        */
/* ============================================ */

type ArchiveFolderProps = {

    title: string;

    theme: string;

    members: ServiceRecordMember[];

};


/* ============================================ */
/* COMPONENT                                    */
/* ============================================ */

export default function ArchiveFolder({

    title,

    theme,

    members,

}: ArchiveFolderProps) {


    /* ========================================= */
    /* STATE                                     */
    /* ========================================= */

    const [
        open,
        setOpen,
    ] = useState(false);


    /* ========================================= */
    /* COLOR                                     */
    /* ========================================= */

    const color =

        badgeThemes[theme]?.border

        ??

        "#A3E635";


    /* ========================================= */
    /* RENDER                                    */
    /* ========================================= */

    return (

        <section

            className={styles.folder}

            style={{

                borderColor:
                    `${color}55`,

            }}

        >


            {/* ===================================== */}
            {/* FOLDER HEADER                         */}
            {/* ===================================== */}

            <button

                className={styles.folderHeader}

                onClick={() =>
                    setOpen(!open)
                }

                style={{

                    borderLeft:
                        `4px solid ${color}`,

                }}

            >

                {/* ================================= */}
                {/* ARROW                             */}
                {/* ================================= */}

                <span
                    className={styles.arrow}
                >

                    {
                        open
                            ? "▼"
                            : "▶"
                    }

                </span>


                {/* ================================= */}
                {/* TITLE                             */}
                {/* ================================= */}

                <span
                    className={styles.folderTitle}
                >

                    {title}

                </span>


                {/* ================================= */}
                {/* COUNT                             */}
                {/* ================================= */}

                <span

                    className={
                        styles.folderCount
                    }

                    style={{

                        color: color,

                    }}

                >

                    {
                        members.length
                            .toString()
                            .padStart(
                                2,
                                "0"
                            )
                    }

                    {" "}

                    MEMBER

                </span>

            </button>


            {/* ===================================== */}
            {/* CONTENT                               */}
            {/* ===================================== */}

            <AnimatePresence>

                {

                    open && (

                        <motion.div

                            className={
                                styles.folderContent
                            }

                            initial={{

                                opacity: 0,

                                height: 0,

                            }}

                            animate={{

                                opacity: 1,

                                height: "auto",

                            }}

                            exit={{

                                opacity: 0,

                                height: 0,

                            }}

                            transition={{

                                duration: 0.35,

                            }}

                        >

                            {

                                members.map(

                                    member => {

                                        const card =
                                            mapMemberToCard(
                                                member
                                            );


                                        return (

                                            <MemberCard

                                                key={
                                                    member.id
                                                }

                                                compact

                                                {...card}

                                                playerType={
                                                    member.dualRole
                                                        ? "dual"
                                                        : member.playerType
                                                }

                                            />

                                        );

                                    }

                                )

                            }

                        </motion.div>

                    )

                }

            </AnimatePresence>


        </section>

    );

}