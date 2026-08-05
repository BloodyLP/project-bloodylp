/**
 * ============================================
 * BloodyArmy
 * ============================================
 *
 * Theme CSS Variables
 *
 * ============================================
 */

import type { CSSProperties } from "react";

import type {

    OrganizationTheme,

} from "./types";

export function createThemeVariables(

    theme: OrganizationTheme

): CSSProperties {

    return {

        "--accent": theme.accent,

        "--accent-light": theme.accentLight,

        "--accent-soft": theme.accentSoft,

        "--accent-soft-2": theme.accentSoft2,

        "--accent-border": theme.border,

        "--accent-glow": theme.glow,

        "--accent-glow-soft": theme.glowSoft,

        "--button-text": theme.buttonText,

        "--card": theme.card,

    } as CSSProperties;

}