"use client";


import styles from "./FounderCard.module.css";


import {

    members

} from "./data";







export default function FounderCard(){



    const founder = members.find(

        member =>

            member.prestige === 10

    );



    if(!founder){


        return null;


    }



    return (


        <div className={styles.card}>



            <div className={styles.header}>


                FOUNDER


            </div>





            <div className={styles.content}>


                <img

                    src={founder.avatar}

                    alt={founder.name}

                    className={styles.avatar}

                />





                <div className={styles.info}>


                    <h2>


                        {founder.name}


                    </h2>




                    <p>


                        {founder.rank}


                    </p>



                </div>


            </div>



        </div>


    );

}