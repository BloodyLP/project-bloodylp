import Image from "next/image";

import standingsStyles from "./DegStandings.module.css";
import styles from "./gcl13cup.module.css";

import {
    gcl13Cup,
    GCL13CupMatch,
    GCL13CupTeam,
} from "@/components/live/data/esport/deg-cup";


/* ============================================ */
/* CUP TEAM                                     */
/* ============================================ */

function CupTeam({ team }: { team: GCL13CupTeam }) {
    return (
        <div
            className={[
                styles.teamCell,
                team.isDeg ? styles.degTeam : "",
                team.eliminated ? styles.eliminatedTeam : "",
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <div className={styles.teamLogoWrap}>
                <Image
                    src={team.logo}
                    alt={`${team.name} Logo`}
                    width={46}
                    height={46}
                    className={standingsStyles.teamLogo}
                />
            </div>

            <div className={styles.teamInfo}>
                <span className={standingsStyles.teamName}>
                    {team.name}
                </span>

                {team.eliminated && (
                    <span className={styles.eliminatedLabel}>
                        AUSGESCHIEDEN
                    </span>
                )}
            </div>
        </div>
    );
}


/* ============================================ */
/* CUP MATCH                                    */
/* ============================================ */

function CupMatch({ match }: { match: GCL13CupMatch }) {
    return (
        <div className={styles.match}>
            <div
                className={`${styles.teamRow} ${
                    match.home.eliminated
                        ? styles.eliminatedRow
                        : ""
                }`}
            >
                <CupTeam team={match.home} />

                <div
                    className={`${styles.score} ${
                        match.home.eliminated
                            ? styles.eliminatedScore
                            : ""
                    }`}
                >
                    {match.played
                        ? match.homeScore
                        : "–"}
                </div>
            </div>

            <div
                className={`${styles.teamRow} ${
                    match.away.eliminated
                        ? styles.eliminatedRow
                        : ""
                }`}
            >
                <CupTeam team={match.away} />

                <div
                    className={`${styles.score} ${
                        match.away.eliminated
                            ? styles.eliminatedScore
                            : ""
                    }`}
                >
                    {match.played
                        ? match.awayScore
                        : "–"}
                </div>
            </div>
        </div>
    );
}


/* ============================================ */
/* CUP ROUND                                    */
/* ============================================ */

function CupRound({
    name,
    matches,
}: {
    name: string;
    matches: GCL13CupMatch[];
}) {
    return (
        <div className={styles.round}>
            <div className={styles.roundHeader}>
                <span className={styles.roundAccent} />

                <h3>{name}</h3>
            </div>

            {matches.length > 0 ? (
                <div className={styles.matches}>
                    {matches.map((match) => (
                        <CupMatch
                            key={match.id}
                            match={match}
                        />
                    ))}
                </div>
            ) : (
                <div className={styles.emptyRound}>
                    NOCH KEINE BEGEGNUNGEN
                </div>
            )}
        </div>
    );
}


/* ============================================ */
/* MAIN COMPONENT                               */
/* ============================================ */

export default function GCL13Cup() {
    return (
        <section className={standingsStyles.standings}>

            {/* =================================
                HEADER
            ================================= */}

            <div className={standingsStyles.header}>

                <div
                    className={
                        standingsStyles.headerLeague
                    }
                >

                    <div
                        className={
                            standingsStyles.leagueLogo
                        }
                    >
                        <Image
                            src={gcl13Cup.logo}
                            alt={`${gcl13Cup.name} Logo`}
                            width={80}
                            height={80}
                            className={
                                standingsStyles.leagueLogoImage
                            }
                        />
                    </div>

                    <div
                        className={
                            standingsStyles.headerContent
                        }
                    >
                        <p
                            className={
                                standingsStyles.eyebrow
                            }
                        >
                            DEG ESPORTS
                        </p>

                        <h2
                            className={
                                standingsStyles.title
                            }
                        >
                            POKAL
                        </h2>

                        <p
                            className={
                                standingsStyles.leagueName
                            }
                        >
                            {gcl13Cup.name}
                        </p>

                        <div
                            className={
                                standingsStyles.leagueMeta
                            }
                        >
                            <span>GCL 13</span>

                            <span
                                className={
                                    standingsStyles.metaDivider
                                }
                            >
                                •
                            </span>

                            <span>POKAL</span>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        standingsStyles.headerBadge
                    }
                >
                    AKTUELLER POKAL
                </div>
            </div>


            {/* =================================
                CUP ROUNDS
            ================================= */}

            <div className={styles.rounds}>
                {gcl13Cup.rounds.map((round) => (
                    <CupRound
                        key={round.name}
                        name={round.name}
                        matches={round.matches}
                    />
                ))}
            </div>


            {/* =================================
                FOOTER
            ================================= */}

            <div className={standingsStyles.footer}>
                <span>GCL 13</span>
                <span>•</span>
                <span>POKAL</span>
                <span>•</span>
                <span>AKTUELLE BEGEGNUNGEN</span>
            </div>

        </section>
    );
}