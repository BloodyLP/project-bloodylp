/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Rank Database
 *
 * Prestige:
 * 0
 *
 * Branch:
 * Bundeswehr Sanitätsdienst
 *
 * ============================================
 */

import type {
    MilitaryRank
} from "../types";


export const bundeswehrSanitaetRanks: MilitaryRank[] = [

    /*
    ================================================
    MANNSCHAFTEN
    ================================================
    */

    {
        id:"sanitaet-sanitaetssoldat",
        name:"Sanitätssoldat",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"sanitaet",
        level:1
    },

    {
        id:"sanitaet-gefreiter",
        name:"Gefreiter",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"sanitaet",
        level:2
    },

    {
        id:"sanitaet-obergfreiter",
        name:"Obergefreiter",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"sanitaet",
        level:3
    },

    {
        id:"sanitaet-hauptgefreiter",
        name:"Hauptgefreiter",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"sanitaet",
        level:4
    },

    {
        id:"sanitaet-stabsgefreiter",
        name:"Stabsgefreiter",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"sanitaet",
        level:5
    },

    {
        id:"sanitaet-oberstabsgefreiter",
        name:"Oberstabsgefreiter",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"sanitaet",
        level:6
    },

    {
        id:"sanitaet-korporal",
        name:"Korporal",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"sanitaet",
        level:7
    },

    {
        id:"sanitaet-stabskorporal",
        name:"Stabskorporal",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"sanitaet",
        level:8
    },


    /*
    ================================================
    UNTEROFFIZIERE OHNE PORTEPEE
    ================================================
    */

    {
        id:"sanitaet-unteroffizier",
        name:"Unteroffizier",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"unteroffiziere",
        level:9
    },

    {
        id:"sanitaet-stabsunteroffizier",
        name:"Stabsunteroffizier",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"unteroffiziere",
        level:10
    },


    /*
    ================================================
    UNTEROFFIZIERE MIT PORTEPEE
    ================================================
    */

    {
        id:"sanitaet-feldwebel",
        name:"Feldwebel",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"feldwebel",
        level:11
    },

    {
        id:"sanitaet-oberfeldwebel",
        name:"Oberfeldwebel",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"feldwebel",
        level:12
    },

    {
        id:"sanitaet-hauptfeldwebel",
        name:"Hauptfeldwebel",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"feldwebel",
        level:13
    },

    {
        id:"sanitaet-stabsfeldwebel",
        name:"Stabsfeldwebel",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"feldwebel",
        level:14
    },

    {
        id:"sanitaet-oberstabsfeldwebel",
        name:"Oberstabsfeldwebel",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"feldwebel",
        level:15
    },


    /*
    ================================================
    SANITÄTSOFFIZIERANWÄRTER
    ================================================
    */

    {
        id:"sanitaet-fahnenjunker",
        name:"Fahnenjunker",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"offiziere",
        level:16
    },

    {
        id:"sanitaet-faehnrich",
        name:"Fähnrich",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"offiziere",
        level:17
    },

    {
        id:"sanitaet-oberfaehnrich",
        name:"Oberfähnrich",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"offiziere",
        level:18
    },


    /*
    ================================================
    SANITÄTSOFFIZIERE
    ================================================
    */

    {
        id:"sanitaet-unterarzt",
        name:"Unterarzt",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"offiziere",
        level:19
    },

    {
        id:"sanitaet-assistenzarzt",
        name:"Assistenzarzt",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"offiziere",
        level:20
    },

    {
        id:"sanitaet-stabsarzt",
        name:"Stabsarzt",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"offiziere",
        level:21
    },

    {
        id:"sanitaet-oberstabsarzt",
        name:"Oberstabsarzt",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"offiziere",
        level:22
    },


    /*
    ================================================
    STABSOFFIZIERE SANITÄT
    ================================================
    */

    {
        id:"sanitaet-oberfeldarzt",
        name:"Oberfeldarzt",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"stabsoffiziere",
        level:23
    },

    {
        id:"sanitaet-oberstarzt",
        name:"Oberstarzt",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"stabsoffiziere",
        level:24
    },


    /*
    ================================================
    GENERALE SANITÄT
    ================================================
    */

    {
        id:"sanitaet-generalarzt",
        name:"Generalarzt",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"command",
        level:25
    },

    {
        id:"sanitaet-generalstabsarzt",
        name:"Generalstabsarzt",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"command",
        level:26
    },

    {
        id:"sanitaet-generaloberstabsarzt",
        name:"Generaloberstabsarzt",
        branch:"bundeswehrSanitaet",
        prestige:0,
        category:"command",
        level:27
    }

];