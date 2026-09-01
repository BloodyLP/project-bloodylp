"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./FounderCard.module.css";

import MemberCard from "./MemberCard";

import {
members,
} from "./data";

import {
mapMemberToCard,
} from "./memberMapper";

type TeamLeader = {
name: string;
role: "A" | "C";
};

export default function FounderCard() {

const bloodyArmyLeaders: TeamLeader[] = [
    {
        name: "ASSISTANT LINKS",
        role: "A",
    },
    {
        name: "CAPTAIN",
        role: "C",
    },
    {
        name: "ASSISTANT RECHTS",
        role: "A",
    },
];

const youngArmyLeaders: TeamLeader[] = [
    {
        name: "ASSISTANT LINKS",
        role: "A",
    },
    {
        name: "CAPTAIN",
        role: "C",
    },
    {
        name: "ASSISTANT RECHTS",
        role: "A",
    },
];

const founder = members.find(
    member =>
        member.prestige === 10
);

const bloodyArmyMembers = members.filter(
    member =>
        member.organization === "bloodyArmy" &&
        member.active === true &&
        member.deceased !== true
);

const youngArmyMembers = members.filter(
    member =>
        member.organization === "youngArmy" &&
        member.active === true &&
        member.deceased !== true
);

const getLeaderMember = (
    leaderName: string
) => {

    if (
        !leaderName ||
        leaderName === "CAPTAIN" ||
        leaderName === "ASSISTANT LINKS" ||
        leaderName === "ASSISTANT RECHTS"
    ) {
        return null;
    }

    return members.find(
        member =>
            member.name.toLowerCase() ===
            leaderName.toLowerCase()
    ) ?? null;

};

if (!founder) {
    return null;
}

const renderTeamLeaders = (
    leaders: TeamLeader[]
) => {

    return (

        <div
            className={styles.teamLeaders}
        >

            {leaders.map(
                (
                    leader,
                    index
                ) => {

                    const member =
                        getLeaderMember(
                            leader.name
                        );

                    return (

                        <div
                            key={`${leader.role}-${index}`}
                            className={
                                styles.teamLeader
                            }
                        >

                            <span
                                className={
                                    styles.captainRole
                                }
                            >

                                {leader.role}

                            </span>

                            {member ? (

                                <Link
                                    href={`/community/members/${member.slug}`}
                                    className={
                                        styles.captainAvatar
                                    }
                                >

                                    <Image
                                        src={member.avatar}
                                        alt={member.name}
                                        width={58}
                                        height={58}
                                    />

                                </Link>

                            ) : (

                                <div
                                    className={
                                        styles.leaderPlaceholder
                                    }
                                />

                            )}

                            <span
                                className={
                                    styles.leaderName
                                }
                            >

                                {member
                                    ? member.name
                                    : "FREI"}

                            </span>

                        </div>

                    );

                }
            )}

        </div>

    );

};

return (

    <div
        className={styles.wrapper}
    >

        <div
            className={styles.commandLabel}
        >

            FOUNDER

        </div>

        <div
            className={styles.commandRow}
        >

            <div
                className={`${styles.teamCard} ${styles.bloodyArmy}`}
            >

                <div
                    className={styles.teamGlow}
                />

                <div
                    className={styles.teamContent}
                >

                    <div
                        className={styles.teamEyebrow}
                    >

                        MANNSCHAFT

                    </div>

                    <div
                        className={styles.teamLogo}
                    >

                        <Image
                            src="/teams/service-record/bloodyarmy.png"
                            alt="BloodyArmy"
                            width={180}
                            height={180}
                            priority
                        />

                    </div>

                    <h2
                        className={styles.teamTitle}
                    >

                        BLOODYARMY

                    </h2>

                    <div
                        className={styles.teamDivider}
                    />

                    <div
                        className={styles.teamDescription}
                    >

                        NHL - TEAM

                    </div>

                    <div
                        className={styles.teamStats}
                    >

                        <div
                            className={styles.teamStat}
                        >

                            <span
                                className={styles.statValue}
                            >

                                {bloodyArmyMembers.length}

                            </span>

                            <span
                                className={styles.statLabel}
                            >

                                SPIELER

                            </span>

                        </div>

                        <div
                            className={styles.teamStat}
                        >

                            <span
                                className={styles.statValue}
                            >

                                AKTIV

                            </span>

                            <span
                                className={styles.statLabel}
                            >

                                STATUS

                            </span>

                        </div>

                    </div>

                    <div
                        className={styles.commandInfo}
                    >

                        <span
                            className={
                                styles.commandInfoLabel
                            }
                        >

                            TEAM CAPTAINS

                        </span>

                        {renderTeamLeaders(
                            bloodyArmyLeaders
                        )}

                    </div>

                    <div
                        className={styles.teamActions}
                    >

                        <Link
                            href="/community/statistics"
                            className={
                                styles.teamActionButton
                            }
                        >

                            STATISTIK

                        </Link>

                        <Link
                            href="/community/teams/bloodyarmy"
                            className={
                                styles.teamActionButton
                            }
                        >

                            AUFSTELLUNG

                        </Link>

                    </div>

                </div>

            </div>

            <div
                className={styles.founderCard}
            >

                <MemberCard
                    {...mapMemberToCard(
                        founder
                    )}
                    compact={false}
                />

            </div>

            <div
                className={`${styles.teamCard} ${styles.youngArmy}`}
            >

                <div
                    className={styles.teamGlow}
                />

                <div
                    className={styles.teamContent}
                >

                    <div
                        className={styles.teamEyebrow}
                    >

                        MANNSCHAFT

                    </div>

                    <div
                        className={styles.teamLogo}
                    >

                        <Image
                            src="/teams/service-record/young-army.png"
                            alt="Young Army"
                            width={180}
                            height={180}
                            priority
                        />

                    </div>

                    <h2
                        className={styles.teamTitle}
                    >

                        YOUNG ARMY

                    </h2>

                    <div
                        className={styles.teamDivider}
                    />

                    <div
                        className={styles.teamDescription}
                    >

                        AHL - TEAM

                    </div>

                    <div
                        className={styles.teamStats}
                    >

                        <div
                            className={styles.teamStat}
                        >

                            <span
                                className={styles.statValue}
                            >

                                {youngArmyMembers.length}

                            </span>

                            <span
                                className={styles.statLabel}
                            >

                                SPIELER

                            </span>

                        </div>

                        <div
                            className={styles.teamStat}
                        >

                            <span
                                className={styles.statValue}
                            >

                                AKTIV

                            </span>

                            <span
                                className={styles.statLabel}
                            >

                                STATUS

                            </span>

                        </div>

                    </div>

                    <div
                        className={styles.commandInfo}
                    >

                        <span
                            className={
                                styles.commandInfoLabel
                            }
                        >

                            TEAM CAPTAINS

                        </span>

                        {renderTeamLeaders(
                            youngArmyLeaders
                        )}

                    </div>

                    <div
                        className={styles.teamActions}
                    >

                        <Link
                            href="/community/statistics"
                            className={
                                styles.teamActionButton
                            }
                        >

                            STATISTIK

                        </Link>

                        <Link
                            href="/community/teams/young-army"
                            className={
                                styles.teamActionButton
                            }
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