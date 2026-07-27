// =====================================================
// BLOODYLP HOMEPAGE
//
// Site Configuration
//
// Version: 1.0
//
// Bloody Design System
// =====================================================

export const SITE = {
    // -------------------------------------------------
    // Localization
    // -------------------------------------------------

    language: "de",
    locale: "de-DE",
    timezone: "Europe/Berlin",

    // -------------------------------------------------
    // Appearance
    // -------------------------------------------------

    defaultTheme: "dark",

    themeColor: "#A3E635",

    // -------------------------------------------------
    // Features
    // -------------------------------------------------

    enableAnimations: true,
    enableMotionEffects: true,
    enableViewTransitions: true,
    enableScrollRestoration: true,

    enableStructuredData: true,

    enableAnalytics: false,
    enableCookieBanner: false,

    maintenanceMode: false,

    // -------------------------------------------------
    // Content
    // -------------------------------------------------

    postsPerPage: 12,

    maxContentWidth: "1280px",
} as const;