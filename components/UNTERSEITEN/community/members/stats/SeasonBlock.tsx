"use client";


import StatsTable from "./StatsTable";

import styles from "./Stats.module.css";



type Props = {

    season:any;

};



export default function SeasonBlock({

    season,

}:Props){



    return (

        <section className={styles.season}>


            <header className={styles.seasonHeader}>


                <span>

                    {season.type === "PLAYOFF"

                        ? "PLAYOFFS"

                        : "REGULAR SEASON"

                    }

                </span>



                <strong>

                    {season.season}

                </strong>



            </header>





            <StatsTable

                title={season.position}

                data={season}

            />


        </section>

    );

}