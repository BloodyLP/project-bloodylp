interface IconProps {
    className?: string;
}

export default function YoutubeIcon({
    className = "",
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C18.9 3.2 12 3.2 12 3.2s-6.9 0-9.1.6C1.7 4.1.8 5 .5 6.2 0 8.4 0 12 0 12s0 3.6.5 5.8c.3 1.2 1.2 2.1 2.4 2.4 2.2.6 9.1.6 9.1.6s6.9 0 9.1-.6c1.2-.3 2.1-1.2 2.4-2.4.5-2.2.5-5.8.5-5.8s0-3.6-.5-5.8ZM9.6 15.6V8.4L16 12l-6.4 3.6Z" />
        </svg>
    );
}