"use client";


import styles from "./MembersGrid.module.css";


import MemberCard from "./MemberCard";


import {

    members

} from "./data";


import {

    ServiceRecord

} from "@/lib/service-record";









export default function MembersGrid(){



    return (



        <div className={styles.grid}>


            {



                members.map(

                    member => {



                        const rank = ServiceRecord.rank(

                            member.rank

                        );



                        const theme =



                            member.prestige === 10

                            ? "prestigeX"



                            :



                            member.prestige === 3

                            ? "prestigeIII"



                            :



                            member.prestige === 2

                            ? "prestigeII"



                            :



                            member.prestige === 1

                            ? "prestigeI"



                            :

                            "zivilisten";







                        return (



                            <MemberCard



                                key={member.id}



                                id={member.slug}



                                armyId={member.recordNumber}



                                name={member.name}



                                avatar={member.avatar}



                                joinedLabel={

                                    `Seit ${member.enlisted}`

                                }



                                rank={{


                                    title:rank.name,


                                    image:

                                        rank.insignia ||

                                        "/ranks/default.png"



                                }}



                                badge={{


                                    title:

                                        member.prestige === 10

                                        ? "FOUNDER"

                                        :

                                        `PRESTIGE ${member.prestige}`,



                                    theme



                                }}



                                prestige={{


                                    level:member.prestige,


                                    key:theme,


                                    title:null



                                }}



                                stats={member.stats}



                                profile={{


                                    position:member.position,


                                    number:member.recordNumber



                                }}



                            />



                        );


                    }


                )


            }



        </div>



    );

}