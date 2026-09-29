/* ============================================ */
/*                                              */
/* BloodyLP                                     */
/*                                              */
/* Project:                                     */
/* BloodyLP Website                             */
/*                                              */
/* File:                                        */
/* components/live/data/esport/deg-cup.ts       */
/*                                              */
/* Description:                                 */
/* GCL 13 – Pokal                               */
/*                                              */
/* ============================================ */


/* ============================================ */
/* TYPES                                        */
/* ============================================ */

export type GCL13CupTeam = {
    name: string;
    logo: string;

    /**
     * Kennzeichnung für DEG eSports
     */
    isDeg?: boolean;

    /**
     * Team ist aus dem Pokal ausgeschieden
     */
    eliminated?: boolean;
};


export type GCL13CupMatch = {
    id: string;

    home: GCL13CupTeam;
    away: GCL13CupTeam;

    homeScore: number;
    awayScore: number;

    /**
     * true = Spiel wurde bereits gespielt
     */
    played: boolean;
};


export type GCL13CupRound = {
    name: string;
    matches: GCL13CupMatch[];
};


export type GCL13Cup = {
    name: string;
    logo: string;
    season: string;

    rounds: GCL13CupRound[];
};


/* ============================================ */
/* TEAMS                                        */
/* ============================================ */

const teams = {

    /* ---------------------------------------- */
    /* ROUND 1 TEAMS                            */
    /* ---------------------------------------- */

    iserlohn: {
        name: "Iserlohn Roosters eSports",
        logo: "/images/esport/gcl13/iserlohn-roosters-esports.png",
        eliminated: true,
    },

    germanEliteHockey: {
        name: "German Elite Hockey",
        logo: "/images/esport/gcl13/german-elite-hockey.png",
    },

    clownsOnIce: {
        name: "Clowns On Ice",
        logo: "/images/esport/gcl13/clowns-on-ice.png",
    },

    blackIceRavens: {
        name: "Black Ice Ravens",
        logo: "/images/esport/gcl13/black-ice-ravens.png",
        eliminated: true,
    },

    ehcOlten: {
        name: "EHC Olten eSports",
        logo: "/images/esport/gcl13/ehc-olten-esports.png",
    },

    rackelhahn: {
        name: "SG Rackelhahn eV",
        logo: "/images/esport/gcl13/sc-rackelhahn.png",
        eliminated: true,
    },

    hannover: {
        name: "Hannover Indians eSports",
        logo: "/images/esport/gcl13/hannover-indians-esports.png",
        eliminated: true,
    },

    nuernberg: {
        name: "Nürnberg Nidhoggr",
        logo: "/images/esport/gcl13/nuernberg-nidhoggr2.jpg",
    },

    connexion: {
        name: "Connexion",
        logo: "/images/esport/gcl13/conexion.png",
    },

    flashback: {
        name: "Flaschback Skwad",
        logo: "/images/esport/gcl13/flaschback-squad.png",
        eliminated: true,
    },

    yetis: {
        name: "Eishockeynet Yetis",
        logo: "/images/esport/gcl13/eishockeynet-yetis.png",
        eliminated: true,
    },

    deadlyPhantoms: {
        name: "Deadly Phantoms",
        logo: "/images/esport/gcl13/deadly-phantoms.png",
    },

    outlaws: {
        name: "Outlaws Hockey",
        logo: "/images/esport/gcl13/outlaws-hockey.png",
        eliminated: true,
    },

    deg: {
        name: "DEG eSports",
        logo: "/images/esport/gcl13/deg-esports.png",
        isDeg: true,
    },


    /* ---------------------------------------- */
    /* ROUND 2 – NEUE TEAMS                     */
    /* ---------------------------------------- */

    ecKasselHuskies: {
        name: "EC Kassel Huskies eSports",
        logo: "/images/esport/gcl13/ec-kassel-huskies-esports.png",
    },

    hockeyholics: {
        name: "Hockeyholics",
        logo: "/images/esport/gcl13/hockeyholics.png",
    },

    theLastShift: {
        name: "The Last Shift",
        logo: "/images/esport/gcl13/the-last-shift.png",
    },

    catastrophicTurnovers: {
        name: "Catastrophic Turnovers",
        logo: "/images/esport/gcl13/catastrophic-turnovers.png",
    },

    scbEsports: {
        name: "SCB eSports",
        logo: "/images/esport/gcl13/scb-esports.png",
    },

    valhallaVikings: {
        name: "Valhalla Vikings HC",
        logo: "/images/esport/gcl13/valhalla-vikings-hc.png",
    },

    rehGaming: {
        name: "REH Gaming",
        logo: "/images/esport/gcl13/reh-gaming.png",
    },

    hammerEisbaeren: {
        name: "Hammer Eisbaeren eSports",
        logo: "/images/esport/gcl13/hammer-eisbaeren-esports.png",
    },

    oldButGold: {
        name: "Old but Gold",
        logo: "/images/esport/gcl13/old-but-gold.png",
    },
};


/* ============================================ */
/* GCL 13 – POKAL                               */
/* ============================================ */

export const gcl13Cup: GCL13Cup = {

    name: "GCL 13",

    logo: "/images/esport/logos/gcl.png",

    season: "GCL 13",

    rounds: [

        /* ====================================== */
        /* ROUND 1                                 */
        /* ====================================== */

        {
            name: "Round 1",

            matches: [

                /* -------------------------------- */
                /* MATCH 01                          */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r1-1",

                    home: teams.iserlohn,
                    away: teams.germanEliteHockey,

                    homeScore: 0,
                    awayScore: 1,

                    played: true,
                },


                /* -------------------------------- */
                /* MATCH 02                          */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r1-2",

                    home: teams.clownsOnIce,
                    away: teams.blackIceRavens,

                    homeScore: 1,
                    awayScore: 0,

                    played: true,
                },


                /* -------------------------------- */
                /* MATCH 03                          */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r1-3",

                    home: teams.ehcOlten,
                    away: teams.rackelhahn,

                    homeScore: 1,
                    awayScore: 0,

                    played: true,
                },


                /* -------------------------------- */
                /* MATCH 04                          */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r1-4",

                    home: teams.hannover,
                    away: teams.nuernberg,

                    homeScore: 0,
                    awayScore: 1,

                    played: true,
                },


                /* -------------------------------- */
                /* MATCH 05                          */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r1-5",

                    home: teams.connexion,
                    away: teams.flashback,

                    homeScore: 1,
                    awayScore: 0,

                    played: true,
                },


                /* -------------------------------- */
                /* MATCH 06                          */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r1-6",

                    home: teams.yetis,
                    away: teams.deadlyPhantoms,

                    homeScore: 0,
                    awayScore: 1,

                    played: true,
                },


                /* -------------------------------- */
                /* MATCH 07                          */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r1-7",

                    home: teams.outlaws,
                    away: teams.deg,

                    homeScore: 0,
                    awayScore: 1,

                    played: true,
                },
            ],
        },


        /* ====================================== */
        /* ROUND 2                                 */
        /* ====================================== */

        {
            name: "Round 2",

            matches: [

                /* -------------------------------- */
                /* MATCH 01                          */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r2-1",

                    home: teams.ecKasselHuskies,
                    away: teams.germanEliteHockey,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },


                /* -------------------------------- */
                /* MATCH 02                          */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r2-2",

                    home: teams.hockeyholics,
                    away: teams.theLastShift,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },


                /* -------------------------------- */
                /* MATCH 03                          */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r2-3",

                    home: teams.catastrophicTurnovers,
                    away: teams.connexion,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },


                /* -------------------------------- */
                /* MATCH 04                          */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r2-4",

                    home: teams.nuernberg,
                    away: teams.ehcOlten,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },


                /* -------------------------------- */
                /* MATCH 05                          */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r2-5",

                    home: teams.scbEsports,
                    away: teams.valhallaVikings,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },


                /* -------------------------------- */
                /* MATCH 06                          */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r2-6",

                    home: teams.hammerEisbaeren,
                    away: teams.deadlyPhantoms,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },


                /* -------------------------------- */
                /* MATCH 07                          */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r2-7",

                    home: teams.rehGaming,
                    away: teams.deg,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },


                /* -------------------------------- */
                /* MATCH 08                          */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r2-8",

                    home: teams.clownsOnIce,
                    away: teams.oldButGold,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },
            ],
        },


        /* ====================================== */
        /* QUARTERFINALS                           */
        /* ====================================== */

        {
            name: "Quarterfinals",

            matches: [],
        },


        /* ====================================== */
        /* SEMIFINALS                              */
        /* ====================================== */

        {
            name: "Semifinals",

            matches: [],
        },


        /* ====================================== */
        /* FINALS                                  */
        /* ====================================== */

        {
            name: "Finals",

            matches: [],
        },
    ],
};