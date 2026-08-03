"use client";


import { motion } from "framer-motion";

import styles from "./TimelineItem.module.css";



type Props = {

    year:string;

    subtitle:string;

    title:string;

    description:string;

    reverse?:boolean;

};



export default function TimelineItem({

    year,

    subtitle,

    title,

    description,

    reverse=false,


}:Props){


    return(


        <motion.article


            className={`${styles.entry} ${reverse ? styles.reverse : ""}`}



            initial={{

                opacity:0,

                y:50,

            }}



            whileInView={{


                opacity:1,

                y:0,


            }}



            viewport={{


                once:true,

                amount:.25,


            }}



            transition={{


                duration:.7,

                ease:"easeOut",


            }}



        >




            <div className={styles.yearBlock}>


                <span className={styles.year}>


                    {year}


                </span>



                <span className={styles.chapter}>


                    {subtitle}


                </span>


            </div>






            <div className={styles.line}>


                <motion.span


                    className={styles.dot}



                    initial={{


                        scale:0,


                        opacity:0,


                    }}



                    whileInView={{


                        scale:1,


                        opacity:1,


                    }}



                    viewport={{


                        once:true,

                        amount:.5,


                    }}



                    transition={{


                        duration:.4,


                        ease:"easeOut",


                    }}



                />





                <motion.span


                    className={styles.vertical}



                    initial={{


                        scaleY:0,


                    }}



                    whileInView={{


                        scaleY:1,


                    }}



                    viewport={{


                        once:true,

                        amount:.5,


                    }}



                    transition={{


                        duration:1,


                        delay:.4,


                        ease:"easeOut",


                    }}



                />


            </div>






            <motion.div


                className={styles.card}



                initial={{


                    opacity:0,


                    x:reverse ? -40 : 40,


                }}



                whileInView={{


                    opacity:1,


                    x:0,


                }}



                viewport={{


                    once:true,

                    amount:.3,


                }}



                transition={{


                    duration:.6,


                    delay:.15,


                }}



            >



                <span className={styles.cardLabel}>


                    {subtitle}


                </span>



                <h3>


                    {title}


                </h3>



                <p>


                    {description}


                </p>



            </motion.div>




        </motion.article>


    );

}