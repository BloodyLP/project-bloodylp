/* ============================================ */
/*                                              */
/* BloodyLP                                     */
/*                                              */
/* ============================================ */
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

    iserlohn: {
        name: "Iserlohn Roosters eSports",
        logo: "/images/esport/gcl13/iserlohn-roosters-esports.png",
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
    },

    nuernberg: {
        name: "Nürnberg Nidhoggr",
        logo: "/images/esport/gcl13/nuernberg-nidhoggr.jpg",
    },

    connexion: {
        name: "Connexion",
        logo: "/images/esport/gcl13/conexion.png",
    },

    flashback: {
        name: "Flaschback Skwad",
        logo: "/images/esport/gcl13/flaschback-squad.png",
    },

    yetis: {
        name: "Eishockeynet Yetis",
        logo: "/images/esport/gcl13/eishockeynet-yetis.png",
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
    /* TBD TEAM                                 */
    /* ---------------------------------------- */

    tbd: {
        name: "TBD",
        logo: "/images/esport/logos/gcl.png",
    },
};


/* ============================================ */
/* GCL 13 – POKAL                              */
/* ============================================ */

export const gcl13Cup: GCL13Cup = {

    name: "GCL 13",

    logo: "/images/esport/logos/gcl.png",

    season: "GCL 13",

    rounds: [

        /* ====================================== */
        /* ROUND 1                                */
        /* ====================================== */

        {
            name: "Round 1",

            matches: [

                /* -------------------------------- */
                /* MATCH 01                         */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r1-1",

                    home: teams.iserlohn,
                    away: teams.germanEliteHockey,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },


                /* -------------------------------- */
                /* MATCH 02                         */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r1-2",

                    home: teams.clownsOnIce,
                    away: teams.blackIceRavens,

                    homeScore: 3,
                    awayScore: 2,

                    played: true,
                },


                /* -------------------------------- */
                /* MATCH 03                         */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r1-3",

                    home: teams.ehcOlten,
                    away: teams.rackelhahn,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },


                /* -------------------------------- */
                /* MATCH 04                         */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r1-4",

                    home: teams.hannover,
                    away: teams.nuernberg,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },


                /* -------------------------------- */
                /* MATCH 05                         */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r1-5",

                    home: teams.connexion,
                    away: teams.flashback,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },


                /* -------------------------------- */
                /* MATCH 06                         */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r1-6",

                    home: teams.yetis,
                    away: teams.deadlyPhantoms,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },


                /* -------------------------------- */
                /* MATCH 07                         */
                /* -------------------------------- */
                /* OUTLAWS 0 : 7 DEG                */
                /* DEG WEITER                       */
                /* OUTLAWS AUSGESCHIEDEN            */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r1-7",

                    home: teams.outlaws,
                    away: teams.deg,

                    homeScore: 0,
                    awayScore: 7,

                    played: true,
                },
            ],
        },


        /* ====================================== */
        /* ROUND 2                                */
        /* ====================================== */

        {
            name: "Round 2",

            matches: [

                /* -------------------------------- */
                /* DEG eSports                      */
                /* bereits qualifiziert             */
                /* Gegner noch TBD                   */
                /* -------------------------------- */

                {
                    id: "gcl13-cup-r2-deg",

                    home: teams.deg,
                    away: teams.tbd,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },

                                {
                    id: "gcl13-cup-r2-ClownsOnIce",

                    home: teams.clownsOnIce,
                    away: teams.tbd,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },

                                {
                    id: "gcl13-cup-r2-ehcOlten",

                    home: teams.ehcOlten,
                    away: teams.tbd,

                    homeScore: 0,
                    awayScore: 0,

                    played: false,
                },
            ],
        },


        /* ====================================== */
        /* QUARTERFINALS                          */
        /* ====================================== */

        {
            name: "Quarterfinals",

            matches: [],
        },


        /* ====================================== */
        /* SEMIFINALS                             */
        /* ====================================== */

        {
            name: "Semifinals",

            matches: [],
        },


        /* ====================================== */
        /* FINALS                                 */
        /* ====================================== */

        {
            name: "Finals",

            matches: [],
        },
    ],
};