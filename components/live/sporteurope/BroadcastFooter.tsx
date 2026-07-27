"use client";

interface BroadcastFooterProps {
    text: string;
}

export default function BroadcastFooter({
    text,
}: BroadcastFooterProps) {
    return (
        <div className="mt-8 flex items-center gap-5">

            <div
                className="
                    h-px
                    flex-1

                    bg-gradient-to-r

                    from-transparent
                    via-lime-400/20
                    to-white/5
                "
            />

            <span
                className="
                    font-ui

                    text-[9px]

                    font-bold

                    uppercase

                    tracking-[0.45em]

                    text-zinc-500

                    whitespace-nowrap
                "
            >
                {text}
            </span>

            <div
                className="
                    h-px
                    flex-1

                    bg-gradient-to-l

                    from-transparent
                    via-lime-400/20
                    to-white/5
                "
            />

        </div>
    );
}