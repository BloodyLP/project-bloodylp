import {

    buildCareerStats

} from "./calculateCareerStats";



import type {

    CareerStatsData,

} from "./types";









export const emptyCareerStats:CareerStatsData = {


    seasons:[],



    regularSeason:[],


    playoffs:[],



    total:{


        season:"GESAMT",


        year:"GESAMT",


        team:"BloodyArmy",



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









export const founderStats:CareerStatsData = buildCareerStats({



    regularSeason:[



        {


            season:"2019/20",


            year:"2019/20",


            team:"BloodyArmy",



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



    ],



    playoffs:[]



});