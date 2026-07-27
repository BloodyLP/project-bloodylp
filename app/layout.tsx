// =====================================================
// BLOODYLP HOMEPAGE
//
// Root Layout
//
// Version: 3.1
//
// Bloody Design System
// =====================================================

import {
    bodyFont,
    headingFont,
} from "@/lib/config/fonts";

import "./globals.css";

import Script from "next/script";

import Footer from "@/components/layout/footer/Footer";

import { metadata } from "@/lib/seo/metadata";
import {
    personJsonLd,
    websiteJsonLd,
} from "@/lib/seo/structured-data";

export { metadata };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
    lang="de"
    className={`
        ${headingFont.variable}
        ${bodyFont.variable}
        h-full
        antialiased
    `}
>
            <body
                className="
                    min-h-full
                    bg-black
                    text-white
                "
            >
                {children}

                <Footer />

                <Script
                    id="person-jsonld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personJsonLd),
                    }}
                />

                <Script
                    id="website-jsonld"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteJsonLd),
                    }}
                />
            </body>
        </html>
    );
}