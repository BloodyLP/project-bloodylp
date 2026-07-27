interface FooterColumnProps {
    children: React.ReactNode;
}

export default function FooterColumn({
    children,
}: FooterColumnProps) {
    return (
        <div
            className="
                flex
                flex-col

                gap-2

                min-w-[170px]
            "
        >
            {children}
        </div>
    );
}