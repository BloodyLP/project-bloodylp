"use client";


import { motion } from "framer-motion";


import styles from "./CommunityHeroRight.module.css";


import MemberAvatar from "../member-avatar";




type FeaturedMember = {

    image:string;

    name:string;

    organization:"bloodyArmy" | "youngArmy";

    founder?:boolean;

};






const rows = [


    [1],


    [2,3,4],


    [5,6,7,8],


    [9,10,11,12,13],


    [14,15,16,17],


    [18,19,20],


    [21],


];







const featuredMembers:Record<number, FeaturedMember> = {



    11:{

    image:"/members/bloodylp/avatar.png",

    name:"BloodyLP",

    organization:"bloodyArmy",

    founder:true,

},

12:{

    image:"/members/dungeon/avatar.png",

    name:"Dungeon_62",

    organization:"bloodyArmy",

},

10:{

    image:"/members/o1l3r5/avatar.png",

    name:"O1L3R5",

    organization:"bloodyArmy",

},

15:{

    image:"/members/theilmfurter/avatar.png",

    name:"Theilmfurter",

    organization:"youngArmy",

},

16:{

    image:"/members/ligoween/avatar.png",

    name:"Ligoween",

    organization:"bloodyArmy",

},

6:{

    image:"/members/lolfury37/avatar.png",

    name:"LOLFury37",

    organization:"bloodyArmy",

},

7:{

    image:"/members/david211197/avatar.png",

    name:"David211197",

    organization:"bloodyArmy",

},



};









export default function CommunityHeroRight(){



    return (



        <div className={styles.right}>




            <motion.div


                className={styles.formation}


                animate={{


                    y:[0,-8,0],


                }}



                transition={{


                    duration:10,


                    repeat:Infinity,


                    ease:"easeInOut",


                }}



            >





                {

                    rows.map((row,rowIndex)=>(



                        <div


                            key={rowIndex}


                            className={styles.row}



                        >





                            {


                                row.map(member=>{



                                    const featured =

                                        featuredMembers[member];






                                    if(featured){



                                        return (



                                            <motion.div



                                                key={member}



                                                animate={{


                                                    scale:[1,1.03,1],



                                                    filter:[

    featured.organization==="bloodyArmy"

        ? "drop-shadow(0 0 0px rgba(163,230,53,.20))"

        : "drop-shadow(0 0 0px rgba(255,60,60,.20))",

    featured.organization==="bloodyArmy"

        ? "drop-shadow(0 0 18px rgba(163,230,53,.65))"

        : "drop-shadow(0 0 18px rgba(255,60,60,.65))",

    featured.organization==="bloodyArmy"

        ? "drop-shadow(0 0 0px rgba(163,230,53,.20))"

        : "drop-shadow(0 0 0px rgba(255,60,60,.20))",

]



                                                }}



                                                transition={{



                                                    duration:9,


                                                    repeat:Infinity,


                                                    ease:"easeInOut",



                                                }}



                                            >



                                                <MemberAvatar

    image={featured.image}

    name={featured.name}

    organization={featured.organization}

    founder={featured.founder}

/>



                                            </motion.div>



                                        );


                                    }







                                    return (



                                        <div


                                            key={member}


                                            className={styles.avatar}



                                        />



                                    );



                                })



                            }





                        </div>



                    ))


                }





            </motion.div>





        </div>



    );


}