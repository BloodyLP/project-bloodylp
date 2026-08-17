"use client";

import styles from "./CareerStats.module.css";

import type {
    SkaterCareerStatsData,
} from "./types";

import type {
    CareerSeasonStats,
} from "@/types/career-stats";

import {
    teams,
} from "@/data/service-record/teams";


/* ========================================= */
/* PROPS */
/* ========================================= */

type CareerStatsSkaterProps = {

    stats: SkaterCareerStatsData;

};


/* ========================================= */
/* TABLE PROPS */
/* ========================================= */

type StatsTableProps = {

    title: string;

    rows: CareerSeasonStats[];

    playoff?: boolean;

};


/* ========================================= */
/* STATS TABLE */
/* ========================================= */

function StatsTable({

    title,

    rows,

    playoff = false,

}: StatsTableProps){

    return(

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

                    <span>
                        P
                    </span>

                    <span>
                        +/-
                    </span>

                    <span>
                        STR
                    </span>

                </div>


                {

                    rows.map((season) => {

                        /* ================================= */
                        /* TEAM */
                        /* ================================= */

                        const team =

                            season.team === "Young Army"

                                ?

                                teams["Young Army"]

                                :

                                teams["BloodyArmy"];


                        return(

                            <div

                                key={season.year}

                                className={styles.row}

                            >

                                <span>

                                    {season.year}

                                </span>


                                <div className={styles.team}>

                                    <img

                                        src={team.logo}

                                        alt={team.name}

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


                                <span>

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

                                            season.playoffPlusMinus

                                            :

                                            season.plusMinus

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

                        );

                    })

                }

            </div>

        </section>

    );

}


/* ========================================= */
/* MAIN COMPONENT */
/* ========================================= */

export default function CareerStatsSkater({

    stats,

}: CareerStatsSkaterProps){


    const seasons = stats.seasons;


    /* ================================= */
    /* YOUNG ARMY */
    /* ================================= */

    const youngArmySeasons =

        seasons.filter(

            season =>

                season.team === "Young Army"

        );


    /* ================================= */
    /* BLOODYARMY */
    /* ================================= */

    const bloodyArmySeasons =

        seasons.filter(

            season =>

                season.team === "BloodyArmy"

        );


    /* ================================= */
    /* YOUNG ARMY GESAMT */
    /* ================================= */

    const youngArmyGames =

        youngArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.games +

                row.playoffGames,

            0

        );


    const youngArmyGoals =

        youngArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.goals +

                row.playoffGoals,

            0

        );


    const youngArmyAssists =

        youngArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.assists +

                row.playoffAssists,

            0

        );


    const youngArmyPoints =

        youngArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.points +

                row.playoffPoints,

            0

        );


    const youngArmyPlusMinus =

        youngArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.plusMinus +

                row.playoffPlusMinus,

            0

        );


    const youngArmyPenaltyMinutes =

        youngArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.penaltyMinutes +

                row.playoffPenaltyMinutes,

            0

        );


    /* ================================= */
    /* BLOODYARMY GESAMT */
    /* ================================= */

    const bloodyArmyGames =

        bloodyArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.games +

                row.playoffGames,

            0

        );


    const bloodyArmyGoals =

        bloodyArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.goals +

                row.playoffGoals,

            0

        );


    const bloodyArmyAssists =

        bloodyArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.assists +

                row.playoffAssists,

            0

        );


    const bloodyArmyPoints =

        bloodyArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.points +

                row.playoffPoints,

            0

        );


    const bloodyArmyPlusMinus =

        bloodyArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.plusMinus +

                row.playoffPlusMinus,

            0

        );


    const bloodyArmyPenaltyMinutes =

        bloodyArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.penaltyMinutes +

                row.playoffPenaltyMinutes,

            0

        );


    /* ================================= */
    /* RENDER */
    /* ================================= */

    return(

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
            {/* YOUNG ARMY */}
            {/* ================================= */}

            {

                youngArmySeasons.length > 0

                &&

                (

                    <section

                        className={

                            `${

                                styles.total

                            } ${

                                styles.youngArmyTotal

                            }`

                        }

                    >

                        <h3>

                            GESAMTKARRIERE

                        </h3>


                        <div

                            className={

                                styles.totalGrid

                            }

                        >

                            <div

                                className={

                                    styles.totalCard

                                }

                            >

                                <span>

                                    SPIELE

                                </span>


                                <strong>

                                    {youngArmyGames}

                                </strong>

                            </div>


                            <div

                                className={

                                    styles.totalCard

                                }

                            >

                                <span>

                                    TORE

                                </span>


                                <strong>

                                    {youngArmyGoals}

                                </strong>

                            </div>


                            <div

                                className={

                                    styles.totalCard

                                }

                            >

                                <span>

                                    ASSISTS

                                </span>


                                <strong>

                                    {youngArmyAssists}

                                </strong>

                            </div>


                            <div

                                className={

                                    `${

                                        styles.totalCard

                                    } ${

                                        styles.highlightTotal

                                    }`

                                }

                            >

                                <span>

                                    PUNKTE

                                </span>


                                <strong>

                                    {youngArmyPoints}

                                </strong>

                            </div>


                            <div

                                className={

                                    styles.totalCard

                                }

                            >

                                <span>

                                    +/-

                                </span>


                                <strong>

                                    {youngArmyPlusMinus}

                                </strong>

                            </div>


                            <div

                                className={

                                    styles.totalCard

                                }

                            >

                                <span>

                                    STRAFMINUTEN

                                </span>


                                <strong>

                                    {youngArmyPenaltyMinutes}

                                </strong>

                            </div>

                        </div>

                    </section>

                )

            }


            {/* ================================= */}
            {/* BLOODYARMY */}
            {/* ================================= */}

            {

                bloodyArmySeasons.length > 0

                &&

                (

                    <section

                        className={

                            `${

                                styles.total

                            } ${

                                styles.bloodyArmyTotal

                            }`

                        }

                    >

                        <h3>

                            GESAMTKARRIERE

                        </h3>


                        <div

                            className={

                                styles.totalGrid

                            }

                        >

                            <div

                                className={

                                    styles.totalCard

                                }

                            >

                                <span>

                                    SPIELE

                                </span>


                                <strong>

                                    {bloodyArmyGames}

                                </strong>

                            </div>


                            <div

                                className={

                                    styles.totalCard

                                }

                            >

                                <span>

                                    TORE

                                </span>


                                <strong>

                                    {bloodyArmyGoals}

                                </strong>

                            </div>


                            <div

                                className={

                                    styles.totalCard

                                }

                            >

                                <span>

                                    ASSISTS

                                </span>


                                <strong>

                                    {bloodyArmyAssists}

                                </strong>

                            </div>


                            <div

                                className={

                                    `${

                                        styles.totalCard

                                    } ${

                                        styles.highlightTotal

                                    }`

                                }

                            >

                                <span>

                                    PUNKTE

                                </span>


                                <strong>

                                    {bloodyArmyPoints}

                                </strong>

                            </div>


                            <div

                                className={

                                    styles.totalCard

                                }

                            >

                                <span>

                                    +/-

                                </span>


                                <strong>

                                    {bloodyArmyPlusMinus}

                                </strong>

                            </div>


                            <div

                                className={

                                    styles.totalCard

                                }

                            >

                                <span>

                                    STRAFMINUTEN

                                </span>


                                <strong>

                                    {bloodyArmyPenaltyMinutes}

                                </strong>

                            </div>

                        </div>

                    </section>

                )

            }

        </div>

    );

}