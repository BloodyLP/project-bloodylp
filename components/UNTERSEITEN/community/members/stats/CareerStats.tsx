"use client";


import styles from "./CareerStats.module.css";


import type {

    CareerStatsData,

    SeasonStats,

} from "./types";


import { teams } from "@/data/service-record/teams";







type CareerStatsProps = {

    stats:CareerStatsData;

};









function StatsTable({

    title,

    rows,

    playoff=false,


}:{

    title:string;

    rows:SeasonStats[];

    playoff?:boolean;

}){



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

                    rows.map((season)=>(


                        <div


                            key={season.year}


                            className={styles.row}


                        >



                            <span>

                                {season.year}

                            </span>







                            <div className={styles.team}>


                                {

                                    season.team && teams[season.team]

                                    ?

                                    <img

                                        src={

                                            teams[season.team].logo

                                        }

                                        alt={

                                            teams[season.team].name

                                        }

                                    />

                                    :

                                    <span>

                                        -

                                    </span>

                                }


                            </div>







                            <span>

                                {

                                    playoff

                                    ?

                                    season.playoffGames ?? 0

                                    :

                                    season.games

                                }

                            </span>







                            <span>

                                {

                                    playoff

                                    ?

                                    season.playoffGoals ?? 0

                                    :

                                    season.goals

                                }

                            </span>







                            <span>

                                {

                                    playoff

                                    ?

                                    season.playoffAssists ?? 0

                                    :

                                    season.assists

                                }

                            </span>







                            <span className={styles.highlightPoints}>


                                {

                                    playoff

                                    ?

                                    season.playoffPoints ?? 0

                                    :

                                    season.points

                                }


                            </span>







                            <span>


                                {


                                    playoff


                                    ?


                                    (

                                        (season.playoffPlusMinus ?? 0) > 0


                                        ?


                                        `+${season.playoffPlusMinus ?? 0}`


                                        :


                                        season.playoffPlusMinus ?? 0


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

                                    season.playoffPenaltyMinutes ?? 0

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









export default function CareerStats({


    stats,


}:CareerStatsProps){





    const seasons = stats?.seasons ?? [];







    const total = seasons.reduce(


        (acc,season)=>(



            {


                games:

                    acc.games

                    +

                    season.games

                    +

                    (season.playoffGames ?? 0),





                goals:

                    acc.goals

                    +

                    season.goals

                    +

                    (season.playoffGoals ?? 0),





                assists:

                    acc.assists

                    +

                    season.assists

                    +

                    (season.playoffAssists ?? 0),





                points:

                    acc.points

                    +

                    season.points

                    +

                    (season.playoffPoints ?? 0),





                plusMinus:

                    acc.plusMinus

                    +

                    season.plusMinus

                    +

                    (season.playoffPlusMinus ?? 0),





                penaltyMinutes:

                    acc.penaltyMinutes

                    +

                    season.penaltyMinutes

                    +

                    (season.playoffPenaltyMinutes ?? 0)



            }



        ),



        {


            games:0,


            goals:0,


            assists:0,


            points:0,


            plusMinus:0,


            penaltyMinutes:0



        }


    );







    return (



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

                    GESAMT KARRIERE

                </h3>







                <div className={styles.totalGrid}>


                    <div>


                        <span>

                            SPIELE

                        </span>


                        <strong>

                            {total.games}

                        </strong>


                    </div>







                    <div>


                        <span>

                            TORE

                        </span>


                        <strong>

                            {total.goals}

                        </strong>


                    </div>







                    <div>


                        <span>

                            ASSISTS

                        </span>


                        <strong>

                            {total.assists}

                        </strong>


                    </div>







                    <div className={styles.highlightTotal}>


                        <span>

                            PUNKTE

                        </span>


                        <strong>

                            {total.points}

                        </strong>


                    </div>







                    <div>


                        <span>

                            +/-

                        </span>


                        <strong>


                            {


                                total.plusMinus > 0


                                ?


                                `+${total.plusMinus}`


                                :


                                total.plusMinus


                            }


                        </strong>


                    </div>







                    <div>


                        <span>

                            STRAFMINUTEN

                        </span>


                        <strong>

                            {total.penaltyMinutes}

                        </strong>


                    </div>





                </div>




            </section>





        </div>


    );

}