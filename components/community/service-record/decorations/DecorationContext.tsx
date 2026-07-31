"use client";

import {
    createContext,
    useMemo,
    useState,
    type Dispatch,
    type ReactNode,
    type SetStateAction,
} from "react";

import type { Decoration } from "./types";

export interface DecorationContextValue {

    selectedDecoration: Decoration | null;

    setSelectedDecoration: Dispatch<
        SetStateAction<Decoration | null>
    >;

}

export const DecorationContext =
    createContext<DecorationContextValue | null>(
        null
    );

interface DecorationProviderProps {

    children: ReactNode;

}

export function DecorationProvider({
    children,
}: DecorationProviderProps) {

    const [

        selectedDecoration,

        setSelectedDecoration,

    ] = useState<Decoration | null>(null);

    const value = useMemo(
        () => ({
            selectedDecoration,
            setSelectedDecoration,
        }),
        [selectedDecoration]
    );

    return (

        <DecorationContext.Provider value={value}>

            {children}

        </DecorationContext.Provider>

    );

}