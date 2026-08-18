"use client";

import CareerStats from "./stats/CareerStats";

import {
    getTheme,
    createThemeVariables,
} from "@/lib/service-record/theme";

import type {
    OrganizationId,
} from "@/data/service-record/organizations";

import type {
    SkaterCareerStatsData,
    GoalieCareerStatsData,
    DualCareerStatsData,
} from "./stats/types";

import styles from "./MemberCardBack.module.css";


/* ========================================= */
/* PROPS */
/* ========================================= */

type MemberCardBackProps = {

    name: string;

    armyId: string;

    organization: OrganizationId;


    /*
    ============================================
    VERSTORBEN
    ============================================
    */

    deceased?: boolean;


    /*
    ============================================
    INDIVIDUELLER GEDENKTEXT
    ============================================
    */

    memorialText?: string;


    /*
    ============================================
    KARRIERE STATISTIKEN
    ============================================
    */

    stats?:
        | SkaterCareerStatsData
        | GoalieCareerStatsData
        | DualCareerStatsData;


    /*
    ============================================
    SPIELERTYP
    ============================================
    */

    playerType:
        | "skater"
        | "goalie"
        | "dual";


    /*
    ============================================
    DUAL ROLE
    ============================================
    */

    dualRole?: boolean;


    /*
    ============================================
    PROFIL
    ============================================
    */

    profile?: {

        position: string;

        number: string;

    };


    /*
    ============================================
    ZURÜCK
    ============================================
    */

    onBack: () => void;

};


/* ========================================= */
/* COMPONENT */
/* ========================================= */

export default function MemberCardBack({

    name,

    armyId,

    organization,

    deceased = false,

    memorialText,

    stats,

    playerType,

    dualRole = false,

    profile,

    onBack,

}: MemberCardBackProps) {


    /* ========================================= */
    /* THEME */
    /* ========================================= */

    const theme = getTheme(

        organization,

        deceased

    );


    /* ========================================= */
    /* CSS VARIABLES */
    /* ========================================= */

    const themeVariables =

        createThemeVariables(

            theme

        );


    /* ========================================= */
    /* CARD */
    /* ========================================= */

    return (

        <article

            className={styles.backCard}

            style={themeVariables}

        >


            {/* ================================= */}
            {/* HEADER */}
            {/* ================================= */}

            <header

                className={styles.header}

            >

                <span

                    className={styles.title}

                >

                    BLOODYARMY CAREER PROFILE

                </span>


                <span

                    className={styles.member}

                >

                    {armyId}

                    {" • "}

                    {name}

                </span>

            </header>


            {/* ================================= */}
            {/* MEMORIAL */}
            {/* ================================= */}

            {deceased && (

                <section

                    className={

                        styles.memorialSection

                    }

                >

                    <div

                        className={

                            styles.memorialHeading

                        }

                    >

                        <span

                            className={

                                styles.memorialSymbol

                            }

                            aria-hidden="true"

                        >

                            †

                        </span>


                        <span>

                            UNVERGESSEN

                        </span>

                    </div>


                    <div

                        className={

                            styles.memorialSubheading

                        }

                    >

                        IN EHRENDEM GEDENKEN

                    </div>


                    {memorialText && (

                        <p

                            className={

                                styles.memorialText

                            }

                        >

                            {memorialText}

                        </p>

                    )}

                </section>

            )}


            {/* ================================= */}
            {/* PLAYER PROFILE */}
            {/* ================================= */}

            <section

                className={styles.playerProfile}

            >


                {/* ================================= */}
                {/* PLAYER */}
                {/* ================================= */}

                <div

                    className={styles.playerIdentity}

                >

                    <span>

                        SPIELER

                    </span>


                    <strong>

                        {name}

                    </strong>

                </div>


                {/* ================================= */}
                {/* POSITION / NUMBER */}
                {/* ================================= */}

                <div

                    className={styles.playerData}

                >


                    <div>

                        <span>

                            POSITION

                        </span>


                        <strong>

                            {

                                profile?.position

                                ??

                                "Keine Angabe"

                            }

                        </strong>

                    </div>


                    <div>

                        <span>

                            NUMMER

                        </span>


                        <strong>

                            {

                                profile?.number

                                ??

                                "#00"

                            }

                        </strong>

                    </div>


                </div>


            </section>


            {/* ================================= */}
            {/* STATISTICS */}
            {/* ================================= */}

            <div

                className={styles.content}

            >

                {

                    stats

                    ?

                    <CareerStats

                        playerType={

                            playerType

                        }

                        stats={

                            stats

                        }

                    />

                    :

                    <div

                        className={styles.empty}

                    >

                        KEINE KARRIERE-DATEN VORHANDEN

                    </div>

                }

            </div>


            {/* ================================= */}
            {/* FOOTER */}
            {/* ================================= */}

            <footer

                className={styles.footer}

            >

                <button

                    type="button"

                    className={styles.backButton}

                    onClick={(event) => {

                        event.stopPropagation();

                        onBack();

                    }}

                >

                    ↺ ZURÜCK ZUR VORDERSEITE

                </button>

            </footer>


        </article>

    );

}