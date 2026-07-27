"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BroadcastCardProps {
    children: ReactNode;
    className?: string;
}

export default function BroadcastCard({
    children,
    className = "",
}: BroadcastCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className={`
                relative
                overflow-hidden

                rounded-[30px]

                border
                border-white/10

                bg-[#090b10]

                shadow-[0_20px_60px_rgba(0,0,0,.45)]

                ${className}
            `}
        >
            {children}
        </motion.article>
    );
}