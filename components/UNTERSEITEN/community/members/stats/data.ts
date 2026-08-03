import type {

    CareerStatsData,

} from "./types";









export const emptyCareerStats:CareerStatsData = {


    seasons: [],


    regularSeason: [],


    playoffs: [],


    total: {


        season:"GESAMT",


        year:"GESAMT",


        games:0,


        goals:0,


        assists:0,


        points:0,


        plusMinus:0,


        penaltyMinutes:0,


        playoffGames:0,


        playoffGoals:0,


        playoffAssists:0,


        playoffPoints:0,


        playoffPlusMinus:0,


        playoffPenaltyMinutes:0,


        titles:[]


    }


};