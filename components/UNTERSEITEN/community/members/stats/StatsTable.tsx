"use client";


import styles from "./Stats.module.css";



type Props = {

    title:string;

    data:any;

};



export default function StatsTable({

    title,

    data,

}:Props){



    return (

        <div className={styles.table}>


            <div className={styles.rowHeader}>


                <span>

                    POS

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

                    STM

                </span>


            </div>





            <div className={styles.row}>


                <span>

                    {title}

                </span>


                <span>

                    {data.games}

                </span>


                <span>

                    {data.goals}

                </span>


                <span>

                    {data.assists}

                </span>


                <span>

                    {data.points}

                </span>


                <span>

                    {data.plusMinus}

                </span>


                <span>

                    {data.penaltyMinutes}

                </span>


            </div>



        </div>

    );

}