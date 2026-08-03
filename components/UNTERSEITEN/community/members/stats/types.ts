export type SeasonStats = {


    year:string;


    games:number;


    goals:number;


    assists:number;


    points:number;


    plusMinus:number;


    penaltyMinutes:number;


    playoffGames:number;


    playoffGoals:number;


    playoffAssists:number;


    playoffPoints:number;


    playoffPlusMinus:number;


    playoffPenaltyMinutes:number;


    titles:string[];


};







export type CareerStatsInput = {


    seasons:SeasonStats[];


};







export type CareerStatsData = {


    seasons:SeasonStats[];


};