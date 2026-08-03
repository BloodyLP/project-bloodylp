"use client";


import styles from "./MembersHeader.module.css";



export default function MembersHeader(){


    return (


        <header className={styles.header}>


            <div className={styles.overline}>

                BLOODYARMY

            </div>



            <h1 className={styles.title}>

                MEMBER CARDS

            </h1>



            <div className={styles.decoration}>


    <span></span>


    <strong className={styles.stars}>

        ★ ★ ★

    </strong>


    <span></span>


</div>



            <p className={styles.description}>

                Die offiziellen Mitgliederkarten der BloodyArmy.
                Dienstgrade, Prestige-Stufen und Laufbahnen unserer Community.

            </p>


        </header>


    );

}