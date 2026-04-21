type LinkItem = {
  href: string;
  label: string;
};

export function MethodCard({
  alternatives = [],
  cons = [],
  defaultTool,
  docs = [],
  goodOutput,
  gotcha,
  inputs = [],
  outputs = [],
  papers = [],
  pros = [],
  switchWhen,
  title,
  useWhen
}: {
  alternatives?: string[];
  cons?: string[];
  defaultTool: string;
  docs?: LinkItem[];
  goodOutput: string;
  gotcha: string;
  inputs?: string[];
  outputs?: string[];
  papers?: LinkItem[];
  pros?: string[];
  switchWhen: string;
  title: string;
  useWhen: string;
}) {
  return (
    <section className="not-prose my-8 rounded-[1.75rem] border border-border bg-gradient-to-br from-surface to-surface2 p-6 shadow-soft">
      <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Recommended default
          </p>
          <h3 className="m-0 font-[var(--font-guide-display)] text-2xl text-text">
            {title}
          </h3>
        </div>
        <div className="rounded-2xl border border-accent/20 bg-accent/10 px-4 py-3 text-sm text-muted">
          <span className="font-semibold text-text">Default:</span>{" "}
          {defaultTool}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-4">
          <p className="mb-2 text-sm font-semibold text-text">Use when</p>
          <p className="m-0 text-sm leading-7 text-muted">{useWhen}</p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-4">
          <p className="mb-2 text-sm font-semibold text-text">
            Switch to an alternative when
          </p>
          <p className="m-0 text-sm leading-7 text-muted">{switchWhen}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-4">
        <InfoList title="Inputs" items={inputs} />
        <InfoList title="Outputs" items={outputs} />
        <InfoList title="Alternatives" items={alternatives} />
        <div className="rounded-2xl border border-border bg-surface2 p-4">
          <p className="mb-2 text-sm font-semibold text-text">Gotcha</p>
          <p className="m-0 text-sm leading-7 text-muted">{gotcha}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <InfoList
          title="Pros"
          items={pros}
          className="border-emerald-300/20 bg-emerald-300/10 text-muted"
        />
        <InfoList
          title="Cons"
          items={cons}
          className="border-amber-300/20 bg-amber-300/10 text-muted"
        />
      </div>

      <div className="mt-4 rounded-2xl border border-border bg-surface p-4">
        <p className="mb-2 text-sm font-semibold text-text">
          What good output looks like
        </p>
        <p className="m-0 text-sm leading-7 text-muted">{goodOutput}</p>
      </div>

      {docs.length > 0 || papers.length > 0 ? (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <LinkList title="Official docs" items={docs} />
          <LinkList title="Primary paper" items={papers} />
        </div>
      ) : null}
    </section>
  );
}

function InfoList({
  className = "border-border bg-surface2 text-muted",
  items,
  title
}: {
  className?: string;
  items: string[];
  title: string;
}) {
  return (
    <div className={`rounded-2xl border p-4 ${className}`}>
      <p className="mb-2 text-sm font-semibold text-text">{title}</p>
      <ul className="m-0 space-y-2 pl-5 text-sm leading-6">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function LinkList({ items, title }: { items: LinkItem[]; title: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface2 p-4">
      <p className="mb-2 text-sm font-semibold text-text">{title}</p>
      <ul className="m-0 space-y-2 pl-5 text-sm leading-6 text-muted">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
