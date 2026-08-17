"use client";

import styles from "./CareerStats.module.css";

import type {
    GoalieCareerStatsData,
} from "./types";

import type {
    CareerGoalieSeasonStats,
} from "@/types/career-stats";

import {
    teams,
} from "@/data/service-record/teams";


/* ========================================= */
/* PROPS */
/* ========================================= */

type CareerStatsGoalieProps = {

    stats: GoalieCareerStatsData;

};


/* ========================================= */
/* TABLE PROPS */
/* ========================================= */

type StatsTableProps = {

    title: string;

    rows: CareerGoalieSeasonStats[];

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

                                className={styles.rowGoalie}

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

                                <span

                                    className={

                                        styles.goalieRecord

                                    }

                                >

                                    {

                                        playoff

                                            ?

                                            `${

                                                season.playoffWins

                                            }-${

                                                season.playoffLosses

                                            }-${

                                                season.playoffOvertimeLosses ?? 0

                                            }`

                                            :

                                            `${

                                                season.wins

                                            }-${

                                                season.losses

                                            }-${

                                                season.overtimeLosses ?? 0

                                            }`

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

export default function CareerStatsGoalie({

    stats,

}: CareerStatsGoalieProps){


    const seasons = stats.seasons;


    /* ================================= */
    /* YOUNG ARMY SEASONS */
    /* ================================= */

    const youngArmySeasons =

        seasons.filter(

            season =>

                season.team === "Young Army"

        );


    /* ================================= */
    /* BLOODYARMY SEASONS */
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


    const youngArmyShutouts =

        youngArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.shutouts +

                row.playoffShutouts,

            0

        );


    const youngArmyWins =

        youngArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.wins +

                row.playoffWins,

            0

        );


    const youngArmyLosses =

        youngArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.losses +

                row.playoffLosses,

            0

        );


    const youngArmyOT =

        youngArmySeasons.reduce(

            (sum,row) =>

                sum +

                (row.overtimeLosses ?? 0) +

                (row.playoffOvertimeLosses ?? 0),

            0

        );


    const youngArmyGAA =

        youngArmySeasons.length

            ?

            (

                youngArmySeasons.reduce(

                    (sum,row) =>

                        sum +

                        row.goalsAgainstAverage,

                    0

                )

                /

                youngArmySeasons.length

            ).toFixed(2)

            :

            "0.00";


    const youngArmySV =

        youngArmySeasons.length

            ?

            (

                youngArmySeasons.reduce(

                    (sum,row) =>

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


    const bloodyArmyShutouts =

        bloodyArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.shutouts +

                row.playoffShutouts,

            0

        );


    const bloodyArmyWins =

        bloodyArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.wins +

                row.playoffWins,

            0

        );


    const bloodyArmyLosses =

        bloodyArmySeasons.reduce(

            (sum,row) =>

                sum +

                row.losses +

                row.playoffLosses,

            0

        );


    const bloodyArmyOT =

        bloodyArmySeasons.reduce(

            (sum,row) =>

                sum +

                (row.overtimeLosses ?? 0) +

                (row.playoffOvertimeLosses ?? 0),

            0

        );


    const bloodyArmyGAA =

        bloodyArmySeasons.length

            ?

            (

                bloodyArmySeasons.reduce(

                    (sum,row) =>

                        sum +

                        row.goalsAgainstAverage,

                    0

                )

                /

                bloodyArmySeasons.length

            ).toFixed(2)

            :

            "0.00";


    const bloodyArmySV =

        bloodyArmySeasons.length

            ?

            (

                bloodyArmySeasons.reduce(

                    (sum,row) =>

                        sum +

                        row.savePercentage,

                    0

                )

                /

                bloodyArmySeasons.length

            ).toFixed(1)

            :

            "0.0";


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

                                    GTS

                                </span>


                                <strong>

                                    {youngArmyGAA}

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

                                    SV%

                                </span>


                                <strong>

                                    {youngArmySV}

                                </strong>

                            </div>


                            <div

                                className={

                                    styles.totalCard

                                }

                            >

                                <span>

                                    SHUTOUTS

                                </span>


                                <strong>

                                    {youngArmyShutouts}

                                </strong>

                            </div>


                            <div

                                className={

                                    styles.totalCard

                                }

                            >

                                <span>

                                    W-L-OT

                                </span>


                                <strong

                                    className={

                                        styles.goalieRecordTotal

                                    }

                                >

                                    {

                                        `${

                                            youngArmyWins

                                        }-${

                                            youngArmyLosses

                                        }-${

                                            youngArmyOT

                                        }`

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

                                    GTS

                                </span>


                                <strong>

                                    {bloodyArmyGAA}

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

                                    SV%

                                </span>


                                <strong>

                                    {bloodyArmySV}

                                </strong>

                            </div>


                            <div

                                className={

                                    styles.totalCard

                                }

                            >

                                <span>

                                    SHUTOUTS

                                </span>


                                <strong>

                                    {bloodyArmyShutouts}

                                </strong>

                            </div>


                            <div

                                className={

                                    styles.totalCard

                                }

                            >

                                <span>

                                    W-L-OT

                                </span>


                                <strong

                                    className={

                                        styles.goalieRecordTotal

                                    }

                                >

                                    {

                                        `${

                                            bloodyArmyWins

                                        }-${

                                            bloodyArmyLosses

                                        }-${

                                            bloodyArmyOT

                                        }`

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