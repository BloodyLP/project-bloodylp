/* ============================================ */
/* BloodyArmy                                   */
/* ============================================ */
/* Project: BloodyLP Website                    */
/* File: DegMatches.tsx                         */
/* Description: DEG eSports Matches             */
/* ============================================ */

"use client";

import Image from "next/image";

import styles from "./DegMatches.module.css";

import {
    degTeam,
    upcomingMatch,
    degMatches,
} from "../../live/data/esport/deg-matches";


/* ============================================ */
/* TYPES                                         */
/* ============================================ */

type MatchResult =
    | "win"
    | "loss"
    | "draw";


/* ============================================ */
/* HELPERS                                       */
/* ============================================ */

function getMatchResult(
    degScore: number | null,
    opponentScore: number | null
): MatchResult | null {

    if (
        degScore === null ||
        opponentScore === null
    ) {
        return null;
    }

    if (degScore > opponentScore) {
        return "win";
    }

    if (degScore < opponentScore) {
        return "loss";
    }

    return "draw";

}


function getResultLabel(
    result: MatchResult | null
) {

    if (result === "win") {
        return "SIEG";
    }

    if (result === "loss") {
        return "NIEDERLAGE";
    }

    if (result === "draw") {
        return "UNENTSCHIEDEN";
    }

    return "";

}


/* ============================================ */
/* COMPONENT                                     */
/* ============================================ */

export default function DegMatches() {


    /* ======================================== */
    /* STATISTICS                               */
    /* ======================================== */

    const completedMatches =
        degMatches.filter(
            (match) =>
                match.degScore !== null &&
                match.opponentScore !== null
        );


    const wins =
        completedMatches.filter(
            (match) =>
                match.degScore !== null &&
                match.opponentScore !== null &&
                match.degScore > match.opponentScore
        ).length;


    const losses =
        completedMatches.filter(
            (match) =>
                match.degScore !== null &&
                match.opponentScore !== null &&
                match.degScore < match.opponentScore
        ).length;


    const overtimeLosses =
        completedMatches.filter(
            (match) =>
                match.overtime === true &&
                match.degScore !== null &&
                match.opponentScore !== null &&
                match.degScore < match.opponentScore
        ).length;


    const goalsFor =
        completedMatches.reduce(
            (total, match) =>
                total +
                (match.degScore ?? 0),
            0
        );


    const goalsAgainst =
        completedMatches.reduce(
            (total, match) =>
                total +
                (match.opponentScore ?? 0),
            0
        );


    return (

        <section
            className={
                styles.matchesSection
            }
        >

            <div
                className={
                    styles.matchesInner
                }
            >


                {/* ==================================== */}
                {/* HEADER                                */}
                {/* ==================================== */}

                <div
                    className={
                        styles.sectionHeader
                    }
                >


                    {/* WATERMARK */}

                    <div
                        className={
                            styles.headerWatermark
                        }
                    >

                        <Image
                            src={
                                degTeam.logo
                            }
                            alt=""
                            width={600}
                            height={600}
                            className={
                                styles.headerWatermarkLogo
                            }
                            aria-hidden="true"
                        />

                    </div>


                    {/* CONTENT */}

                    <div
                        className={
                            styles.headerContent
                        }
                    >


                        {/* TEXT */}

                        <div
                            className={
                                styles.headerText
                            }
                        >

                            <span
                                className={
                                    styles.eyebrow
                                }
                            >
                                DEG ESPORT
                            </span>


                            <h2>
                                SPIELE & ERGEBNISSE
                            </h2>


                            <p
                                className={
                                    styles.sectionDescription
                                }
                            >
                                Alle aktuellen Spiele,
                                Ergebnisse und Statistiken
                                der DEG eSports.
                            </p>

                        </div>


                        {/* VISIBLE LOGO */}

                        <div
                            className={
                                styles.headerLogoArea
                            }
                        >

                            <Image
                                src={
                                    degTeam.logo
                                }
                                alt="DEG eSports"
                                width={260}
                                height={260}
                                className={
                                    styles.headerLogo
                                }
                                priority
                            />

                        </div>


                    </div>


                    <div
                        className={
                            styles.headerLine
                        }
                    />

                </div>


                {/* ==================================== */}
                {/* NEXT MATCH                            */}
                {/* ==================================== */}

                <div
                    className={
                        styles.nextMatchArea
                    }
                >

                    <div
                        className={
                            styles.sectionHeading
                        }
                    >

                        <span
                            className={
                                styles.sectionLabel
                            }
                        >
                            NÄCHSTES SPIEL
                        </span>


                        <span
                            className={
                                styles.sectionHint
                            }
                        >
                            MATCHDAY
                        </span>

                    </div>


                    <div
                        className={
                            styles.nextMatchCard
                        }
                    >


                        <div
                            className={
                                styles.leagueBadge
                            }
                        >
                            {upcomingMatch.league}
                        </div>


                        <div
                            className={
                                styles.matchTeams
                            }
                        >


                            {/* DEG */}

                            <div
                                className={
                                    styles.nextTeam
                                }
                            >

                                <div
                                    className={
                                        styles.teamLogoFrame
                                    }
                                >

                                    <Image
                                        src={
                                            degTeam.logo
                                        }
                                        alt={
                                            degTeam.name
                                        }
                                        width={150}
                                        height={130}
                                        className={
                                            styles.nextLogo
                                        }
                                    />

                                </div>


                                <span
                                    className={
                                        styles.nextTeamName
                                    }
                                >
                                    {degTeam.name}
                                </span>

                            </div>


                            {/* VS */}

                            <div
                                className={
                                    styles.vsBlock
                                }
                            >

                                <div
                                    className={
                                        styles.vsCircle
                                    }
                                >
                                    <span>
                                        VS
                                    </span>
                                </div>


                                <span
                                    className={
                                        styles.vsSubtext
                                    }
                                >
                                    MATCHDAY
                                </span>

                            </div>


                            {/* OPPONENT */}

                            <div
                                className={
                                    styles.nextTeam
                                }
                            >

                                <div
                                    className={
                                        styles.teamLogoFrame
                                    }
                                >

                                    {upcomingMatch.opponentLogo ? (

                                        <Image
                                            src={
                                                upcomingMatch.opponentLogo
                                            }
                                            alt={
                                                upcomingMatch.opponent
                                            }
                                            width={150}
                                            height={130}
                                            className={
                                                styles.nextLogo
                                            }
                                        />

                                    ) : (

                                        <span
                                            className={
                                                styles.opponentPlaceholder
                                            }
                                        >
                                            ?
                                        </span>

                                    )}

                                </div>


                                <span
                                    className={
                                        styles.nextTeamName
                                    }
                                >
                                    {upcomingMatch.opponent}
                                </span>

                            </div>


                        </div>


                        <div
                            className={
                                styles.nextMatchFooter
                            }
                        >

                            <div
                                className={
                                    styles.matchInfo
                                }
                            >

                                <span>
                                    NÄCHSTES SPIEL
                                </span>


                                <strong>
                                    {upcomingMatch.date}
                                </strong>

                            </div>


                            <a
                                href="https://www.twitch.tv/degesports"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    styles.twitchButton
                                }
                            >

                                <span
                                    className={
                                        styles.liveDot
                                    }
                                />

                                LIVE AUF TWITCH

                                <span
                                    className={
                                        styles.twitchArrow
                                    }
                                >
                                    ↗
                                </span>

                            </a>

                        </div>


                    </div>

                </div>


                {/* ==================================== */}
                {/* STATISTICS                            */}
                {/* ==================================== */}

                <div
                    className={
                        styles.statisticsArea
                    }
                >

                    <div
                        className={
                            styles.sectionHeading
                        }
                    >

                        <span
                            className={
                                styles.sectionLabel
                            }
                        >
                            SAISONÜBERSICHT
                        </span>


                        <span
                            className={
                                styles.sectionHint
                            }
                        >
                            DEG ESPORT
                        </span>

                    </div>


                    <div
                        className={
                            styles.statsGrid
                        }
                    >


                        <div
                            className={
                                styles.statCard
                            }
                        >

                            <strong>
                                {completedMatches.length}
                            </strong>

                            <span>
                                SPIELE
                            </span>

                        </div>


                        <div
                            className={
                                styles.statCard
                            }
                        >

                            <strong>
                                {wins}
                            </strong>

                            <span>
                                SIEGE
                            </span>

                        </div>


                        <div
                            className={
                                styles.statCard
                            }
                        >

                            <strong>
                                {losses}
                            </strong>

                            <span>
                                NIEDERLAGEN
                            </span>

                        </div>


                        <div
                            className={
                                styles.statCard
                            }
                        >

                            <strong>
                                {goalsFor}:{goalsAgainst}
                            </strong>

                            <span>
                                TORE
                            </span>

                        </div>


                        {overtimeLosses > 0 && (

                            <div
                                className={
                                    styles.statCard
                                }
                            >

                                <strong>
                                    {overtimeLosses}
                                </strong>

                                <span>
                                    OVERTIME NIEDERLAGEN
                                </span>

                            </div>

                        )}


                    </div>

                </div>


                {/* ==================================== */}
                {/* RESULTS                               */}
                {/* ==================================== */}

                <div
                    className={
                        styles.resultsArea
                    }
                >

                    <div
                        className={
                            styles.sectionHeading
                        }
                    >

                        <span
                            className={
                                styles.sectionLabel
                            }
                        >
                            LETZTE ERGEBNISSE
                        </span>


                        <span
                            className={
                                styles.sectionHint
                            }
                        >
                            ECL LITE
                        </span>

                    </div>


                    <div
                        className={
                            styles.resultsGrid
                        }
                    >

                        {degMatches.map(
                            (match, index) => {

                                const result =
                                    getMatchResult(
                                        match.degScore,
                                        match.opponentScore
                                    );


                                const degWon =
                                    result === "win";


                                const opponentWon =
                                    result === "loss";


                                const degFirst =
                                    match.home;


                                const firstTeamName =
                                    degFirst
                                        ? degTeam.name
                                        : match.opponent;


                                const secondTeamName =
                                    degFirst
                                        ? match.opponent
                                        : degTeam.name;


                                const firstTeamLogo =
                                    degFirst
                                        ? degTeam.logo
                                        : match.opponentLogo;


                                const secondTeamLogo =
                                    degFirst
                                        ? match.opponentLogo
                                        : degTeam.logo;


                                const firstScore =
                                    degFirst
                                        ? match.degScore
                                        : match.opponentScore;


                                const secondScore =
                                    degFirst
                                        ? match.opponentScore
                                        : match.degScore;


                                const firstWon =
                                    degFirst
                                        ? degWon
                                        : opponentWon;


                                const secondWon =
                                    degFirst
                                        ? opponentWon
                                        : degWon;


                                return (

                                    <article
                                        key={
                                            `${match.date}-${index}`
                                        }
                                        className={
                                            `${styles.resultCard} ` +
                                            `${
                                                result === "win"
                                                    ? styles.resultWin
                                                    : result === "loss"
                                                        ? styles.resultLoss
                                                        : ""
                                            }`
                                        }
                                    >


                                        <div
                                            className={
                                                styles.resultTop
                                            }
                                        >

                                            <span>
                                                {match.league}
                                            </span>


                                            <span>
                                                {match.date}
                                            </span>

                                        </div>


                                        {result && (

                                            <div
                                                className={
                                                    `${styles.resultStatus} ` +
                                                    `${
                                                        result === "win"
                                                            ? styles.statusWin
                                                            : result === "loss"
                                                                ? styles.statusLoss
                                                                : styles.statusDraw
                                                    }`
                                                }
                                            >
                                                {getResultLabel(
                                                    result
                                                )}
                                            </div>

                                        )}


                                        <div
                                            className={
                                                styles.resultMatch
                                            }
                                        >


                                            <div
                                                className={
                                                    styles.resultTeam
                                                }
                                            >

                                                <div
                                                    className={
                                                        styles.resultLogoFrame
                                                    }
                                                >

                                                    <Image
                                                        src={
                                                            firstTeamLogo
                                                        }
                                                        alt={
                                                            firstTeamName
                                                        }
                                                        width={70}
                                                        height={70}
                                                        className={
                                                            styles.resultLogo
                                                        }
                                                    />

                                                </div>


                                                <span>
                                                    {firstTeamName}
                                                </span>

                                            </div>


                                            <div
                                                className={
                                                    styles.scoreBlock
                                                }
                                            >

                                                <strong
                                                    className={
                                                        firstWon
                                                            ? styles.winnerScore
                                                            : ""
                                                    }
                                                >
                                                    {firstScore}
                                                </strong>


                                                <span>
                                                    :
                                                </span>


                                                <strong
                                                    className={
                                                        secondWon
                                                            ? styles.winnerScore
                                                            : ""
                                                    }
                                                >
                                                    {secondScore}
                                                </strong>


                                                {match.overtime && (

                                                    <small>
                                                        OT
                                                    </small>

                                                )}

                                            </div>


                                            <div
                                                className={
                                                    styles.resultTeam
                                                }
                                            >

                                                <div
                                                    className={
                                                        styles.resultLogoFrame
                                                    }
                                                >

                                                    <Image
                                                        src={
                                                            secondTeamLogo
                                                        }
                                                        alt={
                                                            secondTeamName
                                                        }
                                                        width={70}
                                                        height={70}
                                                        className={
                                                            styles.resultLogo
                                                        }
                                                    />

                                                </div>


                                                <span>
                                                    {secondTeamName}
                                                </span>

                                            </div>


                                        </div>


                                        <div
                                            className={
                                                styles.resultFooter
                                            }
                                        >
                                            {match.home
                                                ? "HEIMSPIEL"
                                                : "AUSWÄRTSSPIEL"
                                            }
                                        </div>


                                    </article>

                                );

                            }
                        )}

                    </div>

                </div>


            </div>

        </section>

    );

}