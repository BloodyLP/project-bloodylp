"use client";

import styles from "./Members.module.css";

import MemberCard from "./MemberCard";

import {

    members

} from "./data";

import {

    mapMemberToCard

} from "./memberMapper";

import {

    ServiceRecord

} from "@/lib/service-record";

type Group = {

    title:string;

    key:string;

    members:any[];

};

export default function MemberGroups(){

    const groups:Group[] = [

        {

            title:"PRESTIGE III",

            key:"prestigeIII",

            members:

                members.filter(

                    member =>

                        member.prestige === 3

                )

        },

        {

            title:"PRESTIGE II",

            key:"prestigeII",

            members:

                members.filter(

                    member =>

                        member.prestige === 2

                )

        },

        {

            title:"PRESTIGE I",

            key:"prestigeI",

            members:

                members.filter(

                    member =>

                        member.prestige === 1

                )

        },

        {

            title:"GENERALE",

            key:"generale",

            members:

                members.filter(

                    member => {

                        const rank =

                            ServiceRecord.rank(

                                member.rank

                            );

                        return (

                            rank?.category === "command"

                        );

                    }

                )

        },

        {

            title:"STABSOFFIZIERE",

            key:"stabsoffiziere",

            members:

                members.filter(

                    member => {

                        const rank =

                            ServiceRecord.rank(

                                member.rank

                            );

                        return (

                            rank?.category === "offiziere"

                            &&

                            rank.level >= 80

                        );

                    }

                )

        },

        {

            title:"OFFIZIERE",

            key:"offiziere",

            members:

                members.filter(

                    member => {

                        const rank =

                            ServiceRecord.rank(

                                member.rank

                            );

                        return (

                            rank?.category === "offiziere"

                            &&

                            rank.level < 80

                        );

                    }

                )

        },

        {

            title:"UNTEROFFIZIERE MIT PORTEPEE",

            key:"portepee",

            members:

                members.filter(

                    member => {

                        const rank =

                            ServiceRecord.rank(

                                member.rank

                            );

                        return (

                            rank?.category === "feldwebel"

                        );

                    }

                )

        },

        {

            title:"UNTEROFFIZIERE",

            key:"unteroffiziere",

            members:

                members.filter(

                    member => {

                        const rank =

                            ServiceRecord.rank(

                                member.rank

                            );

                        return (

                            rank?.category === "unteroffiziere"

                        );

                    }

                )

        },

        {

            title:"MANNSCHAFTEN",

            key:"mannschaften",

            members:

                members.filter(

                    member => {

                        const rank =

                            ServiceRecord.rank(

                                member.rank

                            );

                        return (

                            rank?.category === "mannschaften"

                        );

                    }

                )

        },

        {

            title:"ZIVILISTEN",

            key:"zivilisten",

            members:

                members.filter(

                    member => {

                        const rank =

                            ServiceRecord.rank(

                                member.rank

                            );

                        return (

                            rank?.category === "zivilisten"

                        );

                    }

                )

        }

    ];

    return(

        <div className={styles.groups}>

            {

                groups.map(

                    group => (

                        <section

                            key={group.key}

                            className={styles.group}

                        >

                            <h2>

                                {group.title}

                            </h2>

                            <div className={styles.grid}>

                                {

                                    group.members.map(

                                        member => (

                                            <MemberCard

                                                key={member.id}

                                                {...mapMemberToCard(member)}

                                            />

                                        )

                                    )

                                }

                            </div>

                        </section>

                    )

                )

            }

        </div>

    );

}