import type { ReactNode } from "react";

export function SectionRecap({
  covered,
  next,
  title = "Section recap"
}: {
  covered: ReactNode;
  next: ReactNode;
  title?: string;
}) {
  return (
    <section className="not-prose my-8 rounded-3xl border border-border bg-surface2 p-5 shadow-soft">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        {title}
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <div className="text-sm font-semibold text-text">
            What this section covered
          </div>
          <div className="mt-2 text-sm leading-7 text-muted">{covered}</div>
        </div>
        <div>
          <div className="text-sm font-semibold text-text">What to do next</div>
          <div className="mt-2 text-sm leading-7 text-muted">{next}</div>
        </div>
      </div>
    </section>
  );
}
