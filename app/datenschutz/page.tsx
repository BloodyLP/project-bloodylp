// =====================================================
// BLOODYLP HOMEPAGE
//
// Datenschutz
//
// Version: 2.0
//
// Bloody Design System
// =====================================================

import Navbar from "@/components/layout/Navbar";

import LegalHero from "@/components/legal/LegalHero";
import LegalCard from "@/components/legal/LegalCard";
import LegalSection from "@/components/legal/LegalSection";

export default function DatenschutzPage() {
    return (
        <>
            <Navbar />

            <LegalHero
                title="Datenschutzerklärung"
                subtitle="Der Schutz deiner personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir dich transparent darüber, welche Daten beim Besuch dieser Website verarbeitet werden und welche Rechte dir zustehen."
            />

            <main className="bg-black">
                <LegalCard>

                    <div className="mb-12 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-6">

                        <h2 className="mb-3 text-xl font-bold text-lime-400">
                            Datenschutzhinweis
                        </h2>

                        <p className="leading-8 text-zinc-300">
                            Wir behandeln deine personenbezogenen Daten vertraulich
                            und entsprechend den gesetzlichen Datenschutzvorschriften
                            sowie dieser Datenschutzerklärung. Diese Seite informiert
                            dich darüber, welche Daten beim Besuch unserer Website
                            verarbeitet werden und welche Rechte dir nach der
                            Datenschutz-Grundverordnung (DSGVO) zustehen.
                        </p>

                    </div>

                    <LegalSection title="1. Datenschutz auf einen Blick">

                        <h3 className="mb-3 text-lg font-semibold text-white">
                            Allgemeine Hinweise
                        </h3>

                        <p>
                            Die folgenden Hinweise geben einen einfachen Überblick
                            darüber, was mit deinen personenbezogenen Daten passiert,
                            wenn du diese Website besuchst. Personenbezogene Daten
                            sind alle Daten, mit denen du persönlich identifiziert
                            werden kannst.
                        </p>

                        <p className="mt-4">
                            Ausführliche Informationen findest du in den nachfolgenden
                            Abschnitten dieser Datenschutzerklärung.
                        </p>

                        <h3 className="mt-10 mb-3 text-lg font-semibold text-white">
                            Datenerfassung auf dieser Website
                        </h3>

                        <h4 className="mb-2 text-base font-semibold text-white">
                            Wer ist verantwortlich?
                        </h4>

                        <p>
                            Die Datenverarbeitung auf dieser Website erfolgt durch
                            den Websitebetreiber. Die Kontaktdaten findest du im
                            Abschnitt „Verantwortliche Stelle“ dieser
                            Datenschutzerklärung.
                        </p>

                        <h4 className="mt-8 mb-2 text-base font-semibold text-white">
                            Wie erfassen wir deine Daten?
                        </h4>

                        <p>
                            Personenbezogene Daten werden einerseits dadurch
                            erhoben, dass du sie uns selbst mitteilst, beispielsweise
                            per E-Mail.
                        </p>

                        <p className="mt-4">
                            Darüber hinaus werden beim Besuch der Website
                            automatisch technische Informationen durch unsere
                            IT-Systeme erfasst. Hierbei handelt es sich
                            beispielsweise um Browsertyp, Betriebssystem,
                            Uhrzeit des Seitenaufrufs oder die IP-Adresse.
                        </p>

                        <h4 className="mt-8 mb-2 text-base font-semibold text-white">
                            Wofür verwenden wir deine Daten?
                        </h4>

                        <p>
                            Ein Teil der erhobenen Daten dient der technischen
                            Bereitstellung und sicheren Funktion unserer Website.
                            Weitere Daten können verarbeitet werden, sofern dies
                            zur Bearbeitung deiner Kontaktaufnahme erforderlich
                            ist.
                        </p>

                        <h4 className="mt-8 mb-2 text-base font-semibold text-white">
                            Welche Rechte hast du?
                        </h4>

                        <p>
                            Du hast jederzeit das Recht auf Auskunft über deine
                            gespeicherten personenbezogenen Daten sowie auf
                            Berichtigung, Löschung oder Einschränkung der
                            Verarbeitung. Außerdem kannst du eine erteilte
                            Einwilligung jederzeit widerrufen und dich bei der
                            zuständigen Datenschutzaufsichtsbehörde beschweren.
                        </p>

                    </LegalSection>

                                        <LegalSection title="2. Hosting">

                        <h3 className="mb-3 text-lg font-semibold text-white">
                            Hosting durch IONOS
                        </h3>

                        <p>
                            Die Inhalte dieser Website werden bei der IONOS SE,
                            Elgendorfer Straße 57, 56410 Montabaur, Deutschland,
                            gehostet.
                        </p>

                        <p className="mt-4">
                            Beim Aufruf unserer Website werden durch IONOS
                            automatisch sogenannte Server-Logfiles erfasst. Dazu
                            gehören unter anderem:
                        </p>

                        <ul className="mt-6 list-disc space-y-2 pl-6">
                            <li>IP-Adresse des Besuchers</li>
                            <li>Datum und Uhrzeit des Zugriffs</li>
                            <li>Browsertyp und Browserversion</li>
                            <li>Betriebssystem</li>
                            <li>Referrer-URL</li>
                            <li>Hostname des zugreifenden Rechners</li>
                        </ul>

                        <p className="mt-6">
                            Diese Daten dienen ausschließlich der technischen
                            Bereitstellung, Stabilität und Sicherheit unserer
                            Website.
                        </p>

                        <p className="mt-4">
                            Weitere Informationen findest du in der
                            Datenschutzerklärung von IONOS:
                        </p>

                        <p className="mt-4">
                            <a
                                href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lime-400 transition hover:text-lime-300"
                            >
                                https://www.ionos.de/terms-gtc/datenschutzerklaerung/
                            </a>
                        </p>

                        <h3 className="mt-10 mb-3 text-lg font-semibold text-white">
                            Auftragsverarbeitung
                        </h3>

                        <p>
                            Mit IONOS wurde ein Vertrag zur Auftragsverarbeitung
                            (AVV) gemäß Art. 28 DSGVO geschlossen. Dadurch wird
                            sichergestellt, dass personenbezogene Daten
                            ausschließlich nach unseren Weisungen und unter
                            Einhaltung der geltenden Datenschutzvorschriften
                            verarbeitet werden.
                        </p>

                    </LegalSection>

                    <LegalSection title="3. Verantwortliche Stelle">

                        <p>
                            Verantwortlich für die Verarbeitung
                            personenbezogener Daten auf dieser Website ist:
                        </p>

                        <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950 p-6">

                            <p className="font-semibold text-white">
                                Alexander Blattmann
                            </p>

                            <p className="mt-3">
                                c/o RAHFT Management GmbH
                                <br />
                                Schwalbenweg 15
                                <br />
                                15806 Zossen
                            </p>

                            <p className="mt-6">
                                E-Mail:
                                <br />

                                <a
                                    href="mailto:kontakt@bloodylp.de"
                                    className="text-lime-400 transition hover:text-lime-300"
                                >
                                    kontakt@bloodylp.de
                                </a>

                            </p>

                        </div>

                        <p className="mt-6">
                            Verantwortliche Stelle ist die natürliche oder
                            juristische Person, die allein oder gemeinsam mit
                            anderen über die Zwecke und Mittel der Verarbeitung
                            personenbezogener Daten entscheidet.
                        </p>

                    </LegalSection>

                    <LegalSection title="4. Speicherdauer">

                        <p>
                            Personenbezogene Daten werden nur so lange
                            gespeichert, wie dies zur Erfüllung des jeweiligen
                            Zwecks erforderlich ist oder gesetzliche
                            Aufbewahrungspflichten bestehen.
                        </p>

                        <p className="mt-4">
                            Entfällt der Zweck der Verarbeitung oder läuft eine
                            gesetzliche Aufbewahrungsfrist ab, werden die
                            betreffenden Daten entsprechend den gesetzlichen
                            Vorschriften gelöscht oder in ihrer Verarbeitung
                            eingeschränkt.
                        </p>

                    </LegalSection>

                    <LegalSection title="5. Rechtsgrundlagen der Datenverarbeitung">

                        <p>
                            Die Verarbeitung personenbezogener Daten erfolgt –
                            je nach Art und Zweck der Verarbeitung – auf
                            Grundlage der Datenschutz-Grundverordnung (DSGVO).
                        </p>

                        <div className="mt-6 space-y-4 rounded-xl border border-zinc-800 bg-zinc-950 p-6">

                            <div>
                                <span className="font-semibold text-white">
                                    Art. 6 Abs. 1 lit. a DSGVO
                                </span>

                                <p className="mt-1">
                                    Verarbeitung auf Grundlage einer
                                    Einwilligung.
                                </p>
                            </div>

                            <div>
                                <span className="font-semibold text-white">
                                    Art. 6 Abs. 1 lit. b DSGVO
                                </span>

                                <p className="mt-1">
                                    Verarbeitung zur Erfüllung eines Vertrags
                                    oder vorvertraglicher Maßnahmen.
                                </p>
                            </div>

                            <div>
                                <span className="font-semibold text-white">
                                    Art. 6 Abs. 1 lit. c DSGVO
                                </span>

                                <p className="mt-1">
                                    Verarbeitung aufgrund gesetzlicher
                                    Verpflichtungen.
                                </p>
                            </div>

                            <div>
                                <span className="font-semibold text-white">
                                    Art. 6 Abs. 1 lit. f DSGVO
                                </span>

                                <p className="mt-1">
                                    Verarbeitung auf Grundlage unseres
                                    berechtigten Interesses, insbesondere zur
                                    sicheren und technisch fehlerfreien
                                    Bereitstellung unserer Website.
                                </p>
                            </div>

                        </div>

                    </LegalSection>

                                        <LegalSection title="6. Empfänger personenbezogener Daten">

                        <p>
                            Im Rahmen unserer Geschäftstätigkeit arbeiten wir
                            gegebenenfalls mit externen Dienstleistern zusammen.
                            Eine Übermittlung personenbezogener Daten erfolgt
                            ausschließlich, wenn hierfür eine gesetzliche
                            Grundlage besteht oder dies zur Erfüllung eines
                            Vertrages erforderlich ist.
                        </p>

                        <p className="mt-4">
                            Werden externe Dienstleister als sogenannte
                            Auftragsverarbeiter eingesetzt, erfolgt die
                            Verarbeitung ausschließlich auf Grundlage eines
                            Vertrages gemäß Art. 28 DSGVO.
                        </p>

                    </LegalSection>

                    <LegalSection title="7. Widerruf einer Einwilligung">

                        <p>
                            Viele Datenverarbeitungsvorgänge sind nur mit deiner
                            ausdrücklichen Einwilligung möglich.
                        </p>

                        <p className="mt-4">
                            Eine bereits erteilte Einwilligung kannst du
                            jederzeit mit Wirkung für die Zukunft widerrufen.
                            Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                            Verarbeitung bleibt hiervon unberührt.
                        </p>

                    </LegalSection>

                    <LegalSection title="8. Widerspruchsrecht gemäß Art. 21 DSGVO">

                        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-6">

                            <h3 className="mb-4 text-lg font-semibold text-yellow-300">
                                Dein Widerspruchsrecht
                            </h3>

                            <p>
                                Erfolgt die Verarbeitung deiner
                                personenbezogenen Daten auf Grundlage unseres
                                berechtigten Interesses nach Art. 6 Abs. 1 lit.
                                f DSGVO, hast du jederzeit das Recht,
                                Widerspruch gegen diese Verarbeitung einzulegen,
                                sofern sich aus deiner besonderen Situation
                                Gründe ergeben.
                            </p>

                        </div>

                        <p className="mt-6">
                            Werden personenbezogene Daten zum Zwecke der
                            Direktwerbung verarbeitet, kannst du dieser
                            Verarbeitung jederzeit widersprechen. Nach einem
                            Widerspruch werden deine Daten nicht mehr für diese
                            Zwecke verwendet.
                        </p>

                    </LegalSection>

                    <LegalSection title="9. Beschwerderecht">

                        <p>
                            Wenn du der Ansicht bist, dass die Verarbeitung
                            deiner personenbezogenen Daten gegen geltendes
                            Datenschutzrecht verstößt, hast du das Recht,
                            Beschwerde bei einer zuständigen
                            Datenschutzaufsichtsbehörde einzulegen.
                        </p>

                        <p className="mt-4">
                            Dieses Recht besteht unabhängig von anderen
                            verwaltungsrechtlichen oder gerichtlichen
                            Rechtsbehelfen.
                        </p>

                    </LegalSection>

                    <LegalSection title="10. Recht auf Datenübertragbarkeit">

                        <p>
                            Du hast das Recht, personenbezogene Daten, die wir
                            automatisiert auf Grundlage deiner Einwilligung oder
                            zur Vertragserfüllung verarbeiten, in einem
                            gängigen, maschinenlesbaren Format zu erhalten oder
                            an einen anderen Verantwortlichen übertragen zu
                            lassen, soweit dies technisch möglich ist.
                        </p>

                    </LegalSection>

                    <LegalSection title="11. Auskunft, Berichtigung und Löschung">

                        <div className="grid gap-6 md:grid-cols-3">

                            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">

                                <h3 className="font-semibold text-white">
                                    Auskunft
                                </h3>

                                <p className="mt-3">
                                    Du hast jederzeit Anspruch auf Auskunft über
                                    die zu deiner Person gespeicherten Daten.
                                </p>

                            </div>

                            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">

                                <h3 className="font-semibold text-white">
                                    Berichtigung
                                </h3>

                                <p className="mt-3">
                                    Unrichtige oder unvollständige Daten können
                                    jederzeit berichtigt werden.
                                </p>

                            </div>

                            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">

                                <h3 className="font-semibold text-white">
                                    Löschung
                                </h3>

                                <p className="mt-3">
                                    Du kannst die Löschung deiner
                                    personenbezogenen Daten verlangen, sofern
                                    keine gesetzlichen
                                    Aufbewahrungspflichten entgegenstehen.
                                </p>

                            </div>

                        </div>

                    </LegalSection>

                    <LegalSection title="12. Recht auf Einschränkung der Verarbeitung">

                        <p>
                            Unter den gesetzlichen Voraussetzungen kannst du die
                            Einschränkung der Verarbeitung deiner
                            personenbezogenen Daten verlangen.
                        </p>

                        <ul className="mt-6 list-disc space-y-3 pl-6">

                            <li>
                                wenn du die Richtigkeit deiner Daten
                                bestreitest,
                            </li>

                            <li>
                                wenn die Verarbeitung unrechtmäßig erfolgt,
                            </li>

                            <li>
                                wenn wir deine Daten nicht mehr benötigen, du
                                sie jedoch zur Geltendmachung oder Verteidigung
                                von Rechtsansprüchen benötigst,
                            </li>

                            <li>
                                wenn du Widerspruch gegen die Verarbeitung
                                eingelegt hast und die Interessenabwägung noch
                                nicht abgeschlossen ist.
                            </li>

                        </ul>

                        <p className="mt-6">
                            Während einer Einschränkung dürfen deine Daten –
                            abgesehen von ihrer Speicherung – nur unter den
                            gesetzlichen Voraussetzungen weiterverarbeitet
                            werden.
                        </p>

                    </LegalSection>

                                        <LegalSection title="13. SSL- bzw. TLS-Verschlüsselung">

                        <p>
                            Diese Website nutzt aus Sicherheitsgründen und zum
                            Schutz der Übertragung vertraulicher Inhalte eine
                            SSL- bzw. TLS-Verschlüsselung.
                        </p>

                        <p className="mt-4">
                            Eine verschlüsselte Verbindung erkennst du daran,
                            dass die Adresszeile deines Browsers mit
                            <span className="font-semibold text-white">
                                {" "}https://
                            </span>
                            beginnt und ein Schloss-Symbol angezeigt wird.
                        </p>

                        <p className="mt-4">
                            Dadurch können Daten, die du an uns übermittelst,
                            nicht von unbefugten Dritten mitgelesen werden.
                        </p>

                    </LegalSection>

                    <LegalSection title="14. Cookies">

                        <div className="rounded-xl border border-lime-400/20 bg-lime-400/5 p-6">

                            <h3 className="mb-3 text-lg font-semibold text-lime-400">
                                Keine Analyse- oder Marketing-Cookies
                            </h3>

                            <p>
                                Unsere Website verwendet derzeit keine Analyse-,
                                Marketing- oder Tracking-Cookies. Es kommen
                                keine Dienste wie Google Analytics, Meta Pixel
                                oder vergleichbare Technologien zum Einsatz.
                            </p>

                        </div>

                        <p className="mt-6">
                            Sofern technisch notwendige Cookies durch das
                            Hosting oder das eingesetzte Framework verwendet
                            werden, dienen diese ausschließlich der sicheren und
                            fehlerfreien Bereitstellung der Website.
                        </p>

                        <p className="mt-4">
                            Eine Auswertung deines Surfverhaltens zu
                            Werbe- oder Marketingzwecken findet nicht statt.
                        </p>

                    </LegalSection>

                    <LegalSection title="15. Kontaktaufnahme per E-Mail">

                        <p>
                            Wenn du uns per E-Mail kontaktierst, werden die von
                            dir übermittelten personenbezogenen Daten
                            ausschließlich zur Bearbeitung deiner Anfrage
                            verarbeitet.
                        </p>

                        <p className="mt-4">
                            Eine Weitergabe deiner Daten an Dritte erfolgt nicht,
                            sofern keine gesetzliche Verpflichtung besteht oder
                            dies zur Bearbeitung deiner Anfrage erforderlich ist.
                        </p>

                        <p className="mt-4">
                            Die Daten werden gelöscht, sobald deine Anfrage
                            abschließend bearbeitet wurde und keine gesetzlichen
                            Aufbewahrungspflichten mehr bestehen.
                        </p>

                    </LegalSection>

                    <LegalSection title="16. Aktualität dieser Datenschutzerklärung">

                        <p>
                            Wir behalten uns vor, diese Datenschutzerklärung
                            anzupassen, wenn dies aufgrund geänderter
                            gesetzlicher Vorgaben oder technischer Änderungen an
                            unserer Website erforderlich wird.
                        </p>

                        <p className="mt-4">
                            Es gilt jeweils die auf dieser Website veröffentlichte
                            aktuelle Version.
                        </p>

                    </LegalSection>

                    <div className="mt-16 rounded-xl border border-zinc-800 bg-zinc-950 p-6 text-center">

                        <p className="text-sm text-zinc-400">
                            Grundlage dieser Datenschutzerklärung ist die für
                            diese Website individuell erstellte Vorlage von
                            eRecht24, die an die tatsächliche technische
                            Umsetzung der Website angepasst wurde.
                        </p>

                    </div>

                </LegalCard>
            </main>
        </>
    );
}