interface LegalSectionProps {
    title: string;
    children: React.ReactNode;
}

export default function LegalSection({
    title,
    children,
}: LegalSectionProps) {
    return (
        <section className="mb-10 last:mb-0">
            <h2
                className="
                    mb-5
                    text-2xl
                    font-bold
                    text-white
                "
            >
                {title}
            </h2>

            <div
                className="
                    space-y-3
                    text-[17px]
                    leading-8
                    text-zinc-400
                "
            >
                {children}
            </div>
        </section>
    );
}