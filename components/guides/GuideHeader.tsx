type GuideHeaderProps = {
  audience: string;
  readingTimeMinutes: number;
  summary: string;
  title: string;
  whatYoullLearn?: string[];
};

export function GuideHeader({
  audience,
  readingTimeMinutes,
  summary,
  title,
  whatYoullLearn = []
}: GuideHeaderProps) {
  return (
    <header className="guide-panel overflow-hidden px-6 py-7 sm:px-8 sm:py-8">
      <div className="max-w-3xl">
        <h1 className="font-[var(--font-guide-display)] text-4xl tracking-tight text-text sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {summary}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
        <span className="rounded-full border border-border bg-surface2 px-3 py-1.5">
          {readingTimeMinutes} min read
        </span>
        <span className="rounded-full border border-border bg-surface2 px-3 py-1.5">
          {audience}
        </span>
      </div>

      {whatYoullLearn.length > 0 ? (
        <div className="mt-6 rounded-2xl border border-border bg-surface2/80 p-5">
          <div className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            What you&apos;ll learn
          </div>
          <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 text-muted">
            {whatYoullLearn.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
