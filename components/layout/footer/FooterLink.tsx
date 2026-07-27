import Link from "next/link";

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function FooterLink({
    href,
    children,
}: FooterLinkProps) {
    return (
        <Link
            href={href}
            className="
                group

                inline-flex
                w-fit
                items-center

                py-1

                text-sm
                md:text-[15px]

                font-medium

                text-zinc-400

                transition-all
                duration-300

                hover:text-white
            "
        >
            <span
                className="
                    mr-2

                    h-[2px]
                    w-0

                    rounded-full

                    bg-lime-400

                    transition-all
                    duration-300

                    group-hover:w-4
                "
            />

            <span
                className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                "
            >
                {children}
            </span>
        </Link>
    );
}