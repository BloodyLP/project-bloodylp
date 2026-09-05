"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";


const navItems = [

    {
        label: "HOME",
        href: "/",
    },

    {
    label: "CONTENT CREATOR",
    href: "/content-creator",
},

{
    label: "KOMMENTATOR",
    href: "/kommentator",
},

    {
        label: "COMMUNITY",
        href: "/community",
    },

    {
    label: "NHL 27",
    href: "/nhl27",
},

    {
        label: "LIVE",
        href: "/#live",
    },

    {
        label: "KONTAKT",
        href: "/kontakt",
    },

];


export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();


    useEffect(() => {

        const handleScroll = () => {

            setScrolled(
                window.scrollY > 40
            );

        };


        handleScroll();

        window.addEventListener(
            "scroll",
            handleScroll
        );


        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );

    }, []);


    return (

        <div
            className="
                fixed
                inset-x-0
                top-0
                z-50
                pt-[max(env(safe-area-inset-top),16px)]
                px-5
                md:px-8
            "
        >

            {/* Spotlight */}

            <motion.div

                animate={{

                    opacity: scrolled
                        ? .55
                        : .9,

                    scale: scrolled
                        ? .95
                        : 1,

                }}

                transition={{

                    duration: .45,

                }}

                className="
                    absolute
                    inset-0
                    -z-10
                    rounded-full
                    bg-[radial-gradient(circle_at_top,rgba(163,230,53,.16),transparent_72%)]
                    blur-[95px]
                "

            />


            <motion.header

                transition={{

                    type: "spring",

                    stiffness: 120,

                    damping: 18,

                }}

                className={`

                    mx-auto
                    max-w-7xl
                    overflow-visible
                    xl:overflow-hidden
                    rounded-3xl
                    xl:rounded-full
                    border

                    ${

                        scrolled

                            ? "border-white/10 bg-white/[0.035]"

                            : "border-white/10 bg-white/[0.05]"

                    }

                    backdrop-blur-3xl
                    shadow-[0_18px_55px_rgba(0,0,0,.26)]
                    transition-all
                    duration-500

                `}

            >

                <div

                    className="
                        flex
                        items-center
                        justify-between
                        transition-all
                        duration-500
                        px-7
                        py-2
                        md:px-9
                    "

                >

                    {/* Logo */}

                    <motion.div

                        animate={{

                            scale: menuOpen
                                ? 1.03
                                : 1,

                        }}

                        transition={{

                            duration: 0.25,

                        }}

                    >

                        <Link

                            href="/"

                            onClick={() =>
                                setMenuOpen(false)
                            }

                            className="
                                flex
                                items-center
                                gap-3
                                transition-transform
                                duration-300
                                hover:scale-[1.02]
                            "

                        >

                            <Image

                                src="/logos/bloodylp-logo.png"

                                alt="BloodyLP Logo"

                                width={72}

                                height={72}

                                priority

                            />


                            <div
                                className="
                                    flex
                                    flex-col
                                "
                            >

                                <span

                                    className="
                                        font-display
                                        text-xl
                                        md:text-[2rem]
                                        font-bold
                                        uppercase
                                        tracking-[.18em]
                                        text-white
                                    "

                                >

                                    BLOODYLP

                                </span>


                                <span

                                    className="
                                        font-ui
                                        text-[.55rem]
                                        uppercase
                                        tracking-[.34em]
                                        text-lime-400
                                    "

                                >

                                    Alexander Blattmann

                                </span>

                            </div>

                        </Link>

                    </motion.div>


                    {/* Desktop Navigation */}

                    <nav
                        className="
                            hidden
                            xl:flex
                            items-center
                            gap-3
                        "
                    >

                        {

                            navItems.map(
                                (item) => {

                                    const isActive =

                                        item.href === "/"

                                            ? pathname === "/"

                                            : pathname.startsWith(
                                                item.href
                                            );


                                    return (

                                        <Link

                                            key={item.label}

                                            href={item.href}

                                            className={`

                                                group
                                                relative
                                                rounded-full
                                                px-5
                                                py-3
                                                font-ui
                                                text-[1rem]
                                                font-bold
                                                uppercase
                                                tracking-[.14em]
                                                transition-all
                                                duration-300
                                                ease-out

                                                ${

                                                    isActive

                                                        ? `

                                                            border
                                                            border-lime-400/30
                                                            bg-lime-400/10
                                                            text-lime-300
                                                            shadow-[0_0_24px_rgba(163,230,53,.12)]

                                                        `

                                                        : `

                                                            border
                                                            border-transparent
                                                            text-zinc-300
                                                            hover:border-white/10
                                                            hover:bg-white/[0.05]
                                                            hover:text-white
                                                            hover:shadow-[0_10px_30px_rgba(0,0,0,.18)]
                                                            hover:scale-[1.03]

                                                        `

                                                }

                                            `}

                                        >

                                            <span
                                                className="
                                                    relative
                                                    z-10
                                                "
                                            >

                                                {item.label}

                                            </span>


                                            <span

                                                className="
                                                    pointer-events-none
                                                    absolute
                                                    inset-0
                                                    rounded-full
                                                    bg-gradient-to-b
                                                    from-white/[0.05]
                                                    to-transparent
                                                    opacity-0
                                                    transition-opacity
                                                    duration-300
                                                    group-hover:opacity-100
                                                "

                                            />

                                        </Link>

                                    );

                                }

                            )

                        }

                    </nav>


                    {/* ===================================================== */}

                    {/* MOBILE BUTTON */}

                    {/* ===================================================== */}

                    <motion.button

                        whileHover={{

                            scale: 1.04,

                        }}

                        whileTap={{

                            scale: 0.92,

                        }}

                        transition={{

                            duration: 0.2,

                        }}

                        onClick={() =>
                            setMenuOpen(
                                !menuOpen
                            )
                        }

                        className="
                            xl:hidden
                            flex
                            items-center
                            justify-center
                            h-11
                            w-11
                            rounded-xl
                            border
                            border-white/10
                            bg-white/[0.05]
                            text-white
                            backdrop-blur-2xl
                            transition-all
                            duration-300
                            hover:border-lime-400/20
                            hover:bg-lime-400/10
                            hover:text-lime-300
                        "

                        aria-label="Navigation öffnen"

                    >

                        <motion.svg

                            animate={{

                                rotate: menuOpen
                                    ? 90
                                    : 0,

                            }}

                            transition={{

                                duration: 0.25,

                            }}

                            xmlns="http://www.w3.org/2000/svg"

                            width="24"

                            height="24"

                            viewBox="0 0 24 24"

                            fill="none"

                            stroke="currentColor"

                            strokeWidth="2.4"

                            strokeLinecap="round"

                            strokeLinejoin="round"

                        >

                            {

                                menuOpen

                                    ? (

                                        <>

                                            <line
                                                x1="18"
                                                y1="6"
                                                x2="6"
                                                y2="18"
                                            />

                                            <line
                                                x1="6"
                                                y1="6"
                                                x2="18"
                                                y2="18"
                                            />

                                        </>

                                    )

                                    : (

                                        <>

                                            <line
                                                x1="3"
                                                y1="6"
                                                x2="21"
                                                y2="6"
                                            />

                                            <line
                                                x1="3"
                                                y1="12"
                                                x2="21"
                                                y2="12"
                                            />

                                            <line
                                                x1="3"
                                                y1="18"
                                                x2="21"
                                                y2="18"
                                            />

                                        </>

                                    )

                            }

                        </motion.svg>

                    </motion.button>

                </div>

            </motion.header>


            <AnimatePresence
                initial={false}
                mode="sync"
            >

                {

                    menuOpen && (

                        <motion.div

                            initial={{

                                opacity: 0,

                                y: -16,

                            }}

                            animate={{

                                opacity: 1,

                                y: 0,

                            }}

                            exit={{

                                opacity: 0,

                                y: -16,

                            }}

                            transition={{

                                duration: 0.18,

                                ease: "easeOut",

                            }}

                            className="
                                absolute
                                left-5
                                right-5
                                md:left-8
                                md:right-8
                                top-full
                                mt-3
                                xl:hidden
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/10
                                bg-white/[0.05]
                                backdrop-blur-3xl
                                shadow-[0_25px_60px_rgba(0,0,0,.30)]
                            "

                        >

                            <div
                                className="
                                    px-5
                                    py-2
                                "
                            >

                                <nav
                                    className="
                                        flex
                                        flex-col
                                    "
                                >

                                    {

                                        navItems.map(
                                            (
                                                item,
                                                index
                                            ) => {

                                                const isActive =

                                                    item.href === "/"

                                                        ? pathname === "/"

                                                        : pathname.startsWith(
                                                            item.href
                                                        );


                                                return (

                                                    <motion.div

                                                        key={item.label}

                                                        initial={{

                                                            opacity: 0,

                                                            x: -16,

                                                        }}

                                                        animate={{

                                                            opacity: 1,

                                                            x: 0,

                                                        }}

                                                        exit={{

                                                            opacity: 0,

                                                            x: -16,

                                                        }}

                                                        transition={{

                                                            delay:
                                                                index * 0.05,

                                                            duration: 0.25,

                                                        }}

                                                    >

                                                        <Link

                                                            href={item.href}

                                                            onClick={() =>
                                                                setMenuOpen(
                                                                    false
                                                                )
                                                            }

                                                            className={`

                                                                group
                                                                flex
                                                                items-center
                                                                justify-between
                                                                rounded-2xl
                                                                px-4
                                                                py-4
                                                                transition-all
                                                                duration-300

                                                                ${

                                                                    isActive

                                                                        ? `

                                                                            border
                                                                            border-lime-400/20
                                                                            bg-lime-400/10
                                                                            text-white
                                                                            shadow-[0_0_20px_rgba(163,230,53,.12)]

                                                                        `

                                                                        : `

                                                                            border
                                                                            border-transparent
                                                                            text-zinc-300
                                                                            hover:border-white/10
                                                                            hover:bg-white/[0.05]
                                                                            hover:text-white

                                                                        `

                                                                }

                                                            `}

                                                        >

                                                            <span

                                                                className="
                                                                    font-ui
                                                                    text-base
                                                                    font-bold
                                                                    uppercase
                                                                    tracking-[.14em]
                                                                "

                                                            >

                                                                {item.label}

                                                            </span>


                                                            <motion.span

                                                                animate={{

                                                                    x: isActive
                                                                        ? 0
                                                                        : -3,

                                                                    opacity: isActive
                                                                        ? 1
                                                                        : 0,

                                                                }}

                                                                whileHover={{

                                                                    x: 0,

                                                                    opacity: 1,

                                                                }}

                                                                transition={{

                                                                    duration: 0.2,

                                                                }}

                                                                className="
                                                                    text-lime-400
                                                                    text-sm
                                                                "

                                                            >

                                                                →

                                                            </motion.span>

                                                        </Link>

                                                    </motion.div>

                                                );

                                            }

                                        )

                                    }

                                </nav>

                            </div>

                        </motion.div>

                    )

                }

            </AnimatePresence>

        </div>

    );

}