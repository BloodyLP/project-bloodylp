// =====================================================
// BLOODYLP HOMEPAGE
//
// Security Headers
//
// Version: 1.1
//
// Bloody Design System
// =====================================================

export const securityHeaders = [
    {
        key: "X-DNS-Prefetch-Control",
        value: "on",
    },

    {
        key: "X-Frame-Options",
        value: "DENY",
    },

    {
        key: "X-Content-Type-Options",
        value: "nosniff",
    },

    {
        key: "Referrer-Policy",
        value: "origin-when-cross-origin",
    },

    {
        key: "Permissions-Policy",
        value:
            "camera=(), microphone=(), geolocation=(), browsing-topics=()",
    },

    {
        key: "Cross-Origin-Opener-Policy",
        value: "same-origin",
    },

    {
        key: "Cross-Origin-Resource-Policy",
        value: "same-origin",
    },
];