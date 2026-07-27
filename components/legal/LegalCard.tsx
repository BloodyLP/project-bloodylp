interface LegalCardProps {
    children: React.ReactNode;
}

export default function LegalCard({
    children,
}: LegalCardProps) {
    return (
        <section
            className="
                mx-auto
                -mt-12
                mb-24
                max-w-5xl
                px-6
                relative
                z-10
            "
        >
            <div
                className="
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-8
                    shadow-[0_30px_80px_rgba(0,0,0,.45)]
                    md:p-12
                "
            >
                {children}
            </div>
        </section>
    );
}