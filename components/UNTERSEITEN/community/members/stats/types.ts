export type TeamType =

    | "BloodyArmy"

    | "Young Army";









export type CareerSeasonStats = {


    season?:string;


    year:string;


    team:TeamType;



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









export type SeasonStats = {


    season?:string;


    year?:string;


    team:TeamType;



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