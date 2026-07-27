// ===============================
// TimelineHighlight.tsx
// Version 1.4
//
// Added:
// ✅ Premium Typography
// ✅ Better Divider
// ===============================

export default function TimelineHighlight() {
  return (
    <div className="group relative w-[340px] overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-lime-400 hover:shadow-[0_0_45px_rgba(184,255,44,0.15)]">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,255,44,0.08),transparent_70%)] opacity-70" />

      {/* Content */}
      <div className="relative z-10">

        <p className="text-center text-2xl tracking-[0.6em] text-lime-400">
          ★★★
        </p>

        <h3 className="mt-6 text-center text-3xl font-black uppercase text-white">
          Eine Leidenschaft.
          <br />
          Ein Weg.
        </h3>

        <div className="mx-auto my-6 h-px w-20 bg-lime-400/30" />

        <p className="text-center text-xs uppercase tracking-[0.35em] text-zinc-400">
          Gamer • Kommentator • Creator
        </p>

        <div className="mx-auto my-6 h-px w-20 bg-zinc-800" />

        <p className="text-sm leading-7 text-zinc-400">
          Immer mit dem Ziel, Menschen zu begeistern, zu unterhalten
          und einzigartige Momente zu schaffen. Vom ersten Video bis
          zum professionellen Eishockey-Kommentar – jeder Schritt hat
          mich zu dem gemacht, was ich heute bin.
        </p>

        <button className="group mt-8 flex w-full items-center justify-center rounded-xl border border-lime-400 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-lime-400 transition-all duration-300 hover:bg-lime-400 hover:text-black">

          <span>Mehr über mich</span>

          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>

        </button>

      </div>

    </div>
  );
}