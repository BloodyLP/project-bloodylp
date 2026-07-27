// =====================================================
// BDS COMPONENT
// MobileMenuOverlay
//
// Version: 2.0
//
// Responsive Pass
//
// Bloody Design System
// =====================================================

"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuOverlayProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function MobileMenuOverlay({
  open,
  onClose,
  children,
}: MobileMenuOverlayProps) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}

          onClick={onClose}

          className="
            fixed
            inset-0

            z-[90]

            lg:hidden

            bg-gradient-to-b

            from-black/75
            via-zinc-950/90
            to-black

            backdrop-blur-2xl
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
              y: 30,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              scale: 0.97,
              y: 30,
            }}

            transition={{
              duration: 0.35,
            }}

            onClick={(event) => event.stopPropagation()}

            className="
              flex

              h-full
              w-full

              flex-col

              items-center
              justify-center

              px-8
              py-12
            "
          >

            {children}

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}