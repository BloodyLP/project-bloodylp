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
 * ============================================
 */

"use client";

import styles from "./ServiceRecord.module.css";

import Header from "./header";
import Identity from "./identity";
import Portrait from "./portrait";
import Body from "./body";
import Decorations from "./decorations";
import DecorationRow from "./decorations/DecorationRow";

import Prestige from "./decorations/prestige";

import StanleyCup from "./decorations/stanley-cup";
import PresidentsTrophy from "./decorations/presidents-trophy/PresidentsTrophy";
import CalderCup from "./decorations/calder-cup";
import ClarenceSCampbellTrophy from "./decorations/clarence-s-campbell-trophy/ClarenceSCampbellTrophy";
import PrinceOfWalesTrophy from "./decorations/prince-of-wales-trophy/PrinceOfWalesTrophy";
import MacgregorKilpatrickTrophy from "./decorations/macgregor-kilpatrick-trophy/MacgregorKilpatrickTrophy";
import RichardFCanningTrophy from "./decorations/richard-f-canning-trophy/RichardFCanningTrophy";
import RobertWClarkeTrophy from "./decorations/robert-w-clarke-trophy/RobertWClarkeTrophy";

import NhlTopscorer from "./decorations/nhl/topscorer/NhlTopscorer";
import NhlMeisteTore from "./decorations/nhl/meiste-tore";
import NhlMeisteAssists from "./decorations/nhl/meiste-assists/NhlMeisteAssists";
import NhlMeisteStrafminuten from "./decorations/nhl/meiste-strafminuten/NhlMeisteStrafminuten";
import NhlBestePlusMinus from "./decorations/nhl/beste-plus-minus/NhlBestePlusMinus";

import NhlPoTopscorer from "./decorations/nhl/playoffs/po-topscorer/NhlPoTopscorer";
import NhlPoMeisteTore from "./decorations/nhl/playoffs/po-meiste-tore/NhlPoMeisteTore";
import NhlPoMeisteAssists from "./decorations/nhl/playoffs/po-meiste-assists/NhlPoMeisteAssists";
import PoMeisteStrafminuten from "./decorations/nhl/playoffs/po-meiste-strafminuten/PoMeisteStrafminuten";
import NhlPoBestePlusMinus from "./decorations/nhl/playoffs/po-beste-plus-minus";

import AhlTopscorer from "./decorations/ahl/topscorer/AhlTopscorer";
import AhlMeisteTore from "./decorations/ahl/meiste-tore/AhlMeisteTore";
import AhlMeisteAssists from "./decorations/ahl/meiste-assists/AhlMeisteAssists";
import AhlMeisteStrafminuten from "./decorations/ahl/meiste-strafminuten/AhlMeisteStrafminuten";
import AhlBestePlusMinus from "./decorations/ahl/beste-plus-minus/AhlBestePlusMinus";

import AhlPoTopscorer from "./decorations/ahl/playoffs/topscorer/AhlPoTopscorer";
import AhlPoMeisteTore from "./decorations/ahl/playoffs/meiste-tore/AhlPoMeisteTore";
import AhlPoMeisteAssists from "./decorations/ahl/playoffs/meiste-assists/AhlPoMeisteAssists";
import AhlPoMeisteStrafminuten from "./decorations/ahl/playoffs/meiste-strafminuten/AhlPoMeisteStrafminuten";
import AhlPoBestePlusMinus from "./decorations/ahl/playoffs/beste-plus-minus/AhlPoBestePlusMinus";

import Sub50Monate from "./decorations/subs/50-monate/Sub50Monate";
import Sub75Monate from "./decorations/subs/75-monate/Sub75Monate";
import Sub100Monate from "./decorations/subs/100-monate/Sub100Monate";
import Sub150Monate from "./decorations/subs/150-monate/Sub150Monate";
import Sub200Monate from "./decorations/subs/200-monate/Sub200Monate";

import PatreonBronze from "./decorations/patreon/bronze/PatreonBronze";
import PatreonSilber from "./decorations/patreon/silber/PatreonSilber";
import PatreonGold from "./decorations/patreon/gold/PatreonGold";
import PatreonHallOfFame from "./decorations/patreon/hall-of-fame/PatreonHallOfFame";
import PatreonGoat from "./decorations/patreon/goat/PatreonGoat";

import Footer from "./footer";

import { getTheme } from "@/lib/service-record/theme";

import type { ServiceRecordMember } from "@/types/service-record";

/**
 * =========================================
 * PROPS
 * =========================================
 */

interface ServiceRecordProps {
    member: ServiceRecordMember;
}

/**
 * =========================================
 * COMPONENT
 * =========================================
 */

export default function ServiceRecord({
    member,
}: ServiceRecordProps) {
    /**
     * =========================================
     * THEME
     * =========================================
     */

    const theme = getTheme(
        member.organization,
        member.deceased === true
    );

    /**
     * =========================================
     * SERVICE RECORD
     * =========================================
     */

    return (
        <article
            className={styles.serviceRecord}
            style={{
                ["--accent" as any]:
                    theme.accent,

                ["--accent-light" as any]:
                    theme.accentLight,

                ["--accent-soft" as any]:
                    theme.accentSoft,

                ["--accent-soft-2" as any]:
                    theme.accentSoft2,

                ["--accent-border" as any]:
                    theme.border,

                ["--accent-glow" as any]:
                    theme.glow,

                ["--accent-glow-soft" as any]:
                    theme.glowSoft,

                ["--button-text" as any]:
                    theme.buttonText,

                ["--card" as any]:
                    theme.card,
            }}
        >

            {/* ================================= */}
            {/* HEADER                            */}
            {/* ================================= */}

            <Header
                recordNumber={
                    member.recordNumber
                }
            />

            {/* ================================= */}
            {/* IDENTITY                          */}
            {/* ================================= */}

            <Identity
                rank={
                    member.rank
                }
            />

            {/* ================================= */}
            {/* PORTRAIT                          */}
            {/* ================================= */}

            <Portrait
                member={
                    member
                }
            />

            {/* ================================= */}
            {/* BODY                              */}
            {/* ================================= */}

            <Body
                member={
                    member
                }
            />

            {/* ================================= */}
            {/* DECORATIONS                       */}
            {/* ================================= */}

            <Decorations>

                <DecorationRow>

                    {/* ================================= */}
                    {/* 1. PRESTIGE                       */}
                    {/* ================================= */}

                    <Prestige
                        member={
                            member
                        }
                    />

                    {/* ================================= */}
                    {/* 2. SUB-AUSZEICHNUNGEN             */}
                    {/* ================================= */}

                    {/* 50 Monate SUB */}

                    {
                        member.sub50Monate === true
                        && (
                            <Sub50Monate />
                        )
                    }

                    {/* 75 Monate SUB */}

                    {
                        member.sub75Monate === true
                        && (
                            <Sub75Monate />
                        )
                    }

                    {/* 100 Monate SUB */}

                    {
                        member.sub100Monate === true
                        && (
                            <Sub100Monate />
                        )
                    }

                    {/* 150 Monate SUB */}

                    {
                        member.sub150Monate === true
                        && (
                            <Sub150Monate />
                        )
                    }

                    {/* 200 Monate SUB */}

                    {
                        member.sub200Monate === true
                        && (
                            <Sub200Monate />
                        )
                    }

                    {/* ================================= */}
                    {/* 3. PATREON                        */}
                    {/* ================================= */}

                    {/* Patreon Bronze */}

                    {
                        member.patreonBronze
                        && (
                            <PatreonBronze />
                        )
                    }

                    {/* Patreon Silber */}

                    {
                        member.patreonSilber
                        && (
                            <PatreonSilber />
                        )
                    }

                    {/* Patreon Gold */}

                    {
                        member.patreonGold
                        && (
                            <PatreonGold />
                        )
                    }

                    {/* Patreon Hall of Fame */}

                    {
                        member.patreonHallOfFame
                        && (
                            <PatreonHallOfFame />
                        )
                    }

                    {/* Patreon GOAT */}

                    {
                        member.patreonGoat
                        && (
                            <PatreonGoat />
                        )
                    }

                    {/* ================================= */}
                    {/* 4. TEAM-AUSZEICHNUNGEN / TROPHÄEN */}
                    {/* ================================= */}

                    {/* Stanley Cup */}

                    <StanleyCup
                        member={
                            member
                        }
                    />

                    {/* Calder Cup */}

                    <CalderCup
                        member={
                            member
                        }
                    />

                    {/* Clarence S. Campbell Trophy */}

                    <ClarenceSCampbellTrophy
                        member={
                            member
                        }
                    />

                    {/* Presidents' Trophy */}

                    <PresidentsTrophy
                        member={
                            member
                        }
                    />

                    {/* Prince of Wales Trophy */}

                    <PrinceOfWalesTrophy
                        member={
                            member
                        }
                    />

                    {/* Macgregor Kilpatrick Trophy */}

                    <MacgregorKilpatrickTrophy
                        member={
                            member
                        }
                    />

                    {/* Richard F. Canning Trophy */}

                    <RichardFCanningTrophy
                        member={
                            member
                        }
                    />

                    {/* Robert W. Clarke Trophy */}

                    <RobertWClarkeTrophy
                        member={
                            member
                        }
                    />

                    {/* ================================= */}
                    {/* 5. SPIELER-AUSZEICHNUNGEN         */}
                    {/* ================================= */}

                    {/* --------------------------------- */}
                    {/* NHL – REGULÄRE SAISON             */}
                    {/* --------------------------------- */}

                    {/* NHL Topscorer */}

                    <NhlTopscorer
                        member={
                            member
                        }
                    />

                    {/* NHL Meiste Tore */}

                    <NhlMeisteTore
                        member={
                            member
                        }
                    />

                    {/* NHL Meiste Assists */}

                    <NhlMeisteAssists
                        member={
                            member
                        }
                    />

                    {/* NHL Meiste Strafminuten */}

                    <NhlMeisteStrafminuten
                        member={
                            member
                        }
                    />

                    {/* NHL Beste +/- Bilanz */}

                    <NhlBestePlusMinus
                        member={
                            member
                        }
                    />

                    {/* --------------------------------- */}
                    {/* NHL – PLAYOFFS                    */}
                    {/* --------------------------------- */}

                    {/* NHL Playoffs Topscorer */}

                    <NhlPoTopscorer
                        member={
                            member
                        }
                    />

                    {/* NHL Playoffs Meiste Tore */}

                    <NhlPoMeisteTore
                        member={
                            member
                        }
                    />

                    {/* NHL Playoffs Meiste Assists */}

                    <NhlPoMeisteAssists
                        member={
                            member
                        }
                    />

                    {/* NHL Playoffs Meiste Strafminuten */}

                    <PoMeisteStrafminuten
                        member={
                            member
                        }
                    />

                    {/* NHL Playoffs Beste +/- Bilanz */}

                    <NhlPoBestePlusMinus
                        member={
                            member
                        }
                    />

                    {/* --------------------------------- */}
                    {/* AHL – REGULÄRE SAISON             */}
                    {/* --------------------------------- */}

                    {/* AHL Topscorer */}

                    <AhlTopscorer
                        member={
                            member
                        }
                    />

                    {/* AHL Meiste Tore */}

                    <AhlMeisteTore
                        member={
                            member
                        }
                    />

                    {/* AHL Meiste Assists */}

                    <AhlMeisteAssists
                        member={
                            member
                        }
                    />

                    {/* AHL Meiste Strafminuten */}

                    <AhlMeisteStrafminuten
                        member={
                            member
                        }
                    />

                    {/* AHL Beste +/- Bilanz */}

                    <AhlBestePlusMinus
                        member={
                            member
                        }
                    />

                    {/* --------------------------------- */}
                    {/* AHL – PLAYOFFS                    */}
                    {/* --------------------------------- */}

                    {/* AHL Playoffs Topscorer */}

                    <AhlPoTopscorer
                        member={
                            member
                        }
                    />

                    {/* AHL Playoffs Meiste Tore */}

                    <AhlPoMeisteTore
                        member={
                            member
                        }
                    />

                    {/* AHL Playoffs Meiste Assists */}

                    <AhlPoMeisteAssists
                        member={
                            member
                        }
                    />

                    {/* AHL Playoffs Meiste Strafminuten */}

                    <AhlPoMeisteStrafminuten
                        member={
                            member
                        }
                    />

                    {/* AHL Playoffs Beste +/- Bilanz */}

                    <AhlPoBestePlusMinus
                        member={
                            member
                        }
                    />

                </DecorationRow>

            </Decorations>

            {/* ================================= */}
            {/* MEMORIAL LABEL                    */}
            {/* ================================= */}

            {
                member.deceased === true
                &&
                (
                    <div
                        style={{
                            textAlign:
                                "center",

                            color:
                                "var(--accent)",

                            fontSize:
                                ".8rem",

                            fontWeight:
                                900,

                            letterSpacing:
                                ".3em",

                            textTransform:
                                "uppercase",

                            padding:
                                "1rem 1.5rem",
                        }}
                    >
                        🕯 UNVERGESSEN
                    </div>
                )
            }

            {/* ================================= */}
            {/* BACK                              */}
            {/* ================================= */}

            <div
                className={
                    styles.backArea
                }
            >

                <a
                    href="/community"
                    className={
                        styles.backButton
                    }
                >
                    ← ZURÜCK ZUR MITGLIEDERÜBERSICHT
                </a>

            </div>

            {/* ================================= */}
            {/* FOOTER                            */}
            {/* ================================= */}

            <Footer />

        </article>
    );
}