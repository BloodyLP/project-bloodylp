"use client";

import { useEffect } from "react";

export default function HeroMouseParallax() {

  useEffect(() => {

    const move = (e: MouseEvent) => {

      const x = (e.clientX / window.innerWidth - 0.5);
      const y = (e.clientY / window.innerHeight - 0.5);

      document.documentElement.style.setProperty(
        "--mouse-x",
        `${x}`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${y}`
      );

    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  return null;

}