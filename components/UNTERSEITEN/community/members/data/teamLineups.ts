/* ============================================ /
/ BloodyArmy /
/ ============================================ /
/*

Team Lineups
Hier werden alle Mannschaftsaufstellungen
zentral über die Member-ID gepflegt.
Beispiel:
"BA-001"
Leere Positionen können einfach
als "" stehen bleiben.
*/

/* ============================================ /
/ TYPES /
/ ============================================ */

export type ForwardLine = {

lw: string;

c: string;

rw: string;

};

export type DefensePair = {

ld: string;

rd: string;

};

export type TeamLeadership = {

captain: string;

assistantLeft: string;

assistantRight: string;

};

export type ReservePlayer = {

memberId: string;

position: string;

};

export type TeamLineup = {

forwards: {

    line1: ForwardLine;

    line2: ForwardLine;

    line3: ForwardLine;

    line4: ForwardLine;

};

defense: {

    pair1: DefensePair;

    pair2: DefensePair;

    pair3: DefensePair;

};

goalies: {

    starter: string;

    backup: string;

};

leadership: TeamLeadership;

reserves: ReservePlayer[];

};

/* ============================================ /
/ BLOODYARMY /
/ ============================================ */

export const BLOODY_ARMY_LINEUP: TeamLineup = {

leadership: {

    captain: "",

    assistantLeft: "",

    assistantRight: "",

},

forwards: {

    line1: {

        lw: "BA-001",

        c: "BA-010",

        rw: "BA-009",

    },

    line2: {

        lw: "BA-020",

        c: "BA-015",

        rw: "BA-002",

    },

    line3: {

        lw: "BA-007",

        c: "BA-028",

        rw: "BA-006",

    },

    line4: {

        lw: "BA-030",

        c: "BA-013",

        rw: "BA-014",

    },

},

defense: {

    pair1: {

        ld: "BA-031",

        rd: "BA-032",

    },

    pair2: {

        ld: "BA-023",

        rd: "",

    },

    pair3: {

        ld: "BA-021",

        rd: "BA-018",

    },

},

goalies: {

    starter: "BA-003",

    backup: "BA-005",

},

reserves: [],

};

/* ============================================ /
/ YOUNG ARMY /
/ ============================================ */

export const YOUNG_ARMY_LINEUP: TeamLineup = {

leadership: {

    captain: "",

    assistantLeft: "",

    assistantRight: "",

},

forwards: {

    line1: {

        lw: "",

        c: "",

        rw: "",

    },

    line2: {

        lw: "BA-029",

        c: "",

        rw: "",

    },

    line3: {

        lw: "BA-019",

        c: "",

        rw: "",

    },

    line4: {

        lw: "BA-017",

        c: "",

        rw: "BA-016",

    },

},

defense: {

    pair1: {

        ld: "",

        rd: "BA-024",

    },

    pair2: {

        ld: "BA-012",

        rd: "",

    },

    pair3: {

        ld: "",

        rd: "",

    },

},

goalies: {

    starter: "",

    backup: "",

},

reserves: [


    {
        memberId: "BA-008",
        position: "LD",
    },

       {
        memberId: "BA-004",
        position: "",
    },

       {
        memberId: "BA-011",
        position: "",
    },

       {
        memberId: "BA-026",
        position: "",
    },

  

],

};