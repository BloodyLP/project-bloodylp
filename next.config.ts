// =====================================================
// BLOODYLP HOMEPAGE
//
// Next.js Configuration
//
// Version: 2.0
//
// Bloody Design System
// =====================================================

import type { NextConfig } from "next";

import { securityHeaders } from "@/lib/security/headers";

const nextConfig: NextConfig = {
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "static-cdn.jtvnw.net",
            },
            {
                protocol: "https",
                hostname: "i.ytimg.com",
            },
        ],
    },

    async headers() {
        return [
            {
                source: "/(.*)",
                headers: securityHeaders,
            },
        ];
    },
};

export default nextConfig;