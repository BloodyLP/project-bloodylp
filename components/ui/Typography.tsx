// =====================================================
// BLOODY DESIGN LANGUAGE
//
// Typography
//
// Version 1.0
// =====================================================

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Eyebrow({ children }: Props) {
  return (
    <p className="text-sm font-bold uppercase tracking-[0.35em] text-lime-400">
      {children}
    </p>
  );
}

export function SectionTitle({ children }: Props) {
  return (
    <h2 className="mt-4 text-6xl font-black uppercase leading-none text-white">
      {children}
    </h2>
  );
}

export function SectionText({ children }: Props) {
  return (
    <p className="mx-auto mt-8 max-w-3xl text-x1 leading-9 text-zinc-400">
      {children}
    </p>
  );
}

export function CardTitle({ children }: Props) {
  return (
    <h3 className="text-3xl font-bold text-white">
      {children}
    </h3>
  );
}

export function CardText({ children }: Props) {
  return (
    <p className="mt-5 text-base leading-5 text-zinc-400">
      {children}
    </p>
  );
}