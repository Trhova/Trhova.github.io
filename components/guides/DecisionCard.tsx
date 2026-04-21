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
      className="not-prose flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 no-underline transition hover:-translate-y-0.5 hover:border-teal-300/40 hover:bg-white/10"
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
          {stage}
        </p>
        <h3 className="m-0 font-[var(--font-guide-display)] text-xl text-white">
          {title}
        </h3>
        <p className="m-0 text-sm leading-7 text-slate-200">{outcome}</p>
      </div>
      <span className="mt-5 text-sm font-medium text-teal-200">
        Jump to section
      </span>
    </a>
  );
}
