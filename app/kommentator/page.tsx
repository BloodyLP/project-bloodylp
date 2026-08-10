import CommentatorHero from "@/components/commentator/CommentatorHero";
import CommentatorStations from "@/components/commentator/CommentatorStations";
import CommentatorContact from "@/components/commentator/CommentatorContact";

export default function CommentatorPage() {

    return (

        <main>

            {/* ================================= */}
            {/* HERO */}
            {/* ================================= */}

            <CommentatorHero />


            {/* ================================= */}
            {/* STATIONEN */}
            {/* ================================= */}

            <CommentatorStations />


            {/* ================================= */}
            {/* KONTAKT */}
            {/* ================================= */}

            <CommentatorContact />

        </main>

    );

}