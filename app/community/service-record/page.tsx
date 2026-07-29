/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * Service Record Framework
 *
 * Component:
 * Service Record Test Page
 *
 * Version:
 * MK-I
 *
 * Author:
 * BloodyLP & ChatGPT
 *
 * ============================================
 */

import { ServiceRecord } from "@/components/community/service-record";

import type { ServiceRecordMember } from "@/components/community/service-record";

const testMember: ServiceRecordMember = {

    id: "1",

    slug: "bloodylp",

    recordNumber: "BA-0001",

    name: "BloodyLP",

    avatar: "/members/bloodylp/avatar.png",

    rank: "General of the Army",

    rankCategory: "general",

    rankInsignia:
        "/ranks/general/general-of-the-army.png",

    unit: "BloodyArmy",

    assignment: "Community Commander",

    enlisted: "2016",

    prestige: 0,

    decorations: [],
};

export default function ServiceRecordPage() {
    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#101010",
                padding: "40px",
            }}
        >
            <ServiceRecord member={testMember} />
        </main>
    );
}