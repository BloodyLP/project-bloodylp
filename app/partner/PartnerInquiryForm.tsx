"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

const cooperationOptions = [
    "Sponsoring / Partnerschaft",
    "Produktplatzierung",
    "Streaming / Twitch",
    "YouTube / Video Content",
    "Social Media / Reels",
    "Eishockey / eSports",
    "Event / Aktivierung",
    "Sonstiges",
];

const budgetOptions = [
    "Noch offen",
    "Bis 500 €",
    "500 – 1.500 €",
    "1.500 – 5.000 €",
    "5.000 – 10.000 €",
    "Über 10.000 €",
];

type FormStatus =
    | "idle"
    | "sending"
    | "success"
    | "error";

export default function PartnerInquiryForm() {
    const [status, setStatus] =
        useState<FormStatus>("idle");

    const [errorMessage, setErrorMessage] =
        useState("");

    async function handleSubmit(
        event: FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setStatus("sending");
        setErrorMessage("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        /*
         * Wichtig:
         *
         * Eine HTML-Checkbox liefert normalerweise
         * den String "on".
         *
         * Wir wandeln diesen hier ausdrücklich in
         * einen echten Boolean um.
         */

        const data = {
            ...Object.fromEntries(
                formData.entries()
            ),

            consent:
                formData.get("consent") === "on",
        };

        try {
            const response = await fetch(
                "/api/partner-inquiry",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify(data),
                }
            );

            let result: {
                ok?: boolean;
                message?: string;
            } = {};

            try {
                result = await response.json();
            } catch {
                result = {};
            }

            if (!response.ok) {
                throw new Error(
                    result.message ||
                        "Die Anfrage konnte nicht gesendet werden."
                );
            }

            /*
             * Formular nur bei erfolgreichem Versand
             * zurücksetzen.
             */

            form.reset();

            setStatus("success");
        } catch (error) {
            console.error(
                "PARTNER FORM ERROR:",
                error
            );

            setStatus("error");

            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Die Anfrage konnte nicht gesendet werden."
            );
        }
    }

    return (
        <section
            id="partner-anfrage"
            className={styles.inquirySection}
        >
            <div className={styles.inquiryGlow} />

            <div className={styles.inquiryInner}>
                {/* ============================================
                    HEADER
                ============================================ */}

                <div
                    className={
                        styles.inquiryHeader
                    }
                >
                    <div>
                        <span
                            className={
                                styles.sectionEyebrow
                            }
                        >
                            PARTNER WERDEN
                        </span>

                        <h2>
                            LASS UNS
                            <span>
                                {" "}
                                ZUSAMMENARBEITEN.
                            </span>
                        </h2>
                    </div>

                    <p>
                        Du hast eine Marke, ein
                        Produkt oder eine Kampagne,
                        die zu BloodyLP passt?
                        Erzähl uns kurz davon. Wir
                        melden uns persönlich und
                        besprechen die passenden
                        Möglichkeiten.
                    </p>
                </div>

                {/* ============================================
                    FORMULAR
                ============================================ */}

                <form
                    className={
                        styles.inquiryForm
                    }
                    onSubmit={handleSubmit}
                    noValidate={false}
                >
                    {/* ========================================
                        01 · KONTAKT
                    ======================================== */}

                    <div
                        className={
                            styles.inquiryFormTopline
                        }
                    >
                        <span>01</span>
                        <p>
                            DEINE KONTAKTDATEN
                        </p>
                    </div>

                    <div
                        className={
                            styles.formGridTwo
                        }
                    >
                        <label
                            className={
                                styles.formField
                            }
                        >
                            <span>
                                VORNAME *
                            </span>

                            <input
                                name="firstName"
                                type="text"
                                autoComplete="given-name"
                                placeholder="Max"
                                required
                                maxLength={80}
                            />
                        </label>

                        <label
                            className={
                                styles.formField
                            }
                        >
                            <span>
                                NACHNAME *
                            </span>

                            <input
                                name="lastName"
                                type="text"
                                autoComplete="family-name"
                                placeholder="Mustermann"
                                required
                                maxLength={80}
                            />
                        </label>
                    </div>

                    <div
                        className={
                            styles.formGridTwo
                        }
                    >
                        <label
                            className={
                                styles.formField
                            }
                        >
                            <span>
                                UNTERNEHMEN / MARKE *
                            </span>

                            <input
                                name="company"
                                type="text"
                                autoComplete="organization"
                                placeholder="Deine Marke"
                                required
                                maxLength={120}
                            />
                        </label>

                        <label
                            className={
                                styles.formField
                            }
                        >
                            <span>
                                E-MAIL *
                            </span>

                            <input
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="name@unternehmen.de"
                                required
                                maxLength={160}
                            />
                        </label>
                    </div>

                    <div
                        className={
                            styles.formGridTwo
                        }
                    >
                        <label
                            className={
                                styles.formField
                            }
                        >
                            <span>
                                TELEFON
                            </span>

                            <input
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                placeholder="Optional"
                                maxLength={50}
                            />
                        </label>

                        <label
                            className={
                                styles.formField
                            }
                        >
                            <span>
                                WEBSITE
                            </span>

                            <input
                                name="website"
                                type="url"
                                autoComplete="url"
                                placeholder="https://..."
                                maxLength={240}
                            />
                        </label>
                    </div>

                    {/* ========================================
                        02 · KOOPERATION
                    ======================================== */}

                    <div
                        className={
                            styles.inquiryFormTopline
                        }
                    >
                        <span>02</span>
                        <p>
                            DEINE KOOPERATION
                        </p>
                    </div>

                    <div
                        className={
                            styles.formGridTwo
                        }
                    >
                        <label
                            className={
                                styles.formField
                            }
                        >
                            <span>
                                KOOPERATIONSART *
                            </span>

                            <select
                                name="cooperation"
                                required
                                defaultValue=""
                            >
                                <option
                                    value=""
                                    disabled
                                >
                                    Bitte auswählen
                                </option>

                                {cooperationOptions.map(
                                    (option) => (
                                        <option
                                            key={
                                                option
                                            }
                                            value={
                                                option
                                            }
                                        >
                                            {option}
                                        </option>
                                    )
                                )}
                            </select>
                        </label>

                        <label
                            className={
                                styles.formField
                            }
                        >
                            <span>
                                BUDGET / RAHMEN
                            </span>

                            <select
                                name="budget"
                                defaultValue=""
                            >
                                {budgetOptions.map(
                                    (option) => (
                                        <option
                                            key={
                                                option
                                            }
                                            value={
                                                option ===
                                                "Noch offen"
                                                    ? ""
                                                    : option
                                            }
                                        >
                                            {option}
                                        </option>
                                    )
                                )}
                            </select>
                        </label>
                    </div>

                    <div
                        className={
                            styles.formGridTwo
                        }
                    >
                        <label
                            className={
                                styles.formField
                            }
                        >
                            <span>
                                GEWÜNSCHTER ZEITRAUM
                            </span>

                            <input
                                name="period"
                                type="text"
                                placeholder="z. B. Oktober – Dezember 2026"
                                maxLength={100}
                            />
                        </label>

                        <label
                            className={
                                styles.formField
                            }
                        >
                            <span>
                                PROJEKT / KAMPAGNE
                            </span>

                            <input
                                name="campaign"
                                type="text"
                                placeholder="Optional"
                                maxLength={160}
                            />
                        </label>
                    </div>

                    {/* ========================================
                        03 · NACHRICHT
                    ======================================== */}

                    <div
                        className={
                            styles.inquiryFormTopline
                        }
                    >
                        <span>03</span>
                        <p>
                            DEINE IDEE
                        </p>
                    </div>

                    <label
                        className={
                            styles.formField
                        }
                    >
                        <span>
                            ERZÄHL UNS VON DEINER IDEE *
                        </span>

                        <textarea
                            name="message"
                            rows={7}
                            placeholder="Was möchtest du mit BloodyLP umsetzen? Welche Marke, welches Produkt oder welche Kampagne steht dahinter?"
                            required
                            minLength={20}
                            maxLength={4000}
                        />
                    </label>

                    {/* ========================================
                        HONEYPOT
                    ======================================== */}

                    <input
                        className={
                            styles.formHoneypot
                        }
                        name="companyWebsite"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                    />

                    {/* ========================================
                        DATENSCHUTZ
                    ======================================== */}

                    <label
                        className={
                            styles.formConsent
                        }
                    >
                        <input
                            name="consent"
                            type="checkbox"
                            value="on"
                            required
                        />

                        <span>
                            Ich habe die
                            Datenschutzhinweise
                            gelesen und stimme
                            der Verarbeitung
                            meiner Angaben zur
                            Bearbeitung meiner
                            Partneranfrage zu. *
                        </span>
                    </label>

                    {/* ========================================
                        STATUS + BUTTON
                    ======================================== */}

                    <div
                        className={
                            styles.formBottom
                        }
                    >
                        <div
                            className={
                                styles.formStatus
                            }
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {status ===
                                "success" && (
                                <span
                                    className={
                                        styles.formSuccess
                                    }
                                >
                                    ANFRAGE GESENDET
                                    — VIELEN DANK!
                                </span>
                            )}

                            {status ===
                                "error" && (
                                <span
                                    className={
                                        styles.formError
                                    }
                                >
                                    {errorMessage}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            className={
                                styles.inquirySubmit
                            }
                            disabled={
                                status ===
                                "sending"
                            }
                        >
                            {status ===
                            "sending"
                                ? "WIRD GESENDET …"
                                : "PARTNERANFRAGE SENDEN"}

                            <span>→</span>
                        </button>
                    </div>

                    <p
                        className={
                            styles.formRequiredNote
                        }
                    >
                        * Pflichtfeld · Wir
                        verwenden deine Angaben
                        ausschließlich zur
                        Bearbeitung deiner
                        Anfrage.
                    </p>
                </form>
            </div>
        </section>
    );
}