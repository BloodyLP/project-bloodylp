"use client";

import styles from "./CareerStats.module.css";

import type {
    SkaterCareerStatsData,
} from "./types";

import type {
    SkaterSeasonStats,
} from "@/types/career-stats";

import {
    teams,
} from "@/data/service-record/teams";


type CareerStatsSkaterProps = {

    stats: SkaterCareerStatsData;

};


type StatsTableProps = {

    title: string;

    rows: SkaterSeasonStats[];

    playoff?: boolean;

};


/* ================================= */
/* STATISTIK-TABELLE */
/* ================================= */

function StatsTable({

    title,

    rows,

    playoff = false,

}: StatsTableProps) {

    return (

        <section className={styles.section}>

            <h3>

                {title}

            </h3>


            <div className={styles.table}>

                <div className={styles.rowHeader}>

                    <span>

                        SAISON

                    </span>

                    <span>

                        TEAM

                    </span>

                    <span>

                        SP

                    </span>

                    <span>

                        T

                    </span>

                    <span>

                        A

                    </span>

                    <span className={styles.highlightHeader}>

                        P

                    </span>

                    <span>

                        +/-

                    </span>

                    <span>

                        STM

                    </span>

                </div>


                {

                    rows.map((season) => (

                        <div

                            key={season.year}

                            className={styles.row}

                        >

                            <span>

                                {season.year}

                            </span>


                            <div className={styles.team}>

                                <img

                                    src={teams[season.team].logo}

                                    alt={teams[season.team].name}

                                />

                            </div>


                            <span>

                                {

                                    playoff

                                        ?

                                        season.playoffGames

                                        :

                                        season.games

                                }

                            </span>


                            <span>

                                {

                                    playoff

                                        ?

                                        season.playoffGoals

                                        :

                                        season.goals

                                }

                            </span>


                            <span>

                                {

                                    playoff

                                        ?

                                        season.playoffAssists

                                        :

                                        season.assists

                                }

                            </span>


                            <span

                                className={

                                    styles.highlightPoints

                                }

                            >

                                {

                                    playoff

                                        ?

                                        season.playoffPoints

                                        :

                                        season.points

                                }

                            </span>


                            <span>

                                {

                                    playoff

                                        ?

                                        (

                                            season.playoffPlusMinus > 0

                                                ?

                                                `+${season.playoffPlusMinus}`

                                                :

                                                season.playoffPlusMinus

                                        )

                                        :

                                        (

                                            season.plusMinus > 0

                                                ?

                                                `+${season.plusMinus}`

                                                :

                                                season.plusMinus

                                        )

                                }

                            </span>


                            <span>

                                {

                                    playoff

                                        ?

                                        season.playoffPenaltyMinutes

                                        :

                                        season.penaltyMinutes

                                }

                            </span>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}


/* ================================= */
/* GESAMTSTATISTIK BERECHNEN */
/* ================================= */

function calculateTotal(

    rows: SkaterSeasonStats[]

) {

    return rows.reduce(

        (acc, row) => ({

            games:

                acc.games +

                row.games +

                row.playoffGames,

            goals:

                acc.goals +

                row.goals +

                row.playoffGoals,

            assists:

                acc.assists +

                row.assists +

                row.playoffAssists,

            points:

                acc.points +

                row.points +

                row.playoffPoints,

            plusMinus:

                acc.plusMinus +

                row.plusMinus +

                row.playoffPlusMinus,

            penaltyMinutes:

                acc.penaltyMinutes +

                row.penaltyMinutes +

                row.playoffPenaltyMinutes,

        }),

        {

            games: 0,

            goals: 0,

            assists: 0,

            points: 0,

            plusMinus: 0,

            penaltyMinutes: 0,

        }

    );

}


/* ================================= */
/* COMPONENT */
/* ================================= */

export default function CareerStatsSkater({

    stats,

}: CareerStatsSkaterProps) {

    const seasons = stats.seasons;


    /* ================================= */
    /* ORGANISATIONEN TRENNEN */
    /* ================================= */

    const youngArmySeasons = seasons.filter(

        row =>

            row.team === "Young Army"

    );


    const bloodyArmySeasons = seasons.filter(

        row =>

            row.team === "BloodyArmy"

    );


    /* ================================= */
    /* GESAMTWERTE BERECHNEN */
    /* ================================= */

    const youngArmyTotal =

        calculateTotal(

            youngArmySeasons

        );


    const bloodyArmyTotal =

        calculateTotal(

            bloodyArmySeasons

        );


    return (

        <div className={styles.wrapper}>


            {/* ================================= */}
            {/* REGULAR SEASON */}
            {/* ================================= */}

            <StatsTable

                title="REGULAR SEASON"

                rows={seasons}

            />


            {/* ================================= */}
            {/* PLAYOFFS */}
            {/* ================================= */}

            <StatsTable

                title="PLAYOFFS"

                rows={seasons}

                playoff

            />


            {/* ================================= */}
            {/* GESAMTKARRIERE – YOUNG ARMY */}
            {/* ================================= */}

            {

                youngArmySeasons.length > 0 && (

                    <section

                        className={

                            `${styles.total} ${styles.youngArmyTotal}`

                        }

                    >

                        <h3>

                            GESAMTKARRIERE

                        </h3>


                        <div className={styles.totalGrid}>


                            <div className={styles.totalCard}>

                                <span>

                                    SPIELE

                                </span>

                                <strong>

                                    {youngArmyTotal.games}

                                </strong>

                            </div>


                            <div className={styles.totalCard}>

                                <span>

                                    TORE

                                </span>

                                <strong>

                                    {youngArmyTotal.goals}

                                </strong>

                            </div>


                            <div className={styles.totalCard}>

                                <span>

                                    ASSISTS

                                </span>

                                <strong>

                                    {youngArmyTotal.assists}

                                </strong>

                            </div>


                            <div

                                className={

                                    `${styles.totalCard} ${styles.highlightTotal}`

                                }

                            >

                                <span>

                                    PUNKTE

                                </span>

                                <strong>

                                    {youngArmyTotal.points}

                                </strong>

                            </div>


                            <div className={styles.totalCard}>

                                <span>

                                    +/-

                                </span>

                                <strong>

                                    {

                                        youngArmyTotal.plusMinus > 0

                                            ?

                                            `+${youngArmyTotal.plusMinus}`

                                            :

                                            youngArmyTotal.plusMinus

                                    }

                                </strong>

                            </div>


                            <div className={styles.totalCard}>

                                <span>

                                    STRAFMINUTEN

                                </span>

                                <strong>

                                    {youngArmyTotal.penaltyMinutes}

                                </strong>

                            </div>


                        </div>

                    </section>

                )

            }


            {/* ================================= */}
            {/* GESAMTKARRIERE – BLOODYARMY */}
            {/* ================================= */}

            {

                bloodyArmySeasons.length > 0 && (

                    <section

                        className={

                            `${styles.total} ${styles.bloodyArmyTotal}`

                        }

                    >

                        <h3>

                            GESAMTKARRIERE

                        </h3>


                        <div className={styles.totalGrid}>


                            <div className={styles.totalCard}>

                                <span>

                                    SPIELE

                                </span>

                                <strong>

                                    {bloodyArmyTotal.games}

                                </strong>

                            </div>


                            <div className={styles.totalCard}>

                                <span>

                                    TORE

                                </span>

                                <strong>

                                    {bloodyArmyTotal.goals}

                                </strong>

                            </div>


                            <div className={styles.totalCard}>

                                <span>

                                    ASSISTS

                                </span>

                                <strong>

                                    {bloodyArmyTotal.assists}

                                </strong>

                            </div>


                            <div

                                className={

                                    `${styles.totalCard} ${styles.highlightTotal}`

                                }

                            >

                                <span>

                                    PUNKTE

                                </span>

                                <strong>

                                    {bloodyArmyTotal.points}

                                </strong>

                            </div>


                            <div className={styles.totalCard}>

                                <span>

                                    +/-

                                </span>

                                <strong>

                                    {

                                        bloodyArmyTotal.plusMinus > 0

                                            ?

                                            `+${bloodyArmyTotal.plusMinus}`

                                            :

                                            bloodyArmyTotal.plusMinus

                                    }

                                </strong>

                            </div>


                            <div className={styles.totalCard}>

                                <span>

                                    STRAFMINUTEN

                                </span>

                                <strong>

                                    {bloodyArmyTotal.penaltyMinutes}

                                </strong>

                            </div>


                        </div>

                    </section>

                )

            }


        </div>

    );

}