import ContentCreatorHero from "@/components/content-creator/ContentCreatorHero";
import ContentCreatorWorld from "@/components/content-creator/ContentCreatorWorld";
import ContentCreatorShowcase from "@/components/content-creator/ContentCreatorShowCase";
import ContentCreatorExperience from "@/components/content-creator/ContentCreatorExperience";
import ContentCreatorCommunity from "@/components/content-creator/ContentCreatorCommunity";
import ContentCreatorYouTube from "@/components/content-creator/ContentCreatorYoutube";



export default function ContentCreatorPage() {

    return (

        <main>

            {/* ================================= */}
            {/* HERO */}
            {/* ================================= */}

            <ContentCreatorHero />


            {/* ================================= */}
            {/* MEINE WELT */}
            {/* ================================= */}

            <ContentCreatorWorld />


            {/* ================================= */}
            {/* SHOWCASE */}
            {/* ================================= */}

            <ContentCreatorShowcase />


            {/* ================================= */}
            {/* LIVE EXPERIENCE */}
            {/* ================================= */}

            <ContentCreatorExperience />


            {/* ================================= */}
{/* YOUTUBE */}
{/* ================================= */}

<ContentCreatorYouTube />


{/* ================================= */}
{/* COMMUNITY */}
{/* ================================= */}

<ContentCreatorCommunity />

        </main>

    );

}