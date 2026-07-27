"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 20,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        absolute

        left-1/2

        -translate-x-1/2

        flex
        flex-col
        items-center

        bottom-24

        md:bottom-20

        xl:bottom-0
      "
    >
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown
          size={34}
          strokeWidth={2.5}
          className="
            text-lime-400

            drop-shadow-[0_0_10px_rgba(184,255,44,0.7)]
          "
        />
      </motion.div>

      <span
        className="
          mt-2

          text-[10px]

          font-semibold

          uppercase

          tracking-[0.8em]

          text-zinc-500
        "
      >
        SCROLL
      </span>
    </motion.div>
  );
}