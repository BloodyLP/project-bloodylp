/**
 * ============================================
 *
 * BloodyArmy
 *
 * ============================================
 *
 * Component:
 *
 * Sub50Monate
 *
 * ============================================
 */

import SubBadgeCard from "../SubBadgeCard";


/* ========================================= */
/* COMPONENT                                  */
/* ========================================= */

export default function Sub50Monate() {

    return (

        <SubBadgeCard

            months={50}

            image="/images/sub/50-monate.png"

            accent="#d97832"

            accentLight="#ffbd88"

            accentRgb="217, 120, 50"

        />

    );

}