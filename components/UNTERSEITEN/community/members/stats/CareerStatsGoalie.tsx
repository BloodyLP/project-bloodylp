"use client";

import styles from "./CareerStats.module.css";

import type {
    GoalieCareerStatsData,
} from "./types";

import type {
    GoalieSeasonStats,
} from "@/types/career-stats";

import {
    teams,
} from "@/data/service-record/teams";


type CareerStatsGoalieProps = {

    stats: GoalieCareerStatsData;

};


type StatsTableProps = {

    title: string;

    rows: GoalieSeasonStats[];

    playoff?: boolean;

};


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

                <div className={styles.rowHeaderGoalie}>

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

                        GTS

                    </span>

                    <span>

                        SV%

                    </span>

                    <span>

                        SO

                    </span>

                    <span>

                        W-L-OT

                    </span>

                </div>


                {

                    rows.map((season)=>(

                        <div

                            key={season.year}

                            className={styles.rowGoalie}

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

                                        season.playoffGoalsAgainstAverage.toFixed(2)

                                        :

                                        season.goalsAgainstAverage.toFixed(2)

                                }

                            </span>


                            <span>

                                {

                                    playoff

                                        ?

                                        season.playoffSavePercentage.toFixed(1)

                                        :

                                        season.savePercentage.toFixed(1)

                                }

                            </span>


                            <span>

                                {

                                    playoff

                                        ?

                                        season.playoffShutouts

                                        :

                                        season.shutouts

                                }

                            </span>


                            {/* ================================= */}
                            {/* W-L-OT */}
                            {/* ================================= */}

                            <span className={styles.goalieRecord}>

                                {

                                    playoff

                                        ?

                                        `${season.playoffWins}-${season.playoffLosses}-${season.playoffOvertimeLosses}`

                                        :

                                        `${season.wins}-${season.losses}-${season.overtimeLosses}`

                                }

                            </span>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}


export default function CareerStatsGoalie({

    stats,

}: CareerStatsGoalieProps){


    const seasons = stats.seasons;


    /* ================================= */
    /* ORGANISATIONEN ERMITTELN */
    /* ================================= */

    const youngArmySeasons = seasons.filter(

        season =>

            season.team === "Young Army"

    );


    const bloodyArmySeasons = seasons.filter(

        season =>

            season.team === "BloodyArmy"

    );


    /* ================================= */
    /* YOUNG ARMY */
    /* ================================= */

    const youngArmyGames = youngArmySeasons.reduce(

        (sum,row)=>

            sum +

            row.games +

            row.playoffGames,

        0

    );


    const youngArmyShutouts = youngArmySeasons.reduce(

        (sum,row)=>

            sum +

            row.shutouts +

            row.playoffShutouts,

        0

    );


    const youngArmyWins = youngArmySeasons.reduce(

        (sum,row)=>

            sum +

            row.wins +

            row.playoffWins,

        0

    );


    const youngArmyLosses = youngArmySeasons.reduce(

        (sum,row)=>

            sum +

            row.losses +

            row.playoffLosses,

        0

    );


    const youngArmyOT = youngArmySeasons.reduce(

        (sum,row)=>

            sum +

            row.overtimeLosses +

            row.playoffOvertimeLosses,

        0

    );


    const youngArmyGAA = youngArmySeasons.length

        ?

        (

            youngArmySeasons.reduce(

                (sum,row)=>

                    sum +

                    row.goalsAgainstAverage,

                0

            )

            /

            youngArmySeasons.length

        ).toFixed(2)

        :

        "0.00";


    const youngArmySV = youngArmySeasons.length

        ?

        (

            youngArmySeasons.reduce(

                (sum,row)=>

                    sum +

                    row.savePercentage,

                0

            )

            /

            youngArmySeasons.length

        ).toFixed(1)

        :

        "0.0";


    /* ================================= */
    /* BLOODYARMY */
    /* ================================= */

    const bloodyArmyGames = bloodyArmySeasons.reduce(

        (sum,row)=>

            sum +

            row.games +

            row.playoffGames,

        0

    );


    const bloodyArmyShutouts = bloodyArmySeasons.reduce(

        (sum,row)=>

            sum +

            row.shutouts +

            row.playoffShutouts,

        0

    );


    const bloodyArmyWins = bloodyArmySeasons.reduce(

        (sum,row)=>

            sum +

            row.wins +

            row.playoffWins,

        0

    );


    const bloodyArmyLosses = bloodyArmySeasons.reduce(

        (sum,row)=>

            sum +

            row.losses +

            row.playoffLosses,

        0

    );


    const bloodyArmyOT = bloodyArmySeasons.reduce(

        (sum,row)=>

            sum +

            row.overtimeLosses +

            row.playoffOvertimeLosses,

        0

    );


    const bloodyArmyGAA = bloodyArmySeasons.length

        ?

        (

            bloodyArmySeasons.reduce(

                (sum,row)=>

                    sum +

                    row.goalsAgainstAverage,

                0

            )

            /

            bloodyArmySeasons.length

        ).toFixed(2)

        :

        "0.00";


    const bloodyArmySV = bloodyArmySeasons.length

        ?

        (

            bloodyArmySeasons.reduce(

                (sum,row)=>

                    sum +

                    row.savePercentage,

                0

            )

            /

            bloodyArmySeasons.length

        ).toFixed(1)

        :

        "0.0";


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

                                    {youngArmyGames}

                                </strong>

                            </div>


                            <div className={styles.totalCard}>

                                <span>

                                    GTS

                                </span>

                                <strong>

                                    {youngArmyGAA}

                                </strong>

                            </div>


                            <div

                                className={

                                    `${styles.totalCard} ${styles.highlightTotal}`

                                }

                            >

                                <span>

                                    SV%

                                </span>

                                <strong>

                                    {youngArmySV}

                                </strong>

                            </div>


                            <div className={styles.totalCard}>

                                <span>

                                    SHUTOUTS

                                </span>

                                <strong>

                                    {youngArmyShutouts}

                                </strong>

                            </div>


                            <div className={styles.totalCard}>

                                <span>

                                    W-L-OT

                                </span>

                                <strong

                                    className={

                                        styles.goalieRecordTotal

                                    }

                                >

                                    {

                                        `${youngArmyWins}-${youngArmyLosses}-${youngArmyOT}`

                                    }

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

                                    {bloodyArmyGames}

                                </strong>

                            </div>


                            <div className={styles.totalCard}>

                                <span>

                                    GTS

                                </span>

                                <strong>

                                    {bloodyArmyGAA}

                                </strong>

                            </div>


                            <div

                                className={

                                    `${styles.totalCard} ${styles.highlightTotal}`

                                }

                            >

                                <span>

                                    SV%

                                </span>

                                <strong>

                                    {bloodyArmySV}

                                </strong>

                            </div>


                            <div className={styles.totalCard}>

                                <span>

                                    SHUTOUTS

                                </span>

                                <strong>

                                    {bloodyArmyShutouts}

                                </strong>

                            </div>


                            <div className={styles.totalCard}>

                                <span>

                                    W-L-OT

                                </span>

                                <strong

                                    className={

                                        styles.goalieRecordTotal

                                    }

                                >

                                    {

                                        `${bloodyArmyWins}-${bloodyArmyLosses}-${bloodyArmyOT}`

                                    }

                                </strong>

                            </div>


                        </div>

                    </section>

                )

            }


        </div>

    );

}