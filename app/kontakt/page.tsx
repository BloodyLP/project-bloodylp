import ContactHero from "@/components/contact/ContactHero";
import ContactOptions from "@/components/contact/ContactOptions";
import ContactForm from "@/components/contact/ContactForm";
import ContactFooter from "@/components/contact/ContactFooter";

export default function KontaktPage() {
    return (
        <main id="top">

            {/* =========================================
                HERO
            ========================================= */}

            <ContactHero />


            {/* =========================================
                KONTAKTMÖGLICHKEITEN
            ========================================= */}

            <ContactOptions />


            {/* =========================================
                ANFRAGE
            ========================================= */}

            <ContactForm />


            {/* =========================================
                ABSCHLUSS
            ========================================= */}

            <ContactFooter />

        </main>
    );
}