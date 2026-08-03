"use client";

import { motion } from "framer-motion";

import styles from "./MembersHeader.module.css";


export default function MembersHeader() {

    return (

        <motion.header

            className={styles.header}


            initial={{

                opacity:0,

                y:30,

            }}


            whileInView={{

                opacity:1,

                y:0,

            }}


            viewport={{

                once:true,

                amount:.3,

            }}


            transition={{

                duration:.6,

            }}

        >


            <span className={styles.overline}>

                BLOODYARMY

            </span>



            <h2 className={styles.title}>

                PERSONALAKTEN

            </h2>




            <div className={styles.stars}>

                ★ ★ ★

            </div>





            <p className={styles.description}>

                Die Mitglieder der BloodyArmy sind mehr als
                nur Namen.

                <br />

                Jeder Soldat besitzt seine eigene Laufbahn,
                seinen eigenen Dienstgrad und seine persönliche Geschichte.

            </p>





            <p className={styles.description}>

                Hier findest du alle offiziellen Mitglieder
                der BloodyArmy inklusive Dienstgrad,
                Auszeichnungen und Service Record.

            </p>



        </motion.header>

    );

}