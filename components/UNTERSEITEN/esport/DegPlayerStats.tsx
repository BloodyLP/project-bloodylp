"use client";

import { useState } from "react";

import {
    playerStats,
    playoffPlayerStats,
    type PlayerStat,
    type SkaterPlayer,
    type GoaliePlayer,
} from "../../live/data/esport/playerStats";

import styles from "./DegPlayerStats.module.css";

/* =========================================
 * TYPE GUARDS
 * ========================================= */

function isSkater(player: PlayerStat): player is SkaterPlayer {
    return player.position === "defense" || player.position === "forward";
}

function isGoalie(player: PlayerStat): player is GoaliePlayer {
    return player.position === "goalie";
}

/* =========================================
 * COMPONENT
 * ========================================= */

type SeasonMode = "regular" | "playoffs";

export default function DegPlayerStats() {
    const [seasonMode, setSeasonMode] = useState<SeasonMode>("regular");

    // Ausschließlich die Daten aus playerStats.ts verwenden.
    const activeStats = seasonMode === "playoffs" ? playoffPlayerStats : playerStats;
    const skaters = activeStats.filter(isSkater);
    const goalies = activeStats.filter(isGoalie);

    return (
        <section className={styles.section} id="player-stats">
            <div className={styles.header}>
                <span className={styles.eyebrow}>DEG ESPORTS</span>
                <h2 className={styles.title}>SAISONSTATISTIK</h2>
                <p className={styles.subtitle}>
                    Die individuellen Statistiken der aktuellen DEG eSports Mannschaft.
                </p>

                <div className={styles.seasonSwitch} role="group" aria-label="Statistik auswählen">
                    <button
                        type="button"
                        className={`${styles.seasonButton} ${seasonMode === "regular" ? styles.seasonButtonActive : ""}`}
                        onClick={() => setSeasonMode("regular")}
                        aria-pressed={seasonMode === "regular"}
                    >
                        Regular Season
                    </button>
                    <button
                        type="button"
                        className={`${styles.seasonButton} ${seasonMode === "playoffs" ? styles.seasonButtonActive : ""}`}
                        onClick={() => setSeasonMode("playoffs")}
                        aria-pressed={seasonMode === "playoffs"}
                    >
                        Playoffs
                    </button>
                </div>
            </div>

            {/* FELDSPIELER – nur die auf der Homepage vorhandenen Statistiken */}
            <div className={styles.category}>
                <div className={styles.categoryHeader}>
                    <span className={styles.categoryNumber}>01</span>
                    <h3>SKATERS</h3>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className={styles.playerColumn}>Name</th>
                                <th>GP</th>
                                <th>G</th>
                                <th>A</th>
                                <th>P</th>
                                <th>+/-</th>
                                <th>PIM</th>
                                <th>PPG</th>
                                <th>SHG</th>
                                <th>GWG</th>
                                <th>S</th>
                                <th>S%</th>
                                <th>Hits</th>
                                <th>FOW%</th>
                            </tr>
                        </thead>
                        <tbody>
                            {skaters.map((player, index) => (
                                <tr key={`${player.gamerTag}-${player.number}`}>
                                    <td>{index + 1}.</td>
                                    <td className={styles.playerCell}>
                                        <div className={styles.playerIdentity}>
                                            <strong>{player.gamerTag}, DEG</strong>
                                            <span>{player.name}</span>
                                        </div>
                                    </td>
                                    <td>{player.stats.games}</td>
                                    <td className={styles.highlight}>{player.stats.goals}</td>
                                    <td className={styles.highlight}>{player.stats.assists}</td>
                                    <td className={`${styles.highlight} ${styles.points}`}>{player.stats.points}</td>
                                    <td>{player.stats.plusMinus}</td>
                                    <td>{player.stats.pim}</td>
                                    <td>{player.stats.powerplayGoals}</td>
                                    <td>{player.stats.shorthandedGoals}</td>
                                    <td>{player.stats.gameWinningGoals}</td>
                                    <td>{player.stats.shots}</td>
                                    <td>{player.stats.shootingPercentage.toFixed(1)}%</td>
                                    <td>{player.stats.hits}</td>
                                    <td>
                                        {player.stats.faceoffWinPercentage === 0
                                            ? "-"
                                            : `${player.stats.faceoffWinPercentage.toFixed(1)}%`}
                                    </td>
                                </tr>
                            ))}
                            {skaters.length === 0 && (
                                <tr><td colSpan={15}>Für diesen Wettbewerb liegen keine Feldspielerstatistiken vor.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* GOALIES – nur die auf der Homepage vorhandenen Statistiken */}
            <div className={styles.category}>
                <div className={styles.categoryHeader}>
                    <span className={styles.categoryNumber}>02</span>
                    <h3>GOALIES</h3>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className={styles.playerColumn}>Name</th>
                                <th>GP</th>
                                <th>W</th>
                                <th>L</th>
                                <th>OTL</th>
                                <th>Svs</th>
                                <th>GA</th>
                                <th>SV%</th>
                                <th>GAA</th>
                                <th>SO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {goalies.map((player, index) => (
                                <tr key={`${player.gamerTag}-${player.number}`}>
                                    <td>{index + 1}.</td>
                                    <td className={styles.playerCell}>
                                        <div className={styles.playerIdentity}>
                                            <strong>{player.gamerTag}, DEG</strong>
                                            <span>{player.name}</span>
                                        </div>
                                    </td>
                                    <td>{player.stats.games}</td>
                                    <td className={styles.highlight}>{player.stats.wins}</td>
                                    <td>{player.stats.losses}</td>
                                    <td>{player.stats.overtimeLosses}</td>
                                    <td className={styles.highlight}>{player.stats.saves}</td>
                                    <td>{player.stats.goalsAgainst}</td>
                                    <td className={styles.highlight}>{player.stats.savePercentage.toFixed(2)}%</td>
                                    <td className={styles.highlight}>{player.stats.goalsAgainstAverage.toFixed(2)}</td>
                                    <td className={styles.highlight}>{player.stats.shutouts}</td>
                                </tr>
                            ))}
                            {goalies.length === 0 && (
                                <tr><td colSpan={11}>Für diesen Wettbewerb liegen keine Goaliedaten vor.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
