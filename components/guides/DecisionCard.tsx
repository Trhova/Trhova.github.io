export function DecisionCard({
  href,
  outcome,
  stage,
  title
}: {
  href: string;
  outcome: string;
  stage: string;
  title: string;
}) {
  return (
    <a
      href={href}
      className="not-prose flex h-full flex-col justify-between rounded-3xl border border-border bg-surface p-5 no-underline shadow-soft transition hover:-translate-y-0.5 hover:border-accent/30 hover:bg-surface2"
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {stage}
        </p>
        <h3 className="m-0 font-[var(--font-guide-display)] text-xl text-text">
          {title}
        </h3>
        <p className="m-0 text-sm leading-7 text-muted">{outcome}</p>
      </div>
      <span className="mt-5 text-sm font-medium text-accent">
        Jump to section
      </span>
    </a>
  );
}
