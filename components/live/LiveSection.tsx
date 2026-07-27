// =====================================================
// BDS COMPONENT
// LiveSection
//
// Version: 2.0
//
// Kapitel 3
// Erlebe mich LIVE.
//
// Bloody Design System
// =====================================================

import LiveHeader from "./LiveHeader";
import LiveGrid from "./LiveGrid";
import LiveOutro from "./LiveOutro";

export default function LiveSection() {
    return (
        <>
            <section
                id="live"
                className="
                    mx-auto
                    mt-56
                    max-w-7xl
                    px-8
                "
            >
                <LiveHeader />

                <LiveGrid />
            </section>

            <LiveOutro />
        </>
    );
}