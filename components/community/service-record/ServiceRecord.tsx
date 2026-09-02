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
import PresidentsTrophy from "./decorations/presidents-trophy/PresidentsTrophy";
import CalderCup from "./decorations/calder-cup";
import ClarenceSCampbellTrophy from "./decorations/clarence-s-campbell-trophy/ClarenceSCampbellTrophy";
import PrinceOfWalesTrophy from "./decorations/prince-of-wales-trophy/PrinceOfWalesTrophy";
import MacgregorKilpatrickTrophy from "./decorations/macgregor-kilpatrick-trophy/MacgregorKilpatrickTrophy";
import RichardFCanningTrophy from "./decorations/richard-f-canning-trophy/RichardFCanningTrophy";
import RobertWClarkeTrophy from "./decorations/robert-w-clarke-trophy/RobertWClarkeTrophy";
import NhlTopscorer from "./decorations/nhl/topscorer/NhlTopscorer";
import NhlMeisteTore from "./decorations/nhl/meiste-tore";
import NhlMeisteAssists from "./decorations/nhl/meiste-assists/NhlMeisteAssists";
import NhlMeisteStrafminuten from "./decorations/nhl/meiste-strafminuten/NhlMeisteStrafminuten";
import NhlBestePlusMinus from "./decorations/nhl/beste-plus-minus/NhlBestePlusMinus";
import NhlPoTopscorer from "./decorations/nhl/playoffs/po-topscorer/NhlPoTopscorer";
import NhlPoMeisteTore from "./decorations/nhl/playoffs/po-meiste-tore/NhlPoMeisteTore";

import Footer from "./footer";

import {
    getTheme,
} from "@/lib/service-record/theme";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface ServiceRecordProps {

    member: ServiceRecordMember;

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function ServiceRecord({

    member,

}: ServiceRecordProps) {


    /* ========================================= */
    /* THEME                                     */
    /* ========================================= */

    const theme = getTheme(

        member.organization,

        member.deceased === true

    );


    /* ========================================= */
    /* SERVICE RECORD                            */
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
            {/* HEADER                            */}
            {/* ================================= */}

            <Header

                recordNumber={
                    member.recordNumber
                }

            />


            {/* ================================= */}
            {/* IDENTITY                          */}
            {/* ================================= */}

            <Identity

                rank={
                    member.rank
                }

            />


            {/* ================================= */}
            {/* PORTRAIT                          */}
            {/* ================================= */}

            <Portrait

                member={
                    member
                }

            />


            {/* ================================= */}
            {/* BODY                              */}
            {/* ================================= */}

            <Body

                member={
                    member
                }

            />


            {/* ================================= */}
            {/* DECORATIONS                       */}
            {/* ================================= */}

            <Decorations>


                <DecorationRow>


                    {/* PRESTIGE */}

                    <Prestige

                        member={
                            member
                        }

                    />


                    {/* STANLEY CUP */}

                    <StanleyCup

                        member={
                            member
                        }

                    />


                    {/* PRESIDENT'S TROPHY */}

                    <PresidentsTrophy

                        member={
                            member
                        }

                    />


                    {/* CALDER CUP */}

                    <CalderCup

                        member={
                            member
                        }

                    />


                    {/* CLARENCE S. CAMPBELL TROPHY */}

                    <ClarenceSCampbellTrophy

                        member={
                            member
                        }

                    />

                    {/* PRINCE OF WALES TROPHY */}

<PrinceOfWalesTrophy

    member={
        member
    }

/>

{/* MACGREGOR KILPATRICK TROPHY */}

<MacgregorKilpatrickTrophy

    member={
        member
    }

/>

{/* RICHARD F. CANNING TROPHY */}

<RichardFCanningTrophy

    member={
        member
    }

/>

{/* ROBERT W. CLARKE TROPHY */}

<RobertWClarkeTrophy

    member={
        member
    }

/>

{/* NHL TOPSCORER */}

<NhlTopscorer

    member={
        member
    }

/>

{/* NHL MEISTE TORE */}

<NhlMeisteTore

    member={
        member
    }

/>

{/* NHL MEISTE ASSISTS */}

<NhlMeisteAssists

    member={
        member
    }

/>

{/* ================================= */}
{/* NHL – MEISTE STRAFMINUTEN         */}
{/* ================================= */}

<NhlMeisteStrafminuten

    member={
        member
    }

/>

{/* ================================= */}
{/* NHL – BESTE +/- BILANZ            */}
{/* ================================= */}

<NhlBestePlusMinus

    member={
        member
    }

/>

{/* NHL PLAYOFFS TOPSCORER */}

<NhlPoTopscorer

    member={
        member
    }

/>

{/* NHL PLAYOFFS – MEISTE TORE */}

<NhlPoMeisteTore

    member={
        member
    }

/>

                </DecorationRow>


            </Decorations>


            {/* ================================= */}
            {/* MEMORIAL LABEL                    */}
            {/* ================================= */}

            {

                member.deceased === true

                &&

                (

                    <div

                        style={{

                            textAlign:
                                "center",

                            color:
                                "var(--accent)",

                            fontSize:
                                ".8rem",

                            fontWeight:
                                900,

                            letterSpacing:
                                ".3em",

                            textTransform:
                                "uppercase",

                            padding:
                                "1rem 1.5rem",

                        }}

                    >

                        🕯 UNVERGESSEN

                    </div>

                )

            }


            {/* ================================= */}
            {/* BACK                              */}
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

                    ← ZURÜCK ZUR MITGLIEDERÜBERSICHT

                </a>

            </div>


            {/* ================================= */}
            {/* FOOTER                            */}
            {/* ================================= */}

            <Footer />


        </article>

    );

}