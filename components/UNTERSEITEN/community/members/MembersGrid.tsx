"use client";


import styles from "./MembersGrid.module.css";


import MemberCard from "./MemberCard";


import {

    members

} from "./data";


import {

    mapMemberToCard

} from "./memberMapper";









export default function MembersGrid(){



    return (



        <div className={styles.grid}>


            {


                members.map(

                    member => (



                        <MemberCard


                            key={member.id}


                            {...mapMemberToCard(member)}


                        />



                    )


                )


            }



        </div>



    );

}