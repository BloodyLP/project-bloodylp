import Link from "next/link";
import styles from "./page.module.css";

/* ============================================ /
/ TYPES /
/ ============================================ */

type SeasonRecord = {
year: string;
player: string;
value: string;
};

type TrophyRecord = {
year: string;
winner: string;
bloodyArmy?: boolean;
};

type PlayoffResult = {
year: string;
result: string;
champion?: boolean;
};

/* ============================================ /
/ PAGE /
/ ============================================ */

export default function BloodyArmyStatisticsPage() {

/* ======================================== */
/* REGULAR SEASON                           */
/* ======================================== */

const regularSeasonStats = {
    games: 574,
    points: 783,
    wins: 371,
    losses: 165,
    winPercentage: "64,6%",
    goals: 2005,
    goalsAgainst: 1485,
};

/* ======================================== */
/* PLAYOFFS                                 */
/* ======================================== */

const playoffStats = {
    games: 136,
    wins: 87,
    losses: 49,
    winPercentage: "63,9%",
    goals: 451,
    goalsAgainst: 314,
};

/* ======================================== */
/* REGULAR SEASON RECORDS                   */
/* ======================================== */

const regularSeasonScoring: SeasonRecord[] = [
    { year: "2019", player: "BloodyLP / DannyIce", value: "jeweils 78" },
    { year: "2020", player: "BloodyLP", value: "67" },
    { year: "2021", player: "Stevethebever", value: "65" },
    { year: "2022", player: "HightowerSL", value: "70" },
    { year: "2023", player: "BloodyLP", value: "71" },
    { year: "2024", player: "Stevethebever", value: "89" },
    { year: "2025", player: "BloodyLP", value: "91" },
    { year: "2026", player: "BloodyLP", value: "67" },
];

const regularSeasonGoals: SeasonRecord[] = [
    { year: "2019", player: "BloodyLP", value: "46" },
    { year: "2020", player: "BloodyLP", value: "37" },
    { year: "2021", player: "LOLFury", value: "36" },
    { year: "2022", player: "HightowerSL", value: "45" },
    { year: "2023", player: "BloodyLP", value: "52" },
    { year: "2024", player: "BloodyLP", value: "45" },
    { year: "2025", player: "BloodyLP", value: "60" },
    { year: "2026", player: "BloodyLP", value: "42" },
];

const regularSeasonAssists: SeasonRecord[] = [
    { year: "2019", player: "Krebser", value: "45" },
    { year: "2020", player: "BloodyLP", value: "30" },
    { year: "2021", player: "Rosendorf", value: "45" },
    { year: "2022", player: "ThePiotrek", value: "38" },
    { year: "2023", player: "ThePiotrek", value: "42" },
    { year: "2024", player: "ThePiotrek", value: "65" },
    { year: "2025", player: "Krebser", value: "52" },
    { year: "2026", player: "Rosendorf", value: "43" },
];

const regularSeasonPenaltyMinutes: SeasonRecord[] = [
    { year: "2019", player: "Blackhawk", value: "54" },
    { year: "2020", player: "Stevethebever", value: "42" },
    { year: "2021", player: "BloodyLP", value: "40" },
    { year: "2022", player: "Rosendorf", value: "71" },
    { year: "2023", player: "BloodyLP", value: "29" },
    { year: "2024", player: "Stevethebever", value: "48" },
    { year: "2025", player: "BloodyLP", value: "23" },
    { year: "2026", player: "SurstroemingTyp", value: "13" },
];

const regularSeasonPlusMinus: SeasonRecord[] = [
    { year: "2019", player: "Krebser", value: "64" },
    { year: "2020", player: "Bobbele", value: "48" },
    { year: "2021", player: "Krebser", value: "33" },
    { year: "2022", player: "Rosendorf", value: "43" },
    { year: "2023", player: "BloodyLP", value: "42" },
    { year: "2024", player: "BloodyLP", value: "41" },
    { year: "2025", player: "BloodyLP", value: "73" },
    { year: "2026", player: "Dungeon / Krebser", value: "jeweils 47" },
];

/* ======================================== */
/* PLAYOFF RECORDS                          */
/* ======================================== */

const playoffScoring: SeasonRecord[] = [
    { year: "2019", player: "DannyIce", value: "25" },
    { year: "2020", player: "Stevethebever", value: "15" },
    { year: "2021", player: "BloodyLP", value: "14" },
    { year: "2022", player: "BloodyLP / HightowerSL", value: "jeweils 17" },
    { year: "2023", player: "Stevethebever / Blackhawk", value: "jeweils 10" },
    { year: "2024", player: "Blackhawk", value: "21" },
    { year: "2025", player: "Hightower", value: "22" },
    { year: "2026", player: "BloodyLP", value: "17" },
];

const playoffGoals: SeasonRecord[] = [
    { year: "2019", player: "BloodyLP", value: "15" },
    { year: "2020", player: "Stevethebever / Blackhawk", value: "jeweils 7" },
    { year: "2021", player: "LOLFury", value: "8" },
    { year: "2022", player: "BloodyLP", value: "12" },
    { year: "2023", player: "Stevethebever / HightowerSL", value: "jeweils 6" },
    { year: "2024", player: "BloodyLP", value: "12" },
    { year: "2025", player: "Hightower", value: "15" },
    { year: "2026", player: "BloodyLP", value: "11" },
];

const playoffAssists: SeasonRecord[] = [
    { year: "2019", player: "LOLFury", value: "16" },
    { year: "2020", player: "Rosendorf", value: "11" },
    { year: "2021", player: "BloodyLP", value: "10" },
    { year: "2022", player: "HightowerSL / Blackhawk / ThePiotrek", value: "jeweils 10" },
    { year: "2023", player: "Blackhawk", value: "6" },
    { year: "2024", player: "ThePiotrek", value: "13" },
    { year: "2025", player: "Blackhawk", value: "15" },
    { year: "2026", player: "Stevethebever / Krebser", value: "jeweils 10" },
];

const playoffPenaltyMinutes: SeasonRecord[] = [
    { year: "2019", player: "HightowerSL", value: "17" },
    { year: "2020", player: "Rosendorf", value: "23" },
    { year: "2021", player: "Stevethebever", value: "26" },
    { year: "2022", player: "ThePiotrek", value: "19" },
    { year: "2023", player: "Stevethebever / BloodyLP", value: "jeweils 4" },
    { year: "2024", player: "Stevethebever", value: "12" },
    { year: "2025", player: "LOLFury", value: "9" },
    { year: "2026", player: "ThePiotrek", value: "4" },
];

const playoffPlusMinus: SeasonRecord[] = [
    { year: "2019", player: "BloodyLP", value: "16" },
    { year: "2020", player: "Stevethebever", value: "15" },
    { year: "2021", player: "LOLFury", value: "12" },
    { year: "2022", player: "Rosendorf", value: "20" },
    { year: "2023", player: "DannyIce", value: "5" },
    { year: "2024", player: "ThePiotrek", value: "17" },
    { year: "2025", player: "Blackhawk", value: "20" },
    { year: "2026", player: "DannyIce", value: "16" },
];

/* ======================================== */
/* TROPHIES                                 */
/* ======================================== */

const stanleyCup: TrophyRecord[] = [
    { year: "2019", winner: "Atlantic BloodyArmy", bloodyArmy: true },
    { year: "2020", winner: "Los Angeles BloodyArmy", bloodyArmy: true },
    { year: "2021", winner: "Tampa Bay Lightning" },
    { year: "2022", winner: "Los Angeles BloodyArmy", bloodyArmy: true },
    { year: "2023", winner: "Tampa Bay Lightning" },
    { year: "2024", winner: "Toronto Maple Leafs" },
    { year: "2025", winner: "Los Angeles BloodyArmy", bloodyArmy: true },
    { year: "2026", winner: "Los Angeles BloodyArmy", bloodyArmy: true },
];

const presidentsTrophy: TrophyRecord[] = [
    { year: "2019", winner: "Nashville Predators" },
    { year: "2020", winner: "Philadelphia Flyers" },
    { year: "2021", winner: "Tampa Bay Lightning" },
    { year: "2022", winner: "Florida Panthers" },
    { year: "2023", winner: "Los Angeles BloodyArmy", bloodyArmy: true },
    { year: "2024", winner: "Tampa Bay Lightning" },
    { year: "2025", winner: "Los Angeles BloodyArmy", bloodyArmy: true },
    { year: "2026", winner: "Los Angeles BloodyArmy", bloodyArmy: true },
];

const campbellTrophy: TrophyRecord[] = [
    { year: "2019", winner: "Winnipeg Jets" },
    { year: "2020", winner: "Los Angeles BloodyArmy", bloodyArmy: true },
    { year: "2021", winner: "Minnesota Wild" },
    { year: "2022", winner: "Los Angeles BloodyArmy", bloodyArmy: true },
    { year: "2023", winner: "Calgary Flames" },
    { year: "2024", winner: "Colorado Avalanche" },
    { year: "2025", winner: "Los Angeles BloodyArmy", bloodyArmy: true },
    { year: "2026", winner: "Los Angeles BloodyArmy", bloodyArmy: true },
];

const walesTrophy: TrophyRecord[] = [
    { year: "2019", winner: "Atlantic BloodyArmy", bloodyArmy: true },
    { year: "2020", winner: "Boston Bruins" },
    { year: "2021", winner: "Tampa Bay Lightning" },
    { year: "2022", winner: "Pittsburgh Penguins" },
    { year: "2023", winner: "Tampa Bay Lightning" },
    { year: "2024", winner: "Toronto Maple Leafs" },
    { year: "2025", winner: "Tampa Bay Lightning" },
    { year: "2026", winner: "Tampa Bay Lightning" },
];

/* ======================================== */
/* PLAYOFF HISTORY                          */
/* ======================================== */

const playoffHistory: PlayoffResult[] = [
    {
        year: "2019",
        result: "Stanley Cup Sieger gegen die Winnipeg Jets – Serie 4:1",
        champion: true,
    },
    {
        year: "2020",
        result: "Stanley Cup Sieger gegen die Boston Bruins – Serie 4:3",
        champion: true,
    },
    {
        year: "2021",
        result: "Runde 2 gegen die Edmonton Oilers – Serie 1:4",
    },
    {
        year: "2022",
        result: "Stanley Cup Sieger gegen die Pittsburgh Penguins – Serie 4:1",
        champion: true,
    },
    {
        year: "2023",
        result: "Runde 2 gegen die Calgary Flames – Serie 3:4",
    },
    {
        year: "2024",
        result: "Western Conference Finals gegen die Colorado Avalanche – Serie 3:4",
    },
    {
        year: "2025",
        result: "Stanley Cup Sieger gegen die Tampa Bay Lightning – Serie 4:0",
        champion: true,
    },
    {
        year: "2026",
        result: "Stanley Cup Sieger gegen die Tampa Bay Lightning – Serie 4:0",
        champion: true,
    },
];

/* ======================================== */
/* RECORD COMPONENT                         */
/* ======================================== */

const renderRecords = (
    title: string,
    records: SeasonRecord[],
) => (
    <div className={styles.recordCard}>
        <h3 className={styles.recordTitle}>
            {title}
        </h3>

        <div className={styles.recordList}>
            {records.map((record) => (
                <div
                    key={`${title}-${record.year}`}
                    className={styles.recordRow}
                >
                    <span className={styles.recordYear}>
                        {record.year}
                    </span>

                    <span className={styles.recordPlayer}>
                        {record.player}
                    </span>

                    <span className={styles.recordValue}>
                        {record.value}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

/* ======================================== */
/* TROPHY COMPONENT                         */
/* ======================================== */

const renderTrophy = (
    title: string,
    description: string,
    records: TrophyRecord[],
) => (
    <div className={styles.trophyCard}>
        <div className={styles.trophyIcon}>
            🏆
        </div>

        <h3 className={styles.trophyTitle}>
            {title}
        </h3>

        <p className={styles.trophyDescription}>
            {description}
        </p>

        <div className={styles.trophyList}>
            {records.map((record) => (
                <div
                    key={`${title}-${record.year}`}
                    className={styles.trophyRow}
                >
                    <span className={styles.trophyYear}>
                        {record.year}
                    </span>

                    <span
                        className={
                            record.bloodyArmy
                                ? styles.bloodyArmyWinner
                                : styles.trophyWinner
                        }
                    >
                        {record.winner}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

return (
    <main className={styles.page}>

        <header className={styles.header}>
            <span className={styles.eyebrow}>
                BLOODYARMY
            </span>

            <h1 className={styles.title}>
                STATISTIK
            </h1>

            <p className={styles.subtitle}>
                DIE GESCHICHTE DER BLOODYARMY IN ZAHLEN
            </p>
        </header>

        <section className={styles.overviewSection}>

            <h2 className={styles.sectionTitle}>
                HAUPTRUNDE
            </h2>

            <div className={styles.overviewGrid}>

                <div className={styles.statCard}>
                    <span className={styles.statIcon}>🏒</span>
                    <span className={styles.statLabel}>
                        SPIELE
                    </span>
                    <span className={styles.statValue}>
                        {regularSeasonStats.games}
                    </span>
                </div>

                <div className={styles.statCard}>
                    <span className={styles.statIcon}>📈</span>
                    <span className={styles.statLabel}>
                        PUNKTE
                    </span>
                    <span className={styles.statValue}>
                        {regularSeasonStats.points}
                    </span>
                </div>

                <div className={styles.statCard}>
                    <span className={styles.statIcon}>🟢</span>
                    <span className={styles.statLabel}>
                        SIEGE
                    </span>
                    <span className={styles.statValue}>
                        {regularSeasonStats.wins}
                    </span>
                </div>

                <div className={styles.statCard}>
                    <span className={styles.statIcon}>🔴</span>
                    <span className={styles.statLabel}>
                        NIEDERLAGEN
                    </span>
                    <span className={styles.statValue}>
                        {regularSeasonStats.losses}
                    </span>
                </div>

                <div className={styles.statCard}>
                    <span className={styles.statIcon}>🧮</span>
                    <span className={styles.statLabel}>
                        SIEGE %
                    </span>
                    <span className={styles.statValue}>
                        {regularSeasonStats.winPercentage}
                    </span>
                </div>

                <div className={styles.statCard}>
                    <span className={styles.statIcon}>🥅</span>
                    <span className={styles.statLabel}>
                        TORE
                    </span>
                    <span className={styles.statValue}>
                        {regularSeasonStats.goals}
                    </span>
                </div>

                <div className={styles.statCard}>
                    <span className={styles.statIcon}>🚫</span>
                    <span className={styles.statLabel}>
                        GEGENTORE
                    </span>
                    <span className={styles.statValue}>
                        {regularSeasonStats.goalsAgainst}
                    </span>
                </div>

            </div>

        </section>

        <section className={styles.overviewSection}>

            <h2 className={styles.sectionTitle}>
                PLAYOFFS
            </h2>

            <div className={styles.overviewGrid}>

                <div className={styles.statCard}>
                    <span className={styles.statIcon}>🏒</span>
                    <span className={styles.statLabel}>
                        SPIELE
                    </span>
                    <span className={styles.statValue}>
                        {playoffStats.games}
                    </span>
                </div>

                <div className={styles.statCard}>
                    <span className={styles.statIcon}>🟢</span>
                    <span className={styles.statLabel}>
                        SIEGE
                    </span>
                    <span className={styles.statValue}>
                        {playoffStats.wins}
                    </span>
                </div>

                <div className={styles.statCard}>
                    <span className={styles.statIcon}>🔴</span>
                    <span className={styles.statLabel}>
                        NIEDERLAGEN
                    </span>
                    <span className={styles.statValue}>
                        {playoffStats.losses}
                    </span>
                </div>

                <div className={styles.statCard}>
                    <span className={styles.statIcon}>🧮</span>
                    <span className={styles.statLabel}>
                        SIEGE %
                    </span>
                    <span className={styles.statValue}>
                        {playoffStats.winPercentage}
                    </span>
                </div>

                <div className={styles.statCard}>
                    <span className={styles.statIcon}>🥅</span>
                    <span className={styles.statLabel}>
                        TORE
                    </span>
                    <span className={styles.statValue}>
                        {playoffStats.goals}
                    </span>
                </div>

                <div className={styles.statCard}>
                    <span className={styles.statIcon}>🚫</span>
                    <span className={styles.statLabel}>
                        GEGENTORE
                    </span>
                    <span className={styles.statValue}>
                        {playoffStats.goalsAgainst}
                    </span>
                </div>

            </div>

        </section>

        <section className={styles.recordsSection}>

            <h2 className={styles.sectionTitle}>
                HAUPTRUNDE – JAHRESREKORDE
            </h2>

            <div className={styles.recordsGrid}>

                {renderRecords(
                    "TOPSCORER",
                    regularSeasonScoring,
                )}

                {renderRecords(
                    "MEISTE TORE",
                    regularSeasonGoals,
                )}

                {renderRecords(
                    "MEISTE ASSISTS",
                    regularSeasonAssists,
                )}

                {renderRecords(
                    "MEISTE STRAFMINUTEN",
                    regularSeasonPenaltyMinutes,
                )}

                {renderRecords(
                    "BESTE +/- BILANZ",
                    regularSeasonPlusMinus,
                )}

            </div>

        </section>

        <section className={styles.recordsSection}>

            <h2 className={styles.sectionTitle}>
                PLAYOFFS – JAHRESREKORDE
            </h2>

            <div className={styles.recordsGrid}>

                {renderRecords(
                    "TOPSCORER",
                    playoffScoring,
                )}

                {renderRecords(
                    "MEISTE TORE",
                    playoffGoals,
                )}

                {renderRecords(
                    "MEISTE ASSISTS",
                    playoffAssists,
                )}

                {renderRecords(
                    "MEISTE STRAFMINUTEN",
                    playoffPenaltyMinutes,
                )}

                {renderRecords(
                    "BESTE +/- BILANZ",
                    playoffPlusMinus,
                )}

            </div>

        </section>

        <section className={styles.trophiesSection}>

            <h2 className={styles.sectionTitle}>
                TROPHÄEN & ERFOLGE
            </h2>

            <div className={styles.trophiesGrid}>

                {renderTrophy(
                    "STANLEY CUP",
                    "Sieger des Stanley Cups",
                    stanleyCup,
                )}

                {renderTrophy(
                    "PRESIDENTS TROPHY",
                    "Team mit den meisten Punkten der Hauptrunde",
                    presidentsTrophy,
                )}

                {renderTrophy(
                    "CLARENCE S. CAMPBELL TROPHY",
                    "Sieger der Western Conference",
                    campbellTrophy,
                )}

                {renderTrophy(
                    "PRINCE OF WALES TROPHY",
                    "Sieger der Eastern Conference",
                    walesTrophy,
                )}

            </div>

        </section>

        <section className={styles.playoffHistorySection}>

            <h2 className={styles.sectionTitle}>
                PLAYOFF-HISTORIE
            </h2>

            <div className={styles.historyList}>

                {playoffHistory.map((season) => (
                    <div
                        key={season.year}
                        className={
                            season.champion
                                ? styles.historyRowChampion
                                : styles.historyRow
                        }
                    >

                        <span className={styles.historyYear}>
                            {season.year}
                        </span>

                        <span className={styles.historyResult}>
                            {season.champion && "🏆 "}
                            {season.result}
                        </span>

                    </div>
                ))}

            </div>

        </section>

        <div className={styles.backButtonWrapper}>

            <Link
                href="/community"
                className={styles.backButton}
            >
                ← ZURÜCK ZUR COMMUNITY
            </Link>

        </div>

    </main>
);

}