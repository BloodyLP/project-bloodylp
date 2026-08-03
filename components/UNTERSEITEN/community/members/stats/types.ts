export type SeasonStats = {


    season?:string;


    year?:string;



    games:number;


    goals:number;


    assists:number;


    points:number;


    plusMinus:number;


    penaltyMinutes:number;



    playoffGames?:number;


    playoffGoals?:number;


    playoffAssists?:number;


    playoffPoints?:number;


    playoffPlusMinus?:number;


    playoffPenaltyMinutes?:number;



    titles?:string[];


};









export type CareerStatsInput = {


    regularSeason:SeasonStats[];


    playoffs:SeasonStats[];


};









export type CareerStatsData = {


    seasons?:SeasonStats[];



    regularSeason:SeasonStats[];



    playoffs:SeasonStats[];



    total:SeasonStats;


};