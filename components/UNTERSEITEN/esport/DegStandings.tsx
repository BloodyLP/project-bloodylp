/* ============================================ */
/*                                              */
/* BloodyLP                                     */
/*                                              */
/* ============================================ */
/*                                              */
/* Project:                                     */
/*                                              */
/* BloodyLP Website                             */
/*                                              */
/* File:                                        */
/*                                              */
/* components/UNTERSEITEN/esport/               */
/* DegStandings.tsx                             */
/*                                              */
/* Description:                                 */
/*                                              */
/* DEG eSports Tabellenübersicht.               */
/*                                              */
/* ============================================ */


import Image from "next/image";

import styles from "./DegStandings.module.css";

import {
    degStandings,
    degStandingsLeague,
} from "@/components/live/data/esport/deg-standings";


/* ============================================ */
/* COMPONENT                                    */
/* ============================================ */

export default function DegStandings() {

    return (

        <section
            className={styles.standings}
        >

            {/* ========================================= */}
            {/* HEADER                                    */}
            {/* ========================================= */}

            <div
                className={styles.header}
            >

                <div
                    className={styles.headerLeague}
                >

                    <div
                        className={styles.leagueLogo}
                    >

                        <Image
                            src={degStandingsLeague.logo}
                            alt={`${degStandingsLeague.name} Logo`}
                            width={80}
                            height={80}
                            className={styles.leagueLogoImage}
                        />

                    </div>


                    <div
                        className={styles.headerContent}
                    >

                        <p
                            className={styles.eyebrow}
                        >

                            DEG ESPORTS

                        </p>


                        <h2
                            className={styles.title}
                        >

                            TABELLE

                        </h2>


                        <p
                            className={styles.leagueName}
                        >

                            {degStandingsLeague.name}

                        </p>


                        <div
                            className={styles.leagueMeta}
                        >

                            <span>

                                {degStandingsLeague.group}

                            </span>


                            <span
                                className={styles.metaDivider}
                            >

                                •

                            </span>


                            <span>

                                SAISON {degStandingsLeague.season}

                            </span>

                        </div>

                    </div>

                </div>


                <div
                    className={styles.headerBadge}
                >

                    AKTUELLE TABELLE

                </div>

            </div>


            {/* ========================================= */}
            {/* TABLE WRAPPER                             */}
            {/* ========================================= */}

            <div
                className={styles.tableWrapper}
            >

                {/* ===================================== */}
                {/* TABLE HEADER                          */}
                {/* ===================================== */}

                <div
                    className={styles.tableHeader}
                >

                    <div
                        className={styles.positionHeader}
                    >

                        #

                    </div>


                    <div
                        className={styles.teamHeader}
                    >

                        TEAM

                    </div>


                    <div
                        className={styles.gamesHeader}
                    >

                        SP

                    </div>


                    <div
                        className={styles.winsHeader}
                    >

                        S

                    </div>


                    <div
                        className={styles.overtimeWinsHeader}
                    >

                        OTS

                    </div>


                    <div
                        className={styles.overtimeLossesHeader}
                    >

                        OTN

                    </div>


                    <div
                        className={styles.lossesHeader}
                    >

                        N

                    </div>


                    <div
                        className={styles.goalsForHeader}
                    >

                        T+

                    </div>


                    <div
                        className={styles.goalsAgainstHeader}
                    >

                        T-

                    </div>


                    <div
                        className={styles.pointsHeader}
                    >

                        PKT

                    </div>

                </div>


                {/* ===================================== */}
                {/* TABLE BODY                            */}
                {/* ===================================== */}

                <div
                    className={styles.tableBody}
                >

                    {degStandings.map(

                        (
                            standing
                        ) => (

                            <div
                                key={standing.team}
                                className={`${styles.tableRow} ${
                                    standing.isDeg
                                        ? styles.degRow
                                        : ""
                                }`}
                            >

                                {/* POSITION */}

                                <div
                                    className={styles.positionCell}
                                >

                                    {standing.position}

                                </div>


                                {/* TEAM */}

                                <div
                                    className={styles.teamCell}
                                >

                                    <Image
                                        src={standing.logo}
                                        alt={`${standing.team} Logo`}
                                        width={46}
                                        height={46}
                                        className={styles.teamLogo}
                                    />


                                    <span
                                        className={styles.teamName}
                                    >

                                        {standing.team}

                                    </span>

                                </div>


                                {/* GAMES */}

                                <div
                                    className={styles.statCell}
                                >

                                    {standing.gamesPlayed}

                                </div>


                                {/* WINS */}

                                <div
                                    className={styles.statCell}
                                >

                                    {standing.wins}

                                </div>


                                {/* OVERTIME WINS */}

                                <div
                                    className={styles.statCell}
                                >

                                    {standing.overtimeWins}

                                </div>


                                {/* OVERTIME LOSSES */}

                                <div
                                    className={styles.statCell}
                                >

                                    {standing.overtimeLosses}

                                </div>


                                {/* LOSSES */}

                                <div
                                    className={styles.statCell}
                                >

                                    {standing.losses}

                                </div>


                                {/* GOALS FOR */}

                                <div
                                    className={styles.statCell}
                                >

                                    {standing.goalsFor}

                                </div>


                                {/* GOALS AGAINST */}

                                <div
                                    className={styles.statCell}
                                >

                                    {standing.goalsAgainst}

                                </div>


                                {/* POINTS */}

                                <div
                                    className={styles.pointsCell}
                                >

                                    {standing.points}

                                </div>

                            </div>

                        )

                    )}

                </div>

            </div>


            {/* ========================================= */}
            {/* FOOTER                                    */}
            {/* ========================================= */}

            <div
                className={styles.footer}
            >

                <span>

                    SP = SPIELE

                </span>


                <span>

                    S = SIEGE

                </span>


                <span>

                    OTS = OVERTIME-SIEGE

                </span>


                <span>

                    OTN = OVERTIME-NIEDERLAGEN

                </span>


                <span>

                    N = NIEDERLAGEN

                </span>


                <span>

                    T+ = TORE

                </span>


                <span>

                    T- = GEGENTORE

                </span>


                <span>

                    PKT = PUNKTE

                </span>

            </div>

        </section>

    );

}