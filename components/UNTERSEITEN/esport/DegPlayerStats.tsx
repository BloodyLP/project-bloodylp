"use client";

/**
 * ============================================
 *
 * BloodyLP
 *
 * ============================================
 *
 * Project:
 * BloodyLP Website
 *
 * File:
 * components/UNTERSEITEN/esport/DegPlayerStats.tsx
 *
 * Description:
 * Saisonstatistiken der DEG eSports Spieler.
 *
 * Darstellung:
 * - Feldspieler
 * - Goalies
 * - Tabellenansicht
 * - Kein Spielerbild
 *
 * ============================================
 */

import {
    playerStats,
    PlayerStat,
    SkaterPlayer,
    GoaliePlayer,
} from "../../live/data/esport/playerStats";

import styles from "./DegPlayerStats.module.css";

/* =========================================
 * TYP-GUARDS
 * ========================================= */

/**
 * Prüft, ob es sich um einen Feldspieler handelt.
 *
 * Dadurch weiß TypeScript automatisch,
 * dass anschließend SkaterStats verwendet
 * werden dürfen.
 */
function isSkater(
    player: PlayerStat
): player is SkaterPlayer {
    return (
        player.position === "defense" ||
        player.position === "forward"
    );
}

/**
 * Prüft, ob es sich um einen Torwart handelt.
 *
 * Dadurch weiß TypeScript automatisch,
 * dass anschließend GoalieStats verwendet
 * werden dürfen.
 */
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
 * POSITIONEN
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
 * HAUPTKOMPONENTE
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
                HEADER
            ========================================= */}

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
                FELDSPIELER
            ========================================= */}

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
                                    SP
                                </th>

                                <th>
                                    S
                                </th>

                                <th>
                                    N
                                </th>

                                <th>
                                    OT-N
                                </th>

                                <th>
                                    TORE
                                </th>

                                <th>
                                    ASSISTS
                                </th>

                                <th>
                                    PUNKTE
                                </th>

                                <th>
                                    PIM
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {skaters.map((player) => (
                                <tr
                                    key={`${player.gamerTag}-${player.number}`}
                                >
                                    {/* SPIELER */}

                                    <td
                                        className={
                                            styles.playerCell
                                        }
                                    >
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

                                    {/* SPIELE */}

                                    <td>
                                        {player.stats.games}
                                    </td>

                                    {/* SIEGE */}

                                    <td>
                                        {player.stats.wins}
                                    </td>

                                    {/* NIEDERLAGEN */}

                                    <td>
                                        {player.stats.losses}
                                    </td>

                                    {/* OVERTIME-NIEDERLAGEN */}

                                    <td>
                                        {player.stats.overtimeLosses}
                                    </td>

                                    {/* TORE */}

                                    <td
                                        className={
                                            styles.highlight
                                        }
                                    >
                                        {player.stats.goals}
                                    </td>

                                    {/* ASSISTS */}

                                    <td
                                        className={
                                            styles.highlight
                                        }
                                    >
                                        {player.stats.assists}
                                    </td>

                                    {/* PUNKTE */}

                                    <td
                                        className={`${styles.highlight} ${styles.points}`}
                                    >
                                        {player.stats.points}
                                    </td>

                                    {/* PIM */}

                                    <td>
                                        {player.stats.pim}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* =========================================
                GOALIES
            ========================================= */}

            <div className={styles.category}>
                <div className={styles.categoryHeader}>
                    <span className={styles.categoryNumber}>
                        02
                    </span>

                    <h3>
                        GOALIES
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
                                    SP
                                </th>

                                <th>
                                    S
                                </th>

                                <th>
                                    N
                                </th>

                                <th>
                                    OT-N
                                </th>

                                <th>
                                    SAVES
                                </th>

                                <th>
                                    GEGENTORE
                                </th>

                                <th>
                                    SHUTOUTS
                                </th>

                                <th>
                                    SAVE %
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {goalies.map((player) => (
                                <tr
                                    key={`${player.gamerTag}-${player.number}`}
                                >
                                    {/* SPIELER */}

                                    <td
                                        className={
                                            styles.playerCell
                                        }
                                    >
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

                                    {/* SPIELE */}

                                    <td>
                                        {player.stats.games}
                                    </td>

                                    {/* SIEGE */}

                                    <td>
                                        {player.stats.wins}
                                    </td>

                                    {/* NIEDERLAGEN */}

                                    <td>
                                        {player.stats.losses}
                                    </td>

                                    {/* OVERTIME-NIEDERLAGEN */}

                                    <td>
                                        {player.stats.overtimeLosses}
                                    </td>

                                    {/* SAVES */}

                                    <td
                                        className={
                                            styles.highlight
                                        }
                                    >
                                        {player.stats.saves}
                                    </td>

                                    {/* GEGENTORE */}

                                    <td>
                                        {player.stats.goalsAgainst}
                                    </td>

                                    {/* SHUTOUTS */}

                                    <td
                                        className={
                                            styles.highlight
                                        }
                                    >
                                        {player.stats.shutouts}
                                    </td>

                                    {/* SAVE % */}

                                    <td
                                        className={`${styles.highlight} ${styles.points}`}
                                    >
                                        {player.stats.savePercentage.toFixed(
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
        </section>
    );
}