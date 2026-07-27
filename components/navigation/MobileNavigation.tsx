// =====================================================
// BDS COMPONENT
// MobileNavigation
//
// Version: 1.1
//
// Responsive Pass
//
// Bloody Design System
// =====================================================

"use client";

import { useEffect, useState } from "react";

import MobileMenuButton from "./mobile/MobileMenuButton";
import MobileMenuOverlay from "./mobile/MobileMenuOverlay";
import MobileMenuHeader from "./mobile/MobileMenuHeader";
import MobileMenuLinks from "./mobile/MobileMenuLinks";
import MobileMenuFooter from "./mobile/MobileMenuFooter";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  function closeMenu() {
    setOpen(false);
  }

  // =====================================
  // ESC schließt Menü
  // =====================================

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // =====================================
  // Scroll sperren wenn Menü offen
  // =====================================

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <MobileMenuButton
        open={open}
        onClick={toggleMenu}
      />

      <MobileMenuOverlay
        open={open}
        onClose={closeMenu}
      >
        <MobileMenuHeader />

        <MobileMenuLinks
          onNavigate={closeMenu}
        />

        <MobileMenuFooter />
      </MobileMenuOverlay>
    </>
  );
}