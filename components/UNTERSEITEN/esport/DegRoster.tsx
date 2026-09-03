/* ============================================ */
/* BloodyArmy                                   */
/* ============================================ */
/*                                               */
/* Project:                                      */
/* BloodyLP Website                              */
/*                                               */
/* File:                                         */
/* DegRoster.tsx                                 */
/*                                               */
/* Description:                                  */
/* Darstellung des aktuellen                     */
/* DEG eSport Kaders.                            */
/*                                               */
/* ============================================ */


import Image from "next/image";

import styles from "./DegRoster.module.css";

import {

    degGoalies,

    degDefensemen,

    degForwards,

    type DegPlayer,

} from "@/components/live/data/esport/deg-roster";


/* ============================================ */
/* TYPES                                         */
/* ============================================ */

type RosterGroupProps = {

    title:

        string;

    players:

        DegPlayer[];

};


/* ============================================ */
/* ROSTER GROUP                                  */
/* ============================================ */

function RosterGroup(

    {

        title,

        players,

    }: RosterGroupProps

) {

    return (

        <section

            className={

                styles.rosterSection

            }

        >

            {/* ==================================== */}
            {/* SECTION HEADER                       */}
            {/* ==================================== */}

            <div

                className={

                    styles.sectionHeader

                }

            >

                <h2

                    className={

                        styles.sectionTitle

                    }

                >

                    {title}

                </h2>


                <div

                    className={

                        styles.sectionLine

                    }

                />

            </div>


            {/* ==================================== */}
            {/* PLAYERS GRID                         */}
            {/* ==================================== */}

            <div

                className={

                    styles.playersGrid

                }

            >

                {

                    players.map(

                        (

                            player

                        ) => (

                            <a

                                key={

                                    player.gamerTag

                                }

                                href={

                                    player.sportsgamerUrl

                                }

                                target="_blank"

                                rel="noopener noreferrer"

                                className={

                                    styles.playerCard

                                }

                                aria-label={

                                    `${player.gamerTag} auf Sportsgamer ansehen`

                                }

                            >

                                {/* ============================ */}
                                {/* PLAYER IMAGE                 */}
                                {/* ============================ */}

                                <div

                                    className={

                                        styles.playerImageWrapper

                                    }

                                >

                                    {

                                        player.image

                                        ? (

                                            <Image

                                                src={

                                                    player.image

                                                }

                                                alt={

                                                    player.gamerTag

                                                }

                                                fill

                                                className={

                                                    styles.playerImage

                                                }

                                                sizes="(max-width: 600px) 115px, 145px"

                                            />

                                        )

                                        : (

                                            <div

                                                className={

                                                    styles.placeholder

                                                }

                                            >

                                                ?

                                            </div>

                                        )

                                    }

                                </div>


                                {/* ============================ */}
                                {/* BACKGROUND NUMBER            */}
                                {/* ============================ */}

                                <div

                                    className={

                                        styles.backgroundNumber

                                    }

                                >

                                    {

                                        player.number

                                    }

                                </div>


                                {/* ============================ */}
                                {/* FLAG                         */}
                                {/* ============================ */}

                                {

                                    player.flag

                                    && (

                                        <div

                                            className={

                                                styles.flag

                                            }

                                        >

                                            <Image

                                                src={

                                                    player.flag

                                                }

                                                alt={

                                                    player.nationality

                                                }

                                                width={

                                                    30

                                                }

                                                height={

                                                    20

                                                }

                                                className={

                                                    styles.flagImage

                                                }

                                            />

                                        </div>

                                    )

                                }


                                {/* ============================ */}
                                {/* PLAYER CONTENT               */}
                                {/* ============================ */}

                                <div

                                    className={

                                        styles.playerContent

                                    }

                                >

                                    {/* ======================== */}
                                    {/* GAMERTAG                 */}
                                    {/* ======================== */}

                                    <h3

                                        className={

                                            styles.gamerTag

                                        }

                                    >

                                        {

                                            player.gamerTag

                                        }

                                    </h3>


                                    {/* ======================== */}
                                    {/* REAL NAME                */}
                                    {/* ======================== */}

                                    {

                                        player.name

                                        && (

                                            <p

                                                className={

                                                    styles.playerName

                                                }

                                            >

                                                {

                                                    player.name

                                                }

                                            </p>

                                        )

                                    }


                                    {/* ======================== */}
                                    {/* FOOTER                   */}
                                    {/* ======================== */}

                                    <div

                                        className={

                                            styles.playerFooter

                                        }

                                    >

                                        <span

                                            className={

                                                styles.position

                                            }

                                        >

                                            {

                                                player.position

                                            }

                                        </span>


                                        <span

                                            className={

                                                styles.profileLink

                                            }

                                        >

                                            SPORTSGAMER

                                            <span

                                                className={

                                                    styles.arrow

                                                }

                                            >

                                                ↗

                                            </span>

                                        </span>

                                    </div>

                                </div>

                            </a>

                        )

                    )

                }

            </div>

        </section>

    );

}


/* ============================================ */
/* DEG ROSTER                                    */
/* ============================================ */

export default function DegRoster() {

    return (

        <>

            {/* ==================================== */}
            {/* GOALIES                              */}
            {/* ==================================== */}

            <RosterGroup

                title="Torhüter"

                players={

                    degGoalies

                }

            />


            {/* ==================================== */}
            {/* DEFENSEMEN                           */}
            {/* ==================================== */}

            <RosterGroup

                title="Verteidiger"

                players={

                    degDefensemen

                }

            />


            {/* ==================================== */}
            {/* FORWARDS                             */}
            {/* ==================================== */}

            <RosterGroup

                title="Stürmer"

                players={

                    degForwards

                }

            />

        </>

    );

}