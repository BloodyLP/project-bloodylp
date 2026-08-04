/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Component:
 * ServiceRecord
 *
 * Description:
 * Hauptkomponente des Service Records.
 *
 * ============================================
 */

import styles from "./ServiceRecord.module.css";

import Header from "./header";
import Identity from "./identity";
import Portrait from "./portrait";
import Body from "./body";
import Decorations from "./decorations";
import DecorationRow from "./decorations/DecorationRow";
import Prestige from "./decorations/prestige";
import StanleyCup from "./decorations/stanley-cup";
import Footer from "./footer";

import type { ServiceRecordMember } from "@/types/service-record";

interface ServiceRecordProps {

    member: ServiceRecordMember;

}

export default function ServiceRecord({

    member,

}: ServiceRecordProps) {

    return (

        <article className={styles.serviceRecord}>

            <Header
                recordNumber={member.recordNumber}
            />

            <Identity
    rank={member.rank}
/>

            <Portrait
                member={member}
            />

            <Body
                member={member}
            />

            <Decorations>

                <DecorationRow>

                    <Prestige
                        member={member}
                    />

                    <StanleyCup
                        member={member}
                    />

                    {/*
                        Orders
                        <Orders member={member} />
                    */}

                    {/*
                        Medals
                        <Medals member={member} />
                    */}

                    {/*
                        Ribbon Racks
                        <RibbonRacks member={member} />
                    */}

                    {/*
                        Badges
                        <Badges member={member} />
                    */}

                    {/*
                        Achievements
                        <Achievements member={member} />
                    */}

                </DecorationRow>

            </Decorations>

            <Footer />

        </article>

    );

}