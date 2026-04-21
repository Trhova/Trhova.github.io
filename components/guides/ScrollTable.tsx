import type { ReactNode } from "react";

export function ScrollTable({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-[1.5rem] border border-white/10 bg-slate-950/60 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
      {children}
    </div>
  );
}
