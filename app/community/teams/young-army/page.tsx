"use client";

import Image from "next/image";

import Link from "next/link";

import styles from "./page.module.css";

import {
members as MEMBERS,
} from "@/components/UNTERSEITEN/community/members/data";

import {
mapMemberToCard,
} from "@/components/UNTERSEITEN/community/members/memberMapper";

import {
YOUNG_ARMY_LINEUP,
} from "@/components/UNTERSEITEN/community/members/data/teamLineups";

export default function YoungArmyTeamPage() {

const getMember = (
    memberId: string
) => {

    if (!memberId) {
        return null;
    }

    return MEMBERS.find(
        member =>
            member.id === memberId
    ) ?? null;

};

const getLeadershipBadge = (
    memberId: string
) => {

    if (
        memberId ===
        YOUNG_ARMY_LINEUP.leadership.captain
    ) {

        return "C";

    }

    if (
        memberId ===
            YOUNG_ARMY_LINEUP.leadership.assistantLeft ||
        memberId ===
            YOUNG_ARMY_LINEUP.leadership.assistantRight
    ) {

        return "A";

    }

    return null;

};

const renderPlayer = (
    memberId: string,
    position: string
) => {

    const member = getMember(
        memberId
    );

    if (!member) {

        return (

            <div
                className={styles.emptyPlayer}
            >

                <span
                    className={styles.position}
                >

                    {position}

                </span>

                <span
                    className={styles.emptyName}
                >

                    FREIER PLATZ

                </span>

            </div>

        );

    }

    const mappedMember =
        mapMemberToCard(
            member
        );

    const leadershipBadge =
        getLeadershipBadge(
            member.id
        );

    return (

        <Link
            href={`/community/service-record?id=${member.recordNumber}`}
            className={styles.player}
        >

            <div
                className={styles.playerAvatar}
            >

                <Image
                    src={mappedMember.avatar}
                    alt={member.name}
                    width={100}
                    height={100}
                />

                {leadershipBadge && (

                    <span
                        className={
                            leadershipBadge === "C"
                                ? styles.captainBadge
                                : styles.assistantBadge
                        }
                    >

                        {leadershipBadge}

                    </span>

                )}

            </div>

            <span
                className={styles.position}
            >

                {position}

            </span>

            <span
                className={styles.playerName}
            >

                {member.name}

            </span>

        </Link>

    );

};

return (

    <main
        className={styles.page}
    >

        <section
            className={styles.header}
        >

            <span
                className={styles.eyebrow}
            >

                AHL TEAM

            </span>

            <h1
                className={styles.title}
            >

                YOUNG ARMY

            </h1>

            <p
                className={styles.subtitle}
            >

                OFFIZIELLE REIHENAUFSTELLUNG

            </p>

        </section>

        <section
            className={styles.rosterSection}
        >

            <h2
                className={styles.sectionTitle}
            >

                STURMREIHEN

            </h2>

            <div
                className={styles.lines}
            >

                <div
                    className={styles.line}
                >

                    <div
                        className={styles.lineLabel}
                    >

                        REIHE 1

                    </div>

                    <div
                        className={styles.players}
                    >

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.forwards.line1.lw,
                            "LW"
                        )}

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.forwards.line1.c,
                            "C"
                        )}

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.forwards.line1.rw,
                            "RW"
                        )}

                    </div>

                </div>

                <div
                    className={styles.line}
                >

                    <div
                        className={styles.lineLabel}
                    >

                        REIHE 2

                    </div>

                    <div
                        className={styles.players}
                    >

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.forwards.line2.lw,
                            "LW"
                        )}

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.forwards.line2.c,
                            "C"
                        )}

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.forwards.line2.rw,
                            "RW"
                        )}

                    </div>

                </div>

                <div
                    className={styles.line}
                >

                    <div
                        className={styles.lineLabel}
                    >

                        REIHE 3

                    </div>

                    <div
                        className={styles.players}
                    >

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.forwards.line3.lw,
                            "LW"
                        )}

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.forwards.line3.c,
                            "C"
                        )}

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.forwards.line3.rw,
                            "RW"
                        )}

                    </div>

                </div>

                <div
                    className={styles.line}
                >

                    <div
                        className={styles.lineLabel}
                    >

                        REIHE 4

                    </div>

                    <div
                        className={styles.players}
                    >

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.forwards.line4.lw,
                            "LW"
                        )}

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.forwards.line4.c,
                            "C"
                        )}

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.forwards.line4.rw,
                            "RW"
                        )}

                    </div>

                </div>

            </div>

        </section>

        <section
            className={styles.rosterSection}
        >

            <h2
                className={styles.sectionTitle}
            >

                VERTEIDIGUNG

            </h2>

            <div
                className={styles.lines}
            >

                <div
                    className={styles.line}
                >

                    <div
                        className={styles.lineLabel}
                    >

                        PAAR 1

                    </div>

                    <div
                        className={styles.players}
                    >

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.defense.pair1.ld,
                            "LD"
                        )}

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.defense.pair1.rd,
                            "RD"
                        )}

                    </div>

                </div>

                <div
                    className={styles.line}
                >

                    <div
                        className={styles.lineLabel}
                    >

                        PAAR 2

                    </div>

                    <div
                        className={styles.players}
                    >

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.defense.pair2.ld,
                            "LD"
                        )}

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.defense.pair2.rd,
                            "RD"
                        )}

                    </div>

                </div>

                <div
                    className={styles.line}
                >

                    <div
                        className={styles.lineLabel}
                    >

                        PAAR 3

                    </div>

                    <div
                        className={styles.players}
                    >

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.defense.pair3.ld,
                            "LD"
                        )}

                        {renderPlayer(
                            YOUNG_ARMY_LINEUP.defense.pair3.rd,
                            "RD"
                        )}

                    </div>

                </div>

            </div>

        </section>

        <section
            className={styles.rosterSection}
        >

            <h2
                className={styles.sectionTitle}
            >

                TORHÜTER

            </h2>

            <div
                className={styles.goalies}
            >

                {renderPlayer(
                    YOUNG_ARMY_LINEUP.goalies.starter,
                    "STARTER"
                )}

                {renderPlayer(
                    YOUNG_ARMY_LINEUP.goalies.backup,
                    "BACKUP"
                )}

            </div>

        </section>

        {YOUNG_ARMY_LINEUP.reserves.length > 0 && (

            <section
                className={styles.rosterSection}
            >

                <h2
                    className={styles.sectionTitle}
                >

                    RESERVESPIELER

                </h2>

                <div
                    className={styles.reserves}
                >

                    {YOUNG_ARMY_LINEUP.reserves.map(
                        reserve => (

                            <div
                                key={reserve.memberId}
                            >

                                {renderPlayer(
                                    reserve.memberId,
                                    reserve.position
                                )}

                            </div>

                        )
                    )}

                </div>

            </section>

        )}

        <div
            className={styles.backButtonWrapper}
        >

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