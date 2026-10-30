
/* ============================================ */
/* BloodyLP                                     */
/* Project: BloodyLP Website                    */
/* File: components/UNTERSEITEN/esport/         */
/*       DegStandings.tsx                       */
/* Description: DEG eSports Tabellenübersicht   */
/* ============================================ */

import Image from "next/image";
import styles from "./DegStandings.module.css";

import {
    degStandings,
    degStandingsLeague,
} from "@/components/live/data/esport/deg-standings";

/* ============================================ */
/* PLAYOFF-ERGEBNISSE                            */
/* ============================================ */

/*
 * Ergebnisse ausschließlich hier eintragen.
 * Solange played = false ist, werden Platzhalter angezeigt.
 * Nach Spielende homeScore/awayScore eintragen und played auf true setzen.
 */

const quarterfinalMatches = [
    {
        id: 1,
        homeSeed: 1,
        awaySeed: 8,
        homeScore: 3,
        awayScore: 0,
        played: true,
    },
    {
        id: 2,
        homeSeed: 2,
        awaySeed: 7,
        homeScore: 4,
        awayScore: 0,
        played: true,
    },
    {
        id: 3,
        homeSeed: 3,
        awaySeed: 6,
        homeScore: 3,
        awayScore: 4,
        played: true,
    },
    {
        id: 4,
        homeSeed: 4,
        awaySeed: 5,
        homeScore: 4,
        awayScore: 2,
        played: true,
    },
];

/* ============================================ */
/* SIEGER DER VIERTELFINALS                     */
/* ============================================ */

const getQuarterfinalWinner = (matchId: number) => {
    const match = quarterfinalMatches.find(
        (item) => item.id === matchId
    );

    if (
        !match ||
        !match.played ||
        match.homeScore === null ||
        match.awayScore === null ||
        match.homeScore === match.awayScore
    ) {
        return null;
    }

    const winnerSeed =
        match.homeScore > match.awayScore
            ? match.homeSeed
            : match.awaySeed;

    return (
        degStandings.find(
            (team) =>
                team.position === winnerSeed &&
                team.playoffs
        ) ?? null
    );
};

/* ============================================ */
/* HALBFINALS                                   */
/* ============================================ */

/*
 * Halbfinale 1:
 * Sieger VF 1 gegen Sieger VF 3
 *
 * Halbfinale 2:
 * Sieger VF 2 gegen Sieger VF 4
 *
 * Die Teilnehmer werden automatisch ermittelt.
 */

/* ============================================ */
/* COMPONENT                                    */
/* ============================================ */

export default function DegStandings() {
    return (
        <section className={styles.standings}>

            {/* ========================================= */}
            {/* HEADER                                    */}
            {/* ========================================= */}

            <div className={styles.header}>
                <div className={styles.headerLeague}>

                    <div className={styles.leagueLogo}>
                        <Image
                            src={degStandingsLeague.logo}
                            alt={`${degStandingsLeague.name} Logo`}
                            width={80}
                            height={80}
                            className={styles.leagueLogoImage}
                        />
                    </div>

                    <div className={styles.headerContent}>
                        <p className={styles.eyebrow}>
                            DEG ESPORTS
                        </p>

                        <h2 className={styles.title}>
                            TABELLE
                        </h2>

                        <p className={styles.leagueName}>
                            {degStandingsLeague.name}
                        </p>

                        <div className={styles.leagueMeta}>
                            <span>
                                {degStandingsLeague.group}
                            </span>

                            <span className={styles.metaDivider}>
                                •
                            </span>

                            <span>
                                SAISON {degStandingsLeague.season}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.headerBadge}>
                    AKTUELLE TABELLE
                </div>
            </div>

            {/* ========================================= */}
            {/* TABLE WRAPPER                             */}
            {/* ========================================= */}

            <div className={styles.tableWrapper}>

                {/* TABLE HEADER */}

                <div className={styles.tableHeader}>
                    <div className={styles.positionHeader}>
                        #
                    </div>

                    <div className={styles.teamHeader}>
                        TEAM
                    </div>

                    <div className={styles.gamesHeader}>
                        SP
                    </div>

                    <div className={styles.winsHeader}>
                        S
                    </div>

                    <div className={styles.overtimeWinsHeader}>
                        OTS
                    </div>

                    <div className={styles.overtimeLossesHeader}>
                        OTN
                    </div>

                    <div className={styles.lossesHeader}>
                        N
                    </div>

                    <div className={styles.goalsForHeader}>
                        T+
                    </div>

                    <div className={styles.goalsAgainstHeader}>
                        T-
                    </div>

                    <div className={styles.pointsHeader}>
                        PKT
                    </div>
                </div>

                {/* TABLE BODY */}

                <div className={styles.tableBody}>
                    {degStandings.map((standing) => (
                        <div
                            key={standing.team}
                            className={`${styles.tableRow} ${
                                standing.isDeg
                                    ? styles.degRow
                                    : ""
                            }`}
                        >
                            <div className={styles.positionCell}>
                                {standing.position}
                            </div>

                            <div className={styles.teamCell}>
                                <Image
                                    src={standing.logo}
                                    alt={`${standing.team} Logo`}
                                    width={46}
                                    height={46}
                                    className={styles.teamLogo}
                                />

                                <span className={styles.teamName}>
                                    {standing.team}
                                </span>
                            </div>

                            <div className={styles.statCell}>
                                {standing.gamesPlayed}
                            </div>

                            <div className={styles.statCell}>
                                {standing.wins}
                            </div>

                            <div className={styles.statCell}>
                                {standing.overtimeWins}
                            </div>

                            <div className={styles.statCell}>
                                {standing.overtimeLosses}
                            </div>

                            <div className={styles.statCell}>
                                {standing.losses}
                            </div>

                            <div className={styles.statCell}>
                                {standing.goalsFor}
                            </div>

                            <div className={styles.statCell}>
                                {standing.goalsAgainst}
                            </div>

                            <div className={styles.pointsCell}>
                                {standing.points}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ========================================= */}
            {/* PLAYOFFS – VIERTELFINALE                  */}
            {/* ========================================= */}

            <section className={styles.playoffs}>
                <div className={styles.playoffsHeader}>
                    <div>
                        <p className={styles.playoffsEyebrow}>
                            GCL 13 · DIVISION I
                        </p>

                        <h2 className={styles.playoffsTitle}>
                            PLAYOFFS
                        </h2>

                        <p className={styles.playoffsSubtitle}>
                            Viertelfinale · Best of 7
                        </p>
                    </div>

                    <span className={styles.playoffsBadge}>
                        VIERTELFINALE
                    </span>
                </div>

                <div className={styles.playoffsGrid}>
                    {quarterfinalMatches.map((match) => {
                        const home = degStandings.find(
                            (team) =>
                                team.position === match.homeSeed &&
                                team.playoffs
                        );

                        const away = degStandings.find(
                            (team) =>
                                team.position === match.awaySeed &&
                                team.playoffs
                        );

                        if (!home || !away) {
                            return null;
                        }

                        return (
                            <article
                                key={`quarterfinal-${match.id}`}
                                className={styles.playoffMatch}
                            >
                                <div className={styles.playoffMatchHeader}>
                                    <span>
                                        VIERTELFINALE {match.id}
                                    </span>

                                    <span className={styles.playoffStatus}>
                                        {match.played
                                            ? "BEENDET"
                                            : "NOCH OFFEN"}
                                    </span>
                                </div>

                                <div className={styles.playoffTeam}>
                                    <div className={styles.playoffTeamInfo}>
                                        <span className={styles.playoffSeed}>
                                            {home.position}
                                        </span>

                                        <Image
                                            src={home.logo}
                                            alt={`${home.team} Logo`}
                                            width={44}
                                            height={44}
                                            className={styles.playoffLogo}
                                        />

                                        <span className={styles.playoffTeamName}>
                                            {home.team}
                                        </span>
                                    </div>

                                    <span className={styles.playoffScore}>
                                        {match.played
                                            ? match.homeScore
                                            : "–"}
                                    </span>
                                </div>

                                <div className={styles.playoffTeam}>
                                    <div className={styles.playoffTeamInfo}>
                                        <span className={styles.playoffSeed}>
                                            {away.position}
                                        </span>

                                        <Image
                                            src={away.logo}
                                            alt={`${away.team} Logo`}
                                            width={44}
                                            height={44}
                                            className={styles.playoffLogo}
                                        />

                                        <span className={styles.playoffTeamName}>
                                            {away.team}
                                        </span>
                                    </div>

                                    <span className={styles.playoffScore}>
                                        {match.played
                                            ? match.awayScore
                                            : "–"}
                                    </span>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* ========================================= */}
            {/* PLAYOFFS – HALBFINALE                     */}
            {/* ========================================= */}

            <section className={styles.playoffs}>
                <div className={styles.playoffsHeader}>
                    <div>
                        <p className={styles.playoffsEyebrow}>
                            GCL 13 · DIVISION I
                        </p>

                        <h2 className={styles.playoffsTitle}>
                            PLAYOFFS
                        </h2>

                        <p className={styles.playoffsSubtitle}>
                            Halbfinale · Best of 7
                        </p>
                    </div>

                    <span className={styles.playoffsBadge}>
                        HALBFINALE
                    </span>
                </div>

                <div className={styles.playoffsGrid}>
                    {[
                        {
                            id: 1,
                            home: getQuarterfinalWinner(1),
                            away: getQuarterfinalWinner(3),
                            homePlaceholder: "Sieger Viertelfinale 1",
                            awayPlaceholder: "Sieger Viertelfinale 3",
                        },
                        {
                            id: 2,
                            home: getQuarterfinalWinner(2),
                            away: getQuarterfinalWinner(4),
                            homePlaceholder: "Sieger Viertelfinale 2",
                            awayPlaceholder: "Sieger Viertelfinale 4",
                        },
                    ].map((match) => (
                        <article
                            key={`semifinal-${match.id}`}
                            className={styles.playoffMatch}
                        >
                            <div className={styles.playoffMatchHeader}>
                                <span>
                                    HALBFINALE {match.id}
                                </span>

                                <span className={styles.playoffStatus}>
                                    NOCH OFFEN
                                </span>
                            </div>

                            {[match.home, match.away].map(
                                (team, index) => (
                                    <div
                                        key={`${match.id}-${index}`}
                                        className={styles.playoffTeam}
                                    >
                                        <div className={styles.playoffTeamInfo}>
                                            <span className={styles.playoffSeed}>
                                                {team
                                                    ? team.position
                                                    : "–"}
                                            </span>

                                            {team && (
                                                <Image
                                                    src={team.logo}
                                                    alt={`${team.team} Logo`}
                                                    width={44}
                                                    height={44}
                                                    className={styles.playoffLogo}
                                                />
                                            )}

                                            <span className={styles.playoffTeamName}>
                                                {team
                                                    ? team.team
                                                    : index === 0
                                                        ? match.homePlaceholder
                                                        : match.awayPlaceholder}
                                            </span>
                                        </div>

                                        <span className={styles.playoffScore}>
                                            –
                                        </span>
                                    </div>
                                )
                            )}
                        </article>
                    ))}
                </div>
            </section>

            {/* ========================================= */}
            {/* FOOTER                                    */}
            {/* ========================================= */}

            <div className={styles.footer}>
                <span>SP = SPIELE</span>
                <span>S = SIEGE</span>
                <span>OTS = OVERTIME-SIEGE</span>
                <span>OTN = OVERTIME-NIEDERLAGEN</span>
                <span>N = NIEDERLAGEN</span>
                <span>T+ = TORE</span>
                <span>T- = GEGENTORE</span>
                <span>PKT = PUNKTE</span>
            </div>

        </section>
    );
}
