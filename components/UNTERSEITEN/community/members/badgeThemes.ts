export type BadgeTheme = {

    background:string;

    border:string;

    text:string;

    glow:string;

};



export const badgeThemes:Record<string,BadgeTheme> = {


    mannschaften:{


        background:"#242424",

        border:"#6B7280",

        text:"#F3F4F6",

        glow:"rgba(107,114,128,.35)",


    },





    unteroffiziere:{


        background:"#3D2A18",

        border:"#CD7F32",

        text:"#FFD8A8",

        glow:"rgba(205,127,50,.35)",


    },





    portepee:{


        background:"#3A3212",

        border:"#EAB308",

        text:"#FFF3B0",

        glow:"rgba(234,179,8,.35)",


    },





    offiziere:{


        background:"#2C313A",

        border:"#E5E7EB",

        text:"#FFFFFF",

        glow:"rgba(229,231,235,.35)",


    },





    stabsoffiziere:{


        background:"#351313",

        border:"#DC2626",

        text:"#FECACA",

        glow:"rgba(220,38,38,.35)",


    },





    generale:{


        background:"#3A2A00",

        border:"#EAB308",

        text:"#FFF3B0",

        glow:"rgba(234,179,8,.45)",


    },





    prestigeI:{


        background:"#252525",

        border:"#9CA3AF",

        text:"#F9FAFB",

        glow:"rgba(156,163,175,.35)",


    },





    prestigeII:{


        background:"#3D2A18",

        border:"#CD7F32",

        text:"#FFD8A8",

        glow:"rgba(205,127,50,.35)",


    },





    prestigeIII:{


        background:"#303030",

        border:"#C0C0C0",

        text:"#F8FAFC",

        glow:"rgba(192,192,192,.45)",


    },





    prestigeX: {

    background:"#111111",

    border:"#A3E635",

    text:"#ECFCCB",

    glow:"rgba(163,230,53,.55)",

},





    zivilisten:{


        background:"#202020",

        border:"#9CA3AF",

        text:"#F9FAFB",

        glow:"rgba(156,163,175,.35)",


    },


};