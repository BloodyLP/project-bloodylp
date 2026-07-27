interface FooterHeadingProps {
    children: React.ReactNode;
}

export default function FooterHeading({
    children,
}: FooterHeadingProps) {
    return (
        <h3
            className="
                mb-5

                text-xs

                font-black

                uppercase

                tracking-[0.30em]

                text-lime-400
            "
        >
            {children}
        </h3>
    );
}