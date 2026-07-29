/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Project:
 * BloodyArmy Website
 *
 * File:
 * ranks.ts
 *
 * Description:
 * Zentrale Rangdatenbank der BloodyArmy.
 * Alle Dienstgrade werden ausschließlich
 * hier gepflegt.
 *
 * ============================================
 */

export type RankId =
    | "soldat"
    | "gefreiter"
    | "obergefreiter"
    | "hauptgefreiter"
    | "stabsgefreiter"
    | "oberstabsgefreiter"
    | "korporal"
    | "stabskorporal"
    | "unteroffizier"
    | "stabsunteroffizier"
    | "feldwebel"
    | "oberfeldwebel"
    | "hauptfeldwebel"
    | "stabsfeldwebel"
    | "oberstabsfeldwebel"
    | "leutnant"
    | "oberleutnant"
    | "hauptmann"
    | "major"
    | "oberstleutnant"
    | "oberst"
    | "brigadegeneral"
    | "generalmajor"
    | "generalleutnant"
    | "general"
    | "generalOfTheArmy";

export interface Rank {

    id: RankId;

    title: string;

    group: string;

    nato: string;

    insignia: string;

}

export const RANKS: Record<RankId, Rank> = {

    soldat: {
        id: "Soldat",
        title: "Soldat",
        group: "Mannschaften",
        nato: "OR-1",
        insignia: "/images/ranks/soldat.png"
    },

    gefreiter: {
        id: "gefreiter",
        title: "Gefreiter",
        group: "Mannschaften",
        nato: "OR-2",
        insignia: "/images/ranks/gefreiter.png"
    },

    obergefreiter: {
        id: "obergefreiter",
        title: "Obergefreiter",
        group: "Mannschaften",
        nato: "OR-2",
        insignia: "/images/ranks/obergefreiter.png"
    },

    hauptgefreiter: {
        id: "hauptgefreiter",
        title: "Hauptgefreiter",
        group: "Mannschaften",
        nato: "OR-4",
        insignia: "/images/ranks/hauptgefreiter.png"
    },

    stabsgefreiter: {
        id: "stabsgefreiter",
        title: "Stabsgefreiter",
        group: "Mannschaften",
        nato: "OR-4",
        insignia: "/images/ranks/stabsgefreiter.png"
    },

    oberstabsgefreiter: {
        id: "oberstabsgefreiter",
        title: "Oberstabsgefreiter",
        group: "Mannschaften",
        nato: "OR-4",
        insignia: "/images/ranks/oberstabsgefreiter.png"
    },

    korporal: {
        id: "korporal",
        title: "Korporal",
        group: "Unteroffiziere",
        nato: "OR-4",
        insignia: "/images/ranks/korporal.png"
    },

    stabskorporal: {
        id: "stabskorporal",
        title: "Stabskorporal",
        group: "Unteroffiziere",
        nato: "OR-5",
        insignia: "/images/ranks/stabskorporal.png"
    },

    unteroffizier: {
        id: "unteroffizier",
        title: "Unteroffizier",
        group: "Unteroffiziere",
        nato: "OR-5",
        insignia: "/images/ranks/unteroffizier.png"
    },

    stabsunteroffizier: {
        id: "stabsunteroffizier",
        title: "Stabsunteroffizier",
        group: "Unteroffiziere",
        nato: "OR-6",
        insignia: "/images/ranks/stabsunteroffizier.png"
    },

    feldwebel: {
        id: "feldwebel",
        title: "Feldwebel",
        group: "Unteroffiziere mit Portepee",
        nato: "OR-6",
        insignia: "/images/ranks/feldwebel.png"
    },

    oberfeldwebel: {
        id: "oberfeldwebel",
        title: "Oberfeldwebel",
        group: "Unteroffiziere mit Portepee",
        nato: "OR-7",
        insignia: "/images/ranks/oberfeldwebel.png"
    },

    hauptfeldwebel: {
        id: "hauptfeldwebel",
        title: "Hauptfeldwebel",
        group: "Unteroffiziere mit Portepee",
        nato: "OR-7",
        insignia: "/images/ranks/hauptfeldwebel.png"
    },

    stabsfeldwebel: {
        id: "stabsfeldwebel",
        title: "Stabsfeldwebel",
        group: "Unteroffiziere mit Portepee",
        nato: "OR-8",
        insignia: "/images/ranks/stabsfeldwebel.png"
    },

    oberstabsfeldwebel: {
        id: "oberstabsfeldwebel",
        title: "Oberstabsfeldwebel",
        group: "Unteroffiziere mit Portepee",
        nato: "OR-9",
        insignia: "/images/ranks/oberstabsfeldwebel.png"
    },

    leutnant: {
        id: "leutnant",
        title: "Leutnant",
        group: "Offiziere",
        nato: "OF-1",
        insignia: "/images/ranks/leutnant.png"
    },

    oberleutnant: {
        id: "oberleutnant",
        title: "Oberleutnant",
        group: "Offiziere",
        nato: "OF-1",
        insignia: "/images/ranks/oberleutnant.png"
    },

    hauptmann: {
        id: "hauptmann",
        title: "Hauptmann",
        group: "Offiziere",
        nato: "OF-2",
        insignia: "/images/ranks/hauptmann.png"
    },

    major: {
        id: "major",
        title: "Major",
        group: "Stabsoffiziere",
        nato: "OF-3",
        insignia: "/images/ranks/major.png"
    },

    oberstleutnant: {
        id: "oberstleutnant",
        title: "Oberstleutnant",
        group: "Stabsoffiziere",
        nato: "OF-4",
        insignia: "/images/ranks/oberstleutnant.png"
    },

    oberst: {
        id: "oberst",
        title: "Oberst",
        group: "Stabsoffiziere",
        nato: "OF-5",
        insignia: "/images/ranks/oberst.png"
    },

    brigadegeneral: {
        id: "brigadegeneral",
        title: "Brigadegeneral",
        group: "Generale",
        nato: "OF-6",
        insignia: "/images/ranks/brigadegeneral.png"
    },

    generalmajor: {
        id: "generalmajor",
        title: "Generalmajor",
        group: "Generale",
        nato: "OF-7",
        insignia: "/images/ranks/generalmajor.png"
    },

    generalleutnant: {
        id: "generalleutnant",
        title: "Generalleutnant",
        group: "Generale",
        nato: "OF-8",
        insignia: "/images/ranks/generalleutnant.png"
    },

    general: {
        id: "general",
        title: "General",
        group: "Generale",
        nato: "OF-9",
        insignia: "/images/ranks/general.png"
    },

    generalOfTheArmy: {
        id: "generalOfTheArmy",
        title: "General of the Army",
        group: "Oberkommando",
        nato: "OF-10",
        insignia: "/images/ranks/general-of-the-army.png"
    }

};