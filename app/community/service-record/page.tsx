/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * Page:
 * Service Record Test
 *
 * ============================================
 */

import { ServiceRecord } from "@/components/community/service-record";

import { bloodylp } from "@/data/service-record/bloodylp";

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

            <ServiceRecord
                member={bloodylp}
            />

        </main>

    );

}