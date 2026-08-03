"use client";


import CareerStats from "./stats/CareerStats";

import styles from "./MemberCardBack.module.css";





type MemberCardBackProps = {


    name:string;


    armyId:string;


    stats?:any;



    profile?:{


        position:string;


        number:string;


    };



    onBack:()=>void;



};







export default function MemberCardBack({


    name,


    armyId,


    stats,


    profile,


    onBack,



}:MemberCardBackProps){



    return (



        <article className={styles.backCard}>


            <header className={styles.header}>


                <span className={styles.title}>


                    BLOODYARMY CAREER PROFILE


                </span>





                <span className={styles.member}>


                    {armyId} • {name}


                </span>



            </header>








            <section className={styles.playerProfile}>


                <div className={styles.playerIdentity}>


                    <span>


                        SPIELER


                    </span>



                    <strong>


                        {name}


                    </strong>



                </div>








                <div className={styles.playerData}>


                    <div>


                        <span>

                            POSITION

                        </span>



                        <strong>


                            {profile?.position ?? "Keine Angabe"}


                        </strong>


                    </div>







                    <div>


                        <span>

                            NUMMER

                        </span>



                        <strong>


                            {profile?.number ?? "#00"}


                        </strong>


                    </div>



                </div>



            </section>









            <div className={styles.content}>


                {


                    stats

                    ?



                    <CareerStats


                        stats={stats}


                    />





                    :



                    <div className={styles.empty}>


                        KEINE KARRIERE-DATEN VORHANDEN


                    </div>



                }



            </div>









            <footer className={styles.footer}>


                <button


                    type="button"


                    className={styles.backButton}



                    onClick={(event)=>{


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