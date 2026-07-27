// =====================================================
// BLOODYLP HOMEPAGE
//
// Font Configuration
//
// Version: 2.0
//
// Bloody Design System
// =====================================================

import localFont from "next/font/local";

// -----------------------------------------------------
// Heading Font
// -----------------------------------------------------

export const headingFont = localFont({
    src: "../../public/fonts/big-shoulders/BigShoulders-VariableFont_opsz,wght.ttf",

    variable: "--font-heading",

    display: "swap",
});

// -----------------------------------------------------
// Body Font
// -----------------------------------------------------

export const bodyFont = localFont({
    src: [
        {
            path: "../../public/fonts/rajdhani/Rajdhani-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/rajdhani/Rajdhani-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/rajdhani/Rajdhani-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/rajdhani/Rajdhani-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/rajdhani/Rajdhani-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],

    variable: "--font-body",

    display: "swap",
});