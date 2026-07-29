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

    recordNumber: "BA-0001",

    name: "Alexander Blattmann",

    rank: "General",

    rankCategory: "general",

    prestige: 3,

    unit: "BloodyArmy",

    assignment: "Community Commander",

    enlisted: "2025",

    avatar: "/images/test-avatar.png",

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