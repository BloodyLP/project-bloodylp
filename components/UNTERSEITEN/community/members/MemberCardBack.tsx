"use client";

import CareerStats from "./stats/CareerStats";

import { getTheme } from "@/lib/service-record/theme";
import { createThemeVariables } from "@/lib/service-record/theme";

import type {

    OrganizationId,

} from "@/data/service-record/organizations";

import type {

    SkaterCareerStatsData,

    GoalieCareerStatsData,

} from "./stats/types";

import styles from "./MemberCardBack.module.css";

type MemberCardBackProps = {

    name:string;

    armyId:string;

    organization:OrganizationId;

    stats?:

        | SkaterCareerStatsData

        | GoalieCareerStatsData;

    playerType:"skater" | "goalie";

    profile?:{

        position:string;

        number:string;

    };

    onBack:()=>void;

};

export default function MemberCardBack({

    name,

    armyId,

    organization,

    stats,

    playerType,

    profile,

    onBack,

}:MemberCardBackProps){

    const theme = getTheme(

        organization

    );

    return(

        <article

            className={styles.backCard}

            style={

                createThemeVariables(

                    theme

                )

            }

        >

            <header className={styles.header}>

                <span className={styles.title}>

                    BLOODYARMY CAREER PROFILE

                </span>

                <span className={styles.member}>

                    {armyId} • {name}

                </span>

            </header>

            <section className={styles.playerProfile}>

                <div className={styles.playerIdentity}>

                    <span>

                        SPIELER

                    </span>

                    <strong>

                        {name}

                    </strong>

                </div>

                <div className={styles.playerData}>

                    <div>

                        <span>

                            POSITION

                        </span>

                        <strong>

                            {profile?.position ?? "Keine Angabe"}

                        </strong>

                    </div>

                    <div>

                        <span>

                            NUMMER

                        </span>

                        <strong>

                            {profile?.number ?? "#00"}

                        </strong>

                    </div>

                </div>

            </section>

            <div className={styles.content}>

                {

                    stats

                    ?

                    <CareerStats

                        playerType={playerType}

                        stats={stats}

                    />

                    :

                    <div className={styles.empty}>

                        KEINE KARRIERE-DATEN VORHANDEN

                    </div>

                }

            </div>

            <footer className={styles.footer}>

                <button

                    type="button"

                    className={styles.backButton}

                    onClick={(event)=>{

                        event.stopPropagation();

                        onBack();

                    }}

                >

                    ↺ ZURÜCK ZUR VORDERSEITE

                </button>

            </footer>

        </article>

    );

}