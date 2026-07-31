"use client";

import { useContext } from "react";

import {
    DecorationContext,
} from "../DecorationContext";

export default function useDecoration() {

    const context = useContext(
        DecorationContext
    );

    if (!context) {

        throw new Error(
            "useDecoration must be used inside a DecorationProvider."
        );

    }

    return context;

}