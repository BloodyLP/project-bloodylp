"use client";

import { createContext, useContext, useMemo, useState } from "react";

import type {
    Decoration,
    DecorationCategory,
} from "./types";

interface DecorationFiltersContextValue {

    category: DecorationCategory | "all";

    search: string;

    showLocked: boolean;

    setCategory: (
        category: DecorationCategory | "all"
    ) => void;

    setSearch: (
        value: string
    ) => void;

    setShowLocked: (
        value: boolean
    ) => void;

    filterDecorations: (
        decorations: Decoration[]
    ) => Decoration[];

}

const DecorationFiltersContext =
    createContext<DecorationFiltersContextValue | null>(
        null
    );

export function DecorationFiltersProvider({

    children,

}:{

    children: React.ReactNode;

}){

    const [

        category,

        setCategory,

    ] = useState<DecorationCategory | "all">("all");

    const [

        search,

        setSearch,

    ] = useState("");

    const [

        showLocked,

        setShowLocked,

    ] = useState(true);

    const value = useMemo(

        ()=>({

            category,

            search,

            showLocked,

            setCategory,

            setSearch,

            setShowLocked,

            filterDecorations(

                decorations: Decoration[]

            ){

                return decorations.filter(

                    decoration=>{

                        if(

                            category!=="all" &&

                            decoration.category!==category

                        ){

                            return false;

                        }

                        if(

                            !showLocked &&

                            !decoration.unlocked

                        ){

                            return false;

                        }

                        if(

                            search.trim().length>0

                        ){

                            const text =

                                `${decoration.title}
${decoration.subtitle}
${decoration.code}`

                                .toLowerCase();

                            if(

                                !text.includes(

                                    search.toLowerCase()

                                )

                            ){

                                return false;

                            }

                        }

                        return true;

                    }

                );

            },

        }),

        [

            category,

            search,

            showLocked,

        ]

    );

    return(

        <DecorationFiltersContext.Provider

            value={value}

        >

            {children}

        </DecorationFiltersContext.Provider>

    );

}

export function useDecorationFilters(){

    const context =

        useContext(

            DecorationFiltersContext

        );

    if(!context){

        throw new Error(

            "DecorationFiltersProvider missing."

        );

    }

    return context;

}