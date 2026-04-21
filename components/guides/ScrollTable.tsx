import type { ReactNode } from "react";

export function ScrollTable({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-[1.5rem] border border-border bg-surface shadow-soft">
      {children}
    </div>
  );
}
