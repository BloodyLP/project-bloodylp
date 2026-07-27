interface LegalHeroProps {
    title: string;
    subtitle: string;
}

export default function LegalHero({
    title,
    subtitle,
}: LegalHeroProps) {
    return (
        <section
            className="
                relative
                overflow-hidden
                border-b
                border-white/10
                bg-gradient-to-b
                from-zinc-950
                via-black
                to-black
            "
        >
            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_top,rgba(163,230,53,0.10),transparent_65%)]
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    flex
                    max-w-7xl
                    flex-col
                    items-center
                    px-6
                    pb-20
                    pt-40
                    text-center
                "
            >
                <span
                    className="
                        mb-5
                        rounded-full
                        border
                        border-lime-400/25
                        bg-lime-400/10
                        px-4
                        py-2
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.35em]
                        text-lime-400
                    "
                >
                    BloodyLP
                </span>

                <h1
                    className="
                        font-display
                        text-5xl
                        font-black
                        uppercase
                        tracking-[0.08em]
                        text-white
                        md:text-7xl
                    "
                >
                    {title}
                </h1>

                <p
                    className="
                        mt-8
                        max-w-3xl
                        text-lg
                        leading-8
                        text-zinc-400
                        md:text-xl
                    "
                >
                    {subtitle}
                </p>
            </div>
        </section>
    );
}