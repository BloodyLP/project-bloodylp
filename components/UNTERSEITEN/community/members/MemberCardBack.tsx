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


/*
================================================
PROPS
================================================
*/

type MemberCardBackProps = {

    name: string;

    armyId: string;

    organization: OrganizationId;

    stats?:
        | SkaterCareerStatsData
        | GoalieCareerStatsData
        | DualCareerStatsData;

    /*
     * Der Kartentyp bleibt weiterhin
     * nur Skater oder Goalie.
     */
    playerType: "skater" | "goalie";

    /*
     * Sonderfall:
     *
     * Spieler war sowohl Skater
     * als auch Goalie.
     */
    dualRole?: boolean;

    profile?: {

        position: string;

        number: string;

    };

    onBack: () => void;

};


/*
================================================
COMPONENT
================================================
*/

export default function MemberCardBack({

    name,

    armyId,

    organization,

    stats,

    playerType,

    dualRole = false,

    profile,

    onBack,

}: MemberCardBackProps) {


    /*
    ============================================
    THEME
    ============================================
    */

    const theme = getTheme(
        organization
    );


    /*
    ============================================
    CAREER TYPE
    ============================================
    */

    const careerPlayerType =
        dualRole
            ? "dual"
            : playerType;


    /*
    ============================================
    RENDER
    ============================================
    */

    return (

        <article

            className={`
                ${styles.backCard}
                ${
                    organization === "youngArmy"
                        ? styles.youngArmy
                        : styles.bloodyArmy
                }
            `}

            style={
                createThemeVariables(
                    theme
                )
            }

        >

            {/* =================================
                HEADER
            ================================= */}

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

                    {armyId} • {name}

                </span>

            </header>


            {/* =================================
                PLAYER PROFILE
            ================================= */}

            <section
                className={styles.playerProfile}
            >

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


            {/* =================================
                CAREER STATS
            ================================= */}

            <div
                className={styles.content}
            >

                {

                    stats

                    ?

                    <CareerStats

                        playerType={
                            careerPlayerType
                        }

                        stats={
                            stats
                        }

                    />

                    :

                    <div
                        className={styles.empty}
                    >

                        KEINE KARRIERE-DATEN
                        VORHANDEN

                    </div>

                }

            </div>


            {/* =================================
                FOOTER
            ================================= */}

            <footer
                className={styles.footer}
            >

                <button

                    type="button"

                    className={
                        styles.backButton
                    }

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