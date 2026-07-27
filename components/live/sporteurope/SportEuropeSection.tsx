"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import BroadcastPanel from "./BroadcastPanel";

import { container } from "@/lib/animations";

export default function SportEuropeSection() {
    return (

        <motion.section

            variants={container}

            initial="hidden"

            whileInView="show"

            viewport={{
                once: true,
                amount: .15,
            }}

            className="relative"
        >

            {/* =====================================================
                Intro
            ===================================================== */}

            <div
                className="
                    mx-auto

                    mb-14

                    flex
                    max-w-3xl
                    flex-col
                    items-center

                    text-center
                "
            >

                <Image
                    src="/logos/sporteurope.tv_logo.png"
                    alt="SportEurope.TV"

                    width={230}
                    height={58}

                    priority

                    className="h-auto w-auto"
                />

                <p
                    className="
                        mt-8

                        max-w-2xl

                        text-xl
                        leading-9

                        text-zinc-300
                    "
                >
                    Kommentator und Moderator der DEL2 auf
                    <span className="font-semibold text-white">
                        {" "}
                        SportEurope.TV
                    </span>.
                    <br />
                    Alle kommenden Einsätze findest du hier.
                </p>

            </div>

            <BroadcastPanel />

        </motion.section>

    );
}

