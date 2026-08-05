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

    stats:GoalieCareerStatsData;

};

type StatsTableProps = {

    title:string;

    rows:GoalieSeasonStats[];

    playoff?:boolean;

};

function StatsTable({

    title,

    rows,

    playoff=false,

}:StatsTableProps){

    return(

        <section className={styles.section}>

            <h3>{title}</h3>

            <div className={styles.table}>

                <div className={styles.rowHeaderGoalie}>

                    <span>SAISON</span>

                    <span>TEAM</span>

                    <span>SP</span>

                    <span>GTS</span>

                    <span>SV%</span>

                    <span>SO</span>

                    <span>W-L-OT</span>

                </div>

                {

                    rows.map((season)=>(

                        <div

                            key={season.year}

                            className={styles.rowGoalie}

                        >

                            <span>{season.year}</span>

                            <div className={styles.team}>

                                <img

                                    src={teams[season.team].logo}

                                    alt={teams[season.team].name}

                                />

                            </div>

                            <span>

                                {

                                    playoff

                                        ? season.playoffGames

                                        : season.games

                                }

                            </span>

                            <span>

                                {

                                    playoff

                                        ? season.playoffGoalsAgainstAverage.toFixed(2)

                                        : season.goalsAgainstAverage.toFixed(2)

                                }

                            </span>

                            <span>

                                {

                                    playoff

                                        ? season.playoffSavePercentage.toFixed(1)

                                        : season.savePercentage.toFixed(1)

                                }

                            </span>

                            <span>

                                {

                                    playoff

                                        ? season.playoffShutouts

                                        : season.shutouts

                                }

                            </span>

                            <span>

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

}:CareerStatsGoalieProps){

    const seasons = stats.seasons;

    const totalGames = seasons.reduce(

        (sum,row)=>sum+row.games+row.playoffGames,

        0

    );

    const totalShutouts = seasons.reduce(

        (sum,row)=>sum+row.shutouts+row.playoffShutouts,

        0

    );

    const totalWins = seasons.reduce(

        (sum,row)=>sum+row.wins+row.playoffWins,

        0

    );

    const totalLosses = seasons.reduce(

        (sum,row)=>sum+row.losses+row.playoffLosses,

        0

    );

    const totalOT = seasons.reduce(

        (sum,row)=>sum+row.overtimeLosses+row.playoffOvertimeLosses,

        0

    );

    const averageGAA = (

        seasons.reduce(

            (sum,row)=>sum+row.goalsAgainstAverage,

            0

        ) / seasons.length

    ).toFixed(2);

    const averageSV = (

        seasons.reduce(

            (sum,row)=>sum+row.savePercentage,

            0

        ) / seasons.length

    ).toFixed(1);

    return(

        <div className={styles.wrapper}>

            <StatsTable

                title="REGULAR SEASON"

                rows={seasons}

            />

            <StatsTable

                title="PLAYOFFS"

                rows={seasons}

                playoff

            />

            <section className={styles.total}>

                <h3>

                    GESAMTKARRIERE

                </h3>

                <div className={styles.totalGrid}>

                    <div className={styles.totalCard}>

                        <span>SPIELE</span>

                        <strong>{totalGames}</strong>

                    </div>

                    <div className={styles.totalCard}>

                        <span>GTS</span>

                        <strong>{averageGAA}</strong>

                    </div>

                    <div className={`${styles.totalCard} ${styles.highlightTotal}`}>

                        <span>SV%</span>

                        <strong>{averageSV}</strong>

                    </div>

                    <div className={styles.totalCard}>

                        <span>SHUTOUTS</span>

                        <strong>{totalShutouts}</strong>

                    </div>

                    <div className={styles.totalCard}>

                        <span>W-L-OT</span>

                        <strong>

                            {`${totalWins}-${totalLosses}-${totalOT}`}

                        </strong>

                    </div>

                </div>

            </section>

        </div>

    );

}