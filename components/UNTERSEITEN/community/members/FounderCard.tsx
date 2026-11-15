
"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./FounderCard.module.css";
import MemberCard from "./MemberCard";

import { members } from "./data";

import { mapMemberToCard } from "./memberMapper";

import {
    BLOODY_ARMY_LINEUP,
    YOUNG_ARMY_LINEUP,
    type TeamLineup,
} from "./data/teamLineups";

type TeamLeader = {
    memberId: string;
    role: "A" | "C";
};

export default function FounderCard() {

    // ============================================
    // FOUNDER
    // ============================================

    const founder = members.find(
        member => member.prestige === 10
    );

    // ============================================
    // SPIELERZAHL AUS TEAMLINEUPS BERECHNEN
    // ============================================

    const getLineupMemberIds = (
        lineup: TeamLineup
    ): string[] => {

        const forwardIds = [
            lineup.forwards.line1.lw,
            lineup.forwards.line1.c,
            lineup.forwards.line1.rw,

            lineup.forwards.line2.lw,
            lineup.forwards.line2.c,
            lineup.forwards.line2.rw,

            lineup.forwards.line3.lw,
            lineup.forwards.line3.c,
            lineup.forwards.line3.rw,

            lineup.forwards.line4.lw,
            lineup.forwards.line4.c,
            lineup.forwards.line4.rw,
        ];

        const defenseIds = [
            lineup.defense.pair1.ld,
            lineup.defense.pair1.rd,

            lineup.defense.pair2.ld,
            lineup.defense.pair2.rd,

            lineup.defense.pair3.ld,
            lineup.defense.pair3.rd,
        ];

        const goalieIds = [
            lineup.goalies.starter,
            lineup.goalies.backup,
        ];

        const reserveIds = lineup.reserves.map(
            player => player.memberId
        );

        return [
            ...forwardIds,
            ...defenseIds,
            ...goalieIds,
            ...reserveIds,
        ].filter(
            memberId => memberId.trim() !== ""
        );
    };

    const getLineupCount = (
        lineup: TeamLineup
    ): number => {

        const memberIds = getLineupMemberIds(lineup);

        return new Set(memberIds).size;
    };

    // ============================================
    // SPIELERZAHLEN
    // ============================================

    const bloodyArmyCount = getLineupCount(
        BLOODY_ARMY_LINEUP
    );

    const youngArmyCount = getLineupCount(
        YOUNG_ARMY_LINEUP
    );

    // ============================================
    // TEAMLEITUNG AUS TEAMLINEUPS
    // ============================================

const getTeamLeaders = (
    lineup: TeamLineup
): TeamLeader[] => {

    const leadership = lineup.leadership;

    const leaders: TeamLeader[] = [
        {
            memberId: leadership.captain,
            role: "C",
        },
        {
            memberId: leadership.assistantLeft,
            role: "A",
        },
        {
            memberId: leadership.assistantRight,
            role: "A",
        },
    ];

    return leaders.filter(
        leader => leader.memberId.trim() !== ""
    );
};

    const bloodyArmyLeaders = getTeamLeaders(
        BLOODY_ARMY_LINEUP
    );

    const youngArmyLeaders = getTeamLeaders(
        YOUNG_ARMY_LINEUP
    );

    // ============================================
    // MEMBER ÜBER ID FINDEN
    // ============================================

    const getLeaderMember = (
        memberId: string
    ) => {

        return members.find(
            member => member.id === memberId
        ) ?? null;

    };

    // ============================================
    // FOUNDER ABSICHERN
    // ============================================

    if (!founder) {
        return null;
    }

    // ============================================
    // TEAMLEITUNG RENDERN
    // ============================================

    const renderTeamLeaders = (
        leaders: TeamLeader[]
    ) => {

        if (leaders.length === 0) {
            return null;
        }

        return (
            <div className={styles.commandInfo}>

                <span className={styles.commandInfoLabel}>
                    TEAM CAPTAINS
                </span>

                <div className={styles.teamLeaders}>

                    {leaders.map((leader, index) => {

                        const member = getLeaderMember(
                            leader.memberId
                        );

                        // Nicht vorhandene Member-IDs überspringen
                        if (!member) {
                            return null;
                        }

                        return (
                            <div
                                key={`${leader.role}-${leader.memberId}-${index}`}
                                className={styles.teamLeader}
                            >

                                <span
                                    className={styles.captainRole}
                                >
                                    {leader.role}
                                </span>

                                <Link
                                    href={`/community/members/${member.slug}`}
                                    className={styles.captainAvatar}
                                >
                                    <Image
                                        src={member.avatar}
                                        alt={member.name}
                                        width={58}
                                        height={58}
                                    />
                                </Link>

                                <span
                                    className={styles.leaderName}
                                >
                                    {member.name}
                                </span>

                            </div>
                        );

                    })}

                </div>

            </div>
        );
    };

    // ============================================
    // RENDER
    // ============================================

    return (

        <div className={styles.wrapper}>

            <div className={styles.commandLabel}>
                FOUNDER
            </div>

            <div className={styles.commandRow}>

                {/* ================================== */}
                {/* BLOODYARMY */}
                {/* ================================== */}

                <div
                    className={`${styles.teamCard} ${styles.bloodyArmy}`}
                >

                    <div className={styles.teamGlow} />

                    <div className={styles.teamContent}>

                        <div className={styles.teamEyebrow}>
                            MANNSCHAFT
                        </div>

                        <div className={styles.teamLogo}>

                            <Image
                                src="/teams/service-record/bloodyarmy.png"
                                alt="BloodyArmy"
                                width={180}
                                height={180}
                                priority
                            />

                        </div>

                        <h2 className={styles.teamTitle}>
                            BLOODYARMY
                        </h2>

                        <div className={styles.teamDivider} />

                        <div className={styles.teamDescription}>
                            NHL - TEAM
                        </div>

                        <div className={styles.teamStats}>

                            <div className={styles.teamStat}>

                                <span className={styles.statValue}>
                                    {bloodyArmyCount}
                                </span>

                                <span className={styles.statLabel}>
                                    SPIELER
                                </span>

                            </div>

                            <div className={styles.teamStat}>

                                <span className={styles.statValue}>
                                    AKTIV
                                </span>

                                <span className={styles.statLabel}>
                                    STATUS
                                </span>

                            </div>

                        </div>

                        {renderTeamLeaders(
                            bloodyArmyLeaders
                        )}

                        <div className={styles.teamActions}>

                            <Link
                                href="/community/teams/bloodyarmy/statistik"
                                className={styles.teamActionButton}
                            >
                                STATISTIK
                            </Link>

                            <Link
                                href="/community/teams/bloodyarmy"
                                className={styles.teamActionButton}
                            >
                                AUFSTELLUNG
                            </Link>

                        </div>

                    </div>

                </div>

                {/* ================================== */}
                {/* FOUNDER */}
                {/* ================================== */}

                <div className={styles.founderCard}>

                    <MemberCard
                        {...mapMemberToCard(founder)}
                        compact={false}
                    />

                </div>

                {/* ================================== */}
                {/* YOUNG ARMY */}
                {/* ================================== */}

                <div
                    className={`${styles.teamCard} ${styles.youngArmy}`}
                >

                    <div className={styles.teamGlow} />

                    <div className={styles.teamContent}>

                        <div className={styles.teamEyebrow}>
                            MANNSCHAFT
                        </div>

                        <div className={styles.teamLogo}>

                            <Image
                                src="/teams/service-record/young-army.png"
                                alt="Young Army"
                                width={180}
                                height={180}
                                priority
                            />

                        </div>

                        <h2 className={styles.teamTitle}>
                            YOUNG ARMY
                        </h2>

                        <div className={styles.teamDivider} />

                        <div className={styles.teamDescription}>
                            AHL - TEAM
                        </div>

                        <div className={styles.teamStats}>

                            <div className={styles.teamStat}>

                                <span className={styles.statValue}>
                                    {youngArmyCount}
                                </span>

                                <span className={styles.statLabel}>
                                    SPIELER
                                </span>

                            </div>

                            <div className={styles.teamStat}>

                                <span className={styles.statValue}>
                                    AKTIV
                                </span>

                                <span className={styles.statLabel}>
                                    STATUS
                                </span>

                            </div>

                        </div>

                        {renderTeamLeaders(
                            youngArmyLeaders
                        )}

                        <div className={styles.teamActions}>

                            <Link
                                href="/community/teams/young-army/statistik"
                                className={styles.teamActionButton}
                            >
                                STATISTIK
                            </Link>

                            <Link
                                href="/community/teams/young-army"
                                className={styles.teamActionButton}
                            >
                                AUFSTELLUNG
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}
