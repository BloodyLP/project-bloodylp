/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * Service Record Framework
 *
 * Component:
 * ServiceRecord
 *
 * Version:
 * MK-I
 *
 * Author:
 * BloodyLP & ChatGPT
 *
 * ============================================
 */

import styles from "./ServiceRecord.module.css";

import Layout from "./layout/Layout";
import Header from "./header/Header";
import Portrait from "./portrait/Portrait";
import Body from "./body/Body";
import Footer from "./footer/Footer";

import { SERVICE_RECORD_VERSION } from "./constants";

import type { ServiceRecordMember } from "./types";

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