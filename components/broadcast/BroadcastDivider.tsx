interface BroadcastDividerProps {
    center?: React.ReactNode;
    className?: string;
}

export default function BroadcastDivider({
    center,
    className = "",
}: BroadcastDividerProps) {
    const line = (
        <div className="relative flex-1 h-[2px] overflow-hidden rounded-full">

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-transparent
                    via-lime-400/70
                    to-transparent
                "
            />

            <div
                className="
                    absolute
                    inset-0
                    blur-[3px]
                    bg-gradient-to-r
                    from-transparent
                    via-lime-400/35
                    to-transparent
                "
            />

        </div>
    );

    return (
        <div className={`flex items-center w-full ${className}`}>
            {line}

            {center && (
                <>
                    <div className="mx-5 shrink-0">
                        {center}
                    </div>

                    {line}
                </>
            )}
        </div>
    );
}