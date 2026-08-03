export type BadgeTheme = {

    background: string;

    border: string;

    text: string;

    glow: string;

};



export const badgeThemes: Record<string, BadgeTheme> = {


    /* ================================= */
    /* DIENSTGRADGRUPPEN */
    /* ================================= */


    mannschaften: {

        background: "#242424",

        border: "#6B7280",

        text: "#F3F4F6",

        glow: "rgba(107,114,128,.35)",

    },


    unteroffiziere: {

        background: "#3D2A18",

        border: "#CD7F32",

        text: "#FFD8A8",

        glow: "rgba(205,127,50,.35)",

    },


    portepee: {

        background: "#303030",

        border: "#D4AF37",

        text: "#FFF1B8",

        glow: "rgba(212,175,55,.40)",

    },


    offiziere: {

        background: "#2C313A",

        border: "#E5E7EB",

        text: "#FFFFFF",

        glow: "rgba(229,231,235,.35)",

    },


    stabsoffiziere: {

        background: "#351313",

        border: "#DC2626",

        text: "#FECACA",

        glow: "rgba(220,38,38,.35)",

    },


    generale: {

        background: "#3A2A08",

        border: "#FACC15",

        text: "#FFF7C2",

        glow: "rgba(250,204,21,.55)",

    },



    /* ================================= */
    /* PRESTIGE */
    /* ================================= */


    prestigeI: {

        background: "#242424",

        border: "#9CA3AF",

        text: "#F9FAFB",

        glow: "rgba(156,163,175,.35)",

    },


    prestigeII: {

        background: "#2B2118",

        border: "#CD7F32",

        text: "#FFE0B2",

        glow: "rgba(205,127,50,.40)",

    },


    prestigeIII: {

        background: "#252525",

        border: "#C0C0C0",

        text: "#FFFFFF",

        glow: "rgba(192,192,192,.40)",

    },


    prestigeIV: {

        background: "#352E12",

        border: "#FFD700",

        text: "#FFF3B0",

        glow: "rgba(255,215,0,.45)",

    },


    prestigeV: {

        background: "#242424",

        border: "#E5E4E2",

        text: "#FFFFFF",

        glow: "rgba(229,228,226,.45)",

    },


    prestigeVI: {

        background: "#102A20",

        border: "#10B981",

        text: "#D1FAE5",

        glow: "rgba(16,185,129,.45)",

    },


    prestigeVII: {

        background: "#101F3A",

        border: "#3B82F6",

        text: "#DBEAFE",

        glow: "rgba(59,130,246,.45)",

    },


    prestigeVIII: {

        background: "#351313",

        border: "#EF4444",

        text: "#FECACA",

        glow: "rgba(239,68,68,.45)",

    },


    prestigeIX: {

        background: "#111111",

        border: "#6B7280",

        text: "#E5E7EB",

        glow: "rgba(107,114,128,.55)",

    },


    prestigeX: {

        background: "#0B0B0B",

        border: "#A3E635",

        text: "#ECFCCB",

        glow: "rgba(163,230,53,.65)",

    },


};