"use client";


import styles from "./Members.module.css";


import MemberCard from "./MemberCard";


import {

    members

} from "./data";









function getPrestigeTheme(

    prestige:number

){



    switch(prestige){



        case 10:

            return {

                title:"FOUNDER",

                theme:"prestigeX"

            };





        case 3:

            return {

                title:"PRESTIGE III",

                theme:"prestigeIII"

            };





        case 2:

            return {

                title:"PRESTIGE II",

                theme:"prestigeII"

            };





        case 1:

            return {

                title:"PRESTIGE I",

                theme:"prestigeI"

            };





        default:

            return {

                title:"ZIVILIST",

                theme:"zivilisten"

            };



    }

}









function getGroup(

    prestige:number

){


    return members.filter(

        member =>

            member.prestige === prestige

    );


}









export default function MemberGroups(){



    const groups = [



        {

            title:"BloodyArmy",

            prestige:3,

            members:getGroup(3)

        },



        {

            title:"Canadian Army",

            prestige:2,

            members:getGroup(2)

        },



        {

            title:"United States Forces",

            prestige:1,

            members:getGroup(1)

        },



        {

            title:"Bundeswehr / Zivilisten",

            prestige:0,

            members:getGroup(0)

        }



    ];







    return (



        <div className={styles.groups}>



            {


                groups.map(

                    group => (



                        group.members.length > 0 && (



                            <section key={group.title}>


                                <h2>


                                    {group.title}


                                </h2>




                                <div className={styles.grid}>


                                    {


                                        group.members.map(

                                            member => {



                                                const prestige = getPrestigeTheme(

                                                    member.prestige

                                                );




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


                                                            title:member.rank,


                                                            image:"/ranks/default.png"



                                                        }}



                                                        badge={{


                                                            title:prestige.title,


                                                            theme:prestige.theme



                                                        }}



                                                        prestige={{


                                                            level:member.prestige,


                                                            key:prestige.theme,


                                                            title:prestige.title



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



                            </section>



                        )


                    )


                )


            }



        </div>



    );

}