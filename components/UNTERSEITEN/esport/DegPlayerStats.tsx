"use client";

import {
    playerStats,
    PlayerStat,
    SkaterPlayer,
    GoaliePlayer,
} from "../../live/data/esport/playerStats";

import styles from "./DegPlayerStats.module.css";

/* =========================================
 * TYPE GUARDS
 * ========================================= */

function isSkater(
    player: PlayerStat
): player is SkaterPlayer {
    return (
        player.position === "defense" ||
        player.position === "forward"
    );
}

function isGoalie(
    player: PlayerStat
): player is GoaliePlayer {
    return player.position === "goalie";
}

/* =========================================
 * SPIELER FILTERN
 * ========================================= */

function getSkaters(): SkaterPlayer[] {
    return playerStats.filter(isSkater);
}

function getGoalies(): GoaliePlayer[] {
    return playerStats.filter(isGoalie);
}

/* =========================================
 * POSITIONSBEZEICHNUNG
 * ========================================= */

function getPositionLabel(
    position: SkaterPlayer["position"]
): string {
    switch (position) {
        case "defense":
            return "Verteidiger";

        case "forward":
            return "Stürmer";

        default:
            return "";
    }
}

/* =========================================
 * COMPONENT
 * ========================================= */

export default function DegPlayerStats() {
    const skaters = getSkaters();
    const goalies = getGoalies();

    return (
        <section
            className={styles.section}
            id="player-stats"
        >
            {/* =========================================
             * HEADER
             * ========================================= */}

            <div className={styles.header}>
                <span className={styles.eyebrow}>
                    DEG ESPORTS
                </span>

                <h2 className={styles.title}>
                    SAISONSTATISTIK
                </h2>

                <p className={styles.subtitle}>
                    Die individuellen Statistiken der aktuellen
                    DEG eSports Mannschaft.
                </p>
            </div>

            {/* =========================================
             * FELDSPIELER
             * ========================================= */}

            <div className={styles.category}>
                <div className={styles.categoryHeader}>
                    <span className={styles.categoryNumber}>
                        01
                    </span>

                    <h3>
                        FELDSPIELER
                    </h3>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.playerColumn}>
                                    SPIELER
                                </th>

                                <th>
                                    POS.
                                </th>

                                <th>
                                    GP
                                </th>

                                <th>
                                    G
                                </th>

                                <th>
                                    A
                                </th>

                                <th>
                                    P
                                </th>

                                <th>
                                    +/-
                                </th>

                                <th>
                                    PIM
                                </th>

                                <th>
                                    PPG
                                </th>

                                <th>
                                    SHG
                                </th>

                                <th>
                                    GWG
                                </th>

                                <th>
                                    S
                                </th>

                                <th>
                                    S%
                                </th>

                                <th>
                                    HITS
                                </th>

                                <th>
                                    FOW%
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {skaters.map((player) => (
                                <tr
                                    key={`${player.gamerTag}-${player.number}`}
                                >
                                    {/* SPIELER */}
                                    <td className={styles.playerCell}>
                                        <span
                                            className={styles.jerseyNumber}
                                        >
                                            #{player.number}
                                        </span>

                                        <div
                                            className={
                                                styles.playerIdentity
                                            }
                                        >
                                            <strong>
                                                {player.gamerTag}
                                            </strong>

                                            <span>
                                                {player.name}
                                            </span>
                                        </div>
                                    </td>

                                    {/* POSITION */}
                                    <td>
                                        <span
                                            className={
                                                styles.position
                                            }
                                        >
                                            {getPositionLabel(
                                                player.position
                                            )}
                                        </span>
                                    </td>

                                    {/* GP */}
                                    <td>
                                        {player.stats.games}
                                    </td>

                                    {/* G */}
                                    <td
                                        className={
                                            styles.highlight
                                        }
                                    >
                                        {player.stats.goals}
                                    </td>

                                    {/* A */}
                                    <td
                                        className={
                                            styles.highlight
                                        }
                                    >
                                        {player.stats.assists}
                                    </td>

                                    {/* P */}
                                    <td
                                        className={`${styles.highlight} ${styles.points}`}
                                    >
                                        {player.stats.points}
                                    </td>

                                    {/* +/- */}
                                    <td>
                                        {player.stats.plusMinus}
                                    </td>

                                    {/* PIM */}
                                    <td>
                                        {player.stats.pim}
                                    </td>

                                    {/* PPG */}
                                    <td>
                                        {player.stats.powerplayGoals}
                                    </td>

                                    {/* SHG */}
                                    <td>
                                        {player.stats.shorthandedGoals}
                                    </td>

                                    {/* GWG */}
                                    <td>
                                        {player.stats.gameWinningGoals}
                                    </td>

                                    {/* S */}
                                    <td>
                                        {player.stats.shots}
                                    </td>

                                    {/* S% */}
                                    <td>
                                        {player.stats.shootingPercentage.toFixed(
                                            1
                                        )}
                                        %
                                    </td>

                                    {/* HITS */}
                                    <td>
                                        {player.stats.hits}
                                    </td>

                                    {/* FOW% */}
                                    <td>
                                        {player.stats.faceoffWinPercentage.toFixed(
                                            1
                                        )}
                                        %
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* =========================================
             * GOALIES
             * ========================================= */}

            <div className={styles.category}>
                <div className={styles.categoryHeader}>
                    <span className={styles.categoryNumber}>
                        02
                    </span>

                    <h3>
                        TORHÜTER
                    </h3>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.playerColumn}>
                                    SPIELER
                                </th>

                                <th>
                                    GP
                                </th>

                                <th>
                                    W
                                </th>

                                <th>
                                    L
                                </th>

                                <th>
                                    OTL
                                </th>

                                <th>
                                    SVS
                                </th>

                                <th>
                                    GA
                                </th>

                                <th>
                                    SV%
                                </th>

                                <th>
                                    GAA
                                </th>

                                <th>
                                    SO
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {goalies.map((player) => (
                                <tr
                                    key={`${player.gamerTag}-${player.number}`}
                                >
                                    {/* SPIELER */}
                                    <td className={styles.playerCell}>
                                        <span
                                            className={
                                                styles.jerseyNumber
                                            }
                                        >
                                            #{player.number}
                                        </span>

                                        <div
                                            className={
                                                styles.playerIdentity
                                            }
                                        >
                                            <strong>
                                                {player.gamerTag}
                                            </strong>

                                            <span>
                                                {player.name}
                                            </span>
                                        </div>
                                    </td>

                                    {/* GP */}
                                    <td>
                                        {player.stats.games}
                                    </td>

                                    {/* W */}
                                    <td>
                                        {player.stats.wins}
                                    </td>

                                    {/* L */}
                                    <td>
                                        {player.stats.losses}
                                    </td>

                                    {/* OTL */}
                                    <td>
                                        {player.stats.overtimeLosses}
                                    </td>

                                    {/* SVS */}
                                    <td
                                        className={
                                            styles.highlight
                                        }
                                    >
                                        {player.stats.saves}
                                    </td>

                                    {/* GA */}
                                    <td>
                                        {player.stats.goalsAgainst}
                                    </td>

                                    {/* SV% */}
                                    <td
                                        className={
                                            styles.highlight
                                        }
                                    >
                                        {player.stats.savePercentage.toFixed(
                                            2
                                        )}
                                    </td>

                                    {/* GAA */}
                                    <td
                                        className={
                                            styles.highlight
                                        }
                                    >
                                        {player.stats.goalsAgainstAverage.toFixed(
                                            2
                                        )}
                                    </td>

                                    {/* SO */}
                                    <td
                                        className={
                                            styles.highlight
                                        }
                                    >
                                        {player.stats.shutouts}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}