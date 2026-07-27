// =====================================================
// PAGE
// 500 - Internal Server Error
//
// Bloody Design System
// =====================================================

"use client";

import { useEffect } from "react";

import ErrorBackground from "@/components/error/ErrorBackground";
import ErrorHero from "@/components/error/ErrorHero";
import ErrorRetryActions from "@/components/error/ErrorRetryActions";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
};

export default function Error({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
      "
    >
      <ErrorBackground />

      <ErrorHero
        code="500"
        title="Kritischer Systemfehler"
        description={
          <>
            Während der Verarbeitung deiner Anfrage ist
            <br />
            ein unerwarteter Fehler im Command Center
            aufgetreten.
            <br />
            Unsere Systeme wurden automatisch informiert
            und arbeiten bereits an einer Lösung.
          </>
        }
        accent="red"
        status={{
          label: "CRITICAL",
          color: "red",
          description: "Administrator informiert",
        }}
        rows={[
          {
            label: "Systemstatus",
            value: "Fehler erkannt",
            progress: 15,
            color: "red",
            delay: 0.2,
          },
          {
            label: "Verbindung",
            value: "Aktiv",
            progress: 100,
            color: "green",
            delay: 0.35,
          },
          {
            label: "Diagnose",
            value: "Läuft",
            progress: 58,
            color: "yellow",
            delay: 0.5,
          },
          {
            label: "Administrator",
            value: "Informiert",
            progress: 100,
            color: "green",
            delay: 0.65,
          },
        ]}
        logs={[
          "✓ Verbindung hergestellt",
          "✓ Systemstatus geprüft",
          "✕ Kritischer Fehler erkannt",
          "⚠ Administrator informiert",
        ]}
        actions={
          <ErrorRetryActions
            onRetry={reset}
          />
        }
      />
    </main>
  );
}