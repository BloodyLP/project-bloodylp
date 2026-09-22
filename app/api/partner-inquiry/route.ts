import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_LENGTHS = {
    firstName: 80,
    lastName: 80,
    company: 120,
    email: 160,
    phone: 50,
    website: 240,
    cooperation: 120,
    budget: 80,
    period: 100,
    campaign: 160,
    message: 4000,
} as const;

type InquiryData = {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phone: string;
    website: string;
    cooperation: string;
    budget: string;
    period: string;
    campaign: string;
    message: string;
    companyWebsite?: string;
    consent?: boolean | string;
};

function clean(value: unknown): string {
    return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidOptionalUrl(value: string): boolean {
    if (!value) return true;

    try {
        const url = new URL(value);

        return (
            url.protocol === "http:" ||
            url.protocol === "https:"
        );
    } catch {
        return false;
    }
}

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as Partial<InquiryData>;

        /*
         * ============================================
         * HONEYPOT
         * ============================================
         *
         * Dieses Feld ist für normale Besucher unsichtbar.
         * Wenn es ausgefüllt wurde, behandeln wir die Anfrage
         * als Bot und antworten trotzdem erfolgreich.
         */
        if (clean(body.companyWebsite)) {
            return NextResponse.json(
                { ok: true },
                { status: 200 }
            );
        }

        /*
         * ============================================
         * FORMULARDATEN
         * ============================================
         */

        const data = {
            firstName: clean(body.firstName),
            lastName: clean(body.lastName),
            company: clean(body.company),
            email: clean(body.email),
            phone: clean(body.phone),
            website: clean(body.website),
            cooperation: clean(body.cooperation),
            budget: clean(body.budget),
            period: clean(body.period),
            campaign: clean(body.campaign),
            message: clean(body.message),
        };

        /*
         * ============================================
         * DATENSCHUTZ-CHECK
         * ============================================
         *
         * Wir akzeptieren true sowie "true" und "on".
         * Dadurch ist die API robust gegenüber verschiedenen
         * Formularimplementierungen.
         */

        const consent =
            body.consent === true ||
            body.consent === "true" ||
            body.consent === "on";

        if (!consent) {
            return NextResponse.json(
                {
                    message:
                        "Bitte bestätige die Datenschutzhinweise.",
                },
                { status: 400 }
            );
        }

        /*
         * ============================================
         * PFLICHTFELDER
         * ============================================
         */

        const requiredFields = [
            ["firstName", data.firstName],
            ["lastName", data.lastName],
            ["company", data.company],
            ["email", data.email],
            ["cooperation", data.cooperation],
            ["message", data.message],
        ] as const;

        for (const [field, value] of requiredFields) {
            if (!value) {
                return NextResponse.json(
                    {
                        message: `Bitte fülle das Pflichtfeld „${field}“ aus.`,
                    },
                    { status: 400 }
                );
            }
        }

        /*
         * ============================================
         * E-MAIL VALIDIERUNG
         * ============================================
         */

        if (!isValidEmail(data.email)) {
            return NextResponse.json(
                {
                    message:
                        "Bitte gib eine gültige E-Mail-Adresse ein.",
                },
                { status: 400 }
            );
        }

        /*
         * ============================================
         * WEBSITE VALIDIERUNG
         * ============================================
         */

        if (!isValidOptionalUrl(data.website)) {
            return NextResponse.json(
                {
                    message:
                        "Bitte gib eine gültige Website-Adresse mit http:// oder https:// ein.",
                },
                { status: 400 }
            );
        }

        /*
         * ============================================
         * LÄNGEN-CHECK
         * ============================================
         */

        for (const [field, maxLength] of Object.entries(
            MAX_LENGTHS
        )) {
            const value =
                data[field as keyof typeof data];

            if (value.length > maxLength) {
                return NextResponse.json(
                    {
                        message:
                            `Das Feld „${field}“ ist zu lang.`,
                    },
                    { status: 400 }
                );
            }
        }

        /*
         * ============================================
         * NACHRICHT MINDESTLÄNGE
         * ============================================
         */

        if (data.message.length < 20) {
            return NextResponse.json(
                {
                    message:
                        "Bitte beschreibe deine Kooperationsidee etwas ausführlicher.",
                },
                { status: 400 }
            );
        }

        /*
         * ============================================
         * IONOS SMTP
         * ============================================
         */

        const smtpHost =
            process.env.SMTP_HOST || "smtp.ionos.de";

        const smtpPort = Number(
            process.env.SMTP_PORT || 465
        );

        const smtpUser =
            process.env.SMTP_USER;

        const smtpPassword =
            process.env.SMTP_PASSWORD;

        const recipient =
            process.env.PARTNER_INQUIRY_TO ||
            "kontakt@bloodylp.de";

        if (!smtpUser || !smtpPassword) {
            console.error(
                "PARTNER INQUIRY: SMTP_USER oder SMTP_PASSWORD fehlt."
            );

            return NextResponse.json(
                {
                    message:
                        "Der E-Mail-Versand ist aktuell nicht konfiguriert.",
                },
                { status: 503 }
            );
        }

        /*
         * ============================================
         * SMTP TRANSPORTER
         * ============================================
         */

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
                user: smtpUser,
                pass: smtpPassword,
            },
        });

        /*
         * ============================================
         * SICHERE HTML-WERTE
         * ============================================
         */

        const safe = {
            firstName: escapeHtml(data.firstName),
            lastName: escapeHtml(data.lastName),
            company: escapeHtml(data.company),
            email: escapeHtml(data.email),
            phone: escapeHtml(data.phone),
            website: escapeHtml(data.website),
            cooperation: escapeHtml(data.cooperation),
            budget: escapeHtml(data.budget),
            period: escapeHtml(data.period),
            campaign: escapeHtml(data.campaign),
            message: escapeHtml(data.message),
        };

        const subject =
            `Neue Partneranfrage – ${data.company} – ${data.firstName} ${data.lastName}`;

        /*
         * ============================================
         * HTML E-MAIL
         * ============================================
         */

        const html = `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Neue Partneranfrage</title>
</head>

<body style="
    margin:0;
    padding:0;
    background:#101010;
    font-family:Arial,Helvetica,sans-serif;
    color:#ffffff;
">

    <div style="
        max-width:720px;
        margin:40px auto;
        background:#181818;
        border:1px solid #292929;
    ">

        <div style="
            padding:30px;
            border-bottom:2px solid #39ff14;
        ">

            <div style="
                color:#39ff14;
                font-size:12px;
                font-weight:bold;
                letter-spacing:3px;
            ">
                BLOODYLP
            </div>

            <h1 style="
                margin:10px 0 0;
                font-size:30px;
                color:#ffffff;
            ">
                Neue Partneranfrage
            </h1>

        </div>

        <div style="padding:30px;">

            <h2 style="
                color:#39ff14;
                font-size:16px;
                letter-spacing:1px;
                text-transform:uppercase;
            ">
                Kontaktdaten
            </h2>

            <p style="line-height:1.7;">
                <strong>Name:</strong>
                ${safe.firstName} ${safe.lastName}
                <br>

                <strong>Unternehmen / Marke:</strong>
                ${safe.company}
                <br>

                <strong>E-Mail:</strong>
                <a
                    href="mailto:${safe.email}"
                    style="color:#39ff14;"
                >
                    ${safe.email}
                </a>
                <br>

                <strong>Telefon:</strong>
                ${safe.phone || "–"}
                <br>

                <strong>Website:</strong>
                ${safe.website || "–"}
            </p>

            <hr style="
                border:0;
                border-top:1px solid #333333;
                margin:30px 0;
            ">

            <h2 style="
                color:#39ff14;
                font-size:16px;
                letter-spacing:1px;
                text-transform:uppercase;
            ">
                Kooperation
            </h2>

            <p style="line-height:1.7;">
                <strong>Kooperationsart:</strong>
                ${safe.cooperation}
                <br>

                <strong>Budget / Rahmen:</strong>
                ${safe.budget || "Noch offen"}
                <br>

                <strong>Zeitraum:</strong>
                ${safe.period || "–"}
                <br>

                <strong>Projekt / Kampagne:</strong>
                ${safe.campaign || "–"}
            </p>

            <hr style="
                border:0;
                border-top:1px solid #333333;
                margin:30px 0;
            ">

            <h2 style="
                color:#39ff14;
                font-size:16px;
                letter-spacing:1px;
                text-transform:uppercase;
            ">
                Nachricht
            </h2>

            <div style="
                background:#101010;
                padding:20px;
                border-left:3px solid #39ff14;
                line-height:1.7;
                white-space:pre-wrap;
            ">
                ${safe.message}
            </div>

        </div>

        <div style="
            padding:20px 30px;
            background:#111111;
            color:#777777;
            font-size:12px;
        ">
            Diese Anfrage wurde über das Partnerformular
            auf bloodylp.de gesendet.
        </div>

    </div>

</body>
</html>
`;

        /*
         * ============================================
         * TEXT E-MAIL
         * ============================================
         */

        const text = `
Neue Partneranfrage über bloodylp.de

KONTAKTDATEN

Name:
${data.firstName} ${data.lastName}

Unternehmen / Marke:
${data.company}

E-Mail:
${data.email}

Telefon:
${data.phone || "-"}

Website:
${data.website || "-"}


KOOPERATION

Kooperationsart:
${data.cooperation}

Budget / Rahmen:
${data.budget || "Noch offen"}

Zeitraum:
${data.period || "-"}

Projekt / Kampagne:
${data.campaign || "-"}


NACHRICHT

${data.message}


---
Diese Anfrage wurde über das Partnerformular auf bloodylp.de gesendet.
`;

        /*
         * ============================================
         * E-MAIL SENDEN
         * ============================================
         */

        await transporter.sendMail({
            from: smtpUser,
            to: recipient,

            // Antwort geht direkt an den Interessenten
            replyTo: data.email,

            subject,

            text,
            html,
        });

        /*
         * ============================================
         * ERFOLG
         * ============================================
         */

        return NextResponse.json(
            {
                ok: true,
                message:
                    "Deine Partneranfrage wurde erfolgreich gesendet.",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(
            "PARTNER INQUIRY ERROR:",
            error
        );

        return NextResponse.json(
            {
                message:
                    "Beim Versand ist ein Fehler aufgetreten. Bitte versuche es später erneut.",
            },
            { status: 500 }
        );
    }
}