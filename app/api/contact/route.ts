import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(request: Request) {

    try {

        /* =========================================
           REQUEST
        ========================================= */

        const data =
            await request.json();


        const {
            name,
            email,
            topic,
            project,
            message,
        } = data;


        /* =========================================
           VALIDATION
        ========================================= */

        if (
            !name ||
            !email ||
            !topic ||
            !message
        ) {

            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Bitte fülle alle Pflichtfelder aus.",
                },
                {
                    status: 400,
                }
            );

        }


        /* =========================================
           ENVIRONMENT
        ========================================= */

        const smtpHost =
            process.env.IONOS_SMTP_HOST;

        const smtpPort =
            Number(
                process.env.IONOS_SMTP_PORT || 465
            );

        const smtpUser =
            process.env.IONOS_SMTP_USER;

        const smtpPassword =
            process.env.IONOS_SMTP_PASSWORD;

        const contactTo =
            process.env.IONOS_CONTACT_TO;


        if (
            !smtpHost ||
            !smtpUser ||
            !smtpPassword ||
            !contactTo
        ) {

            console.error(
                "IONOS SMTP Umgebungsvariablen fehlen."
            );


            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Der Mailversand ist momentan nicht korrekt konfiguriert.",
                },
                {
                    status: 500,
                }
            );

        }


        /* =========================================
           SMTP TRANSPORTER
        ========================================= */

        const transporter =
            nodemailer.createTransport({

                host:
                    smtpHost,

                port:
                    smtpPort,

                secure:
                    smtpPort === 465,

                auth: {

                    user:
                        smtpUser,

                    pass:
                        smtpPassword,

                },

            });


        /* =========================================
           MAIL
        ========================================= */

        await transporter.sendMail({

            from: {

                name:
                    "BloodyLP Kontaktformular",

                address:
                    smtpUser,

            },

            to:
                contactTo,

            replyTo:
                email,

            subject:
                `Neue Anfrage: ${topic}`,

            text:
`Neue Anfrage über bloodylp.de

Name:
${name}

E-Mail:
${email}

Thema:
${topic}

Projekt / Event:
${project || "-"}

Nachricht:
${message}
`,

            html:
`
<!DOCTYPE html>

<html lang="de">

<head>

    <meta charset="UTF-8">

    <title>
        Neue Kontaktanfrage
    </title>

</head>

<body
    style="
        margin:0;
        padding:0;
        background:#111214;
        font-family:Arial,Helvetica,sans-serif;
        color:#ffffff;
    "
>

    <div
        style="
            max-width:700px;
            margin:0 auto;
            padding:40px 20px;
        "
    >

        <div
            style="
                padding:32px;
                border:1px solid #292b2e;
                border-radius:20px;
                background:#181a1c;
            "
        >

            <div
                style="
                    margin-bottom:10px;
                    color:#A3E635;
                    font-size:12px;
                    font-weight:bold;
                    letter-spacing:3px;
                "
            >
                BLOODYLP
            </div>


            <h1
                style="
                    margin:0 0 25px;
                    font-size:30px;
                    line-height:1.1;
                "
            >
                Neue Kontaktanfrage
            </h1>


            <div
                style="
                    margin-bottom:25px;
                    padding:18px;
                    border-radius:12px;
                    background:#111214;
                "
            >

                <strong
                    style="color:#A3E635;"
                >
                    Thema
                </strong>

                <div
                    style="
                        margin-top:7px;
                        color:#ffffff;
                    "
                >
                    ${topic}
                </div>

            </div>


            <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                style="
                    border-collapse:collapse;
                    margin-bottom:25px;
                "
            >

                <tr>

                    <td
                        style="
                            padding:10px 0;
                            color:#8d9298;
                            width:150px;
                        "
                    >
                        Name
                    </td>

                    <td
                        style="
                            padding:10px 0;
                            color:#ffffff;
                        "
                    >
                        ${name}
                    </td>

                </tr>


                <tr>

                    <td
                        style="
                            padding:10px 0;
                            color:#8d9298;
                        "
                    >
                        E-Mail
                    </td>

                    <td
                        style="
                            padding:10px 0;
                            color:#ffffff;
                        "
                    >
                        ${email}
                    </td>

                </tr>


                <tr>

                    <td
                        style="
                            padding:10px 0;
                            color:#8d9298;
                        "
                    >
                        Projekt / Event
                    </td>

                    <td
                        style="
                            padding:10px 0;
                            color:#ffffff;
                        "
                    >
                        ${project || "-"}
                    </td>

                </tr>

            </table>


            <div
                style="
                    padding-top:25px;
                    border-top:1px solid #292b2e;
                "
            >

                <div
                    style="
                        margin-bottom:10px;
                        color:#A3E635;
                        font-size:12px;
                        font-weight:bold;
                        letter-spacing:2px;
                    "
                >
                    NACHRICHT
                </div>


                <div
                    style="
                        color:#d6d8da;
                        font-size:15px;
                        line-height:1.7;
                        white-space:pre-wrap;
                    "
                >
                    ${message}
                </div>

            </div>


            <div
                style="
                    margin-top:30px;
                    padding-top:20px;
                    border-top:1px solid #292b2e;
                    color:#686d72;
                    font-size:12px;
                "
            >

                Diese Nachricht wurde über
                <strong>
                    bloodylp.de
                </strong>
                gesendet.

            </div>

        </div>

    </div>

</body>

</html>
`,

        });


        /* =========================================
           SUCCESS
        ========================================= */

        return NextResponse.json(

            {
                success: true,

                message:
                    "Deine Anfrage wurde erfolgreich gesendet.",
            },

            {
                status: 200,
            }

        );


    } catch (error) {

        console.error(
            "Kontaktformular Fehler:",
            error
        );


        return NextResponse.json(

            {
                success: false,

                message:
                    "Beim Senden der Anfrage ist ein Fehler aufgetreten.",
            },

            {
                status: 500,
            }

        );

    }

}