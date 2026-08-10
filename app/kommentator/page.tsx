import CommentatorHero from "@/components/commentator/CommentatorHero";
import CommentatorStations from "@/components/commentator/CommentatorStations";
import CommentatorContact from "@/components/commentator/CommentatorContact";
import CommentatorPhilosophy from "@/components/commentator/CommentatorPhilosophy";
import CommentatorSkills from "@/components/commentator/CommentatorSkills";
import CommentatorShowcase from "@/components/commentator/CommentatorShowcase";

export default function CommentatorPage() {

    return (

        <main>

            {/* ================================= */}
            {/* HERO */}
            {/* ================================= */}

            <CommentatorHero />

             {/* ================================= */}
            {/* PHILOSOPHIE */}
            {/* ================================= */}

            <CommentatorPhilosophy />

{/* ================================= */}
            {/* SKILLS */}
            {/* ================================= */}

            <CommentatorSkills />

            {/* ================================= */}
            {/* STATIONEN */}
            {/* ================================= */}

            <CommentatorStations />

            {/* ================================= */}
            {/* SHOWCASE */}
            {/* ================================= */}

            <CommentatorShowcase />


            {/* ================================= */}
            {/* KONTAKT */}
            {/* ================================= */}

            <CommentatorContact />

        </main>

    );

}