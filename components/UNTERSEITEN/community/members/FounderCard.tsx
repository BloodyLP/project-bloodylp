"use client";


import MemberCard from "./MemberCard";

import { members } from "./data";



export default function FounderCard(){


    const founder = members.find(

        (member) =>

            member.badge?.title === "FOUNDER"

    );



    if(!founder){

        return null;

    }



    return (

        <MemberCard

            {...founder}

        />

    );

}