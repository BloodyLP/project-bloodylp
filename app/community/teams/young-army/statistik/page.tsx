import Link from "next/link";
import styles from "./page.module.css";

type RecordEntry = {
year: string;
player: string;
value: string;
};

type TrophyEntry = {
year: string;
winner: string;
youngArmy?: boolean;
};

const regularSeasonStats = [
{ icon: "🏒", label: "Spiele", value: "530" },
{ icon: "📈", label: "Punkte", value: "656" },
{ icon: "🟢", label: "Siege", value: "303" },
{ icon: "🔴", label: "Niederlagen", value: "183" },
{ icon: "🧮", label: "Siege %", value: "57,2%" },
{ icon: "🥅", label: "Tore", value: "1739" },
{ icon: "🚫", label: "Gegentore", value: "1518" },
];

const playoffStats = [
{ icon: "🏒", label: "Spiele", value: "117" },
{ icon: "🟢", label: "Siege", value: "76" },
{ icon: "🔴", label: "Niederlagen", value: "41" },
{ icon: "🧮", label: "Siege %", value: "64,9%" },
{ icon: "🥅", label: "Tore", value: "379" },
{ icon: "🚫", label: "Gegentore", value: "266" },
];

const regularSeasonRecords = [
{
title: "Topscorer",
records: [
{ year: "2019", player: "Tonska", value: "57" },
{ year: "2020", player: "Mäusefinger", value: "44" },
{ year: "2021", player: "SinusPerfan", value: "58" },
{ year: "2022", player: "SinusPerfan", value: "68" },
{ year: "2023", player: "ItzPhilip", value: "63" },
{ year: "2024", player: "xXNicoXx", value: "75" },
{ year: "2025", player: "AnnihilatorLP", value: "53" },
{ year: "2026", player: "AndreasKECBu", value: "46" },
],
},
{
title: "Meiste Tore",
records: [
{ year: "2019", player: "Tonska", value: "24" },
{ year: "2020", player: "Mäusefinger / Katzenpfote", value: "je 20" },
{ year: "2021", player: "Devilsbear", value: "29" },
{ year: "2022", player: "SinusPerfan", value: "40" },
{ year: "2023", player: "AndreasKECbu", value: "37" },
{ year: "2024", player: "xXNicoXx", value: "33" },
{ year: "2025", player: "David211197", value: "29" },
{ year: "2026", player: "ZentralratderSchneemänner", value: "22" },
],
},
{
title: "Meiste Assists",
records: [
{ year: "2019", player: "Tonska / Roggenbach", value: "33" },
{ year: "2020", player: "Mäusefinger", value: "24" },
{ year: "2021", player: "Sebbiii", value: "35" },
{ year: "2022", player: "Sebbiii", value: "35" },
{ year: "2023", player: "Hockeyboy", value: "38" },
{ year: "2024", player: "xXNicoXx", value: "42" },
{ year: "2025", player: "Stitch", value: "42" },
{ year: "2026", player: "Phrasenschwein", value: "34" },
],
},
{
title: "Meiste Strafminuten",
records: [
{ year: "2019", player: "P. Samuelsson", value: "34" },
{ year: "2020", player: "MTMachine", value: "35" },
{ year: "2021", player: "KleinerHans", value: "32" },
{ year: "2022", player: "FlorianH", value: "33" },
{ year: "2023", player: "xXNicoXx / FlorianH", value: "25" },
{ year: "2024", player: "Tonsak", value: "32" },
{ year: "2025", player: "Phrasenschwein", value: "15" },
{ year: "2026", player: "AndreasKECBu / Phrasenschwein / Sackzefix", value: "jeweils 6" },
],
},
{
title: "Beste +/- Bilanz",
records: [
{ year: "2019", player: "G. Hoffmann", value: "23" },
{ year: "2020", player: "Camoranesi", value: "25" },
{ year: "2021", player: "Sebbiii", value: "34" },
{ year: "2022", player: "Stitch", value: "19" },
{ year: "2023", player: "EishockeyLive", value: "33" },
{ year: "2024", player: "Schmiedli68", value: "26" },
{ year: "2025", player: "LostEdyvil", value: "19" },
{ year: "2026", player: "Schmiedli", value: "37" },
],
},
];

const playoffRecords = [
{
title: "Topscorer",
records: [
{ year: "2019", player: "Schlumpf", value: "20" },
{ year: "2020", player: "TimmyZockt", value: "14" },
{ year: "2021", player: "Devilsbear", value: "22" },
{ year: "2022", player: "-", value: "-" },
{ year: "2023", player: "FlorianH", value: "18" },
{ year: "2024", player: "xXNicoXx / Hockeyboy", value: "je 10" },
{ year: "2025", player: "LostEdyvil", value: "15" },
{ year: "2026", player: "AndreasKECBu", value: "16" },
],
},
{
title: "Meiste Tore",
records: [
{ year: "2019", player: "Schlumpf", value: "9" },
{ year: "2020", player: "Whitemuffin", value: "8" },
{ year: "2021", player: "Devilsbear", value: "14" },
{ year: "2022", player: "-", value: "-" },
{ year: "2023", player: "xXNicoXx", value: "12" },
{ year: "2024", player: "Hanns Scheinwerfer", value: "5" },
{ year: "2025", player: "Katzenpfote", value: "9" },
{ year: "2026", player: "AndreasKECBu", value: "8" },
],
},
{
title: "Meiste Assists",
records: [
{ year: "2019", player: "Schlumpf / NichtDavid / Semator", value: "11" },
{ year: "2020", player: "TimmyZockt", value: "9" },
{ year: "2021", player: "SinusPerfan", value: "11" },
{ year: "2022", player: "-", value: "-" },
{ year: "2023", player: "FlorianH", value: "13" },
{ year: "2024", player: "Hockeyboy", value: "8" },
{ year: "2025", player: "Phrasenschwein", value: "10" },
{ year: "2026", player: "Sackzefix", value: "11" },
],
},
{
title: "Meiste Strafminuten",
records: [
{ year: "2019", player: "KantrosOnTwitch", value: "17" },
{ year: "2020", player: "MTMaschine", value: "17" },
{ year: "2021", player: "Mäusefinger", value: "10" },
{ year: "2022", player: "-", value: "-" },
{ year: "2023", player: "Sebbiii", value: "18" },
{ year: "2024", player: "Killsfam / EurasischerWolf", value: "je 6" },
{ year: "2025", player: "FlorianH", value: "7" },
{ year: "2026", player: "Sackzefix", value: "2" },
],
},
{
title: "Beste +/- Bilanz",
records: [
{ year: "2019", player: "Schlumpf", value: "21" },
{ year: "2020", player: "FabianHaken / Mäusefinger / SinusPerfan", value: "je 6" },
{ year: "2021", player: "Schmiedli68", value: "14" },
{ year: "2022", player: "-", value: "-" },
{ year: "2023", player: "Atriel / Sebbiii", value: "je 12" },
{ year: "2024", player: "Hockeyboy", value: "11" },
{ year: "2025", player: "Sackzefix", value: "9" },
{ year: "2026", player: "EishockeyLive", value: "15" },
],
},
];

const trophies = [
{
icon: "🏆",
title: "Calder Cup",
description: "Sieger der American Hockey League",
winners: [
{ year: "2019", winner: "Ontario Young Army" , youngArmy: true },
{ year: "2020", winner: "Binghamton Devils" },
{ year: "2021", winner: "Ontario Young Army", youngArmy: true },
{ year: "2022", winner: "Grand Rapids Griffins" },
{ year: "2023", winner: "Charlotte Checkers" },
{ year: "2024", winner: "Grand Rapids Griffins" },
{ year: "2025", winner: "Ontario Young Army", youngArmy: true },
{ year: "2026", winner: "Ontario Young Army", youngArmy: true },
],
},
{
icon: "⭐",
title: "Macgregor Kilpatrick Trophy",
description: "Punktbeste Mannschaft der Saison",
winners: [
{ year: "2019", winner: "Tucson Roadrunners" },
{ year: "2020", winner: "Providence Bruins" },
{ year: "2021", winner: "Grand Rapids Griffins" },
{ year: "2022", winner: "Texas Stars" },
{ year: "2023", winner: "Belleville Senators" },
{ year: "2024", winner: "Henderson Silver Knights" },
{ year: "2025", winner: "San Jose Barracuda" },
{ year: "2026", winner: "Wilkes-Barre/Scranton Penguins" },
],
},

{
icon: "🏆",
title: "Richard F. Canning Trophy",
description: "Gewinner der Eastern Conference",
winners: [
{ year: "2019", winner: "Ontario Young Army", youngArmy: true },
{ year: "2020", winner: "Binghamton Devils" },
{ year: "2021", winner: "Utica Comets" },
{ year: "2022", winner: "Toronto Marlies" },
{ year: "2023", winner: "Charlotte Checkers" },
{ year: "2024", winner: "Cleveland Monsters" },
{ year: "2025", winner: "Syracuse Crunch" },
],
},
{
icon: "🏆",
title: "Robert W. Clarke Trophy",
description: "Gewinner der Western Conference",
winners: [
{ year: "2019", winner: "San Diego Gulls" },
{ year: "2020", winner: "Ontario Young Army", youngArmy: true },
{ year: "2021", winner: "Ontario Young Army", youngArmy: true },
{ year: "2022", winner: "Grand Rapids Griffins" },
{ year: "2023", winner: "Coachella Valley Firebirds" },
{ year: "2024", winner: "Grand Rapids Griffins" },
{ year: "2025", winner: "Ontario Young Army", youngArmy: true },
],
},
];

const playoffHistory = [
{
year: "2019",
result: "Calder Cup Sieger gegen die San Diego Gulls (Serie: 4:2)",
champion: true,
},
{
year: "2020",
result: "Finals gegen die Binghamton Devils (Serie: 2:4)",
champion: false,
},
{
year: "2021",
result: "Calder Cup Sieger gegen die Utica Comets (Serie: 4:2)",
champion: true,
},
{
year: "2022",
result: "Playoffs nicht erreicht",
champion: false,
},
{
year: "2023",
result: "Finals gegen die Charlotte Checkers (Serie: 0:4)",
champion: false,
},
{
year: "2024",
result: "Runde 2 gegen die Coachella Valley Firebirds (Serie: 2:3)",
champion: false,
},
{
year: "2025",
result: "Calder Cup Sieger gegen die Syracuse Crunch (Serie: 4:0)",
champion: true,
},
{
year: "2026",
result: "Calder Cup Sieger gegen die Wilkes-Barre/Scranton Penguins (Serie: 4:1)",
champion: true,
},
];

function RecordCard({
title,
records,
}: {
title: string;
records: RecordEntry[];
}) {
return (
<div className={styles.recordCard}>
<h3 className={styles.recordTitle}>{title}</h3>

        <div className={styles.recordList}>
            {records.map((record) => (
                <div
                    className={styles.recordRow}
                    key={`${title}-${record.year}`}
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

}

function TrophyCard({
icon,
title,
description,
winners,
}: {
icon: string;
title: string;
description: string;
winners: TrophyEntry[];
}) {
return (
<div className={styles.trophyCard}>
<div className={styles.trophyIcon}>{icon}</div>

        <h3 className={styles.trophyTitle}>{title}</h3>

        <p className={styles.trophyDescription}>
            {description}
        </p>

        <div className={styles.trophyList}>
            {winners.map((winner) => (
                <div
                    className={styles.trophyRow}
                    key={`${title}-${winner.year}`}
                >
                    <span className={styles.trophyYear}>
                        {winner.year}
                    </span>

                    <span
                        className={
                            winner.youngArmy
                                ? styles.youngArmyWinner
                                : styles.trophyWinner
                        }
                    >
                        {winner.winner}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

}

export default function YoungArmyStatistikPage() {
return (
<main className={styles.page}>
<header className={styles.header}>
<span className={styles.eyebrow}>
Young Army
</span>

            <h1 className={styles.title}>
                Statistik
            </h1>

            <p className={styles.subtitle}>
                Die Geschichte der Young Army in Zahlen
            </p>
        </header>

        <section className={styles.overviewSection}>
            <h2 className={styles.sectionTitle}>
                Hauptrunde
            </h2>

            <div className={styles.overviewGrid}>
                {regularSeasonStats.map((stat) => (
                    <div
                        className={styles.statCard}
                        key={stat.label}
                    >
                        <div className={styles.statIcon}>
                            {stat.icon}
                        </div>

                        <div className={styles.statLabel}>
                            {stat.label}
                        </div>

                        <div className={styles.statValue}>
                            {stat.value}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className={styles.overviewSection}>
            <h2 className={styles.sectionTitle}>
                Playoffs
            </h2>

            <div className={styles.overviewGrid}>
                {playoffStats.map((stat) => (
                    <div
                        className={styles.statCard}
                        key={stat.label}
                    >
                        <div className={styles.statIcon}>
                            {stat.icon}
                        </div>

                        <div className={styles.statLabel}>
                            {stat.label}
                        </div>

                        <div className={styles.statValue}>
                            {stat.value}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <section className={styles.recordsSection}>
            <h2 className={styles.sectionTitle}>
                Hauptrunden - Jahresrekorde
            </h2>

            <div className={styles.recordsGrid}>
                {regularSeasonRecords.map((record) => (
                    <RecordCard
                        key={record.title}
                        title={record.title}
                        records={record.records}
                    />
                ))}
            </div>
        </section>

        <section className={styles.recordsSection}>
            <h2 className={styles.sectionTitle}>
                Playoffs-Jahresrekorde
            </h2>

            <div className={styles.recordsGrid}>
                {playoffRecords.map((record) => (
                    <RecordCard
                        key={record.title}
                        title={record.title}
                        records={record.records}
                    />
                ))}
            </div>
        </section>

        <section className={styles.trophiesSection}>
            <h2 className={styles.sectionTitle}>
                Trophäen und Erfolge
            </h2>

            <div className={styles.trophiesGrid}>
                {trophies.map((trophy) => (
                    <TrophyCard
                        key={trophy.title}
                        icon={trophy.icon}
                        title={trophy.title}
                        description={trophy.description}
                        winners={trophy.winners}
                    />
                ))}
            </div>
        </section>

        <section className={styles.playoffHistorySection}>
            <h2 className={styles.sectionTitle}>
                Calder Cup Historie
            </h2>

            <div className={styles.historyList}>
                {playoffHistory.map((entry) => (
                    <div
                        key={entry.year}
                        className={
                            entry.champion
                                ? styles.historyRowChampion
                                : styles.historyRow
                        }
                    >
                        <span className={styles.historyYear}>
                            {entry.year}
                        </span>

                        <span className={styles.historyResult}>
                            {entry.champion
                                ? `🏆 ${entry.result}`
                                : entry.result}
                        </span>
                    </div>
                ))}
            </div>
        </section>

        <div className={styles.backButtonWrapper}>
            <Link
                href="/community/"
                className={styles.backButton}
            >
                Zurück zur Community
            </Link>
        </div>
    </main>
);

}
