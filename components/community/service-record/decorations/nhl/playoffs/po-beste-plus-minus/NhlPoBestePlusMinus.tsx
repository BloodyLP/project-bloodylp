import Image from "next/image";

import styles from "./NhlPoBestePlusMinusCard.module.css";

import type {
    ServiceRecordMember,
} from "@/types/service-record";


/* ========================================= */
/* PROPS                                     */
/* ========================================= */

interface NhlPoBestePlusMinusProps {

    member: ServiceRecordMember;

}


interface NhlPoBestePlusMinusCardProps {

    title: string;

    image?: string;

    years?: number[];

}


/* ========================================= */
/* CARD                                      */
/* ========================================= */

function NhlPoBestePlusMinusCard({

    title,

    image = "/images/stats/nhl/po-beste-plus-minus.png",

    years = [],

}: NhlPoBestePlusMinusCardProps) {


    return (

        <article
            className={
                styles.card
            }
        >


            {/* ================================= */}
            {/* HEADER                            */}
            {/* ================================= */}

            <header
                className={
                    styles.header
                }
            >

                <span
                    className={
                        styles.title
                    }
                >

                    {title}

                </span>

            </header>


            {/* ================================= */}
            {/* TROPHY IMAGE                      */}
            {/* ================================= */}

            <div
                className={
                    styles.badge
                }
            >

                <Image

                    src={
                        image
                    }

                    alt={
                        title
                    }

                    fill

                    className={
                        styles.image
                    }

                    sizes="160px"

                />

            </div>


            {/* ================================= */}
            {/* FOOTER                            */}
            {/* ================================= */}

            <footer
                className={
                    styles.footer
                }
            >

                <h3
                    className={
                        styles.footerTitle
                    }
                >

                    NHL PLAYOFFS

                </h3>


                <div
                    className={
                        styles.years
                    }
                >

                    {

                        years.map(
                            (year) => (

                                <span

                                    key={
                                        year
                                    }

                                    className={
                                        styles.year
                                    }

                                >

                                    {year}

                                </span>

                            )
                        )

                    }

                </div>

            </footer>


        </article>

    );

}


/* ========================================= */
/* COMPONENT                                 */
/* ========================================= */

export default function NhlPoBestePlusMinus({

    member,

}: NhlPoBestePlusMinusProps) {


    /* ========================================= */
    /* JAHRE                                    */
    /* ========================================= */

    const years =

        member.nhlPoBestePlusMinus?.years
        ?? [];


    /* ========================================= */
    /* KEINE AUSZEICHNUNG                       */
    /* ========================================= */

    if (
        years.length === 0
    ) {

        return null;

    }


    /* ========================================= */
    /* BADGE                                    */
    /* ========================================= */

    return (

        <NhlPoBestePlusMinusCard

            title="BESTE +/- BILANZ PLAYOFFS"

            image="/images/stats/nhl/nhl-po-beste-plus-minus.png"

            years={
                years
            }

        />

    );

}