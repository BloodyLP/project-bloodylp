// =====================================================
// PAGE
// 404 - Not Found
//
// Bloody Design System
// =====================================================

import ErrorActions from "@/components/error/ErrorActions";
import ErrorBackground from "@/components/error/ErrorBackground";
import ErrorHero from "@/components/error/ErrorHero";

export default function NotFound() {
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
        code="404"
        title="Mission fehlgeschlagen"
        description={
          <>
            Der angeforderte Einsatz konnte nicht lokalisiert werden.
            <br />
            Möglicherweise wurde die Seite verschoben oder existiert nicht
            mehr.
          </>
        }
        accent="lime"
        actions={<ErrorActions />}
      />
    </main>
  );
}