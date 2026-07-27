// =====================================================
// BLOODYLP HOMEPAGE
//
// Environment
//
// Version: 1.0
// =====================================================

function required(value: string | undefined, name: string) {
    if (!value) {
        throw new Error(
            `Missing environment variable: ${name}`
        );
    }

    return value;
}

export const ENV = {
    NEXT_PUBLIC_SITE_URL: required(
        process.env.NEXT_PUBLIC_SITE_URL,
        "NEXT_PUBLIC_SITE_URL"
    ),
};