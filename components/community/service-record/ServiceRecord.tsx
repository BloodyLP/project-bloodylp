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
 * Version:
 * MK-III
 *
 * ============================================
 */

import styles from "./ServiceRecord.module.css";

import Layout from "./layout/Layout";
import Header from "./header/Header";
import Portrait from "./portrait/Portrait";
import Rank from "./rank/Rank";
import Body from "./body/Body";
import Footer from "./footer/Footer";

import { SERVICE_RECORD_VERSION } from "./constants";

import type { ServiceRecordMember } from "@/types/service-record";

interface ServiceRecordProps {

    member: ServiceRecordMember;

}

export default function ServiceRecord({
    member,
}: ServiceRecordProps) {

    return (

        <article className={styles.serviceRecord}>

            <Layout>

                <Header
                    recordNumber={member.recordNumber}
                />

                <Portrait
                    avatar={member.avatar}
                    name={member.name}
                />

                <Rank
                    rank={member.rank}
                />

                <Body
                    member={member}
                />

                <Footer
                    version={SERVICE_RECORD_VERSION}
                />

            </Layout>

        </article>

    );

}