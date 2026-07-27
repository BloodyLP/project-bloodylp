import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/footer/Footer";

import LegalHero from "@/components/legal/LegalHero";
import LegalCard from "@/components/legal/LegalCard";
import LegalSection from "@/components/legal/LegalSection";

export default function KontaktPage() {
    return (
        <>
            <Navbar />

            <LegalHero
                title="Kontakt"
                subtitle="Du hast Fragen, möchtest zusammenarbeiten oder ein Projekt besprechen? Ich freue mich auf deine Nachricht."
            />

            <main className="bg-black">
                <LegalCard>

                    <LegalSection title="E-Mail">
                        <p>
                            Für geschäftliche Anfragen erreichst du mich jederzeit unter:
                        </p>

                        <p className="mt-3">
                            <a
                                href="mailto:kontakt@bloodylp.de"
                                className="font-semibold text-lime-400 transition hover:text-lime-300"
                            >
                                kontakt@bloodylp.de
                            </a>
                        </p>
                    </LegalSection>

                    <LegalSection title="Social Media">
                        <p>
                            Du findest mich außerdem auf Twitch, YouTube,
                            Instagram, TikTok und Discord. Die entsprechenden
                            Links findest du im Footer dieser Website.
                        </p>
                    </LegalSection>

                    <LegalSection title="Antwortzeit">
                        <p>
                            Ich bemühe mich, alle Anfragen innerhalb von
                            24 bis 48 Stunden zu beantworten.
                        </p>
                    </LegalSection>

                </LegalCard>
            </main>

            <Footer />
        </>
    );
}