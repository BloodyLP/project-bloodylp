import Navbar from "@/components/layout/Navbar";

import LegalHero from "@/components/legal/LegalHero";
import LegalCard from "@/components/legal/LegalCard";
import LegalSection from "@/components/legal/LegalSection";

export default function ImpressumPage() {
    return (
        <>
            <Navbar />

            <LegalHero
                title="Impressum"
                subtitle="Transparenz und Vertrauen. Nachfolgend findest du alle gesetzlich vorgeschriebenen Angaben gemäß § 5 DDG."
            />

            <main className="bg-black">
                <LegalCard>

                    <LegalSection title="Angaben gemäß § 5 DDG">
                        <p>
                            <strong className="text-white">
                                Alexander Blattmann
                            </strong>
                            <br />
                            c/o RAHFT Management GmbH
                            <br />
                            Schwalbenweg 15
                            <br />
                            15806 Zossen
                        </p>
                    </LegalSection>

                    <LegalSection title="Kontakt">
                        <p>
                            E-Mail:{" "}
                            <a
                                href="mailto:kontakt@bloodylp.de"
                                className="text-lime-400 transition hover:text-lime-300"
                            >
                                kontakt@bloodylp.de
                            </a>
                        </p>
                    </LegalSection>

                    <LegalSection title="Umsatzsteuer-ID">
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß § 27a
                            Umsatzsteuergesetz:
                        </p>

                        <p className="font-semibold text-white">
                            DE437461824
                        </p>
                    </LegalSection>

                    <LegalSection title="Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV">
                        <p>
                            Alexander Blattmann
                            <br />
                            c/o RAHFT Management GmbH
                            <br />
                            Schwalbenweg 15
                            <br />
                            15806 Zossen
                        </p>
                    </LegalSection>

                </LegalCard>
            </main>

        </>
    );
}