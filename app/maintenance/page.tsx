// =====================================================
// PAGE
// Maintenance
//
// Bloody Design System
// =====================================================

import ErrorActions from "@/components/error/ErrorActions";
import ErrorBackground from "@/components/error/ErrorBackground";
import ErrorHero from "@/components/error/ErrorHero";

export default function MaintenancePage() {
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
        code="503"
        title="Systemwartung aktiv"
        description={
          <>
            Unser Command Center wird derzeit aktualisiert.
            <br />
            Neue Funktionen werden installiert.
            <br />
            Wir sind in Kürze wieder einsatzbereit.
          </>
        }
        accent="amber"
        status={{
          label: "MAINTENANCE",
          color: "yellow",
          description: "Updates werden installiert",
        }}
        rows={[
          {
            label: "Systemstatus",
            value: "Wartung aktiv",
            progress: 75,
            color: "yellow",
            delay: 0.2,
          },
          {
            label: "Server",
            value: "Offline",
            progress: 0,
            color: "red",
            delay: 0.35,
          },
          {
            label: "Updates",
            value: "Installation",
            progress: 82,
            color: "yellow",
            delay: 0.5,
          },
          {
            label: "Integrität",
            value: "Geprüft",
            progress: 100,
            color: "green",
            delay: 0.65,
          },
        ]}
        logs={[
          "✓ Dienste gestoppt",
          "✓ Sicherung erstellt",
          "✓ Updates werden installiert",
          "→ Neustart wird vorbereitet",
        ]}
        actions={<ErrorActions />}
      />
    </main>
  );
}