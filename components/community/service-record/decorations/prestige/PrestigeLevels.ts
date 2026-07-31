import type { Decoration } from "../types";

export type PrestigeKey =
    | "prestigeI"
    | "prestigeII"
    | "prestigeIII"
    | "prestigeIV"
    | "prestigeV"
    | "prestigeVI"
    | "prestigeVII"
    | "prestigeVIII"
    | "prestigeIX"
    | "prestigeX";

export const prestigeLevels: Record<PrestigeKey, Decoration> = {

    prestigeI: {

        id: "prestigeI",

        code: "BA-P-001",

        category: "prestige",

        rarity: "steel",

        classification: "Steel Class",

        issued: "unlimited",

        title: "Stahlklasse",

        subtitle: "Der erste Schritt",

        description:
            "Die erste Prestigestufe innerhalb der BloodyArmy. Sie markiert den Beginn deiner militärischen Laufbahn.",

        requirements: [
            "Prestige Level I",
            "Mitglied der BloodyArmy",
        ],

        image:
            "/images/service-record/prestige/prestige-1.png",

    },

    prestigeII: {

        id: "prestigeII",

        code: "BA-P-002",

        category: "prestige",

        rarity: "bronze",

        classification: "Bronze Class",

        issued: "unlimited",

        title: "Bronzeklasse",

        subtitle: "Bewährter Soldat",

        description:
            "Mit wachsender Erfahrung steigst du in die Bronzeklasse auf und beweist deine Beständigkeit.",

        requirements: [
            "Prestige Level II",
        ],

        image:
            "/images/service-record/prestige/prestige-2.png",

    },

    prestigeIII: {

        id: "prestigeIII",

        code: "BA-P-003",

        category: "prestige",

        rarity: "silver",

        classification: "Silver Class",

        issued: "unlimited",

        title: "Silberklasse",

        subtitle: "Erfahrener Veteran",

        description:
            "Diese Prestigestufe zeichnet erfahrene Mitglieder mit hoher Aktivität und Loyalität aus.",

        requirements: [
            "Prestige Level III",
        ],

        image:
            "/images/service-record/prestige/prestige-3.png",

    },

    prestigeIV: {

        id: "prestigeIV",

        code: "BA-P-004",

        category: "prestige",

        rarity: "gold",

        classification: "Gold Class",

        issued: "unlimited",

        title: "Goldklasse",

        subtitle: "Ausgezeichneter Veteran",

        description:
            "Mitglieder dieser Klasse gehören zu den erfahrensten und engagiertesten Soldaten der BloodyArmy.",

        requirements: [
            "Prestige Level IV",
        ],

        image:
            "/images/service-record/prestige/prestige-4.png",

    },

    prestigeV: {

        id: "prestigeV",

        code: "BA-P-005",

        category: "prestige",

        rarity: "platinum",

        classification: "Platinum Class",

        issued: "unlimited",

        title: "Platinklasse",

        subtitle: "Elite der Community",

        description:
            "Die Platinklasse steht für außergewöhnliche Treue und kontinuierlichen Einsatz.",

        requirements: [
            "Prestige Level V",
        ],

        image:
            "/images/service-record/prestige/prestige-5.png",

    },

    prestigeVI: {

        id: "prestigeVI",

        code: "BA-P-006",

        category: "prestige",

        rarity: "emerald",

        classification: "Emerald Class",

        issued: "unlimited",

        title: "Smaragdklasse",

        subtitle: "Vorbild der BloodyArmy",

        description:
            "Nur Mitglieder mit konstantem Engagement und vorbildlichem Verhalten erreichen diese Klasse.",

        requirements: [
            "Prestige Level VI",
        ],

        image:
            "/images/service-record/prestige/prestige-6.png",

    },

    prestigeVII: {

        id: "prestigeVII",

        code: "BA-P-007",

        category: "prestige",

        rarity: "sapphire",

        classification: "Sapphire Class",

        issued: "unlimited",

        title: "Saphirklasse",

        subtitle: "Stütze der Community",

        description:
            "Diese Prestigestufe ehrt Mitglieder, die die BloodyArmy nachhaltig mitgestalten.",

        requirements: [
            "Prestige Level VII",
        ],

        image:
            "/images/service-record/prestige/prestige-7.png",

    },

    prestigeVIII: {

        id: "prestigeVIII",

        code: "BA-P-008",

        category: "prestige",

        rarity: "ruby",

        classification: "Ruby Class",

        issued: "unlimited",

        title: "Rubinklasse",

        subtitle: "Legendärer Veteran",

        description:
            "Ein Symbol für außergewöhnliche Loyalität und langjährigen Einsatz innerhalb der BloodyArmy.",

        requirements: [
            "Prestige Level VIII",
        ],

        image:
            "/images/service-record/prestige/prestige-8.png",

    },

    prestigeIX: {

        id: "prestigeIX",

        code: "BA-P-009",

        category: "prestige",

        rarity: "obsidian",

        classification: "Obsidian Class",

        issued: "unlimited",

        title: "Obsidianklasse",

        subtitle: "Lebende Legende",

        description:
            "Diese Prestigestufe ist den wenigen vorbehalten, die über Jahre hinweg Herausragendes geleistet haben.",

        requirements: [
            "Prestige Level IX",
        ],

        image:
            "/images/service-record/prestige/prestige-9.png",

    },

    prestigeX: {

        id: "prestigeX",

        code: "BA-P-010",

        category: "prestige",

        rarity: "founder",

        classification: "Founder Class",

        issued: "only-once",

        title: "Gründerklasse",

        subtitle: "Gründer der BloodyArmy",

        description:
            "Die höchste und exklusivste Prestigestufe. Diese Auszeichnung wird ausschließlich dem Gründer der BloodyArmy verliehen.",

        requirements: [
            "Prestige Level X",
            "Gründer der BloodyArmy",
            "Einzigartige Auszeichnung",
        ],

        image:
            "/images/service-record/prestige/prestige-10.png",

    },

};