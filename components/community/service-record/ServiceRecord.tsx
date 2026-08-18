/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * ServiceRecord
 *
 * ============================================
 */

"use client";


import styles from "./ServiceRecord.module.css";


import Header from "./header";

import Identity from "./identity";

import Portrait from "./portrait";

import Body from "./body";

import Decorations from "./decorations";

import DecorationRow from "./decorations/DecorationRow";

import Prestige from "./decorations/prestige";

import StanleyCup from "./decorations/stanley-cup";

import Footer from "./footer";


import {

    getTheme,

} from "@/lib/service-record/theme";


import type {

    ServiceRecordMember,

} from "@/types/service-record";


interface ServiceRecordProps {

    member: ServiceRecordMember;

}


export default function ServiceRecord({

    member,

}: ServiceRecordProps) {


    /* ========================================= */
    /* THEME */
    /* ========================================= */

    /*
    ============================================
    NORMALES MITGLIED

    BloodyArmy
        ↓
    BloodyArmyTheme

    YoungArmy
        ↓
    YoungArmyTheme


    VERSTORBEN

    deceased === true
        ↓
    MemorialTheme


    Das Memorial-Theme überschreibt dabei
    bewusst die ehemalige Organisation.
    ============================================
    */

    const theme = getTheme(

        member.organization,

        member.deceased === true

    );


    /* ========================================= */
    /* SERVICE RECORD */
    /* ========================================= */

    return (

        <article

            className={styles.serviceRecord}

            style={{

                ["--accent" as any]:

                    theme.accent,


                ["--accent-light" as any]:

                    theme.accentLight,


                ["--accent-soft" as any]:

                    theme.accentSoft,


                ["--accent-soft-2" as any]:

                    theme.accentSoft2,


                ["--accent-border" as any]:

                    theme.border,


                ["--accent-glow" as any]:

                    theme.glow,


                ["--accent-glow-soft" as any]:

                    theme.glowSoft,


                ["--button-text" as any]:

                    theme.buttonText,


                ["--card" as any]:

                    theme.card,

            }}

        >


            {/* ================================= */}
            {/* HEADER */}
            {/* ================================= */}

            <Header

                recordNumber={

                    member.recordNumber

                }

            />


            {/* ================================= */}
            {/* IDENTITY */}
            {/* ================================= */}

            <Identity

                rank={

                    member.rank

                }

            />


            {/* ================================= */}
            {/* PORTRAIT */}
            {/* ================================= */}

            <Portrait

                member={

                    member

                }

            />


            {/* ================================= */}
            {/* BODY */}
            {/* ================================= */}

            <Body

                member={

                    member

                }

            />


            {/* ================================= */}
            {/* DECORATIONS */}
            {/* ================================= */}

            <Decorations>


                <DecorationRow>


                    <Prestige

                        member={

                            member

                        }

                    />


                    <StanleyCup

                        member={

                            member

                        }

                    />


                </DecorationRow>


            </Decorations>


            {/* ================================= */}
            {/* MEMORIAL LABEL */}
            {/* ================================= */}

            {member.deceased && (

                <div

                    style={{

                        textAlign: "center",

                        color:

                            "var(--accent)",

                        fontSize: ".8rem",

                        fontWeight: 900,

                        letterSpacing: ".3em",

                        textTransform: "uppercase",

                        padding:

                            "1rem 1.5rem",

                    }}

                >

                    🕯 UNVERGESSEN

                </div>

            )}


            {/* ================================= */}
            {/* BACK */}
            {/* ================================= */}

            <div

                className={

                    styles.backArea

                }

            >

                <a

                    href="/community"

                    className={

                        styles.backButton

                    }

                >

                    ← ZURÜCK ZUR

                    MITGLIEDERÜBERSICHT

                </a>

            </div>


            {/* ================================= */}
            {/* FOOTER */}
            {/* ================================= */}

            <Footer />


        </article>

    );

}