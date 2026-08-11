import CommentatorHero from "@/components/commentator/CommentatorHero";
import CommentatorStations from "@/components/commentator/CommentatorStations";
import CommentatorContact from "@/components/commentator/CommentatorContact";
import CommentatorSkills from "@/components/commentator/CommentatorSkills";
import CommentatorShowcase from "@/components/commentator/CommentatorShowcase";
import CommentatorIdentity from "@/components/commentator/CommentatorIdentity";


export default function CommentatorPage() {

    return (

        <main>

            {/* ================================= */}
            {/* HERO */}
            {/* ================================= */}

            <CommentatorHero />


            {/* ================================= */}
            {/* IDENTITY */}
            {/* ================================= */}

            <CommentatorIdentity />


            {/* ================================= */}
            {/* SKILLS */}
            {/* ================================= */}

            <CommentatorSkills />


            {/* ================================= */}
            {/* STATIONEN */}
            {/* ================================= */}

            <section id="stationen">

                <CommentatorStations />

            </section>


            {/* ================================= */}
            {/* SHOWCASE */}
            {/* ================================= */}

            <CommentatorShowcase />


            {/* ================================= */}
            {/* KONTAKT */}
            {/* ================================= */}

            <section id="kontakt">

                <CommentatorContact />

            </section>

        </main>

    );

}