export default function FooterBottom() {
    return (
        <div
            className="
                mt-16

                flex
                flex-col

                items-center
                justify-between

                gap-4

                border-t
                border-white/10

                pt-8

                text-center

                text-sm

                text-zinc-500

                md:flex-row

                md:text-left
            "
        >
            <p>
                © {new Date().getFullYear()} BloodyLP.
                Alle Rechte vorbehalten.
            </p>

            <p
                className="
                    tracking-wide
                "
            >
                Version <span className="text-lime-400">1.0</span> ·
                Die Reise beginnt hier.
            </p>
        </div>
    );
}