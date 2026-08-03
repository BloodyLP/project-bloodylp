import type {

    CareerStatsData,

    CareerStatsInput,

    SeasonStats,

} from "./types";







function calculateTotal(

    rows:SeasonStats[]

):SeasonStats{



    return {


        season:"GESAMT",





        games:

            rows.reduce(

                (sum,item)=>

                    sum + item.games,

                0

            ),






        goals:

            rows.reduce(

                (sum,item)=>

                    sum + item.goals,

                0

            ),






        assists:

            rows.reduce(

                (sum,item)=>

                    sum + item.assists,

                0

            ),






        points:

            rows.reduce(

                (sum,item)=>

                    sum + item.points,

                0

            ),






        plusMinus:

            rows.reduce(

                (sum,item)=>

                    sum + item.plusMinus,

                0

            ),






        penaltyMinutes:

            rows.reduce(

                (sum,item)=>

                    sum + item.penaltyMinutes,

                0

            ),



    };


}









export function buildCareerStats(

    stats:CareerStatsInput

):CareerStatsData{





    const combined = [



        ...stats.regularSeason,



        ...stats.playoffs,



    ];








    return {



        regularSeason:

            stats.regularSeason,





        playoffs:

            stats.playoffs,





        total:

            calculateTotal(combined),



    };


}